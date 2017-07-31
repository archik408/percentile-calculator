'use strict';

const { expect } = require('chai');
const PercentileCalculator = require('../index');

describe('Percentile Calculator', () => {
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 0)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [2, 3, 4, 7, 8, 9, 10, 11];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(3.75);
        expect(calculator.calculateQ2()).to.be.equal(7.5);
        expect(calculator.calculateQ3()).to.be.equal(9.25);
    });
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 1)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [2, 5, 2, 8, 11, 14, 8, 18, 19, 25, 27, 26];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(7.25);
        expect(calculator.calculateQ2()).to.be.equal(12.5);
        expect(calculator.calculateQ3()).to.be.equal(20.5);
    });
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 2)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(25.5);
        expect(calculator.calculateQ2()).to.be.equal(40);
        expect(calculator.calculateQ3()).to.be.equal(42.5);
    });
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 3)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [7, 15, 36, 39, 40, 41];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(20.25);
        expect(calculator.calculateQ2()).to.be.equal(37.5);
        expect(calculator.calculateQ3()).to.be.equal(39.75);
    });
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 4)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [7];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(7);
        expect(calculator.calculateQ2()).to.be.equal(7);
        expect(calculator.calculateQ3()).to.be.equal(7);
    });
    it('should correctly calculate quartiles using algorithm (n-1) + 1 (DataSet 5)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(0);
        expect(calculator.calculateQ2()).to.be.equal(0);
        expect(calculator.calculateQ3()).to.be.equal(0);
    });
    it('should throw error if has incorrect input (empty array)', () => {
        try {
            const values = [];
            new PercentileCalculator(values);
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect input values');
        }
    });
    it('should throw error if has incorrect input (null)', () => {
        try {
            const values = null;
            new PercentileCalculator(values);
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect input values');
        }
    });
    it('should throw error if has incorrect input (one element)', () => {
        try {
            const values = [56];
            new PercentileCalculator(values);
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect input values');
        }
    });
    it('should correctly calculate quartiles with not numeric values', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = ['2', 5, NaN, 8, null, 14, undefined, 18, 19, 25, 27, 26];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculateQ1()).to.be.equal(7.25);
        expect(calculator.calculateQ2()).to.be.equal(16);
        expect(calculator.calculateQ3()).to.be.equal(25.25);
    });
    it('should correctly calculate percentile', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculatePercentile(10)).to.be.equal(15);
        expect(calculator.calculatePercentile(30)).to.be.equal(20);
        expect(calculator.calculatePercentile(50)).to.be.equal(35);
        expect(calculator.calculatePercentile(70)).to.be.equal(40);
        expect(calculator.calculatePercentile(90)).to.be.equal(50);

        expect(calculator.calculatePercentile(5)).to.be.equal(15);
        expect(calculator.calculatePercentile(40)).to.be.equal(27.5);
        expect(calculator.calculatePercentile(95)).to.be.equal(50);


        expect(calculator.calculatePercentile(91)).to.be.equal(50);
        expect(calculator.calculatePercentile(0)).to.be.equal(15);
        expect(calculator.calculatePercentile(100)).to.be.equal(50);
        expect(calculator.calculatePercentile(45)).to.be.equal(31.25);
    });
    it('should throw error if percentile incorrect (1000%)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);
        try {
            calculator.calculatePercentile(1000);
            throw new Error();
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect percent value');
        }
    });
    it('should throw error if percentile incorrect (-7%)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);
        try {
            calculator.calculatePercentile(-7);
            throw new Error();
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect percent value');
        }
    });
    it('should throw error if percentile incorrect (null)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);
        try {
            calculator.calculatePercentile(null);
            throw new Error();
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect percent value');
        }
    });
    it('should throw error if percentile incorrect (undefined)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);
        try {
            calculator.calculatePercentile();
            throw new Error();
        } catch (e) {
            expect(e.message).to.be.equal('Incorrect percent value');
        }
    });
    it('should correctly calculate percentile (one element)', () => {
        expect(PercentileCalculator).to.not.equal(null);

        const values = [15];
        const calculator = new PercentileCalculator(values);

        expect(calculator.calculatePercentile(10)).to.be.equal(15);
        expect(calculator.calculatePercentile(30)).to.be.equal(15);
        expect(calculator.calculatePercentile(50)).to.be.equal(15);
        expect(calculator.calculatePercentile(70)).to.be.equal(15);
        expect(calculator.calculatePercentile(90)).to.be.equal(15);

        expect(calculator.calculatePercentile(5)).to.be.equal(15);
        expect(calculator.calculatePercentile(40)).to.be.equal(15);
        expect(calculator.calculatePercentile(95)).to.be.equal(15);


        expect(calculator.calculatePercentile(91)).to.be.equal(15);
        expect(calculator.calculatePercentile(0)).to.be.equal(15);
        expect(calculator.calculatePercentile(100)).to.be.equal(15);
        expect(calculator.calculatePercentile(45)).to.be.equal(15);
    });
});
