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
    }
};

var ImmersionRC = new Transmitter("ImmersionRC/Fatshark", "immrc");

ImmersionRC.addDip('ch1', '111');
ImmersionRC.addDip('ch2', '011');
ImmersionRC.addDip('ch3', '101');
ImmersionRC.addDip('ch4', '001');
ImmersionRC.addDip('ch5', '110');
ImmersionRC.addDip('ch6', '010');
ImmersionRC.addDip('ch7', '000');

ImmersionRC.addChannel(5740, "Ch1", "ch1");
ImmersionRC.addChannel(5760, "Ch2", "ch2");
ImmersionRC.addChannel(5780, "Ch3", "ch3");
ImmersionRC.addChannel(5800, "Ch4", "ch4");
ImmersionRC.addChannel(5820, "Ch5", "ch5");
ImmersionRC.addChannel(5840, "Ch6", "ch6");
ImmersionRC.addChannel(5860, "Ch7", "ch7");

Transmitters["immrc"] = ImmersionRC;


var Ubad200 = new Transmitter("UBAD/Hawkeye 200mw", "ubad200");

Ubad200.addDip('fra', '11');
Ubad200.addDip('frb', '00');
Ubad200.addDip('frc', '10');
Ubad200.addDip('frd', '01');

Ubad200.addDip('ch1', '111');
Ubad200.addDip('ch2', '110');
Ubad200.addDip('ch3', '101');
Ubad200.addDip('ch4', '100');
Ubad200.addDip('ch5', '011');
Ubad200.addDip('ch6', '010');
Ubad200.addDip('ch7', '001');
Ubad200.addDip('ch8', '000');

Ubad200.addChannel(5865, 'FR-A Ch1', 'fra.ch1');
Ubad200.addChannel(5845, 'FR-A Ch2', 'fra.ch2');
Ubad200.addChannel(5825, 'FR-A Ch3', 'fra.ch3');
Ubad200.addChannel(5805, 'FR-A Ch4', 'fra.ch4');
Ubad200.addChannel(5785, 'FR-A Ch5', 'fra.ch5');
Ubad200.addChannel(5765, 'FR-A Ch6', 'fra.ch6');
Ubad200.addChannel(5745, 'FR-A Ch7', 'fra.ch7');
Ubad200.addChannel(5725, 'FR-A Ch8', 'fra.ch8');

Ubad200.addChannel(5740, 'FR-B Ch1', 'frb.ch1');
Ubad200.addChannel(5760, 'FR-B Ch2', 'frb.ch2');
Ubad200.addChannel(5780, 'FR-B Ch3', 'frb.ch3');
Ubad200.addChannel(5800, 'FR-B Ch4', 'frb.ch4');
Ubad200.addChannel(5820, 'FR-B Ch5', 'frb.ch5');
Ubad200.addChannel(5860, 'FR-B Ch7', 'frb.ch7');

Ubad200.addChannel(5705, 'FR-C Ch1', 'frc.ch1');
Ubad200.addChannel(5685, 'FR-C Ch2', 'frc.ch2');
Ubad200.addChannel(5665, 'FR-C Ch3', 'frc.ch3');
Ubad200.addChannel(5645, 'FR-C Ch4', 'frc.ch4');
Ubad200.addChannel(5885, 'FR-C Ch5', 'frc.ch5');
Ubad200.addChannel(5905, 'FR-C Ch6', 'frc.ch6');
Ubad200.addChannel(5925, 'FR-C Ch7', 'frc.ch7');
Ubad200.addChannel(5945, 'FR-C Ch8', 'frc.ch8');

Ubad200.addChannel(5733, 'FR-D Ch1', 'frd.ch1');
Ubad200.addChannel(5752, 'FR-D Ch2', 'frd.ch2');
Ubad200.addChannel(5771, 'FR-D Ch3', 'frd.ch3');
Ubad200.addChannel(5790, 'FR-D Ch4', 'frd.ch4');
Ubad200.addChannel(5809, 'FR-D Ch5', 'frd.ch5');
Ubad200.addChannel(5828, 'FR-D Ch6', 'frd.ch6');
Ubad200.addChannel(5847, 'FR-D Ch7', 'frd.ch7');
Ubad200.addChannel(5866, 'FR-D Ch8', 'frd.ch8');

