import path from 'path';
import * as rfs from 'rotating-file-stream';
import morgan from 'morgan';

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, '../logs'),
});

const loggerService = morgan('combined', {
  skip: (req, res) => res.statusCode < 400,
  stream: accessLogStream,
});

export default loggerService;
