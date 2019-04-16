export const Www3NhkOrJpExtractor = {
  domain: 'www3.nhk.or.jp',

  title: {
    selectors: ['p.title'],
  },

  author: null,

  date_published: {
    selectors: ['time'],
    format: 'MM月DD日 HH時mm分',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['#main'],

    headersCleaner: false,

    transforms: {},

    clean: ['p.title', 'footer.module--footer.back-link'],
  },
};