Transmitters["ubad200"]  = Ubad200;


var Ubad600 = new Transmitter("UBAD/Hawkeye 600mw", "ubad600");

Ubad600.addDip('fra', '00');
Ubad600.addDip('frb', '11');
Ubad600.addDip('frc', '01');
Ubad600.addDip('frd', '10');

Ubad600.addDip('ch1', '111');
Ubad600.addDip('ch2', '011');
Ubad600.addDip('ch3', '101');
Ubad600.addDip('ch4', '001');
Ubad600.addDip('ch5', '110');
Ubad600.addDip('ch6', '010');
Ubad600.addDip('ch7', '100');
Ubad600.addDip('ch8', '000');

Ubad600.addChannel(5740, 'FR-A Ch1', 'fra.ch1');
Ubad600.addChannel(5760, 'FR-A Ch2', 'fra.ch2');
Ubad600.addChannel(5780, 'FR-A Ch3', 'fra.ch3');
Ubad600.addChannel(5800, 'FR-A Ch4', 'fra.ch4');
Ubad600.addChannel(5820, 'FR-A Ch5', 'fra.ch5');
Ubad600.addChannel(5840, 'FR-A Ch6', 'fra.ch6');
Ubad600.addChannel(5860, 'FR-A Ch7', 'fra.ch7');

Ubad600.addChannel(5725, 'FR-B Ch1', 'frb.ch1');
Ubad600.addChannel(5745, 'FR-B Ch2', 'frb.ch2');
Ubad600.addChannel(5765, 'FR-B Ch3', 'frb.ch3');
Ubad600.addChannel(5785, 'FR-B Ch4', 'frb.ch4');
Ubad600.addChannel(5805, 'FR-B Ch5', 'frb.ch5');
Ubad600.addChannel(5825, 'FR-B Ch6', 'frb.ch6');
Ubad600.addChannel(5845, 'FR-B Ch7', 'frb.ch7');
Ubad600.addChannel(5865, 'FR-B Ch8', 'frb.ch8');

Ubad600.addChannel(5733, 'FR-C Ch1', 'frc.ch1');
Ubad600.addChannel(5752, 'FR-C Ch2', 'frc.ch2');
Ubad600.addChannel(5771, 'FR-C Ch3', 'frc.ch3');
Ubad600.addChannel(5790, 'FR-C Ch4', 'frc.ch4');
Ubad600.addChannel(5809, 'FR-C Ch5', 'frc.ch5');
Ubad600.addChannel(5828, 'FR-C Ch6', 'frc.ch6');
Ubad600.addChannel(5847, 'FR-C Ch7', 'frc.ch7');
Ubad600.addChannel(5866, 'FR-C Ch8', 'frc.ch8');

Ubad600.addChannel(5705, 'FR-D Ch1', 'frd.ch1');
Ubad600.addChannel(5685, 'FR-D Ch2', 'frd.ch2');
Ubad600.addChannel(5665, 'FR-D Ch3', 'frd.ch3');
Ubad600.addChannel(5645, 'FR-D Ch4', 'frd.ch4');
Ubad600.addChannel(5885, 'FR-D Ch5', 'frd.ch5');
Ubad600.addChannel(5905, 'FR-D Ch6', 'frd.ch6');
Ubad600.addChannel(5925, 'FR-D Ch7', 'frd.ch7');
Ubad600.addChannel(5945, 'FR-D Ch8', 'frd.ch8');

Transmitters["ubad600"] = Ubad600;


var TBSGreenhorn25 = new Transmitter("TBS Greenhorn 25mw", "tbs25");

TBSGreenhorn25.addDip('ch1', '1111');
TBSGreenhorn25.addDip('ch2', '0111');
TBSGreenhorn25.addDip('ch3', '1011');
TBSGreenhorn25.addDip('ch4', '0011');
TBSGreenhorn25.addDip('ch5', '1101');
TBSGreenhorn25.addDip('ch6', '0101');
TBSGreenhorn25.addDip('ch7', '1001');
TBSGreenhorn25.addDip('ch8', '0001');

