let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();



router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

router.get('/test', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = '返回的数据'
});

router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})

// 主页数据
let indexData = require('./datas/index.json')
router.get('/indexdata',(ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = indexData
})

// 分类数据
let cateGoryDatas = require('./datas/cateNavDatas.json')
router.get('/getcategorydatas', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = cateGoryDatas;
});

// catelist数据
let cateList = require('./datas/cateLists.json')
router.get('/indexcatelist', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = cateList;
});
app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('4000', () => {
  console.log('服务器地址: http://localhost:4000');
})
