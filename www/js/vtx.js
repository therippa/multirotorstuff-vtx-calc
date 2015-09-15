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

Ubad200.addChannel(5865, 'FR-A Ch1', 'ch1.fra');
Ubad200.addChannel(5845, 'FR-A Ch2', 'ch2.fra');
Ubad200.addChannel(5825, 'FR-A Ch3', 'ch3.fra');
Ubad200.addChannel(5805, 'FR-A Ch4', 'ch4.fra');
Ubad200.addChannel(5785, 'FR-A Ch5', 'ch5.fra');
Ubad200.addChannel(5765, 'FR-A Ch6', 'ch6.fra');
Ubad200.addChannel(5745, 'FR-A Ch7', 'ch7.fra');
Ubad200.addChannel(5725, 'FR-A Ch8', 'ch8.fra');

Ubad200.addChannel(5740, 'FR-B Ch1', 'ch1.frb');
Ubad200.addChannel(5760, 'FR-B Ch2', 'ch2.frb');
Ubad200.addChannel(5780, 'FR-B Ch3', 'ch3.frb');
Ubad200.addChannel(5800, 'FR-B Ch4', 'ch4.frb');
Ubad200.addChannel(5820, 'FR-B Ch5', 'ch5.frb');
Ubad200.addChannel(5860, 'FR-B Ch7', 'ch7.frb');

Ubad200.addChannel(5705, 'FR-C Ch1', 'ch1.frc');
Ubad200.addChannel(5685, 'FR-C Ch2', 'ch2.frc');
Ubad200.addChannel(5665, 'FR-C Ch3', 'ch3.frc');
Ubad200.addChannel(5645, 'FR-C Ch4', 'ch4.frc');
Ubad200.addChannel(5885, 'FR-C Ch5', 'ch5.frc');
Ubad200.addChannel(5905, 'FR-C Ch6', 'ch6.frc');
Ubad200.addChannel(5925, 'FR-C Ch7', 'ch7.frc');
Ubad200.addChannel(5945, 'FR-C Ch8', 'ch8.frc');

Ubad200.addChannel(5733, 'FR-D Ch1', 'ch1.frd');
Ubad200.addChannel(5752, 'FR-D Ch2', 'ch2.frd');
Ubad200.addChannel(5771, 'FR-D Ch3', 'ch3.frd');
Ubad200.addChannel(5790, 'FR-D Ch4', 'ch4.frd');
Ubad200.addChannel(5809, 'FR-D Ch5', 'ch5.frd');
Ubad200.addChannel(5828, 'FR-D Ch6', 'ch6.frd');
Ubad200.addChannel(5847, 'FR-D Ch7', 'ch7.frd');
Ubad200.addChannel(5866, 'FR-D Ch8', 'ch8.frd');

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

Ubad600.addChannel(5740, 'FR-A Ch1', 'ch1.fra');
Ubad600.addChannel(5760, 'FR-A Ch2', 'ch2.fra');
Ubad600.addChannel(5780, 'FR-A Ch3', 'ch3.fra');
Ubad600.addChannel(5800, 'FR-A Ch4', 'ch4.fra');
Ubad600.addChannel(5820, 'FR-A Ch5', 'ch5.fra');
Ubad600.addChannel(5840, 'FR-A Ch6', 'ch6.fra');
Ubad600.addChannel(5860, 'FR-A Ch7', 'ch7.fra');

Ubad600.addChannel(5725, 'FR-B Ch1', 'ch1.frb');
Ubad600.addChannel(5745, 'FR-B Ch2', 'ch2.frb');
Ubad600.addChannel(5765, 'FR-B Ch3', 'ch3.frb');
Ubad600.addChannel(5785, 'FR-B Ch4', 'ch4.frb');
Ubad600.addChannel(5805, 'FR-B Ch5', 'ch5.frb');
Ubad600.addChannel(5825, 'FR-B Ch6', 'ch6.frb');
Ubad600.addChannel(5845, 'FR-B Ch7', 'ch7.frb');
Ubad600.addChannel(5865, 'FR-B Ch8', 'ch8.frb');

