# UnitsJS

[![GitHub release](https://img.shields.io/github/release/Mike96angelo/UnitsJS.svg?maxAge=21600)](https://github.com/Mike96Angelo/UnitsJS/releases)
[![npm version](https://img.shields.io/npm/v/unitsjs.svg?maxAge=21600)](https://www.npmjs.com/package/unitsjs)
[![npm downloads](https://img.shields.io/npm/dm/unitsjs.svg?maxAge=604800)](https://npm-stat.com/charts.html?package=unitsjs&from=2016-12-19)
[![npm downloads](https://img.shields.io/npm/dt/unitsjs.svg?maxAge=604800)](https://npm-stat.com/charts.html?package=unitsjs&from=2016-12-19)

UnitsJS is a simple library for converting units of measurement.

### Install
```shell
$ npm install unitsjs
```

example:
```javascript
var unitsJS = require('unitsjs');

var distance = new unitsJS.DistanceUnit();

distance.meters = 5;

console.log(distance.feet); // 16.404199475065617
```
