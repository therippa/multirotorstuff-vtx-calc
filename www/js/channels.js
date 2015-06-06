jQuery(document).ready(function() {
    "use strict";

    var dip = {
            "hawkeye" : [
                //FR-A
                [1,1,1,1,1],
                [1,1,0,1,1],
                [1,0,1,1,1],
                [1,0,0,1,1],
                [0,1,1,1,1],
                [0,1,0,1,1],
                [0,0,1,1,1],
                [0,0,0,1,1],
                //FR-B
                [1,1,1,0,0],
                [1,1,0,0,0],
                [1,0,1,0,0],
                [1,0,0,0,0],
                [0,1,1,0,0],
                [0,1,0,0,0],
                [0,0,1,0,0],
                [0,0,0,0,0],
                //FR-C
                [1,1,1,1,0],
                [1,1,0,1,0],
                [1,0,1,1,0],
                [1,0,0,1,0],
                [0,1,1,1,0],
                [0,1,0,1,0],
                [0,0,1,1,0],
                [0,0,0,1,0],
                //FR-D
                [1,1,1,0,1],
                [1,1,0,0,1],
                [1,0,1,0,1],
                [1,0,0,0,1],
                [0,1,1,0,1],
                [0,1,0,0,1],
                [0,0,1,0,1],
                [0,0,0,0,1]

            ],
            "immersionrc": [
                //FR-A
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                //FR-B
                [1,1,1],
                [1,1,0],
                [1,0,1],
                [1,0,0],
                [0,1,1],
                [0,1,0],
                [0,0,1],
                [],
                //FR-C
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                //FR-D
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []

            ]
        };





    var vtx = [
        ["FR-A 1", 5865, {"hawkeye": [1,,,,1,1], "immersionrc": [,,,]}],
        ["FR-A 2", 5845, {"hawkeye": [1,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 3", 5825, {"hawkeye": [1,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 4", 5805, {"hawkeye": [1,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 5", 5785, {"hawkeye": [0,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 6", 5765, {"hawkeye": [0,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 7", 5745, {"hawkeye": [0,,,,1,1], "immersionrc": [,,,] }],
        ["FR-A 8", 5725, {"hawkeye": [0,,,,1,1], "immersionrc": [,,,] }],
        ["ImmrRC 1", 5740, {"hawkeye": [1,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 2", 5760, {"hawkeye": [1,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 3", 5780, {"hawkeye": [1,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 4", 5800, {"hawkeye": [1,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 5", 5820, {"hawkeye": [0,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 6", 5840, {"hawkeye": [0,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 7", 5860, {"hawkeye": [0,,,,0,0], "immersionrc": [,,,] }],
        ["ImmrRC 8", 5880, {"hawkeye": [0,,,,0,0], "immersionrc": [,,,] }],
        ["FR-E 1", 5705, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-E 2", 5685, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-E 3", 5665, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-E 4", 5645, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-E 5", 5885, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-E 6", 5905, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-E 7", 5925, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-E 8", 5945, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-B 1", 5733, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-B 2", 5752, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-B 3", 5771, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-B 4", 5790, {"hawkeye": [1,,,,,], "immersionrc": [,,,] }],
        ["FR-B 5", 5809, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-B 6", 5828, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-B 7", 5847, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
        ["FR-B 8", 5866, {"hawkeye": [0,,,,,], "immersionrc": [,,,] }],
    ];


    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1: 1;
        }
    }


    function generateVtxTable() {
        var vtx_table = vtx.slice(0).sort(sortFunction);

        if (jQuery("#ignore").prop("checked")) {
            vtx_table.pop();
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
        var pilots = jQuery("input[name=segment-a]:checked").val();

        function algorithm(n, arr) {
            var freq_array = jQuery.map(arr, function(n){
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
        jQuery("#channel-table").html(table);

        var excluded_table = arrayToTable2(vtx_table.slice(0));
        jQuery("#excluded-channel-table").html(excluded_table);

    }

    var arrayToTable = function (data, good_channels, options) {
        data.unshift(["Channel", "Freq", "DIP"]);
        var table = jQuery('<table />'),
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

        options = jQuery.extend(defaults, options);

        table.addClass("pure-table");
        table.css("width", "100%");
        table.attr(options.attrs);

        var vtx_type = jQuery("input[name=vtx_type]:checked").val();

        // loop through all the rows, we will deal with tfoot and thead later
        for (i = 0; i < data.length; i++) {
            row = jQuery('<tr />');
            var className = ""
            if (good_channels.indexOf(data[i][1]) >= 0) {
                className = "good-channel"
            }
            for (j = 0; j < 3; j = j + 1) {
                var cellData = data[i][j];
                if (j == 2 && i != 0) {
                    cellData = render_dip(dip[vtx_type][i-1]);
                }
                if (i === 0 && options.th) {
                    row.append(jQuery('<th />').html(cellData));
                } else {
                    row.append(jQuery('<td />').html(cellData));
                }
                row.addClass(className);
            }
            rows.push(row);
        }

        // if we want a thead use shift to get it
        if (options.thead) {
            thead = rows.shift();
            thead = jQuery('<thead />').append(thead);
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
        var table = jQuery('<table />'),
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

        options = jQuery.extend(defaults, options);

        table.addClass("pure-table");
        table.css("width", "100%");
        table.attr(options.attrs);

        var vtx_type = jQuery("input[name=vtx_type]:checked").val();

        // loop through all the rows, we will deal with tfoot and thead later
        for (i = 0; i < data.length; i++) {
            row = jQuery('<tr />');

            for (j = 0; j < 3; j = j + 1) {
                var cellData = data[i][j];
                if (j == 2 && i != 0) {
                    cellData = jQuery('<label class="switch switch--list-item"><input type="checkbox" class="switch__input"><div class="switch__toggle"></div></label>');
                }
                if (i === 0 && options.th) {
                    row.append(jQuery('<th />').html(cellData));
                } else {
                    row.append(jQuery('<td />').html(cellData));
                }
            }
            rows.push(row);
        }

        // if we want a thead use shift to get it
        if (options.thead) {
            thead = rows.shift();
            thead = jQuery('<thead />').append(thead);
            table.append(thead);
        }

        // add all the rows
        for (i = 0; i < rows.length; i = i + 1) {
            table.append(rows[i]);
        }

        return table;
    };

    function render_dip(data) {
        var ret = jQuery('<div />')
        if (data.length == 0) return ret;
        ret.append("<sup style='top:-12px; padding-right: 2px;'>on</sup>");
        for (var i = 0; i < data.length; i++) {
            var dip_switch = jQuery("<img />");
            if (data[i]) {
                dip_switch.attr("src", "img/on.gif");
            } else {
                dip_switch.attr("src", "img/off.gif");
            }
            ret.append(dip_switch);

        }
        return ret;
    }

    generateVtxTable();

    jQuery("input[type=radio]").click(function() {
        generateVtxTable();
    });
    jQuery("#ignore").change(function() {
        generateVtxTable();
    });

    jQuery("#settings-btn").tap(function() {
        $("#main").hide();
        $("#settings").show();
    });

    jQuery("#back-btn").tap(function() {
        $("#main").show();
        $("#settings").hide();
    });

});
