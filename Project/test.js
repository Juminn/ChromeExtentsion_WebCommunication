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
      var comment_array = []
      var id_array = []
      for (var i = 0; i < comments.length; i++) {
        comment_array.push(comments[i].comment)
        id_array.push(comments[i]._id)
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
      var comment_array = []
      var id_array = []
      for (var i = 0; i < comments.length; i++) {
        comment_array.push(comments[i].comment)
        id_array.push(comments[i]._id)
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
