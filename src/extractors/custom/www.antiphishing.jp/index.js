export const WwwAntiphishingJpExtractor = {
  domain: 'www.antiphishing.jp',

  title: {
    selectors: ['#report h3', '#news h3'],
  },

  author: null,

  date_published: {
    selectors: ['h4.date'],
    format: 'YYYY年MM月DD日',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: null,

  content: {
    selectors: ['#report', '#news'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: [],
  },
};
