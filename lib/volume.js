var Generator = require('generate-js');

var VolumeUnit = Generator.generate(function VolumeUnit() {
    this._raw = 0;
});

VolumeUnit.definePrototype({});

module.exports = VolumeUnit;
