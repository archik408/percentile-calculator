'use strict';

/**
 * Percentile calculator. Computes quartiles using (n-1 algorithm) + 1
 * 
 * @author Artur Basak
 * @email artur.basak@instinctools.ru
 */
class PercentileCalculator {

    /**
     * @constructor
     * @param {Array<Number>} values - Numeric values
     */
    constructor(values = []) {
        if (!Array.isArray(values)) {
            throw new Error('Incorrect input values');
        }
        this.length = values.length - 1;
        this.values = values.sort((a, b) => a - b);
    }

    /**
     * Calculate interpolation and return value from list
     *
     * @param {Number} position - Value position
     * @returns {Number} Value via interpolated list
     * @private
     */
    _interpolation(position) {
        if (position < 0) return 0;
        const integer = Math.floor(position);
        const fraction = position - integer;
        if (fraction > 0) {
            const a = this.values[integer];
            const b = this.values[integer + 1];
            return a + fraction * (b - a);
        }
        return this.values[position];
    }

    /**
     * Calculate Q1 value
     *
     * @returns {Number} 25th percentile value
     */
    calculateQ1() {
        return this._interpolation(0.25 * this.length);
    }

    /**
     * Calculate Q2 value
     *
     * @returns {Number} 50th percentile value
     */
    calculateQ2() {
        return this._interpolation(0.5 * this.length);
    }

    /**
     * Calculate Q3 value
     *
     * @returns {Number} 75th percentile value
     */
    calculateQ3() {
        return this._interpolation(0.75 * this.length);
    }

    /**
     * Calculate percentile value using liner
     * interpolation between closest ranks method
     *
     * @param {Number} percent - Value from 0 to 100
     *
     * @returns {Number} Percentile value
     */
    calculatePercentile(percent = null) {
        if (percent === null || percent > 100 || percent < 0) {
            throw new Error('Incorrect percent value');
        }
        const n = percent / (100 / this.values.length) + 0.5;
        if (n < 1) {
            return this.values[0];
        }
        if (n > this.values.length) {
            return this.values[this.length];
        }
        return this._interpolation(n - 1); // array first element has zero index
    }
}

module.exports = PercentileCalculator;
