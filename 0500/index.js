import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import path from 'path';


promisify(readFile)(path.join(__dirname, '../package.json'))
.then(data => {
  console.log(data.toString());
})