TBSGreenhorn25.addChannel(5725, 'Ch1', 'ch1');
TBSGreenhorn25.addChannel(5745, 'Ch2', 'ch2');
TBSGreenhorn25.addChannel(5765, 'Ch3', 'ch3');
TBSGreenhorn25.addChannel(5785, 'Ch4', 'ch4');
TBSGreenhorn25.addChannel(5805, 'Ch5', 'ch5');
TBSGreenhorn25.addChannel(5825, 'Ch6', 'ch6');
TBSGreenhorn25.addChannel(5845, 'Ch7', 'ch7');
TBSGreenhorn25.addChannel(5865, 'Ch8', 'ch8');

Transmitters["tbs25"] = TBSGreenhorn25;


var FT951 = new Transmitter("FT951", "ft951");

FT951.addDip('fra', '00');
FT951.addDip('frb', '01');
FT951.addDip('frd', '11');

FT951.addDip('ch1', '000');
FT951.addDip('ch2', '001');
FT951.addDip('ch3', '010');
FT951.addDip('ch4', '011');
FT951.addDip('ch5', '100');
FT951.addDip('ch6', '101');
FT951.addDip('ch7', '110');
FT951.addDip('ch8', '111');

FT951.addChannel(5865, 'GR-A Ch1', 'fra.ch1');
FT951.addChannel(5845, 'GR-A Ch2', 'fra.ch2');
FT951.addChannel(5825, 'GR-A Ch3', 'fra.ch3');
FT951.addChannel(5805, 'GR-A Ch4', 'fra.ch4');
FT951.addChannel(5785, 'GR-A Ch5', 'fra.ch5');
FT951.addChannel(5765, 'GR-A Ch6', 'fra.ch6');
FT951.addChannel(5745, 'GR-A Ch7', 'fra.ch7');

FT951.addChannel(5740, 'GR-D Ch1', 'frd.ch1');
FT951.addChannel(5760, 'GR-D Ch2', 'frd.ch2');
FT951.addChannel(5780, 'GR-D Ch3', 'frd.ch3');
FT951.addChannel(5800, 'GR-D Ch4', 'frd.ch4');
FT951.addChannel(5820, 'GR-D Ch5', 'frd.ch5');
FT951.addChannel(5860, 'GR-D Ch7', 'frd.ch7');

FT951.addChannel(5733, 'GR-B Ch1', 'frb.ch1');
FT951.addChannel(5752, 'GR-B Ch2', 'frb.ch2');
FT951.addChannel(5771, 'GR-B Ch3', 'frb.ch3');
FT951.addChannel(5790, 'GR-B Ch4', 'frb.ch4');
FT951.addChannel(5809, 'GR-B Ch5', 'frb.ch5');
FT951.addChannel(5828, 'GR-B Ch6', 'frb.ch6');
FT951.addChannel(5847, 'GR-B Ch7', 'frb.ch7');
FT951.addChannel(5866, 'GR-B Ch8', 'frb.ch8');

Transmitters["ft951"] = FT951;


var FT952 = new Transmitter("FT952", "ft952");

FT952.addDip('fra', '00');
FT952.addDip('frb', '01');
FT952.addDip('frc', '10');
FT952.addDip('frd', '11');

FT952.addDip('ch1', '000');
FT952.addDip('ch2', '001');
FT952.addDip('ch3', '010');
FT952.addDip('ch4', '011');
FT952.addDip('ch5', '100');
FT952.addDip('ch6', '101');
FT952.addDip('ch7', '110');
FT952.addDip('ch8', '111');

FT952.addChannel(5865, 'FR-A Ch1', 'fra.ch1');
FT952.addChannel(5845, 'FR-A Ch2', 'fra.ch2');
FT952.addChannel(5825, 'FR-A Ch3', 'fra.ch3');
FT952.addChannel(5805, 'FR-A Ch4', 'fra.ch4');
FT952.addChannel(5785, 'FR-A Ch5', 'fra.ch5');
FT952.addChannel(5765, 'FR-A Ch6', 'fra.ch6');
FT952.addChannel(5745, 'FR-A Ch7', 'fra.ch7');
FT952.addChannel(5725, 'FR-A Ch8', 'fra.ch8');

