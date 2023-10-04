import React,{ useState , useEffect } from 'react';
import axios from 'axios';
  export default function Q(props) {

    const [ Q, QUpdate ] = useState([]);
    const [ title, titleUpdate ] = useState([]);  
    
    const dataSetting = async () => {                      
        axios.get('/data', 
        {
           params : { tablenm : "saladu_Q"}
        } 
     
    )
        .then(
               (result) => {                            
                            try{  
                                console.log(result)
                                QUpdate([...result.data]);                                                                             
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
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };
       
    return (
        <>
            <section id={props.useid} className='py-5'>
                <div className="py-lg-5 py-4 container my-lg-5 my-3">
                {
                  title.map((v,i)=>{
                    return(
                        <h2 className="center">💫  {v.Qtitle}  💫</h2> 
                      )
                  })
                  
                }                   
                    <ul className='col-md-10 mx-auto' id='qna'>
                        {
                            Q.map((v,i)=>{
                                return(
                                    <li key={i}>
                                      <a href="#none" onClick={() => toggleAnswer(i)}>
                                        <div>{v.Q}</div>
                                      </a>
                                        <div className={`answer ${activeQuestion === i ? 'active' : ''}`}>
                                            <div>
                                                <p>{v.A}</p>
                                            </div>
                                        </div>
                                  
                                </li>
                                )
                            })
                        }
                    </ul>
                
                </div> 
            </section>
        </>
    )

                }