Ubad600.addChannel(5733, 'FR-C Ch1', 'ch1.frc');
Ubad600.addChannel(5752, 'FR-C Ch2', 'ch2.frc');
Ubad600.addChannel(5771, 'FR-C Ch3', 'ch3.frc');
Ubad600.addChannel(5790, 'FR-C Ch4', 'ch4.frc');
Ubad600.addChannel(5809, 'FR-C Ch5', 'ch5.frc');
Ubad600.addChannel(5828, 'FR-C Ch6', 'ch6.frc');
Ubad600.addChannel(5847, 'FR-C Ch7', 'ch7.frc');
Ubad600.addChannel(5866, 'FR-C Ch8', 'ch8.frc');

Ubad600.addChannel(5705, 'FR-D Ch1', 'ch1.frd');
Ubad600.addChannel(5685, 'FR-D Ch2', 'ch2.frd');
Ubad600.addChannel(5665, 'FR-D Ch3', 'ch3.frd');
Ubad600.addChannel(5645, 'FR-D Ch4', 'ch4.frd');
Ubad600.addChannel(5885, 'FR-D Ch5', 'ch5.frd');
Ubad600.addChannel(5905, 'FR-D Ch6', 'ch6.frd');
Ubad600.addChannel(5925, 'FR-D Ch7', 'ch7.frd');
Ubad600.addChannel(5945, 'FR-D Ch8', 'ch8.frd');

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

FT951.addDip('fra', '000');
FT951.addDip('frb', '010');
FT951.addDip('frd', '110');

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

FT952.addDip('fra', '000');
FT952.addDip('frb', '010');
FT952.addDip('frc', '100');
FT952.addDip('frd', '110');

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

FT952.addChannel(5740, 'FR-D Ch1', 'frd.ch1');
FT952.addChannel(5760, 'FR-D Ch2', 'frd.ch2');
FT952.addChannel(5780, 'FR-D Ch3', 'frd.ch3');
FT952.addChannel(5800, 'FR-D Ch4', 'frd.ch4');
FT952.addChannel(5820, 'FR-D Ch5', 'frd.ch5');
FT952.addChannel(5840, 'FR-D Ch6', 'frd.ch6');
FT952.addChannel(5860, 'FR-D Ch7', 'frd.ch7');
FT952.addChannel(5880, 'FR-D Ch8', 'frd.ch8');

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


var TS5823 = new Transmitter("TS5823/5828", "TS5823");

TS5823.addDip('fra', '11');
TS5823.addDip('frb', '00');
TS5823.addDip('frc', '10');
TS5823.addDip('frd', '01');

TS5823.addDip('ch1', '000');
TS5823.addDip('ch2', '001');
TS5823.addDip('ch3', '010');
TS5823.addDip('ch4', '011');
TS5823.addDip('ch5', '100');
TS5823.addDip('ch6', '101');
TS5823.addDip('ch7', '110');
TS5823.addDip('ch8', '111');

TS5823.addChannel(5725, 'FR-B Ch1', 'ch1.frb');
TS5823.addChannel(5745, 'FR-B Ch2', 'ch2.frb');
TS5823.addChannel(5765, 'FR-B Ch3', 'ch3.frb');
TS5823.addChannel(5785, 'FR-B Ch4', 'ch4.frb');
TS5823.addChannel(5805, 'FR-B Ch5', 'ch5.frb');
TS5823.addChannel(5825, 'FR-B Ch6', 'ch6.frb');
TS5823.addChannel(5845, 'FR-B Ch7', 'ch7.frb');
TS5823.addChannel(5865, 'FR-B Ch8', 'ch8.frb');

TS5823.addChannel(5740, 'FR-A Ch1', 'ch1.fra');
TS5823.addChannel(5760, 'FR-A Ch2', 'ch2.fra');
TS5823.addChannel(5780, 'FR-A Ch3', 'ch3.fra');
TS5823.addChannel(5800, 'FR-A Ch4', 'ch4.fra');
TS5823.addChannel(5820, 'FR-A Ch5', 'ch5.fra');
TS5823.addChannel(5840, 'FR-A Ch6', 'ch6.fra');
TS5823.addChannel(5860, 'FR-A Ch7', 'ch7.fra');
TS5823.addChannel(5880, 'FR-A Ch8', 'ch8.fra');