FT952.addChannel(5740, 'FR-D Ch1', 'frb.ch1');
FT952.addChannel(5760, 'FR-D Ch2', 'frb.ch2');
FT952.addChannel(5780, 'FR-D Ch3', 'frb.ch3');
FT952.addChannel(5800, 'FR-D Ch4', 'frb.ch4');
FT952.addChannel(5820, 'FR-D Ch5', 'frb.ch5');
FT952.addChannel(5840, 'FR-D Ch6', 'frb.ch6');
FT952.addChannel(5860, 'FR-D Ch7', 'frb.ch7');
FT952.addChannel(5880, 'FR-D Ch8', 'frb.ch8');

FT952.addChannel(5705, 'FR-C Ch1', 'frc.ch1');
FT952.addChannel(5685, 'FR-C Ch2', 'frc.ch2');
FT952.addChannel(5665, 'FR-C Ch3', 'frc.ch3');
FT952.addChannel(5645, 'FR-C Ch4', 'frc.ch4');
FT952.addChannel(5885, 'FR-C Ch5', 'frc.ch5');
FT952.addChannel(5905, 'FR-C Ch6', 'frc.ch6');
FT952.addChannel(5925, 'FR-C Ch7', 'frc.ch7');
FT952.addChannel(5945, 'FR-C Ch8', 'frc.ch8');

FT952.addChannel(5733, 'FR-B Ch1', 'frb.ch1');
FT952.addChannel(5752, 'FR-B Ch2', 'frb.ch2');
FT952.addChannel(5771, 'FR-B Ch3', 'frb.ch3');
FT952.addChannel(5790, 'FR-B Ch4', 'frb.ch4');
FT952.addChannel(5809, 'FR-B Ch5', 'frb.ch5');
FT952.addChannel(5828, 'FR-B Ch6', 'frb.ch6');
FT952.addChannel(5847, 'FR-B Ch7', 'frb.ch7');
FT952.addChannel(5866, 'FR-B Ch8', 'frb.ch8');

Transmitters["ft952"] = FT952;



var vtx = [
    [
        "FR-C 4",
        5645,
    ],
    [
        "RB1",
        5658
    ],
    [
        "FR-C 3",
        5665,
    ],
    [
        "FR-C 2",
        5685,
    ],
    [
        "RB2",
        5695
    ],
    [
        "FR-C 1",
        5705,
    ],
    [
        "FR-A 8",
        5725,
    ],
    [
        "RB3",
        5732
    ],
    [
        "FR-B 1",
        5733,
    ],
    [
        "ImmrRC 1",
        5740,
    ],
    [
        "FR-A 7",
        5745,
    ],
    [
        "FR-B 2",
        5752,
    ],
    [
        "ImmrRC 2",
        5760,
    ],
    [
        "FR-A 6",
        5765,
    ],
    [
        "RB4",
        5769
    ],
    [
        "FR-B 3",
        5771,
    ],
    [
        "ImmrRC 3",
        5780,
    ],
    [
        "FR-A 5",
        5785,
    ],
    [
        "FR-B 4",
        5790,
    ],
    [
        "ImmrRC 4",
        5800,
    ],
    [
        "FR-A 4",
        5805,
    ],
    [
        "RB5",
        5806
    ],
    [
        "FR-B 5",
        5809,
    ],
    [
        "ImmrRC 5",
        5820,
    ],
    [
        "FR-A 3",
        5825,
    ],
    [
        "FR-B 6",
        5828,
    ],
    [
        "ImmrRC 6",
        5840,
    ],
    [
        "RB6",
        5843
    ],
    [
        "FR-A 2",
        5845,
    ],
    [
        "FR-B 7",
        5847,
    ],
    [
        "ImmrRC 7",
        5860,
    ],
    [
        "FR-A 1",
        5865,
    ],
    [
        "FR-B 8",
        5866,
    ],
    [
        "ImmrRC 8",
        5880,
    ],
    [
        "FR-C 5",
        5885,
    ],
    [
        "FR-C 6",
        5905,
    ],
    [
        "RB8",
        5917
    ],
    [
        "FR-C 7",
        5925,
    ],
    [
        "FR-C 8",
        5945,
    ]
];