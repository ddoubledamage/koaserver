const Koa = require('koa');
const slow = require('koa-slow');
const cors = require('koa-cors');
const app = new Koa();
const PORT = 3000;

app.use(cors());

//app.use(slow({ delay: 3000 }));


app.use(async (ctx) => {
    ctx.body = "Hello, Koa with delay!";
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
