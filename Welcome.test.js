import { jest } from '@jest/globals';

import Welcome from './Welcome.js';

jest.mock('./secondary.js', function () {
	return {
		__esModule: true,
		sayHello: jest.fn(subject => `_${subject}_`),
	};
});

describe('welcome', () => {
	test('default', () => {
		const _welcome = new Welcome();
		expect(_welcome.value).toBe('____');
	});

	test('defined', () => {
		const _welcome = new Welcome('Earth');
		expect(_welcome.value).toBe('__Earth__');
	});
});