TS5823.addChannel(5705, 'FR-C Ch1', 'ch1.frc');
TS5823.addChannel(5685, 'FR-C Ch2', 'ch2.frc');
TS5823.addChannel(5665, 'FR-C Ch3', 'ch3.frc');
TS5823.addChannel(5645, 'FR-C Ch4', 'ch4.frc');
TS5823.addChannel(5885, 'FR-C Ch5', 'ch5.frc');
TS5823.addChannel(5905, 'FR-C Ch6', 'ch6.frc');
TS5823.addChannel(5925, 'FR-C Ch7', 'ch7.frc');
TS5823.addChannel(5945, 'FR-C Ch8', 'ch8.frc');

TS5823.addChannel(5733, 'FR-D Ch1', 'ch1.frd');
TS5823.addChannel(5752, 'FR-D Ch2', 'ch2.frd');
TS5823.addChannel(5771, 'FR-D Ch3', 'ch3.frd');
TS5823.addChannel(5790, 'FR-D Ch4', 'ch4.frd');
TS5823.addChannel(5809, 'FR-D Ch5', 'ch5.frd');
TS5823.addChannel(5828, 'FR-D Ch6', 'ch6.frd');
TS5823.addChannel(5847, 'FR-D Ch7', 'ch7.frd');
TS5823.addChannel(5866, 'FR-D Ch8', 'ch8.frd');

Transmitters["ts5823"] = TS5823;


var ET200 = new Transmitter("Eachine ET200/600", "ET200");

ET200.hasDip = false;

ET200.addChannel(5865, 'FR-A Ch1', '');
ET200.addChannel(5845, 'FR-A Ch2', '');
ET200.addChannel(5825, 'FR-A Ch3', '');
ET200.addChannel(5805, 'FR-A Ch4', '');
ET200.addChannel(5785, 'FR-A Ch5', '');
ET200.addChannel(5765, 'FR-A Ch6', '');
ET200.addChannel(5745, 'FR-A Ch7', '');
ET200.addChannel(5725, 'FR-A Ch8', '');

ET200.addChannel(5740, 'FR-F Ch1', '');
ET200.addChannel(5760, 'FR-F Ch2', '');
ET200.addChannel(5780, 'FR-F Ch3', '');
ET200.addChannel(5800, 'FR-F Ch4', '');
ET200.addChannel(5820, 'FR-F Ch5', '');
ET200.addChannel(5840, 'FR-F Ch6', '');
ET200.addChannel(5860, 'FR-F Ch7', '');
ET200.addChannel(5880, 'FR-F Ch8', '');

ET200.addChannel(5705, 'FR-E Ch1', '');
ET200.addChannel(5685, 'FR-E Ch2', '');
ET200.addChannel(5665, 'FR-E Ch3', '');
ET200.addChannel(5645, 'FR-E Ch4', '');
ET200.addChannel(5885, 'FR-E Ch5', '');
ET200.addChannel(5905, 'FR-E Ch6', '');
ET200.addChannel(5925, 'FR-E Ch7', '');
ET200.addChannel(5945, 'FR-E Ch8', '');

ET200.addChannel(5733, 'FR-B Ch1', '');
ET200.addChannel(5752, 'FR-B Ch2', '');
ET200.addChannel(5771, 'FR-B Ch3', '');
ET200.addChannel(5790, 'FR-B Ch4', '');
ET200.addChannel(5809, 'FR-B Ch5', '');
ET200.addChannel(5828, 'FR-B Ch6', '');
ET200.addChannel(5847, 'FR-B Ch7', '');
ET200.addChannel(5866, 'FR-B Ch8', '');

Transmitters["ET200"] = ET200;


var TS832 = new Transmitter("TS832", "TS832");

TS832.hasDip = false;

