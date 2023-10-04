var express = require('express');
var path = require('path');
const app = express();
const PORT = process.env.PORT || 8009;


const reactdb = require('./api/api') // 리액트 연동 해 줄곳 리액트에서 제이존으로 디비 받아서 


app.use(express.static( path.join(__dirname, 'public/build'))) //리액트가 가져다가 쓸 수 있도록 정적주소 (고정주소 설정시켜주는것)

app.get('/',(req, res)=>{
    res.sendFile( path.join(__dirname, 'public/build/index.html')) //api에 설정한 파일 불러오는거 static 주소가 있어야 이 주소가 생성가능
 })


app.use('/data',reactdb); 


//그 외 모든 라우터 처리 제일 아래에 위치
app.use((req, res) =>{
   res.status(404).sendFile(path.join(__dirname , "public/nopage.html"));
})

app.listen(PORT,()=>{
    console.log(PORT+"번으로 노드서버 구동")
})