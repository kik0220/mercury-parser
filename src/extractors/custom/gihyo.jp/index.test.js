import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('GihyoJpExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url = 'https://gihyo.jp/dev/serial/01/information-share-mechanism/0011';
      const html = fs.readFileSync('./fixtures/gihyo.jp/1556192153192.html');
      result = Mercury.parse(url, {
        html,
        fallback: false,
      });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname);
    });

    it('returns the title', async () => {
      // To pass this test, fill out the title selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        title.replace(/\s/, ' '),
        `第11回 Alfrescoを業務自動化プラットフォームとして使ってみよう（前編）`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'リックソフト株式会社 大塚和彦');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, '2019-04-17T15:00:00.000Z');
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      const { dek } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        dek,
        '業務を改善する情報共有の仕掛け～DevOpsの実現，RPAの導入に向けて～'
      );
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        `https://image.gihyo.co.jp/assets/images/ICON/2018/1679_information-share-mechanism.png`
      );
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/gihyo.jp/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent(
        $('*')
          .first()
          .text(),
        4
      );

      // Update these values with the expected values from
      // the article.
      assert.equal(
        first13,
        'この記事を読むのに必要な時間：およそ 2 分 いま流行りのデジタルトランスフォーメーションを実現するには，文書やファイルに属性情報（メタデータ）を付与することが重要といわれています。しかし，属性情報（メタデータ）を手作業で入力しては本末転倒です。それだと生産性のアップにはつながりません。'
      );
    });
  });
});
