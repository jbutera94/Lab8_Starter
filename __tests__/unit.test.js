// unit.test.js

const { test } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// test isPhoneNumber()
test('isPhoneNumber with correct phone number (001)123-457-8902', () => {
  expect(functions.isPhoneNumber('(001)123-457-8902')).toBe(true);
});

test('isPhoneNumber with correct phone number 436-234-1956', () => {
  expect(functions.isPhoneNumber('436-234-1956')).toBe(true);
});

test('isPhoneNumber with incorrect phone number 3948573', () => {
  expect(functions.isPhoneNumber('3948573')).toBe(false);
});

test('isPhoneNumber with incorrect phone number 4362-34-1956', () => {
  expect(functions.isPhoneNumber('4362-34-1956')).toBe(false);
});

// test isEmail()
test('isEmail with correct email test@mydomain.com', () => {
  expect(functions.isEmail('test@mydomain.com')).toBe(true);
});

test('isEmail with correct email test@emailprovider.org', () => {
  expect(functions.isEmail('test@emailprovider.org')).toBe(true);
});

test('isEmail with incorrect email @abcd.com', () => {
  expect(functions.isEmail('@abcd.com')).toBe(false);
});

test('isEmail with incorrect email testwrong@domain.123', () => {
  expect(functions.isEmail('testwrong@domain.123')).toBe(false);
});

// test isStrongPassword()
test('isStrongPassword with correct password f3DWd', () => {
    expect(functions.isStrongPassword('f3DWd')).toBe(true);
  });

test('isStrongPassword with correct password fcSD822', () => {
    expect(functions.isStrongPassword('fcSD822')).toBe(true);
  });

test('isStrongPassword with incorrect password 001', () => {
    expect(functions.isStrongPassword('001')).toBe(false);
});

test('isStrongPassword with incorrect password 123467fgbsnjsnxsqqd', () => {
    expect(functions.isStrongPassword('123467fgbsnjsnxsqqd')).toBe(false);
});

// test isDate()
test('isDate with correct date 2/3/1999', () => {
  expect(functions.isDate('2/3/1999')).toBe(true);
});

test('isDate with correct date 04/13/3021', () => {
  expect(functions.isDate('04/13/3021')).toBe(true);
});

test('isDate with incorrect date 3/9/21', () => {
  expect(functions.isDate('3/9/21')).toBe(false);
});

test('isDate with incorrect date 02241389', () => {
  expect(functions.isDate('02241389')).toBe(false);
});

// test isHexColor()
test('isHexColor with correct hex color #95A5A6', () => {
  expect(functions.isHexColor('#95A5A6')).toBe(true);
});

test('isHexColor with correct hex color #1FDA', () => {
  expect(functions.isHexColor('#1FDAE6')).toBe(true);
});

test('isHexColor with incorrect hex color 1FDAE', () => {
  expect(functions.isHexColor('1FDAE')).toBe(false);
});

test('isHexColor with incorrect hex color (31, 218, 230)', () => {
  expect(functions.isHexColor('(31, 218, 230)')).toBe(false);
});