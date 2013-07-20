/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../config/config')[env]
  , Schema = mongoose.Schema;

/**
 * Getters
 */

var getTags = function (tags) {
  return tags.join(',');
};

/**
 * Setters
 */

var setTags = function (tags) {
  return "";
};

/**
 * Post Schema
 */

var PostSchema = new Schema({
  title: {type: String, default: '', trim: true},
  description: {type: String, default: '', trim: true},
  stars: [String],
  release_name: {type: String, default: '', trim: true},
  studio: {type: String, default: '', trim: true},
  tags: {type: [], get: getTags, set: setTags},
  keywords: [String],
  genres: [String],
  category: [String],
  rating: {type: Number, default: 0},
  poster: {type: String, default: '', trim: true},
  size: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  airedAt: {type: Date, default: Date.now},
  isDownloaded: {type: Boolean, default: false}
});

/**
 * Statics
 */

PostSchema.statics = {

  /**
   * Find post by id
   *
   * @param {ObjectId} id
   * @param {Function} cb
   * @api private
   */

  load: function (id, cb) {
    this.findOne({ _id: id })
      .exec(cb)
  },

  /**
   * List articles
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  list: function (options, cb) {
    var criteria = options.criteria || {};

    this.find(criteria)
      .sort({'createdAt': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb)
  }

};

mongoose.model('Post', PostSchema);