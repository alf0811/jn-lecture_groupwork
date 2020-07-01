module.exports = function(app) {
  var paperList = require('../controllers/paperController');

  app.route('/papers')
    .get(paperList.all_papers)
    .post(paperList.create_paper);

  app.route('/papers/:paperId')
    .get(paperList.load_paper)
    .put(paperList.update_paper)
    .delete(paperList.delete_paper);
};

