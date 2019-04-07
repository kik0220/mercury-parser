export const ThinkitCoJpExtractor = {
  domain: 'thinkit.co.jp',

  title: {
    selectors: ['h1.page-header'],
  },

  author: {
    selectors: ['span.author span.person'],
  },

  date_published: {
    selectors: ['span.created-date'],
    format: 'YYYY年MM月DD日(dddd)',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['article'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: [
      'div.taxonomy-main',
      'div.category-label',
      'div.field-name-view-serial-count',
      'h1.page-header',
      '#node-article-full-group-aside-attribute',
      'div.easy_social_box',
    ],
  },
};
