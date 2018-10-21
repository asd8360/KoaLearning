//throwing errors while running uncorrectly
//2 methods to set

const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();


const main = ctx => {
	ctx.response.body = 'Hello World';
};

//500 Internal Server Error
const throwMethod = ctx => {
	ctx.throw(500);
};

//404 error
const error = ctx => {
	ctx.response.status = 404;
	ctx.response.body = 'Page Not Found';
};

app.use(route.get('/500', throwMethod));
app.use(route.get('/', main));
app.use(route.get('/error', error));
app.listen(3000);