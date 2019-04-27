export const WwwTrendmicroComExtractor = {
  domain: 'www.trendmicro.com',

  title: {
    selectors: ['h1'],
  },

  author: {
    selectors: ['div.smallArticleInfoContainer'],
  },

  date_published: {
    selectors: ['#datePub'],
    format: 'YYYY年M月D日',
    timezone: 'Asia/Tokyo',
  },

  dek: null,

  lead_image_url: null,

  content: {
    selectors: ['div.articleContainer'],

    defaultCleaner: false,
    headersCleaner: false,

    transforms: {
      'div.tableCellDisplay': $node => {
        $node.find('br').remove();
      },
      'div.entityHeader': $node => {
        const entryHeader = $node.html();
        $node.replaceWith(
          entryHeader
            .replace(
              '</div><div class="barHoldermain"><div class="ratingImage noWidth">',
              ''
            )
            .replace('</div>', '')
        );
      },
      img: ($node, $) => {
        const title = $node.attr('title');
        if (title) {
          const $content = $(`<span>${title}</span>`);
          $node.replaceWith($content);
        } else {
          $node.remove();
        }
      },
    },

    clean: [],
  },
};
