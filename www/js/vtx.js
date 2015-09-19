var Transmitters = {};

var Transmitter = function(name, id) {
    this.id = id
    this.name = name;
    this.hasDip = true;

    this.dipSettings = {};
    this.vtxChannels = {};


    this.addDip = function(key, values) {
        this.dipSettings[key] = values;
    };
    
    this.addChannel = function(frequency, name, dip) {
        this.vtxChannels[frequency] = {
            name: name,
            dip: dip
        };
    };

    this.getChannelName = function(freq) {
        if ((freq in this.vtxChannels) == false) return '';

        return this.vtxChannels[freq].name;
    };

    this.dip = function(freq) {

        if ((freq in this.vtxChannels) == false) return '';

        var channelInfo = this.vtxChannels[freq];
        var dipSettings = '';

        var channelDips = channelInfo['dip'].split('.');

        for (var i = 0; i < channelDips.length; i++) {
            dipSettings += this.dipSettings[channelDips[i]];
        }


        return dipSettings.split('');
    };

    this.data = function() {
        var output = {};

        output["id"] = this.id;
        output["name"] = this.name;
        output["hasDip"] = this.hasDip;
        output["dipSettings"] = this.dipSettings;
        output["vtxChannels"] = this.vtxChannels;

        return output;
    }
};


var frequencies = [
    5645,
    5658,
    5665,
    5685,
    5695,
    5705,
    5725,
    5732,
    5733,
    5740,
    5745,
    5752,
    5760,
    5765,
    5769,
    5771,
    5780,
    5785,
    5790,
    5800,
    5805,
    5806,
    5809,
    5820,
    5825,
    5828,
    5840,
    5843,
    5845,
    5847,
    5860,
    5865,
    5866,
    5880,
    5885,
    5905,
    5917,
    5925,
    5945
];


