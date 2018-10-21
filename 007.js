//deal with post request
//eg. post a name key value

const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx) {
	const body = ctx.request.body;
	if(!body.name) ctx.throw(400, 'name required');
	ctx.body = { name: body.name };
};

app.use(koaBody());
app.use(main);
app.listen(3000);

//for testing open another terminal for a post request

//curl -X POST --data "name=Jack" 127.0.0.1:3000
//RETURN: { "name": 'Jack'}

//curl -X POST --data "name" 127.0.0.1:3000
//RETURN: name required