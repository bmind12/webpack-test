import welcome from './welcome';

welcome('home');

if (NODE_ENV == 'development') {
	console.log(NODE_ENV);
}