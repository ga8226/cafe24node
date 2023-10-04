var express = require('express')
const mysql = require('mysql');
const dbinfo = require('../db/config')
const conn = mysql.createPool(dbinfo); // createPool config에서 connectionLimit: 10 설정 해 줬으면 pool  쓸 수 있는데 속도 더 빨라 지라고 하는거

var router = express.Router();

router.use(express.json()); // json데이터

router.get('/', (req, res)=>{
  var tablenm = req.body.tablenm; //
  //res.send(`select * from ${tablenm}`)

 conn.getConnection((error, connection ) => {
  if(error) throw console.log(" 이 에러가 보인다면 dB정보 틀린거임  : " + err);

      connection.query(`select * from ${tablenm}`, (err,result)=>{
          if(err) throw "여기 에러는 sql문 오류"+ err + result; 
          res.send(result); 
      })
      connection.release();
  })         
})



module.exports = router;