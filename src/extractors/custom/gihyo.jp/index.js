export const GihyoJpExtractor = {
  domain: 'gihyo.jp',

  title: {
    selectors: ['h2.subTitle01'],
  },

  author: {
    selectors: ['p.author'],
  },

  date_published: {
    selectors: ['p.date'],
    format: 'YYYY年M月D日',
    timezone: 'Asia/Tokyo',
  },

  dek: {
    selectors: ['h1.mainTitle01'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['#primary'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: ['h2.subTitle01', 'div.sectionInfo01', '#comment'],
  },
};
