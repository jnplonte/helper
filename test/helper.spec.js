"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_service_1 = require("../lib/helper");
const config_1 = require("../example/config");
describe('helper service', () => {
    let services;
    beforeEach((done) => {
        services = new helper_service_1.Helper(config_1.baseConfig);
        done();
    });
    it('should get the expected json data', (done) => {
        chai_1.expect(services.toJson('{"test": "test-data"}')).to.eql({ test: 'test-data' });
        done();
    });
    it('should get the expected string data', (done) => {
        chai_1.expect(services.toString({ test: 'test-data' })).to.equal('{"test":"test-data"}');
        done();
    });
    it('should return a clean data object, array or string', (done) => {
        chai_1.expect(services.cleanData('<script>')).to.equal('script');
        chai_1.expect(services.cleanData({ test: '<script>' })).to.eql({ test: 'script' });
        chai_1.expect(services.cleanData(['<script>'])).to.eql(['script']);
        done();
    });
    it('should get the a camelized vertision of string', (done) => {
        chai_1.expect(services.camelize('camel case me')).to.equal('camelCaseMe');
        done();
    });
    it('should check if empty object and array', (done) => {
        chai_1.expect(services.isEmptyObject({})).to.be.true;
        chai_1.expect(services.isEmptyObject({ test: 'script' })).to.be.false;
        done();
    });
    it('should check if string exists', (done) => {
        chai_1.expect(services.stringExist('test', 'e')).to.be.true;
        chai_1.expect(services.stringExist('test', 'x')).to.be.false;
        done();
    });
    it('should check if data is empty or not empty', (done) => {
        chai_1.expect(services.isEmpty('')).to.be.true;
        chai_1.expect(services.isNotEmpty('x')).to.be.true;
        done();
    });
    it('should check if valid email address', (done) => {
        chai_1.expect(services.isEmail('test@supertest.com')).to.be.true;
        chai_1.expect(services.isEmail('xxxxxxx')).to.be.false;
        done();
    });
    it('should check if data on array exists', (done) => {
        chai_1.expect(services.validateData({ test: 'test-data' }, ['test'])).to.be.true;
        done();
    });
    it('should create a secret key', (done) => {
        const key = services.createSecretKey('xxxXXXxxx', 1, 1);
        chai_1.expect(typeof (key) === 'string' && key.length >= 20).to.be.true;
        done();
    });
    it('should read a secret key', (done) => {
        const key = services.readSecretKey('U2FsdGVkX19LWteek4UNlwgZJJWDqiPA9WGP8AeB83E6aqqXzj3bipvVabn8MuCS');
        chai_1.expect(typeof (key) === 'object' && Object.keys(key).length >= 3).to.be.true;
        done();
    });
    it('should check if time is expired', (done) => {
        chai_1.expect(services.checkExpiredTime(1525339779882)).to.be.false;
        done();
    });
    it('should add zero on one digit numbers', (done) => {
        chai_1.expect(services.pad(1)).to.equal('01');
        done();
    });
    it('should filter the data you want to show', (done) => {
        chai_1.expect(services.filterData({ test: 'test-data', test1: 'test-data' }, ['test'])).to.eql({ test: 'test-data' });
        done();
    });
    it('should check if the data is integer', (done) => {
        chai_1.expect(services.isInteger(1)).to.be.true;
        chai_1.expect(services.isInteger('xsaxas')).to.be.false;
        done();
    });
    it('should parse correct date', (done) => {
        const date = new Date();
        chai_1.expect(services.parseDate('0000-00-00 00:00:00')).to.equal('-');
        chai_1.expect(services.parseDate(date)).to.contain(':');
        chai_1.expect(services.parseDateOnly('0000-00-00 00:00:00')).to.equal('-');
        chai_1.expect(services.parseDateOnly(date)).to.contain('-');
        done();
    });
    it('should sort data', (done) => {
        chai_1.expect(services.sort([{
                'z': 3,
                'y': 2,
                'x': 1
            }], 'x', 1)).to.eql([{ z: 3, y: 2, x: 1 }]);
        chai_1.expect(services.sortObject({
            'z': 3,
            'y': 2,
            'x': 1
        })).to.eql({ x: 1, y: 2, z: 3 });
        chai_1.expect(services.sort([{
                'z': 3,
                'y': 2,
                'x': 1
            }], ['y', 'x', 'z'])).to.eql([{ y: 2, x: 1, z: 3 }]);
        done();
    });
    it('should get the date week', (done) => {
        chai_1.expect(services.getWeekDate('2018-12-01')).to.equal('2018-49');
        chai_1.expect(services.getWeekDate('2018-11-10')).to.equal('2018-46');
        done();
    });
});