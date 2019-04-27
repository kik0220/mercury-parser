// import URL from 'url';

export const NewsMynaviJpExtractor = {
  domain: 'news.mynavi.jp',

  title: {
    selectors: ['div.article-header__tit'],
  },

  author: {
    selectors: ['a.article-author__name'],
  },

  date_published: {
    selectors: ['p.article-header__update'],
    format: 'YYYY/MM/DD HH:mm:ss',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['main.main'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {
      img: ($node, $) => {
        const dataOriginal = $node.attr('data-original');
        if (dataOriginal !== undefined) {
          const href = $('link[rel="canonical"]').attr('href');
          $node.attr('src', href + dataOriginal);
        }
      },
    },

    clean: ['div.article-header', 'div.ad-text', 'ul.sns-list'],
  },
};
