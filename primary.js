import { sayHello } from './secondary.js';

export default function welcome(name) {
	return `_${sayHello(name)}_`;
}
