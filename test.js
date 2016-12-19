(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Distance = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"generate-js":2}],2:[function(require,module,exports){
/**
 * @name generate.js
 * @author Michaelangelo Jong
 */

(function GeneratorScope() {
    /**
     * Assert Error function.
     * @param  {Boolean} condition Whether or not to throw error.
     * @param  {String} message    Error message.
     */
    function assertError(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }

    /**
     * Assert TypeError function.
     * @param  {Boolean} condition Whether or not to throw error.
     * @param  {String} message    Error message.
     */
    function assertTypeError(test, type) {
        if (typeof test !== type) {
            throw new TypeError('Expected \'' + type +
                '\' but instead found \'' +
                typeof test + '\'');
        }
    }

    /**
     * Returns the name of function 'func'.
     * @param  {Function} func Any function.
     * @return {String}        Name of 'func'.
     */
    function getFunctionName(func) {
        if (func.name !== void(0)) {
            return func.name;
        }
        // Else use IE Shim
        var funcNameMatch = func.toString()
            .match(/function\s*([^\s]*)\s*\(/);
        func.name = (funcNameMatch && funcNameMatch[1]) || '';
        return func.name;
    }

    /**
     * Returns true if 'obj' is an object containing only get and set functions, false otherwise.
     * @param  {Any} obj Value to be tested.
     * @return {Boolean} true or false.
     */
    function isGetSet(obj) {
        var keys, length;
        if (obj && typeof obj === 'object') {
            keys = Object.getOwnPropertyNames(obj)
                .sort();
            length = keys.length;

            if ((length === 1 && (keys[0] === 'get' && typeof obj.get ===
                    'function' ||
                    keys[0] === 'set' && typeof obj.set === 'function'
                )) ||
                (length === 2 && (keys[0] === 'get' && typeof obj.get ===
                    'function' &&
                    keys[1] === 'set' && typeof obj.set === 'function'
                ))) {
                return true;
            }
        }
        return false;
    }

    /**
     * Defines properties on 'obj'.
     * @param  {Object} obj        An object that 'properties' will be attached to.
     * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties on 'properties'.
     * @param  {Object} properties An object who's properties will be attached to 'obj'.
     * @return {Generator}         'obj'.
     */
    function defineObjectProperties(obj, descriptor, properties) {
        var setProperties = {},
            i,
            keys,
            length,

            p = properties || descriptor,
            d = properties && descriptor;

        properties = (p && typeof p === 'object') ? p : {};
        descriptor = (d && typeof d === 'object') ? d : {};

        keys = Object.getOwnPropertyNames(properties);
        length = keys.length;

        for (i = 0; i < length; i++) {
            if (isGetSet(properties[keys[i]])) {
                setProperties[keys[i]] = {
                    configurable: !!descriptor.configurable,
                    enumerable: !!descriptor.enumerable,
                    get: properties[keys[i]].get,
                    set: properties[keys[i]].set
                };
            } else {
                setProperties[keys[i]] = {
                    configurable: !!descriptor.configurable,
                    enumerable: !!descriptor.enumerable,
                    writable: !!descriptor.writable,
                    value: properties[keys[i]]
                };
            }
        }
        Object.defineProperties(obj, setProperties);
        return obj;
    }



    var Creation = {
        /**
         * Defines properties on this object.
         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
         * @param  {Object} properties An object who's properties will be attached to this object.
         * @return {Object}            This object.
         */
        defineProperties: function defineProperties(descriptor,
            properties) {
            defineObjectProperties(this, descriptor,
                properties);
            return this;
        },

        /**
         * returns the prototype of `this` Creation.
         * @return {Object} Prototype of `this` Creation.
         */
        getProto: function getProto() {
            return Object.getPrototypeOf(this);
        },

        /**
         * returns the prototype of `this` super Creation.
         * @return {Object} Prototype of `this` super Creation.
         */
        getSuper: function getSuper() {
            return Object.getPrototypeOf(this.constructor.prototype);
        }
    };

    var Generation = {
        /**
         * Returns true if 'generator' was generated by this Generator.
         * @param  {Generator} generator A Generator.
         * @return {Boolean}             true or false.
         */
        isGeneration: function isGeneration(generator) {
            assertTypeError(generator, 'function');

            var _ = this;

            return _.prototype.isPrototypeOf(generator.prototype);
        },

        /**
         * Returns true if 'object' was created by this Generator.
         * @param  {Object} object An Object.
         * @return {Boolean}       true or false.
         */
        isCreation: function isCreation(object) {
            var _ = this;
            return object instanceof _;
        },
        /**
         * Generates a new generator that inherits from `this` generator.
         * @param {Generator} ParentGenerator Generator to inherit from.
         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
         */
        generate: function generate(construct) {
            assertTypeError(construct, 'function');

            var _ = this;

            defineObjectProperties(
                construct, {
                    configurable: false,
                    enumerable: false,
                    writable: false
                }, {
                    prototype: Object.create(_.prototype)
                }
            );

            defineObjectProperties(
                construct, {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                Generation
            );

            defineObjectProperties(
                construct.prototype, {
                    configurable: false,
                    enumerable: false,
                    writable: false
                }, {
                    constructor: construct,
                    generator: construct,
                }
            );

            return construct;
        },

        /**
         * Defines shared properties for all objects created by this generator.
         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
         * @return {Generator}         This generator.
         */
        definePrototype: function definePrototype(descriptor,
            properties) {
            defineObjectProperties(this.prototype,
                descriptor,
                properties);
            return this;
        }
    };

    function Generator() {}

    defineObjectProperties(
        Generator, {
            configurable: false,
            enumerable: false,
            writable: false
        }, {
            prototype: Generator.prototype
        }
    );

    defineObjectProperties(
        Generator.prototype, {
            configurable: false,
            enumerable: false,
            writable: false
        },
        Creation
    );

    defineObjectProperties(
        Generator, {
            configurable: false,
            enumerable: false,
            writable: false
        },
        Generation
    );

    defineObjectProperties(
        Generator, {
            configurable: false,
            enumerable: false,
            writable: false
        }, {
            /**
             * Returns true if 'generator' was generated by this Generator.
             * @param  {Generator} generator A Generator.
             * @return {Boolean}             true or false.
             */
            isGenerator: function isGenerator(generator) {
                return this.isGeneration(generator);
            },

            /**
             * Generates a new generator that inherits from `this` generator.
             * @param {Generator} extendFrom      Constructor to inherit from.
             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
             */
            toGenerator: function toGenerator(extendFrom, create) {
                console.warn(
                    'Generator.toGenerator is depreciated please use Generator.generateFrom'
                );
                return this.generateFrom(extendFrom, create);
            },

            /**
             * Generates a new generator that inherits from `this` generator.
             * @param {Constructor} extendFrom    Constructor to inherit from.
             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
             */
            generateFrom: function generateFrom(extendFrom, create) {
                assertTypeError(extendFrom, 'function');
                assertTypeError(create, 'function');

                defineObjectProperties(
                    create, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        prototype: Object.create(extendFrom.prototype),
                    }
                );

                defineObjectProperties(
                    create, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    },
                    Generation
                );

                defineObjectProperties(
                    create.prototype, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        constructor: create,
                        generator: create,
                    }
                );

                defineObjectProperties(
                    create.prototype, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    },
                    Creation
                );

                return create;
            }
        }
    );

    Object.freeze(Generator);
    Object.freeze(Generator.prototype);

    // Exports
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(function () {
            return Generator;
        });
    } else if (typeof module === 'object' && typeof exports === 'object') {
        // Node/CommonJS
        module.exports = Generator;
    } else {
        // Browser global
        window.Generator = Generator;
    }

}());

},{}]},{},[1])(1)
});