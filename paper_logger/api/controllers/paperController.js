var mongoose = require("mongoose"),
  Paper = mongoose.model("Papers");

exports.all_papers = function(req, res) {
  Paper.find({}, function(err, paper) {
    if (err) res.send(err);
    res.json(paper);
  });
};

exports.create_paper = function(req, res) {
  var new_paper = new Paper(req.body);
  new_paper.save(function(err, task) {
    if (err) res.send(err);
    res.json(new_paper);
  });
};

exports.load_paper = function(req, res) {
  Paper.findById(req.params.paperId, function(err, paper) {
    if (err) res.send(err);
    res.json(paper);
  });
};

exports.update_paper = function(req, res) {
  Paper.findOneAndUpdate(
    { _id: req.params.paperId },
    req.body,
    { new: true },
    function(err, paper) {
      if (err) res.send(err);
      res.json(paper);
    }
  );
};

exports.delete_paper = function(req, res) {
  Paper.remove(
    {
      _id: req.params.paperId
    },
    function(err, paper) {
      if (err) res.send(err);
      res.json({ message: "paper successfully deleted" });
    }
  );
};
