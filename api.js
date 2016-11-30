var twit = require('twit');

var twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 100,
});

module.exports = {
  getTwit: function (res, req) {
    twitter.get('search/tweets', {q: req.param.group}, (err, data, response) => {
      if(err) {
        return res.send({
          ok:false,
          message: err
        });
      }

      res.send({
        ok: true,
        data: response
      })
    });
  }
}


