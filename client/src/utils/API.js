import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b39cc6176bb347e7840e095a2a33bf7f"

export default {
    search: function(query) {
        return axios.get(BASEURL + APIKEY + query);
    },
    saveArticle: function(article){
        return axios.post('/saveArticle', article)
    },
    getSavedArticles: function(){
        return axios.get('getSavedArticles');
    },
    deleteSavedArticle: function(id){
        return axios.delete('/deleteSavedArticle', {date: {articleID: id}})
    }
};