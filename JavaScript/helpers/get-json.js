'use strict';

const http = require('http');

module.exports = url => new Promise((resolve, reject) => {
  http.get(url, res => {
    const code = res.statusCode;
    if (code !== 200) {
      reject(new Error(`HTTP status code ${code}`));
      return;
    }

    res.on('error', reject);

    const chunks = [];
    res.on('data', chunk => {
      chunks.push(chunk);
    });

    res.on('end', () => {
      const json = Buffer.concat(chunks).toString();
      try {
        const object = JSON.parse(json);
        resolve(object);
      } catch (error) {
        reject(error);
      }
    });
  });
});
