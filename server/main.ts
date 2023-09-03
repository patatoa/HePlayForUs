const requestHandler = async (req: Request): Promise<Response> => {
    // console.log(req);
    if(req.url.match('\.css$')){
        console.log("We doing static file for {0}", req.url);
        return staticFileHandler(req);
    }
    const content = await Deno.readTextFile("./index.html");
    return new Response(content, {status: 200, headers: {
        "content-type": "text/html; charset=utf-8"
    }});
}

const staticFileHandler = async (req: Request): Promise<Response> => {
    const BASE_PATH = "./public";

    const filePath = BASE_PATH + new URL(req.url).pathname;
    let fileSize: Number;
    try {
        fileSize = (await Deno.stat(filePath)).size;
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {
            console.log(req);
          return new Response(null, { status: 404 });
        }
        return new Response(null, { status: 500 });
    }
    const body = (await Deno.open(filePath)).readable;
    return new Response(body, {
        headers: {
          "content-length": fileSize.toString(),
          "content-type": "text/css; charset=utf-8"
        },
    });
}

Deno.serve(requestHandler);
