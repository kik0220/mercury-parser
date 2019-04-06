export const CodezineJpExtractor = {
  domain: 'codezine.jp',

  title: {
    selectors: ['h1.h101'],
  },

  author: {
    selectors: ['div.authorName'],
  },

  date_published: {
    selectors: ['div.authorDetail.cf div.day'],
    format: 'YYYY/MM/DD HH:mm',
    timezone: 'Asia/Tokyo',
  },

  dek: {
    selectors: ['p[itemprop="description"]'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['div.detailBlock'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: [
      'div.authorDetail.cf',
      'table.tbl_toc',
      'div.pager',
      'div.detailUit.cf',
    ],
  },
};