TS832.addChannel(5865, 'FR1 Ch1', '');
TS832.addChannel(5845, 'FR1 Ch2', '');
TS832.addChannel(5825, 'FR1 Ch3', '');
TS832.addChannel(5805, 'FR1 Ch4', '');
TS832.addChannel(5785, 'FR1 Ch5', '');
TS832.addChannel(5765, 'FR1 Ch6', '');
TS832.addChannel(5745, 'FR1 Ch7', '');
TS832.addChannel(5725, 'FR1 Ch8', '');

TS832.addChannel(5740, 'FR4 Ch1', '');
TS832.addChannel(5760, 'FR4 Ch2', '');
TS832.addChannel(5780, 'FR4 Ch3', '');
TS832.addChannel(5800, 'FR4 Ch4', '');
TS832.addChannel(5820, 'FR4 Ch5', '');
TS832.addChannel(5840, 'FR4 Ch6', '');
TS832.addChannel(5860, 'FR4 Ch7', '');
TS832.addChannel(5880, 'FR4 Ch8', '');

TS832.addChannel(5705, 'FR3 Ch1', '');
TS832.addChannel(5685, 'FR3 Ch2', '');
TS832.addChannel(5665, 'FR3 Ch3', '');
TS832.addChannel(5645, 'FR3 Ch4', '');
TS832.addChannel(5885, 'FR3 Ch5', '');
TS832.addChannel(5905, 'FR3 Ch6', '');
TS832.addChannel(5925, 'FR3 Ch7', '');
TS832.addChannel(5945, 'FR3 Ch8', '');

TS832.addChannel(5733, 'FR2 Ch1', '');
TS832.addChannel(5752, 'FR2 Ch2', '');
TS832.addChannel(5771, 'FR2 Ch3', '');
TS832.addChannel(5790, 'FR2 Ch4', '');
TS832.addChannel(5809, 'FR2 Ch5', '');
TS832.addChannel(5828, 'FR2 Ch6', '');
TS832.addChannel(5847, 'FR2 Ch7', '');
TS832.addChannel(5866, 'FR2 Ch8', '');

Transmitters["TS832"] = TS832;


var TX5G25 = new Transmitter("Lumenier TX5G25", "TX5G25");

TX5G25.hasDip = false;

TX5G25.addChannel(5865, 'Band 3 Ch1', '');
TX5G25.addChannel(5845, 'Band 3 Ch2', '');
TX5G25.addChannel(5825, 'Band 3 Ch3', '');
TX5G25.addChannel(5805, 'Band 3 Ch4', '');
TX5G25.addChannel(5785, 'Band 3 Ch5', '');
TX5G25.addChannel(5765, 'Band 3 Ch6', '');
TX5G25.addChannel(5745, 'Band 3 Ch7', '');
TX5G25.addChannel(5725, 'Band 3 Ch8', '');

TX5G25.addChannel(5740, 'Band 1 Ch1', '');
TX5G25.addChannel(5760, 'Band 1 Ch2', '');
TX5G25.addChannel(5780, 'Band 1 Ch3', '');
TX5G25.addChannel(5800, 'Band 1 Ch4', '');
TX5G25.addChannel(5820, 'Band 1 Ch5', '');
TX5G25.addChannel(5840, 'Band 1 Ch6', '');
TX5G25.addChannel(5860, 'Band 1 Ch7', '');
TX5G25.addChannel(5880, 'Band 1 Ch8', '');

TX5G25.addChannel(5705, 'Band 2 Ch1', '');
TX5G25.addChannel(5685, 'Band 2 Ch2', '');
TX5G25.addChannel(5665, 'Band 2 Ch3', '');
TX5G25.addChannel(5645, 'Band 2 Ch4', '');
TX5G25.addChannel(5885, 'Band 2 Ch5', '');
TX5G25.addChannel(5905, 'Band 2 Ch6', '');
TX5G25.addChannel(5925, 'Band 2 Ch7', '');
TX5G25.addChannel(5945, 'Band 2 Ch8', '');

