import express from 'express';
var anApiRouter = express.Router();

// @ts-ignore
anApiRouter.get('/', function(req, res, next) {
  
  res.json({ msg: "hello, front end - this is an api endpoint for you to call!" });

});

export { anApiRouter };
