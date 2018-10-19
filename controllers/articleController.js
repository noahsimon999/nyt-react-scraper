let db = require("../models");

module.exports = {
    save: function(req, res){
        db.Article.findOne({articleID: req.body.articleID})
        .then(function(response){
            if (response === null) {
                db.Article.create(req.body).then((response) => {console.log(response + " has been created")
            })
            .catch(err => res.json(err));
            }
        })
    },

    getSavedArticles: function(req, res) {
        db.Article.find({})
        .sort({date: -1})
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    deleteSavedArticle: function(req, res) {
        db.Article.remove({articleID: req.body.articleID}, (err) => {
            if (err) throw err;

            db.Article.find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        })
    }
};