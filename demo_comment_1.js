
const mysql = require('mysql');  // mysql 모듈 로드
const { type } = require('os');
const moment = require('moment')
const user = {  // mysql 접속 설정
    host: '124.57.90.54',
    port: '3306',
    user: 'tester',
    password: 'Qwer1234@',
    database: 'test_db',
    dataString : 'date'
};
const connection = mysql.createConnection(user); // DB 커넥션 생성
connection.connect();  // DB 접속

//select 
testQuery = "SELECT * FROM test_comment";
let q;
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }

    //console.log(results);
    //console.log(typeof(results))
    for(let i=0;i<results.length;i++)
      console.log(results[i].comment) // result(database에서 불러온 값)의 comment 값출력

});

 //insert query 

let testQuery = "INSERT INTO test_comment(comment) VALUES('안녕?')"
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
// 현재 시각 및 날짜 저장(미완성)
//var today = new Date();
//var now= moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
/*
console.log(typeof(now))
let testQuery = `ALTER TABLE test_comment MODIFY date NULL;`
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});


testQuery = `INSERT INTO test_comment(date) VALUES (now())`

connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
*/
connection.end(); // DB 접속 종료
