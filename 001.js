//first step a basic HTTP server using Koa
//show "Hello World" at 127.0.0.1:3000
//using function main to response the words

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);