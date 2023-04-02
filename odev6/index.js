const Koa = require('koa');
const app = new Koa();

/* request and response */ 
app.use(ctx => {
  if(ctx.path === '/'){
    ctx.body = "<h1>Welcome to home page </h1>";
  }
  else if (ctx.path === '/about'){
    ctx.body = "<h1>About </h1>";
  }
  else if (ctx.path === '/contact'){
    ctx.body = '<h1>Contact </h1>'
  }
});

/* We connected the port into 3002 */ 
app.listen(3002,()=> {
    console.log("porta baglanıldı");
})