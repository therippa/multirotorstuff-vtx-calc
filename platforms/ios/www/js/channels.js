$(document).ready(function() {
    "use strict";


    var vtx_default_enabled = [];

    for (var i = 0; i < vtx.length; i++) {
        vtx_default_enabled.push([vtx[i][0], vtx[i][1], true]);
    }

    var potential_vtx_enabled = window.localStorage.getItem("vtx_enabled");

    if (potential_vtx_enabled) {
        var vtx_enabled = JSON.parse(potential_vtx_enabled);
    } else {
        var vtx_enabled = vtx_default_enabled;
    }

    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1: 1;
        }
    }


    function generateVtxTable() {
        var vtx_table = vtx.slice(0); //clone array

        //remove excluded
        var offset = 0;
        for (var i = 0; i < vtx_enabled.length; i++) {
            if (!vtx_enabled[i][2]) {
                vtx_table.splice((i - offset), 1);
                offset += 1;
            }
        }

        var max_diff = 0;
        var min_diff = 1000000;

        for (var i = 0; i < vtx_table.length; i++) {

            var channel = vtx_table[i];
            var prev_channel = vtx_table[i - 1];
            var next_channel = vtx_table[i + 1];

            try {
                var prev_diff = vtx_table[i][1] - prev_channel[1];
            }
            catch (e) {
            }

            try {
                var next_diff = next_channel[1] - vtx_table[i][1];
            }
            catch (e) {
            }


            if (prev_diff > max_diff) max_diff = prev_diff;
            if ((prev_diff < min_diff) && prev_diff != 0) min_diff = prev_diff;

            if (i == 0) {
                vtx_table[i].push("N/A");
                vtx_table[i].push(next_diff);
                continue;
            } else if (i == (vtx_table.length - 1)) {
                vtx_table[i].push(prev_diff);
                vtx_table[i].push("N/A");
                continue;
            }


            vtx_table[i].push(prev_diff);
            vtx_table[i].push(next_diff);
        }

        // check difference
        var diff_ratio = min_diff / max_diff;

        for (var i = 0; i < vtx_table.length; i++) {

            var prev_score = parseInt((vtx_table[i][2] * diff_ratio) * 100);
            var next_score = parseInt((vtx_table[i][3] * diff_ratio) * 100);

            if (i == 0) {
                vtx_table[i].push("N/A");
                vtx_table[i].push(next_score);
                continue;
            } else if (i == (vtx_table.length - 1)) {
                vtx_table[i].push(prev_score);
                vtx_table[i].push("N/A");
                continue;
            }

            vtx_table[i].push(prev_score);
            vtx_table[i].push(next_score);
        }

        // determine best frequencies
        var pilots = $("input[name=segment-a]:checked").val();

        function algorithm(n, arr) {
            var freq_array = $.map(arr, function(n){
                return n[1];
            });

            var step = (freq_array.length - 1) / (n - 1);

            var ret = [];

            for (var i = 0; i < n; i++) {
                ret.push(freq_array[Math.round(step * i)]);
            }

            return ret;
        }

        var good_channels = algorithm(pilots, vtx_table);

        var table = arrayToTable(vtx_table.slice(0), good_channels);
        $("#channel-table").html(table);

        var excluded_table = arrayToTable2(vtx_enabled.slice(0));
        $("#excluded-channel-table").html(excluded_table);

    }

    var arrayToTable = function (data, good_channels, options) {
        data.unshift(["Channel", "Freq", "DIP"]);
        var table = $('<table />'),
            thead,
            tfoot,
            rows = [],
            row,
            i,
            j,
            defaults = {
                th: true, // should we use th elemenst for the first row
                thead: false, //should we incldue a thead element with the first row
                tfoot: false, // should we include a tfoot element with the last row
                attrs: {} // attributes for the table element, can be used to
            };

        options = $.extend(defaults, options);

        table.addClass("pure-table");
        table.css("width", "100%");
        table.attr(options.attrs);

        var vtx_type = $("input[name=vtx_type]:checked").val();

        // loop through all the rows, we will deal with tfoot and thead later
        for (i = 0; i < data.length; i++) {
            row = $('<tr />');
            var className = ""
            if (good_channels.indexOf(data[i][1]) >= 0) {
                className = "good-channel"
            }
            for (j = 0; j < 3; j = j + 1) {
                var cellData = data[i][j];
                if (j == 2 && i != 0) {
                    cellData = render_dip(cellData[vtx_type]);
                }
                if (i === 0 && options.th) {
                    row.append($('<th />').html(cellData));
                } else {
                    row.append($('<td />').html(cellData));
                }
                row.addClass(className);
            }
            rows.push(row);
        }

        // if we want a thead use shift to get it
        if (options.thead) {
            thead = rows.shift();
            thead = $('<thead />').append(thead);
            table.append(thead);
        }

        // add all the rows
        for (i = 0; i < rows.length; i = i + 1) {
            table.append(rows[i]);
        }

        return table;
    };

    var arrayToTable2 = function (data, good_channels, options) {
        data.unshift(["Channel", "Freq", "Enabled"]);
        var table = $('<table />'),
            thead,
            tfoot,
            rows = [],
            row,
            i,
            j,
            defaults = {
                th: true, // should we use th elemenst for the first row
                thead: false, //should we incldue a thead element with the first row
                tfoot: false, // should we include a tfoot element with the last row
                attrs: {} // attributes for the table element, can be used to
            };

        options = $.extend(defaults, options);

        table.addClass("pure-table");
        table.css("width", "100%");
        table.attr(options.attrs);

        var vtx_type = $("input[name=vtx_type]:checked").val();

        // loop through all the rows, we will deal with tfoot and thead later
        for (i = 0; i < data.length; i++) {
            row = $('<tr />');

            for (j = 0; j < 3; j = j + 1) {
                var cellData = data[i][j];
                if (j == 2 && i != 0) {
                    cellData = $('<label class="switch switch--list-item"><input type="checkbox" data-channel="' + i + '" class="switch__input" ' + (data[i][j] ? "checked" : "") + '><div class="switch__toggle"></div></label>');
                    cellData.find("input").tap(function() {
                        var el = $(this);
                        var checked = el.prop("checked") == "checked" ? true : false;
                        var channel = el.data("channel");
                        vtx_enabled[channel-1][2] = checked;
                    })
                }
                if (i === 0 && options.th) {
                    row.append($('<th />').html(cellData));
                } else {
                    row.append($('<td />').html(cellData));
                }
            }
            rows.push(row);
        }

        // if we want a thead use shift to get it
        if (options.thead) {
            thead = rows.shift();
            thead = $('<thead />').append(thead);
            table.append(thead);
        }

        // add all the rows
        for (i = 0; i < rows.length; i = i + 1) {
            table.append(rows[i]);
        }

        return table;
    };

    function disableChannels(channels) {

        for (var i = 0; i < channels.length; i++) {
            vtx_enabled[channels[i]][2] = false;
        }

        window.localStorage.setItem("vtx_enabled", JSON.stringify(vtx_enabled));

        var excluded_table = arrayToTable2(vtx_enabled.slice(0));
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
            if (data[i]) {
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

    generateVtxTable();

    $(".vtx_type, .pilot_count").click(function() {
        generateVtxTable();
    });
    $("#ignore").change(function() {
        generateVtxTable();
    });

    $("#settings-btn").tap(function() {
        $("#main").hide();
        $("#settings").show();
    });

    $("#back-btn").tap(function() {
        $("#main").show();
        generateVtxTable();
        $("#settings").hide();
    });

    $("#aus-btn").tap(function() {
        disableChannels([0,1,2,3,31,30,29,28]);
    })

    $("#boscam1-btn").tap(function() {
        disableChannels([31]);
    })

    $("#reset-btn").tap(function() {
        for (var i = 0; i < vtx_enabled.length; i++) {
            vtx_enabled[i][2] = true;
        }

        window.localStorage.setItem("vtx_enabled", JSON.stringify(vtx_enabled));

        var excluded_table = arrayToTable2(vtx_enabled.slice(0));
        $("#excluded-channel-table").html(excluded_table);

    })
});
