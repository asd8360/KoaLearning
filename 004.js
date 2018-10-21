//advanced router, there is an automatically router redirect
//redirect return value 302

const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();

const others = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = '<a href="/">Index Page</a>'
};
const main = ctx => {
	ctx.response.body = 'Hello World';
};
const redirect = ctx => {
	ctx.response.redirect('/');//redirect to home page
	ctx.response.body = '<a gref="/">Index Page</a>';
};

app.use(route.get('/', main));
app.use(route.get('/others', others));
app.use(route.get('/redirect', redirect));
app.listen(3000);