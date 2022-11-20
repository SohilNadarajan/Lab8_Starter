// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// PHONE NUMBER TESTS

test('test valid phone number', () => {
    expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
});

test('test valid phone number', () => {
    expect(functions.isPhoneNumber("650-924-0679")).toBe(true);
});

test('test invalid phone number', () => {
    expect(functions.isPhoneNumber("0101010101")).toBe(false);
});

test('test invalid phone number', () => {
    expect(functions.isPhoneNumber("123456")).toBe(false);
});

// EMAIL TESTS

test('test valid email', () => {
    expect(functions.isEmail("example@email.com")).toBe(true);
});

test('test valid email', () => {
    expect(functions.isEmail("iprefer@gmail.com")).toBe(true);
});

test('test invalid email', () => {
    expect(functions.isEmail("thisisnotanemail")).toBe(false);
});

test('test invalid email', () => {
    expect(functions.isEmail("amianemail?")).toBe(false);
});

// PASSWORD TESTS

test('test strong password', () => {
    expect(functions.isStrongPassword("simplepassword")).toBe(true);
});

test('test strong password', () => {
    expect(functions.isStrongPassword("i_am_a_password")).toBe(true);
});

test('test weak password', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

test('test weak password', () => {
    expect(functions.isStrongPassword("amiapassword?")).toBe(false);
});

// DATE TESTS

test('test valid date', () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
});

test('test valid date', () => {
    expect(functions.isDate("1/1/2000")).toBe(true);
});

test('test invalid date', () => {
    expect(functions.isDate("06-26-2002")).toBe(false);
});

test('test invalid date', () => {
    expect(functions.isDate("04 16 2004")).toBe(false);
});

// HEX COLOR TESTS

test('test valid hex color', () => {
    expect(functions.isHexColor("#8B24BC")).toBe(true);
});

test('test valid hex color', () => {
    expect(functions.isHexColor("2F9")).toBe(true);
});

test('test invalid hex color', () => {
    expect(functions.isHexColor("#0123")).toBe(false);
});

test('test invalid hex color', () => {
    expect(functions.isHexColor("#AMIHEX")).toBe(false);
});