TX5G25.addChannel(5658, 'Band 4 Ch1', '');
TX5G25.addChannel(5695, 'Band 4 Ch2', '');
TX5G25.addChannel(5732, 'Band 4 Ch3', '');
TX5G25.addChannel(5769, 'Band 4 Ch4', '');
TX5G25.addChannel(5806, 'Band 4 Ch5', '');
TX5G25.addChannel(5843, 'Band 4 Ch6', '');
TX5G25.addChannel(5880, 'Band 4 Ch7', '');
TX5G25.addChannel(5917, 'Band 4 Ch8', '');

Transmitters["TX5G25"] = TX5G25;


var TS351a = new Transmitter("TS351/353 A", "TS351a");

TS351a.addDip('ch1', '0000');
TS351a.addDip('ch2', '1000');
TS351a.addDip('ch3', '0100');
TS351a.addDip('ch4', '1100');
TS351a.addDip('ch5', '0010');
TS351a.addDip('ch6', '1010');
TS351a.addDip('ch7', '0110');
TS351a.addDip('ch8', '1110');

TS351a.addChannel(5865, "Ch1", "ch1");
TS351a.addChannel(5845, "Ch2", "ch2");
TS351a.addChannel(5825, "Ch3", "ch3");
TS351a.addChannel(5805, "Ch4", "ch4");
TS351a.addChannel(5785, "Ch5", "ch5");
TS351a.addChannel(5765, "Ch6", "ch6");
TS351a.addChannel(5745, "Ch7", "ch7");
TS351a.addChannel(5725, "Ch8", "ch8");

Transmitters["TS351a"] = TS351a;


var TS351b = new Transmitter("TS351/353 B", "TS351b");

TS351b.addDip('ch1', '0000');
TS351b.addDip('ch2', '1000');
TS351b.addDip('ch3', '0100');
TS351b.addDip('ch4', '1100');
TS351b.addDip('ch5', '0010');
TS351b.addDip('ch6', '1010');
TS351b.addDip('ch7', '0110');
TS351b.addDip('ch8', '1110');

TS351b.addChannel(5733, "Ch1", "ch1");
TS351b.addChannel(5752, "Ch2", "ch2");
TS351b.addChannel(5771, "Ch3", "ch3");
TS351b.addChannel(5790, "Ch4", "ch4");
TS351b.addChannel(5809, "Ch5", "ch5");
TS351b.addChannel(5828, "Ch6", "ch6");
TS351b.addChannel(5847, "Ch7", "ch7");
TS351b.addChannel(5866, "Ch8", "ch8");

Transmitters["TS351b"] = TS351b;

var TS351c = new Transmitter("TS351/353 B", "TS351c");

TS351c.addDip('ch1', '0000');
TS351c.addDip('ch2', '1000');
TS351c.addDip('ch3', '0100');
TS351c.addDip('ch4', '1100');
TS351c.addDip('ch5', '0010');
TS351c.addDip('ch6', '1010');
TS351c.addDip('ch7', '0110');
TS351c.addDip('ch8', '1110');

TS351c.addChannel(5705, "Ch1", "ch1");
TS351c.addChannel(5685, "Ch2", "ch2");
TS351c.addChannel(5665, "Ch3", "ch3");
TS351c.addChannel(5645, "Ch4", "ch4");
TS351c.addChannel(5885, "Ch5", "ch5");
TS351c.addChannel(5905, "Ch6", "ch6");
TS351c.addChannel(5925, "Ch7", "ch7");
TS351c.addChannel(5945, "Ch8", "ch8");

Transmitters["TS351c"] = TS351c;


var TS351air = new Transmitter("TS351/353 Airwave", "TS351air");

TS351air.addDip('ch1', '0000');
TS351air.addDip('ch2', '1000');
TS351air.addDip('ch3', '0100');
TS351air.addDip('ch4', '1100');
TS351air.addDip('ch5', '0010');
TS351air.addDip('ch6', '1010');
TS351air.addDip('ch7', '0110');

