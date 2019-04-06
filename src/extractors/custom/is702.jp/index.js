export const Is702JpExtractor = {
  domain: 'is702.jp',

  title: {
    selectors: ['h1'],
  },

  author: null,

  date_published: {
    selectors: ['div.date_ren'],
    format: 'YYYY/MM/DD',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['#contents_wrap'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {},

    clean: ['div.like_area.clearfix', 'div.manga_area3'],
  },
};
