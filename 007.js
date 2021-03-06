//deal with post request
//eg. post a name key value

const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// const main = async function (ctx) {
// 	const body = ctx.request.body;
// 	if(!body.name) ctx.throw(400, 'name required');
// 	ctx.body = { name: body.name };
// };

app.use(bodyParser());
app.use(koaBody());
// app.use(main);
app.listen(3000);

//for testing open another terminal for a post request

//curl -X POST --data "name=Jack" 127.0.0.1:3000
//RETURN: { "name": 'Jack'}

//curl -X POST --data "name" 127.0.0.1:3000
//RETURN: name required