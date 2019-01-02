const Router = require('koa-router')
const doSearch = require('./search.js');
const doFind = require('./find.js')
class MyRouter{
    static create(){
        let innerRouter = new Router();
        innerRouter.get("/search", doSearch);
        innerRouter.get("/find", doFind);
        return innerRouter;
    }

}

module.exports = MyRouter.create();


