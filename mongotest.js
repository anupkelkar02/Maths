var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

var post = mongoose.model('Post', PostSchema);

var fluffy = new post({ title: 'Raise A Mathematesian' });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});

