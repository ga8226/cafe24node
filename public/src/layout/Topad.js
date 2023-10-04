 import React, {useEffect, useState} from 'react'; 
 import axios from 'axios';

function Topad() {
    const [topAD, settopAD ] = useState(true);
    const rwdstyle = "d-none d-md-inline";
    const [ tad, tadUpdate ] = useState([]);    
    
    const dataSetting = async () => {                      
      axios.get('/data', 
                {
                   params : { tablenm : "saladu_topad"}
                } // http://kimgarim.cafe24app.com/data?tablenm=saladu_gnb
             
           )
      .then(
             (result) => {      //성공했다면 데이터를 받았고 그 데이터를 result 받음 내가 지어 쓸 수 있다
                          try{  
                              console.log(result)
                              //렌더링을 위해서 상태변수메서드를 통해서 받아낸다
                              tadUpdate([...result.data]);
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
    <>{ topAD &&  
    <div className="text-center py-2  px-lg-5  d-flex jusitfy-content-between" id="event">
                    {
                        tad.map((v, x)=>{ 
                       return(
                        <a href={v.adlink} className="text-white flex-grow-1">
                                    <span className={ x !== 1 && rwdstyle } key={x}>
                                
                                    {v.adtitle}
                                </span>
                       </a>
                       )
                    })
                    }
                    <button onClick={ () =>{ 
                        settopAD (false)
                    }}><i className="bi bi-x-lg d-block" ></i></button>
                  
   </div>
   }
   </>
  )
}

export default Topad