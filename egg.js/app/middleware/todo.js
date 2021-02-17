
module.exports = (options, app) => {

    return async function (ctx, next) {
        // ctx.set("Access-Control-Allow-Origin",ctx.headers.origin);
        // ctx.set("Access-Control-Allow-Credentials", true);
        // ctx.set("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
        // ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, *");
        // if (ctx.method === "OPTIONS") {
        //     ctx.status = 204; return;
        // }
        await next()
    }
}