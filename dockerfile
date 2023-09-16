FROM hayd/deno-lambda:1.26.0

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts 

CMD ["main.handler"]
