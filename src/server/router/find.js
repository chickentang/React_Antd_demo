class Find{
    static async doFind(ctx,next){
        ctx.body = "this.is find fun";
    }
}

module.exports = Find.doFind;