var Generator = require('generate-js');

var VelocityUnit = Generator.generate(function VelocityUnit() {
    this._raw = 0;
});

VelocityUnit.definePrototype({});

module.exports = VelocityUnit;
