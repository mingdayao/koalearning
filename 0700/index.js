const Koa = require('koa');

const app = new Koa();
const fs = require('fs');
const path = require('path')

async function render(view) {
  return new Promise(function(resolve, reject){
    fs.readFile(path.join(__dirname, view), 'binary', (err, data) => {
       if(err) reject(err);
       resolve(data);	    
    })
  })
}



async function route(url) {
  let view = '/404.html';
  

  switch(url) {
    case '/':
       view = '/index.html';
       break;
    case '/usr/adduser':
       view = '/user/adduser.html';
       break;
    default:
       view = '/404.html';
       break;
  }
  
  let html = await render(view);
  return html;	
}


app.use(async(ctx, next) => {
  let url = ctx.request.url;
  console.log('url ', url);	
  
  ctx.body = await route(url);
});

app.listen(8888);
