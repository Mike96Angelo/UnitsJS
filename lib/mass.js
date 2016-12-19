var Generator = require('generate-js');

var MassUnit = Generator.generate(function MassUnit() {
    this._raw = 0;
});

MassUnit.definePrototype({});

module.exports = MassUnit;
