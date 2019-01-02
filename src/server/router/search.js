class Search{
    static async doSearch(ctx,next){
        ctx.body = "this.is search fun";
    }
}

module.exports = Search.doSearch;