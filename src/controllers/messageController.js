const messageQueries = require("../db/queries.messages.js");

module.exports = {
  index(req, res, next){
    messageQueries.getAllMessages((err, messages) => {

    
         if(err){
           res.redirect(500, "static/index");
         } else {
           res.render("messages/index", {messages});
         }
       })
  }
}
