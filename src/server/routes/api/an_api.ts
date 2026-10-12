import express from 'express';
var anApiRouter = express.Router();

anApiRouter.get('/', function(_req, res, _next) {
  
  res.json({ msg: "hello, front end - this is an api endpoint for you to call!" });

});

export { anApiRouter };
