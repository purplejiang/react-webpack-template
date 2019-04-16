import proxyFetch from './proxyFetch';

export const getCount = (params, settings) => proxyFetch.get('/count', params, settings);
