import fetch from 'isomorphic-unfetch';

const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://api.binance.vision';

export const getGlossaries = () => {
  return fetch(`${server}/api/glossaries`);
};
