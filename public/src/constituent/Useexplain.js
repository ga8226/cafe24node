
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';


function Useexplain() {
 
  const [ useexplain, useexplainUpdate ] = useState([]);
  const [ title, titleUpdate ] = useState([]);      

  const dataSetting = async () => {                      
    axios.get('/data', 
    {
       params : { tablenm : "saladu_useexplain"}
    } 
 
)
    .then(
           (result) => {                            
                        try{  
                            console.log(result)
                            useexplainUpdate([...result.data]);                                                                             
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

return (
    <div className="pt-3" id="use1">
        <div className='pt-5 container mx-auto'>
           <h2 className='mb-5 center'>💚 이용방법 💚</h2>
           <div className="jusitfy-content-between align-items-center pt-lg-4 pt-3">
               <ul className="d-lg-flex mb-4">
                {
                     useexplain.map((v,i)=>{
                          return(
                            <li className='col-lg-4 col-12 px-4  py-3 py-lg-0 center' id="usede">
                                <div className='center'><img src={v.useicon} alt=""  className='img-fluid'/></div>
                                  <div className='py-4'>
                                  <strong>{v.usenum}</strong>
                                  <p className='pt-3'>{v.usedeco}</p>
                                  </div>
                           </li>
                        )
                    })   
                 }
               </ul>
               {
                  title.map((v,i)=>{
                    return(
                      <p className='center pt-4 f19'><span>🌿</span> {v.useFT}<span>🌿</span></p>
                      )
                  })
                  
                }
               
            </div>                    
       </div>
      </div>
)

}

export default Useexplain;