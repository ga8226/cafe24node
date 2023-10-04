var express = require('express');
var router = express.Router(); //라우터라고 부르겠다 설정

router.use(express.urlencoded({extended :  true })) // 하나하나 설정하지 않고 주소로 받아들이겠다

var contact = require('./contact') 


router.get('/',(req, res, next) =>{
  const tablenm = req.query.tablenm; //입구정보 여기서 query 이미 내장되어있는 함수고 쿼리안에 있는 tablenm을 변수 tablenm 설정하겠다
  req.body.tablenm = tablenm; // 다음 라우터에게 보낼때의 정보, 출구정보 body 꼭 들어가 있어야 하고 바디에 tablenm을 받겠다

  

  router.use('/', contact )
  next('route') // 다음페이지로 넘기겠다 + 앞에 router.use('/', contact ) contact 이 진짜 sql 받아들여서 넘길 페이지
    
})


module.exports = router;

//이 페이지 자체가 다음페이지로 넘겨줄 주소창 첫 페이지라고 생각
//테이블이 10개이면 10개 다 라우터를 생성해야 하는데 너무 번거로우니까 변수로 앞 페이지를 설정하고 노드쪽에서 테이블 네임 치면 넘어 갈 수 있도록 설정해주는곳
//진짜 