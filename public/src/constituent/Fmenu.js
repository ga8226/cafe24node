import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

export default function  Fmenu(props) { 
    const [ adlist, adlistUpdate ] = useState([]);
    const [ title, titleUpdate ] = useState([]);

    const dataSetting = async () => {                      
        axios.get('/data', 
        {
           params : { tablenm : "saladu_adlist"}
        } 
     
    )
        .then(
               (result) => {                            
                            try{  
                                console.log(result)
                                adlistUpdate([...result.data]);                                                                             
                            }
                            catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                        }
        )
        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
        ) 
    }   

    const dataSetting2 = async () => {                      
        axios.get('/data', 
                  {
                     params : { tablenm : "saladu_title"}
                  } 
             )
        .then(
               (result) => {    
                            try{  
                                console.log(result)
                               
                                titleUpdate([...result.data]);
                                                                                                 
                            }
                            catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                        }
        )
        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
        ) 
    }   

    useEffect( () => {  
      dataSetting();
      dataSetting2(); 
    } , []  )  
    return(
        <div className="pt-3 container ">
             {
                  title.map((v,i)=>{ 
                    return(
                        <h2 id="muti" className='mb-5 ps-5'><img src={v.Ytitle} alt={v.Yalt} className="mb-4 img-fluid" /></h2> 
                      )
                  })
                  
                }
        <div className="d-lg-flex jusitfy-content-between align-items-center mb-5">
            <div className="col-lg-7  youtubebox ps-md-5 ps-5">
                <div className="position-relative overflow-hidden">
                {
                  title.map((v,i)=>{
                    return(
                        <iframe width="100%" className="position-absolute" src={`https://www.youtube.com/embed/${v.vlink}`} ></iframe> 
                      )
                  })
                  
                }
                </div>
          </div>                    
          <div className="text-center  col ps-lg-5 pe-lg-0 text-lg-start  py-5" id='metitle'>
              {
                  title.map((v,i)=>{
                    return(
                        <h3 className='mb-4'>{v.maintitle} 🔥<span className="d-block">{v.subtitle}</span></h3> 
                      )
                  })
                  
                }
              <ul id="menulist" className="pb-3">
                {
                  adlist.map((v,i)=>{
                    return(
                      <li className="py-3"><span className="ift pe-3">💪</span>{v.listext}</li> 
                      )
                  })
                  
                }  
              </ul>
              <button><a href="https://saladu.co.kr/">지금 바로 구매하기</a></button>
          </div>
      </div>
      </div>
    )
}