import instance from './news.js';
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
const newsCategory = "bbc-news";
const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
const sourceUrl = "https://newsapi.org/v2/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1";
instance.apiFetcher(url);
instance.apiSourceFetcher(sourceUrl);