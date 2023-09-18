FROM hayd/deno-lambda:1.26.0

ADD . .
RUN deno run --allow-read --allow-write bundler.ts
RUN deno cache main.ts 

CMD ["main.handler"]
