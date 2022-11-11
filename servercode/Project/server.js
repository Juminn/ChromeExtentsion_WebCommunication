var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);
const models = require('../models/models2')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function(req, res) {
 
  res.sendFile(__dirname + '/window.html');
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
var m = 1; 
io.on('connection', function(socket) {
  m+=1
  var i = 1;
  var comm;
  var name;
  
  setInterval(()=>models.video_comment
  .findAll({ 
    raw: true,
    where:comment_ID=i
  })
    .then((comments) => {
      console.log(comments)
      comm=comments[0].comment
      name=comments[0].user_id
      console.log(comm)
      io.emit('comment_data',{comm,name})
      i+=1;
      console.log(i)
    }).catch((err)=>{
      console.log(err)
  }),3000)
  
  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', function(data) {
    console.log('Client logged-in:\n name:' + data.name + '\n userid: ' + data.userid);

    // socket에 클라이언트 정보를 저장한다
    socket.name = data.name;
    socket.userid = data.userid;

    // 접속된 모든 클라이언트에게 메시지를 전송한다

    io.emit('login', data.name );
  });

  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function(data) {
    console.log('Message from %s: %s %s', socket.name, data.msg, data.user_id);

    var msg = {
      from: {
        name: socket.name,
        userid: socket.userid
      },
      msg: data.msg,
      user_id: data.user_id
    };
    models.Video_Comment
      .max('comment_id', {raw:true})
      .then((id)=>{
        models.Video_Comment.findAll({
          raw: true,
          where: {comment_ID:id}
        })
        .then((info)=>{
        console.log(info)
        var url = info[0].url
        var comment_location = info[0].comment_location
        models.video_comment
        .create({
          comment: data.msg,
          user_id: data.user_id,
          url: url,
          comment_location: comment_location,
        })
        .then((result) => {
          console.log('user created!')
      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    }).catch((err)=>{
      console.log(err)
    })
  })
      

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    //socket.broadcast.emit('chat', msg);

    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
     io.emit('s2c chat', msg);

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });

  // force client disconnect from server
  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
});

server.listen(3000, function() {
  console.log('Socket IO server listening on port 3000');
});