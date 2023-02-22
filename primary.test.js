import { jest } from '@jest/globals';

import welcome from './primary';

jest.mock('./secondary.js', function () {
	return {
		__esModule: true,
		sayHello: jest.fn(subject => `__${subject}__`),
	};
});

describe('welcome', () => {
	test('default', () => {
		expect(welcome()).toBe('____');
	});

	test('defined', () => {
		expect(welcome('Earth')).toBe('__Earth__');
	});
});
