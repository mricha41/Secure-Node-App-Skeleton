import path from 'path';
//import path, { dirname } from 'path';
//import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import express from 'express';
var indexRouter = express.Router();

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const entrypoint = "src/client/components/index/index";

let viteInject = "";

//console.log(process.env)

if (process.env.NODE_ENV === "development") {
  viteInject = `
    <script type="module" src="https://${process.env.HOST}:${process.env.PORT}/@vite/client"></script>
    <script type="module" src="https://${process.env.HOST}:${process.env.PORT}/${entrypoint}.js"></script>
  `
} else {

    const pathToManifest = path.resolve('./src/server/dist/.vite/manifest.json');
    
    fs.readFile(
      //new URL(pathToManifest),
      pathToManifest,
      'utf-8'
    ).then((file) => {

        const manifest = JSON.parse(
            file
        );

        const index = manifest[`${entrypoint}.ts`];
        //console.log(index)
        
        viteInject = `
            ${index.css.map((href: string) => `<link rel="stylesheet" href="${href}" />`)}
            <script type="module" src="${index.file}"></script>
        `;

    });

}

// @ts-ignore
indexRouter.get('/', function(req, res, next) {
  
  res.render('index.ejs', { viteInject: viteInject });

});

export { indexRouter };
