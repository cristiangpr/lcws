module.exports = {
  index(req, res, next){
   res.render("static/index", {title: "Lost Coast Web Solutions"});
  }
}
