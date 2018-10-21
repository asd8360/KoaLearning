//second step 
//routers from Koa
//use ctx.request.path to get the path from request

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	if(ctx.request.path !== '/'){
		//if the path is not home
		ctx.response.type = 'html'; 
		//response an html for routing
		ctx.response.body = '<span>Path for </span>'+ctx.request.path+'<span> received. Go to index: </span><a href="/">Index Page</a>';
		//a Hyperlink to return to index
	}else{
		ctx.response.body = 'Hello World';
	}
};

app.use(main);
app.listen(3000);