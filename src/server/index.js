import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import middleware from './middleware';

const app = express();

if(process.env.NODE_ENV === 'development') {
  const config = require('../../webpack.config.dev');
  const compiler = webpack(config);
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));
  app.use(hotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../client')));
} else if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../dist')));
}

app.get('/api', function(req, res) {
  res.send('hello from rest api');
});

app.get('*', middleware);

const PORT = normalizePort(process.env.PORT || 8080);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  }
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
