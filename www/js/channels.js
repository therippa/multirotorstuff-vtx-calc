var settings_key = 'vtx_enabled_v2';
var race_bands = [5658, 5695, 5732, 5769, 5806, 5843, 5880, 5917];
var vtx_default_enabled = {};
var vtx_enabled;
var json_transmitters;

$(document).ready(function() {
    "use strict";

    function generateVtxTable() {
        var vtx_table = frequencies.slice(0); //clone array

        //remove excluded
        for (var n in vtx_enabled) {
            if (vtx_enabled[n] == false) {
                var i = vtx_table.indexOf(parseInt(n));
                vtx_table.splice(i, 1);
            }
        }

        // determine best frequencies
        var pilots = $("input[name=segment-a]:checked").val();

        function algorithm(n, arr) {
            var step = (arr.length - 1) / (n - 1);

            var ret = [];

            for (var i = 0; i < n; i++) {
                ret.push(arr[Math.round(step * i)]);
            }

            return ret;
        }

        var good_channels = algorithm(pilots, vtx_table);

        var table = arrayToTable(vtx_table.slice(0), good_channels);
        $("#channel-table").html(table);

        var excluded_table = arrayToExcludedTable();
        $("#excluded-channel-table").html(excluded_table);

    }

    var arrayToTable = function(data, good_channels) {

        var vtx_type = $("#vtx_type").val();

        var channel_table = $("#channel-table");

        channel_table.empty();

        var hide = '';

        if (Transmitters[vtx_type].hasDip === false) {
            hide = "display: none;";
        }

        channel_table.append(ich.vtx_table_header({hide: hide}));

        for (var i = 0; i < data.length; i++) {
            var channelName = Transmitters[vtx_type].getChannelName(data[i]);
            var dipData = render_dip(Transmitters[vtx_type].dip(data[i]));
            var cssClass = '';

            if (good_channels.indexOf(data[i]) >= 0) {
                cssClass = "good-channel";
            }

            var tr = ich.vtx_table_row({name: channelName, frequency: data[i], dip: dipData.html(), cssClass: cssClass, hide: hide})


            channel_table.append(tr);

        }

    };

    var arrayToExcludedTable = function() {

        var data = frequencies.slice(0); //clone array

        var vtx_type = $("#vtx_type").val();

        var channel_table = $("#excluded-channel-table");

        channel_table.empty();

        channel_table.append(ich.exclude_table_header());

        for (var i = 0; i < data.length; i++) {
            var channelName = Transmitters[vtx_type].getChannelName(data[i]);

            var isEnabled = vtx_enabled[data[i]];

            var switchData = $('<label class="switch switch--list-item"><input type="checkbox" data-freq="' + data[i] + '" class="switch__input" ' + (isEnabled ? "checked" : "") + '><div class="switch__toggle"></div></label>');
            switchData.find("input").tap(function() {
                var el = $(this);
                var checked = el.prop("checked");
                var freq = el.data("freq");
                vtx_enabled[freq] = checked;
                saveSettings();
            });


            var tr = ich.exclude_table_row({name: channelName, frequency: data[i]});

            channel_table.append(tr);
            $(tr).find(".vtx-switch").append(switchData);

        }

    };

    function saveSettings() {
        window.localStorage.setItem(settings_key, JSON.stringify(vtx_enabled));
    }

    function toggleChannels(channels, force) {

        for (var i = 0; i < channels.length; i++) {
            if (typeof(force) !== 'undefined') {
                var setting = force;
            } else {
                var setting = !vtx_enabled[channels[i]];
            }
            vtx_enabled[channels[i]] = force || setting;
        }

        saveSettings();

        var excluded_table = arrayToExcludedTable();
        $("#excluded-channel-table").html(excluded_table);

    }

    function render_dip(data) {
        var ret = $("<div />");
        var channel_bottom = $("<div />");
        channel_bottom.css({"margin-left": "15px", "margin-top": "-7px"});
        if (data.length == 0) return ret;
        ret.append("<sup style='top:-12px; padding-right: 2px;'>on</sup>");
        for (var i = 0; i < data.length; i++) {
            var dip_switch = $("<img />");
            if (data[i] == "1") {
                dip_switch.attr("src", "img/on.gif");
            } else {
                dip_switch.attr("src", "img/off.gif");
            }
            ret.append(dip_switch);
            var channel_div = $("<div />");
            channel_div.css({"font-size": "75%", "display": "inline-block", "width": "10px", "text-align": "center"});
            channel_div.html(i);
            channel_bottom.append(channel_div);
        }
        ret.append(channel_bottom);
        return ret;
    }

    function getTransmitters() {
        Transmitters = {};
        $('#vtx_type').empty();
        $("#vtx-modal").show();
        $.get('http://multirotorstuff-vtx.divshot.io/api/transmitters.json', function(data) {
        //$.get('http://localhost:8000/api/transmitters.json', function(data) {
            window.localStorage.setItem('transmitters', JSON.stringify(data));
            json_transmitters = data;
            window.localStorage.removeItem("vtx_type");
            $("#vtx-modal").hide();
            init();

        });
    }

    function init() {

        for (var i = 0; i < json_transmitters.length; i++) {
            var vtx = json_transmitters[i];
            Transmitters[vtx.id] = new Transmitter(vtx.name, vtx.id);
            $.extend(Transmitters[vtx.id], vtx);
        }


        for (var i = 0; i < frequencies.length; i++) {
            if (race_bands.indexOf(frequencies[i]) == -1) {
                vtx_default_enabled[frequencies[i]] = true;
            } else {
                vtx_default_enabled[frequencies[i]] = false;
            }

        }

        var potential_vtx_enabled = window.localStorage.getItem(settings_key);

        if (potential_vtx_enabled) {
            vtx_enabled = JSON.parse(potential_vtx_enabled);
        } else {
            vtx_enabled = vtx_default_enabled;
        }

        //generate transmitters list
        var checked = '';

        var keys = Object.keys(Transmitters);

        keys.sort();


        for (var i = 0; i < keys.length; i++) {
            var e = Transmitters[keys[i]];
            if (i == 0) {
                checked = 'checked';
            }
            var transmitter = ich.transmitter({name: e.name, id: e.id, checked: checked});
            checked = '';
            $("#vtx_type").append(transmitter);
        };

        var selectList = $('#vtx_type option');

        $('#vtx_type').html(selectList);

        var selected_vtx = window.localStorage.getItem("vtx_type") || Transmitters[keys[0]].id;

        $("#vtx_type").val(selected_vtx);

        generateVtxTable();

        $(".pilot_count").click(function () {
            generateVtxTable();
        });

        $("#ignore, .vtx_type").change(function () {
            window.localStorage.setItem("vtx_type", $("#vtx_type").val());
            generateVtxTable();
        });

        $("#settings-btn").tap(function () {
            $("#main").hide();
            $("#settings").show();
        });

        $("#back-btn").tap(function () {
            $("#main").show();
            generateVtxTable();
            $("#settings").hide();
        });

        $("#aus-btn").tap(function () {
            toggleChannels([5645, 5658, 5665, 5695, 5685, 5705, 5885, 5905, 5917, 5925, 5945], false);
        });

        $("#raceband-btn").tap(function () {
            toggleChannels(race_bands, false);
        });

        $("#vtx-btn").tap(function () {
            getTransmitters();
        });

        $("#boscam1-btn").tap(function () {
            toggleChannels([5945], false);
        });

        $("#whats-new-btn").tap(function () {
            $("#whats-new-holder").hide();
        });

        $("#reset-btn").tap(function () {

            for (var n in vtx_enabled) {
                vtx_enabled[n] = true;
            }

            // reset button colors;
            $(".setting-btn").css('background-color', '#4383CD');

            saveSettings();

            var excluded_table = arrayToExcludedTable();
            $("#excluded-channel-table").html(excluded_table);

        })
    }

    json_transmitters = window.localStorage.getItem('transmitters');

    if (json_transmitters) {
        json_transmitters = JSON.parse(json_transmitters);
        init();
    } else {
        getTransmitters();

    }

});
