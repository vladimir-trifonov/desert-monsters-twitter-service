var config = require('./config');
var twit = require('twit');

var twitter = new twit({
    consumer_key: config.twitter_consumer_key,
    consumer_secret: config.twitter_secret_consumer_key,
    access_token: config.twitter_token,
    access_token_secret: config.twitter_secret_token,
    timeout_ms: 60*100,
  });

 module.exports = {

    getTwit: function(res, req){
      twitter.get('search/tweets', {q: "nodejs"}, (err, data, response) => {
      res.status(200).json(data);
    // console.log(data);
  })
}
};
