//blocking and non-blocking
//non-blocking operations like reading database: 'async function'
//non-blocking operations must be followed by key word 'await'

const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
	ctx.response.type = 'html';
	ctx.response.body = await fs.readFile('./template.html', 'utf8');
};

app.use(main);
app.listen(3000);
