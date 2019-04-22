module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
     const messageRoutes = require("../routes/messages");

     app.use(messageRoutes);
    app.use(staticRoutes);
  }
}
