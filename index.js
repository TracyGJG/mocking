import welcome from './primary.js';
import Welcome from './Welcome.js';

console.log(welcome());
console.log(welcome('Earth'));

{
	const _welcome = new Welcome();
	console.log(_welcome.value);
}

{
	const _welcome = new Welcome('Earth');
	console.log(_welcome.value);
}
