const index = await Deno.readTextFile("./index.html");
const css = (await Deno.readTextFile("./public/style.css"))
  .replace(/\n/g, "")
  .replace(/\s\s+/g, " ");

// Find the </head> tag and prepend the css
const cssIndex = index.indexOf("</head>");
const indexWithCss =
  index.slice(0, cssIndex) + `<style>${css}</style>` + index.slice(cssIndex);
//write the new index.html
await Deno.writeTextFile("./index.html", indexWithCss);