TS351air.addChannel(5740, "Ch1", "ch1");
TS351air.addChannel(5760, "Ch2", "ch2");
TS351air.addChannel(5780, "Ch3", "ch3");
TS351air.addChannel(5800, "Ch4", "ch4");
TS351air.addChannel(5820, "Ch5", "ch5");
TS351air.addChannel(5840, "Ch6", "ch6");
TS351air.addChannel(5860, "Ch7", "ch7");

Transmitters["TS351air"] = TS351air;


var TBSUnify = new Transmitter("TBS Unify", "TBSUnify");

TBSUnify.addDip('a', '11');
TBSUnify.addDip('b', '01');

TBSUnify.addDip('ch1', '1111');
TBSUnify.addDip('ch2', '0111');
TBSUnify.addDip('ch3', '0011');
TBSUnify.addDip('ch4', '0011');
TBSUnify.addDip('ch5', '1101');
TBSUnify.addDip('ch6', '0101');
TBSUnify.addDip('ch7', '1001');
TBSUnify.addDip('ch8', '0001');
TBSUnify.addDip('ch9', '1110');
TBSUnify.addDip('ch10', '0110');
TBSUnify.addDip('ch11', '1010');
TBSUnify.addDip('ch12', '0010');
TBSUnify.addDip('ch13', '1100');
TBSUnify.addDip('ch14', '0100');
TBSUnify.addDip('ch15', '1000');
TBSUnify.addDip('ch16', '0000');

TBSUnify.addChannel(5865, 'Channel 1', 'ch1.a');
TBSUnify.addChannel(5845, 'Channel 2', 'ch2.a');
TBSUnify.addChannel(5825, 'Channel 3', 'ch3.a');
TBSUnify.addChannel(5805, 'Channel 4', 'ch4.a');
TBSUnify.addChannel(5785, 'Channel 5', 'ch5.a');
TBSUnify.addChannel(5765, 'Channel 6', 'ch6.a');
TBSUnify.addChannel(5745, 'Channel 7', 'ch7.a');
TBSUnify.addChannel(5725, 'Channel 8', 'ch8.a');
TBSUnify.addChannel(5733, 'Channel 9', 'ch9.a');
TBSUnify.addChannel(5752, 'Channel 10', 'ch10.a');
TBSUnify.addChannel(5771, 'Channel 11', 'ch11.a');
TBSUnify.addChannel(5790, 'Channel 12', 'ch12.a');
TBSUnify.addChannel(5809, 'Channel 13', 'ch13.a');
TBSUnify.addChannel(5828, 'Channel 14', 'ch14.a');
TBSUnify.addChannel(5847, 'Channel 15', 'ch15.a');
TBSUnify.addChannel(5866, 'Channel 16', 'ch16.a');

TBSUnify.addChannel(5705, 'Channel 17', 'ch1.b');
TBSUnify.addChannel(5685, 'Channel 18', 'ch2.b');
TBSUnify.addChannel(5665, 'Channel 19', 'ch3.b');
TBSUnify.addChannel(5645, 'Channel 20', 'ch4.b');
TBSUnify.addChannel(5885, 'Channel 21', 'ch5.b');
TBSUnify.addChannel(5925, 'Channel 22', 'ch6.b');
TBSUnify.addChannel(5945, 'Channel 24', 'ch8.b');
TBSUnify.addChannel(5750, 'Channel 25', 'ch9.b');
TBSUnify.addChannel(5760, 'Channel 26', 'ch10.b');
TBSUnify.addChannel(5780, 'Channel 27', 'ch11.b');
TBSUnify.addChannel(5800, 'Channel 28', 'ch12.b');
TBSUnify.addChannel(5820, 'Channel 29', 'ch13.b');
TBSUnify.addChannel(5840, 'Channel 30', 'ch14.b');
TBSUnify.addChannel(5860, 'Channel 31', 'ch15.b');
TBSUnify.addChannel(5880, 'Channel 32', 'ch16.b');

Transmitters["TBSUnify"] = TBSUnify;


var TBSUnify_Raceband = new Transmitter("TBS Unify Raceband", "TBSUnify_Raceband");

