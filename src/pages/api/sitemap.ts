import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import type { NextApiRequest, NextApiResponse } from 'next';

const hostname = process.env.HOST_NAME || 'http://localhost:3000';
let sitemap: Buffer;

const sitemapApi = (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');
  if (sitemap) {
    res.send(sitemap);
    return;
  }
  try {
    const stream = new SitemapStream({ hostname });
    const pipeline = stream.pipe(createGzip());
    stream.write({ url: '/', changefreq: 'monthly', priority: 1 });
    streamToPromise(pipeline).then(sm => (sitemap = sm));
    stream.end();
    pipeline.pipe(res).on('error', e => {
      throw e;
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export default sitemapApi;
