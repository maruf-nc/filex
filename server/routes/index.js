var mongoose = require('mongoose')
  , _ = require('underscore')
  , Post = mongoose.model('Post');

exports.index = function (req, res) {
  Post.list({}, function (err, posts) {
    if (err) return res.send(500);
    return res.send(posts);
  });
};

exports.show = function (req, res) {
  return Post.findById(req.params.id, function (err, post) {
    if (err) return res.send(500);
    return res.send(post);
  });
};

exports.create = function (req, res) {
  var post = new Post(req.body);

  post.save(function (err) {
    if (err) return res.send(500);
    return res.send(post);
  });
};

exports.update = function (req, res) {
  console.log('Updating book ' + req.body.title);

  return Post.findById(req.params.id, function (err, post) {
    post = _.extend(post, req.body);

    post.save(function (err) {
      if (err) {
        console.log(err);

        return res.send(500);
      }
      return res.send(post);
    });
  });
};