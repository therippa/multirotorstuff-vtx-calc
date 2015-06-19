jQuery(document).ready(function() {
    "use strict";

    var vtx = [
        ["Boscam A 1", 5865, [1,1,1,1,1]],
        ["Boscam A 2", 5845, [1,1,0,1,1]],
        ["Boscam A 3", 5825, [1,0,1,1,1]],
        ["Boscam A 4", 5805,[1,0,0,1,1]],
        ["Boscam A 5", 5785,[0,1,1,1,1]],
        ["Boscam A 6", 5765,[0,1,0,1,1]],
        ["Boscam A 7", 5745,[0,0,1,1,1]],
        ["Boscam A 8", 5725,[0,0,0,1,1]],
        ["Airwave 1", 5740,[1,1,1,0,0]],
        ["Airwave 2", 5760,[1,1,0,0,0]],
        ["Airwave 3", 5780,[1,0,1,0,0]],
        ["Airwave 4", 5800,[1,0,0,0,0]],
        ["Airwave 5", 5820,[0,1,1,0,0]],
        ["Airwave 6", 5840,[0,1,0,0,0]],
        ["Airwave 7", 5860,[0,0,1,0,0]],
        ["Airwave 8", 5880,[0,0,0,0,0]],
        ["Boscam E 1", 5705,[1,1,1,1,0]],
        ["Boscam E 2", 5685,[1,1,0,1,0]],
        ["Boscam E 3", 5665,[1,0,1,1,0]],
        ["Boscam E 4", 5645,[1,0,0,1,0]],
        ["Boscam E 5", 5885,[0,1,1,1,0]],
        ["Boscam E 6", 5905,[0,1,0,1,0]],
        ["Boscam E 7", 5925,[0,0,1,1,0]],
        ["Boscam E 8", 5945,[0,0,0,1,0]],
        ["Boscam B 1", 5733,[1,1,1,0,1]],
        ["Boscam B 2", 5752,[1,1,0,0,1]],
        ["Boscam B 3", 5771,[1,0,1,0,1]],
        ["Boscam B 4", 5790,[1,0,0,0,1]],
        ["Boscam B 5", 5809,[0,1,1,0,1]],
        ["Boscam B 6", 5828,[0,1,0,0,1]],
        ["Boscam B 7", 5847,[0,0,1,0,1]],
        ["Boscam B 8", 5866,[0,0,0,0,1]]
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

        var table = arrayToTable(vtx_table, good_channels);
        jQuery("#channel-table").html(table);

    }

    var arrayToTable = function (data, good_channels, options) {
        if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) || (navigator.userAgent.match(/iPad/i)))) {
          data.unshift(["Channel", "Freq", "DIP", "Prev Mhz Diff", "Next Mhz Diff"]);
        } else {
          data.unshift(["Channel", "Frequency", "DIP", "Prev Mhz Diff", "Next Mhz Diff"]);
        }
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
                    cellData = dip(cellData);
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

    function dip(data) {
        var ret = jQuery('<div />')
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
});
