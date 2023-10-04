import { Nav, Navbar} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import Topad from './Topad'

export default function Hd(props) {
  

     const [ gnb, gnbUpdate ] = useState([]);    
    
     const dataSetting = async () => {                      
       axios.get('/data', 
                 {
                    params : { tablenm : "saladu_gnb"}
                 } // http://kimgarim.cafe24app.com/data?tablenm=saladu_gnb
              
            )
       .then(
              (result) => {      //성공했다면 데이터를 받았고 그 데이터를 result 받음 내가 지어 쓸 수 있다
                           try{  
                               console.log(result)
                               //렌더링을 위해서 상태변수메서드를 통해서 받아낸다
                               gnbUpdate([...result.data]);
                               //데이터는 [] 데이터타입임 그걸 빈 []에 옮겨넣고 렌더링하는                                                                              
                           }
                           catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                       }
       )
       .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
       ) 
   }   


   useEffect( () => {  // 회면이 열리자마자 비동기통신 실행함수 실행하라
     dataSetting(); 
   } , []  ) 

    

    
    return (
        <>

<header className="fixed-top border-bottom">
        <Topad></Topad> 
        <Navbar className="d-flex justify-content-between align-items-center mx-lg-5 mx-3" expand="md">
       <Navbar.Brand as="h1" className="mb-0 me-md-0  me-4 ">
                        <a href="#top" className="d-block"><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" /></a>
       </Navbar.Brand>
               
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
       
          <Scrollspy id="navbar-nav" className="navbar-nav px-md-2" items={[ props.usedb.navi[0].href, props.usedb.navi[1].href, props.usedb.navi[2].href,props.usedb.navi[3].href]} currentClassName="active">
          {
                        gnb.map(( val, idx) => {
                                return(
                                    <li className={`${val.cls}`}  key={idx}>  
                                        <Nav.Link href={"#"+val.href}>{val.nm}</Nav.Link>          
                                    </li>
                                    
                                    );
                                })}
                                 <li className="ms-md-auto">
                                        <a href="https://saladu.co.kr/">
                                            <i className="bi bi-rocket-takeoff ms-auto p-2 d-block"></i>
                                        </a>
                                </li>
            
          </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
      

    </header>
      
      
            
        </>
    )
}


