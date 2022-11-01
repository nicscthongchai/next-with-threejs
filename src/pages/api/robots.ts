import type { NextApiRequest, NextApiResponse } from 'next';
import isJSON from 'utils/is-json';

const hostname = process.env.HOST_NAME || 'http://localhost:3000';
const enableRobots = Boolean(
  isJSON(process.env.ENABLE_ROBOTS)
    ? JSON.parse(process.env.ENABLE_ROBOTS!)
    : false
);
let robots: string;

const robotsApi = (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/plain');
  if (enableRobots) {
    if (!robots) {
      robots = [
        'User-agent: *',
        `Sitemap: ${hostname}/sitemap.xml`,
        `Host: ${hostname.replace(/^http(s*):\/\//, '')}`,
      ].join('\n');
    }
    res.status(200).send(robots);
  } else {
    res.status(200).send('User-agent: *\nDisallow: /');
  }
};

export default robotsApi;
