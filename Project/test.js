const morgan = require('morgan');
const models = require('../models')

const express = require('express');
const { sequelize } = require('../models');
const app = express();

app.set('port',process.env.PORT || 8080)

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res,next)=>{

  models.test_comment.findAll()
    .then((comments)=>{
      res.send(comments);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

app.get('/comment',(req,res)=>{
  res.sendFile(__dirname+'/test.html');
});

app.post('/comment',(req,res)=>{
  const body = req.body;
  models.test_comment.create({
    comment: body.comment,
  }).then(result => {
      console.log('user created!');
      res.redirect('/comment');
  }).catch(err => {
    console.log(err);
  })
})
app.listen(app.get('port'),()=>{
  console.log(app.get('port'),'번 포트에서 실행중...');
})
