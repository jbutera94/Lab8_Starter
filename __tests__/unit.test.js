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

test('isEmail with correct email test.blah@emailprovider.org', () => {
  expect(functions.isEmail('test.blah@emailprovider.org')).toBe(true);
});

test('isEmail with incorrect email @abcd.com', () => {
  expect(functions.isEmail('@abcd.com')).toBe(false);
});

test('isEmail with incorrect email testwrong@domain.123', () => {
  expect(functions.isEmail('testwrong@domain.123')).toBe(false);
});

// test isStrongPassword()
test('isStrongPassword with correct password Qader2', () => {
    expect(functions.isEmail('Qader2')).toBe(true);
  });
test('isStrongPassword with correct password 4563@dhf', () => {
    expect(functions.isEmail('')).toBe(true);
  });

test('isStrongPassword with correct password ', () => {
    expect(functions.isEmail('')).toBe(false);
});

test('isStrongPassword with correct password ', () => {
    expect(functions.isEmail('')).toBe(false);
});

// test isDate()
test('isDate with correct date ', () => {
  expect(functions.isDate('')).toBe(true);
});

test('isDate with correct date ', () => {
  expect(functions.isDate('')).toBe(true);
});

test('isDate with incorrect date ', () => {
  expect(functions.isDate('')).toBe(true);
});

test('isDate with incorrect date ', () => {
  expect(functions.isDate('')).toBe(true);
});