const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();


app.use(session(app));

app.use(ctx => {

	if (ctx.path === '/favicon.ico') return;
	let n = ctx.session.views;
	ctx.session.views = ++n;
	ctx.body = n + 'views';
});

app.listen(8888);