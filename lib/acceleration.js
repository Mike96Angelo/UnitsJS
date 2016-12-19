var Generator = require('generate-js');

var AccelerationUnit = Generator.generate(function AccelerationUnit() {
    this._raw = 0;
});

AccelerationUnit.definePrototype({});

module.exports = AccelerationUnit;
