export const WwwSecurityNextComExtractor = {
  domain: 'www.security-next.com',

  title: {
    selectors: ['h1'],
  },

  author: null,

  date_published: {
    selectors: ['p:has(a.hatena-bookmark-button)'],
    format: 'YYYY/MM/DD',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: null,

  content: {
    selectors: ['div.content'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: ['h5', 'a.hatena-bookmark-button', 'a.twitter-share-button'],
  },
};
