const mysql = require('mysql');  // mysql 모듈 로드
const user = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'jae576792@',
    database: 'test_db'
};
const connection = mysql.createConnection(user); // DB 커넥션 생성
connection.connect();   // DB 접속
//insert query 
let testQuery = "INSERT INTO test_comment(comment) VALUES('안녕?')"
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
//select 
testQuery = "SELECT comment FROM test_comment WHERE _id=1";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료
