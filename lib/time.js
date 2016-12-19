var Generator = require('generate-js');

var TimeUnit = Generator.generate(function TimeUnit() {
    this._raw = 0;
});

TimeUnit.definePrototype({});

module.exports = TimeUnit;
