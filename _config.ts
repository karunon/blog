import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  src: "src",
});

site.use(jsx());
site.use(tailwindcss({ options: tailwindOptions }));
site.use(postcss());
site.use(googleFonts({
  fonts:
    "https://fonts.google.com/share?selection.family=Geist:wght@100..900|Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
}));

export default site;
