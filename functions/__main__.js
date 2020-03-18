const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const r = require('request');
const request = require('request-promise-native');
const cheerio = require('cheerio');
const parseAll = require('html-metadata').parseAll;

/**
* A simple and powerful scraper
* @param {string} url Url to fetch
* @param {string} userAgent Request's User Agent
* @param {array} queries Queries to apply (using cheerio)
* @returns {object}
**/

module.exports = async function (url, userAgent = 'stdlib-example/scraper v1.0', queries, context) {

    let opts = {
      url: url,
      headers: {
        'User-Agent': userAgent
      },
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    let $;
    let metadata;

    try {

      $ = await request(opts);
      metadata = await parseAll($);

    } catch (err) {

      return Promise.reject(err);

    }

    let result = {
      url: url,
      meta: metadata
    }

    /**
    * Queries Syntax
    * --------------
    * queries is an array of arrays that are formatted in the following way:
    * ['CSS_SELECTOR', 'RESOLVER_FUNC', [...RESOLVER_FUNC_ARGS]]
    * CSS_SELECTOR: this is the css-selector query you'd like to make
    * RESOLVER_FUNC: this is the function that we'll use on the selection in cheerio to resolve the data (e.g. text, or attr)
    * RESOLVER_FUNC_ARGS: these are the arguments that are passed to the resolver.
    *
    * Example:
    * [
    *  ['.repo-list-item h3 a', 'text'], // This will run $('.repo-list-item h3 a').text() on the content
    *  ['.repo-list-item h3 a', 'attr', ['ref']] // This will run $('.repo-list-item h3 a').attr('href') on the content
    * ]
    *
    */

    result.queries = queries.map((queryObj, index) => {

      if (!queryObj) {

        return new Error(`Query at index ${index} doesn't exist`);

      }

      if (!Array.isArray(queryObj)) {

        return new Error(`Query at index ${index} isn't an array`);

      }

      if (queryObj.length > 3 || queryObj.length < 2) {

        return new Error(`Query at index ${index} has too few or too many arguments`);

      }

      if (queryObj.length === 3 && !Array.isArray(queryObj[2])) {

        return new Error(`Query at index ${index} has resolver arguments but it's not an array.`);

      }

      // Actual query
      let query = queryObj[0];

      // How to resolve from dom (text, attr, etc.)
      let resolver = queryObj[1];

      // Arguments to pass to resolver
      let resolverArgs = queryObj[2] || [];

      let matches = $(query);

      return (matches.length ? matches.toArray() : [matches]).map((el) => {

        let $el = $(el);
        return $el[resolver].apply($el, resolverArgs);

      });

    });

    return result;

};