import URL from 'url';

export const WatchImpressCoJpExtractor = {
  domain: 'pc.watch.impress.co.jp',

  supportedDomains: [
    'akiba-pc.watch.impress.co.jp',
    'av.watch.impress.co.jp',
    'cloud.watch.impress.co.jp',
    'forest.watch.impress.co.jp',
    'internet.watch.impress.co.jp',
    'k-tai.watch.impress.co.jp',
    'kaden.watch.impress.co.jp',
  ],

  title: {
    selectors: ['div.title-header'],
  },

  author: {
    selectors: ['ul.author'],
  },

  date_published: {
    selectors: ['p.publish-date'],
    format: 'YYYY年MM月DD日 HH:mm',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['#main'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {
      'img[ajax]': $node => {
        const ajax = $node.attr('ajax');
        const src = $node.attr('src');
        const url = URL.resolve(src, ajax);
        $node.attr('src', url);
      },
    },

    clean: ['#breadcrumb', 'div.title-header', 'div.article-info'],
  },
};
