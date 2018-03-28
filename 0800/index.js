const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');


let home = new Router();
home.get('/', async(ctx) => {
   ctx.body = `
	<ul>
	 <li><a href="/usr">usr operation</a></li>
         		
        </ul>	
	
	`
});

let usr = new Router();
usr.get('/', async(ctx) => {ctx.body = `
	<ul>
	 <li><a href="/usr/addusr">AddUsr</a></li>
     <li><a href="/usr/updateusr">UpdateUsr</a></li>   		
     </ul>`
}).get('/addusr', async(ctx) => {ctx.body = 'addUser'})
  .get('/updateusr', async(ctx) => {ctx.body = 'updateUser'});

let router = new Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/usr', usr.routes(), usr.allowedMethods());


app.use(router.routes(), router.allowedMethods());

app.listen(4455);

