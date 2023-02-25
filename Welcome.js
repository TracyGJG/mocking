import { sayHello } from './secondary.js';

export default class Welcome {
	_name = '';

	constructor(name) {
		this._name = name;
	}

	get value() {
		return `_${sayHello(this._name)}_`;
	}
}
