var Generator = require('generate-js');

var DistanceUnit = Generator.generate(function DistanceUnit() {
    this._raw = 0;
});

DistanceUnit.definePrototype({
    // metric system
    decameters: {
        set: function set_decameters(a) {
            this._raw = a * 1e1;
        },
        get: function get_decameters() {
            return this._raw / 1e1;
        }
    },
    hectometers: {
        set: function set_hectometers(a) {
            this._raw = a * 1e2;
        },
        get: function get_hectometers() {
            return this._raw / 1e2;
        }
    },
    kilometers: {
        set: function set_kilometers(a) {
            this._raw = a * 1e3;
        },
        get: function get_kilometers() {
            return this._raw / 1e3;
        }
    },
    megameters: {
        set: function set_megameters(a) {
            this._raw = a * 1e6;
        },
        get: function get_megameters() {
            return this._raw / 1e6;
        }
    },
    gigameters: {
        set: function set_gigameters(a) {
            this._raw = a * 1e9;
        },
        get: function get_gigameters() {
            return this._raw / 1e9;
        }
    },
    terameters: {
        set: function set_terameters(a) {
            this._raw = a * 1e12;
        },
        get: function get_terameters() {
            return this._raw / 1e12;
        }
    },
    petameters: {
        set: function set_petameters(a) {
            this._raw = a * 1e15;
        },
        get: function get_petameters() {
            return this._raw / 1e15;
        }
    },
    exameters: {
        set: function set_exameters(a) {
            this._raw = a * 1e18;
        },
        get: function get_exameters() {
            return this._raw / 1e18;
        }
    },
    zettameters: {
        set: function set_zettameters(a) {
            this._raw = a * 1e21;
        },
        get: function get_zettameters() {
            return this._raw / 1e21;
        }
    },
    yottameters: {
        set: function set_yottameters(a) {
            this._raw = a * 1e24;
        },
        get: function get_yottameters() {
            return this._raw / 1e24;
        }
    },
    meters: {
        set: function set_meters(a) {
            this._raw = a;
        },
        get: function get_meters() {
            return this._raw;
        }
    },
    decimeters: {
        set: function set_decimeters(a) {
            this._raw = a * 1e-1;
        },
        get: function get_decimeters() {
            return this._raw / 1e-1;
        }
    },
    centimeters: {
        set: function set_centimeters(a) {
            this._raw = a * 1e-2;
        },
        get: function get_centimeters() {
            return this._raw / 1e-2;
        }
    },
    millimeters: {
        set: function set_millimeters(a) {
            this._raw = a * 1e-3;
        },
        get: function get_millimeters() {
            return this._raw / 1e-3;
        }
    },
    micrometers: {
        set: function set_micrometers(a) {
            this._raw = a * 1e-6;
        },
        get: function get_micrometers() {
            return this._raw / 1e-6;
        }
    },
    nanometers: {
        set: function set_nanometers(a) {
            this._raw = a * 1e-9;
        },
        get: function get_nanometers() {
            return this._raw / 1e-9;
        }
    },
    picometers: {
        set: function set_picometers(a) {
            this._raw = a * 1e-12;
        },
        get: function get_picometers() {
            return this._raw / 1e-12;
        }
    },
    femtometers: {
        set: function set_femtometers(a) {
            this._raw = a * 1e-15;
        },
        get: function get_femtometers() {
            return this._raw / 1e-15;
        }
    },
    attometers: {
        set: function set_attometers(a) {
            this._raw = a * 1e-18;
        },
        get: function get_attometers() {
            return this._raw / 1e-18;
        }
    },
    zeptometers: {
        set: function set_zeptometers(a) {
            this._raw = a * 1e-21;
        },
        get: function get_zeptometers() {
            return this._raw / 1e-21;
        }
    },
    yoctometers: {
        set: function set_yoctometers(a) {
            this._raw = a * 1e-24;
        },
        get: function get_yoctometers() {
            return this._raw / 1e-24;
        }
    },

    // Imperial system
    chains: {
        set: function set_chain(a) {
            this.yards = a * 22;
        },
        get: function get_chain() {
            return this.yards / 22;
        }
    },
    furlongs: {
        set: function set_furlong(a) {
            this.yards = a * (22 * 10);
        },
        get: function get_furlong() {
            return this.yards / (22 * 10);
        }
    },
    miles: {
        set: function set_mile(a) {
            this.yards = a * 1760;
        },
        get: function get_mile() {
            return this.yards / 1760;
        }
    },
    leagues: {
        set: function set_league(a) {
            this.yards = a * (1760 * 3);
        },
        get: function get_league() {
            return this.yards / (1760 * 3);
        }
    },
    yards: {
        set: function set_yard(a) {
            this._raw = a * 0.9144;
        },
        get: function get_yard() {
            return this._raw / 0.9144;
        }
    },
    feet: {
        set: function set_foot(a) {
            this.yards = a / 3;
        },
        get: function get_foot() {
            return this.yards * 3;
        }
    },
    inches: {
        set: function set_inch(a) {
            this.yards = a / 36;
        },
        get: function get_inch() {
            return this.yards * 36;
        }
    },
    halfInches: {
        set: function set_halfInches(a) {
            this.yards = a / (36 * 2);
        },
        get: function get_halfInches() {
            return this.yards * (36 * 2);
        }
    },
    quarterInches: {
        set: function set_quarterInches(a) {
            this.yards = a / (36 * 4);
        },
        get: function get_quarterInches() {
            return this.yards * (36 * 4);
        }
    },
    eighthInches: {
        set: function set_eighthInches(a) {
            this.yards = a / (36 * 8);
        },
        get: function get_eighthInches() {
            return this.yards * (36 * 8);
        }
    },
    sixteenthInches: {
        set: function set_sixteenthInches(a) {
            this.yards = a / (36 * 16);
        },
        get: function get_sixteenthInches() {
            return this.yards * (36 * 16);
        }
    },
    thirtySecondthInches: {
        set: function set_thirtySecondthInches(a) {
            this.yards = a / (36 * 32);
        },
        get: function get_thirtySecondthInches() {
            return this.yards * (36 * 32);
        }
    },
    sixtyFourthInches: {
        set: function set_sixtyFourthInches(a) {
            this.yards = a / (36 * 64);
        },
        get: function get_sixtyFourthInches() {
            return this.yards * (36 * 64);
        }
    },
    lines: {
        set: function set_line(a) {
            this.yards = a / (36 * 12);
        },
        get: function get_line() {
            return this.yards * (36 * 12);
        }
    },
    thous: {
        set: function set_thou(a) {
            this.yards = a / (36 * 1000);
        },
        get: function get_thou() {
            return this.yards * (36 * 1000);
        }
    },
    tenths: {
        set: function set_tenths(a) {
            this.yards = a / (36 * 1000 * 10);
        },
        get: function get_tenths() {
            return this.yards * (36 * 1000 * 10);
        }
    },
});

module.exports = DistanceUnit;
