const morgan = require('morgan')
const models = require('../models')

const express = require('express')
const { sequelize } = require('../models')
const path = require('path')
const app = express()
app.set('views', __dirname + '/views')
app.set('port', process.env.PORT || 8080)
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  models.test_comment
    .findAll({ raw: true })
    .then((comments) => {
      console.log(comments)
      //var comment_array = []
      //var id_array = []
      //스크롤코멘트 배열선언
      var comment_ID_array = []
      var user_ID_array = []
      var comment_array = []
      var scroll_location_array = []
      var date_array = []
      var recommend_array = []
      var report_array = []
      var url_array = []
      
      for (var i = 0; i < comments.length; i++) {
        //comment_array.push(comments[i].comment)
        //id_array.push(comments[i]._id)
        //스크롤코멘트 배열값넣기
        comment_ID_array.push(comments[i].comment_ID)
        user_ID_array.push(comments[i].user_ID)
        comment_array.push(comments[i].comment)
        scroll_location_array.push(comments[i].scroll_location)
        date_array.push(comments[i].date)
        recommend_array.push(comments[i].recommend)
        report_array.push(comments[i].report)
        url_array.push(comments[i].url)

        console.log(id_array[i] + comment_array[i])
      }
      res.render('test', {
        comment_array: comment_array,
        id_array: id_array,
      })
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

app.get('/comment', (req, res) => {
  models.test_comment
    .findAll({ raw: true })
    .then((comments) => {
      console.log(comments)
      //var comment_array = []
      //var id_array = []
      //스크롤코멘트 배열선언
      var comment_ID_array = []
      var user_ID_array = []
      var comment_array = []
      var scroll_location_array = []
      var date_array = []
      var recommend_array = []
      var report_array = []
      var url_array = []


      for (var i = 0; i < comments.length; i++) {
        //comment_array.push(comments[i].comment)
        //id_array.push(comments[i]._id)
        //스크롤코멘트 배열값넣기
        comment_ID_array.push(comments[i].comment_ID)
        user_ID_array.push(comments[i].user_ID)
        comment_array.push(comments[i].comment)
        scroll_location_array.push(comments[i].scroll_location)
        date_array.push(comments[i].date)
        recommend_array.push(comments[i].recommend)
        report_array.push(comments[i].report)
        url_array.push(comments[i].url)

        console.log(id_array[i] + comment_array[i])
      }
      res.render('test', {
        comment_array: comment_array,
        id_array: id_array,
      })
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

app.post('/comment', (req, res) => {
  const body = req.body
  models.test_comment
    .create({
      comment: body.comment,
    })
    .then((result) => {
      console.log('user created!')
      res.redirect('/comment')
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 실행중...')
})
