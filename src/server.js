import App from './approuter';
import AppGrid from './appgrid';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import theme from './theme';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};

    const sheets = new ServerStyleSheets();

    const markup = renderToString(
      sheets.collect(
      <StaticRouter context={context} location={req.url}>
        <ThemeProvider theme={theme}>
        <AppGrid>
          <App />
          </AppGrid>
        </ThemeProvider>
      </StaticRouter>),
    );

    const css = sheets.toString();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to AntrixTek; Home of Innovation and Technology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
        </script>
        <script>
              WebFont.load({
                      google: {
                        families: [
                          'Roboto',
                          'Roboto Mono',
                          'Roboto Condensed',
                          'Roboto Slab',
                          'Yellowtail', 
                          'Baskervville', 
                          'Kaushan Script',
                          'Open Sans',
                          'Merriweather']
                        }
              });
        </script>


        <style id="jss-server-side">${css}</style>
        ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''
        }
       
    </head>
    <body>
        <div id="root">${markup}</div>

        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </body>
</html>`
      );
    }
  });

export default server;
