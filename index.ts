import fs from 'fs';
import https from 'https';
import unzipper from 'unzipper';
import config from './jitsidoc.json';

const download = (url, dest) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      resolve();
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => undefined);
    console.error(err);
    reject(err);
  });
});

const downloadDir  = './tmp/';
const docsDir  = './docs/';

if (!fs.existsSync(downloadDir)){
  fs.mkdirSync(downloadDir);
}

if (!fs.existsSync(docsDir)){
  fs.mkdirSync(docsDir);
}

// Download latest archive from GitHub to temp folder
config.repositories.forEach(async (repo) => {
  const dest = `${downloadDir}${repo.split('/')[1]}.zip`;
  const url = `https://codeload.github.com/${repo}/zip/master`;

  await download(url, dest);
  fs.createReadStream(dest, { emitClose: true })
    .pipe(unzipper.Extract({ path: downloadDir }))
    .on('close', () => {
      console.log("booooom");
      fs.rename(
        `${downloadDir}${repo.split('/')[1]}-master/doc`,
        `${docsDir}${repo.split('/')[1]}`,
        () => undefined,
      );
    });
});