//using koa-route
//advanced npm install koa-route@next

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

app.use(route.get('/', main));
app.use(route.get('/others', others));
app.listen(3000);