TBSUnify_Raceband.addDip('a', '11');
TBSUnify_Raceband.addDip('b', '01');

TBSUnify_Raceband.addDip('ch1', '1111');
TBSUnify_Raceband.addDip('ch2', '0111');
TBSUnify_Raceband.addDip('ch3', '0011');
TBSUnify_Raceband.addDip('ch4', '0011');
TBSUnify_Raceband.addDip('ch5', '1101');
TBSUnify_Raceband.addDip('ch6', '0101');
TBSUnify_Raceband.addDip('ch7', '1001');
TBSUnify_Raceband.addDip('ch8', '0001');
TBSUnify_Raceband.addDip('ch9', '1110');
TBSUnify_Raceband.addDip('ch10', '0110');
TBSUnify_Raceband.addDip('ch11', '1010');
TBSUnify_Raceband.addDip('ch12', '0010');
TBSUnify_Raceband.addDip('ch13', '1100');
TBSUnify_Raceband.addDip('ch14', '0100');
TBSUnify_Raceband.addDip('ch15', '1000');
TBSUnify_Raceband.addDip('ch16', '0000');

TBSUnify_Raceband.addChannel(5865, 'Channel 1', 'ch1.a');
TBSUnify_Raceband.addChannel(5845, 'Channel 2', 'ch2.a');
TBSUnify_Raceband.addChannel(5825, 'Channel 3', 'ch3.a');
TBSUnify_Raceband.addChannel(5805, 'Channel 4', 'ch4.a');
TBSUnify_Raceband.addChannel(5785, 'Channel 5', 'ch5.a');
TBSUnify_Raceband.addChannel(5765, 'Channel 6', 'ch6.a');
TBSUnify_Raceband.addChannel(5745, 'Channel 7', 'ch7.a');
TBSUnify_Raceband.addChannel(5725, 'Channel 8', 'ch8.a');
TBSUnify_Raceband.addChannel(5658, 'Channel 9', 'ch9.a');
TBSUnify_Raceband.addChannel(5695, 'Channel 10', 'ch10.a');
TBSUnify_Raceband.addChannel(5732, 'Channel 11', 'ch11.a');
TBSUnify_Raceband.addChannel(5769, 'Channel 12', 'ch12.a');
TBSUnify_Raceband.addChannel(5806, 'Channel 13', 'ch13.a');
TBSUnify_Raceband.addChannel(5843, 'Channel 14', 'ch14.a');
TBSUnify_Raceband.addChannel(5880, 'Channel 15', 'ch15.a');
TBSUnify_Raceband.addChannel(5917, 'Channel 16', 'ch16.a');

TBSUnify_Raceband.addChannel(5705, 'Channel 17', 'ch1.b');
TBSUnify_Raceband.addChannel(5685, 'Channel 18', 'ch2.b');
TBSUnify_Raceband.addChannel(5665, 'Channel 19', 'ch3.b');
TBSUnify_Raceband.addChannel(5645, 'Channel 20', 'ch4.b');
TBSUnify_Raceband.addChannel(5885, 'Channel 21', 'ch5.b');
TBSUnify_Raceband.addChannel(5925, 'Channel 22', 'ch6.b');
TBSUnify_Raceband.addChannel(5945, 'Channel 24', 'ch8.b');
TBSUnify_Raceband.addChannel(5750, 'Channel 25', 'ch9.b');
TBSUnify_Raceband.addChannel(5760, 'Channel 26', 'ch10.b');
TBSUnify_Raceband.addChannel(5780, 'Channel 27', 'ch11.b');
TBSUnify_Raceband.addChannel(5800, 'Channel 28', 'ch12.b');
TBSUnify_Raceband.addChannel(5820, 'Channel 29', 'ch13.b');
TBSUnify_Raceband.addChannel(5840, 'Channel 30', 'ch14.b');
TBSUnify_Raceband.addChannel(5860, 'Channel 31', 'ch15.b');
TBSUnify_Raceband.addChannel(5880, 'Channel 32', 'ch16.b');

Transmitters["TBSUnify_Raceband"] = TBSUnify_Raceband;

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