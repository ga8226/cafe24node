import Fmenu from './Fmenu'
import React,{ useState , useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos';

export default function  Menu(props) { 
   
    const [dbTabsMenu, setdbTabsMenu2 ] = useState(0);
    //tab_id 0번부터 출력함
    const [ menulist, menulistUpdate ] = useState([]); 
    const [ tablist, tablistUpdate ] = useState([]);    

    const dataSetting = async () => {                      
      axios.get('/data', 
                {
                   params : { tablenm : "saladu_menulist"}
                } 
           )
      .then(
             (result) => {    
                          try{  
                              console.log(result)
                             
                              menulistUpdate([...result.data]);
                                                                                               
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
                 params : { tablenm : "saladu_tabs"}
              } 
         )
    .then(
           (result) => {    
                        try{  
                            console.log(result)
                           
                            tablistUpdate([...result.data]);
                                                                                             
                        }
                        catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                    }
    )
    .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
    ) 
}   




  useEffect( () => { 
    Aos.init();
    dataSetting(); 
    dataSetting2();
  } , []  ) 
    return (
        <>
        <section id={props.useid} className="pt-3 pt-lg-5 mx-0 mx-lg-auto container-xl">
            <Fmenu></Fmenu>
              <div>
                <div className='pb-4'>
                  <div className='pb-4'>
                      <div id='metab'>
                          <ul className='d-flex tablist'>
                          {
                            tablist.map((v,i)=>{
                              return(
                                <li className='px-3'>
                                  <button onClick={()=>{ setdbTabsMenu2(v.tab_id) }} className={`icon${i}`}>{v.tabtext}</button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    <span id='deco'> 
                          {
                            tablist.map((v,i)=>{
                              return(
                                <strong key={i} className={  dbTabsMenu !== v.tab_id  &&  'd-none' }  >{v.tabcontent}</strong> 
                              )
                            })
                          }                                                               
                                                   
                      </span>
                  </div>     
                  <ul className="row">
                    {

                      menulist.map((v,i)=>{
                        return(
                          <li className={ v.tab_id !== dbTabsMenu ? 'd-none' : "col-md-4 col-4"} >
                      <div id='mepick' >
                        <a href={v.Mhref} className='d-block position-relative'>
                          <img src={v.Mpic} className="img-fluid pt-md-2 pt-2" alt={v.Malt} />
                          <span className="view"><storng className="px-md-2 px-0">{v.Mstorng}명</storng><em>{v.Mem}</em></span>
                        </a>
                        <div id="explain"><p className='pt-md-2 pt-1'>{v.Mdeco}<span className='px-md-2 px-1'>{v.Mnm}</span></p><span  className='nonsale'>{v.Mnone}원</span><strong data-aos="zoom-in-down" data-aos-once="false" className='ps-3'>{v.Msale}원</strong></div> 
                      </div> 
                      </li>
                        )
                      })
                    }
                  </ul >                                    
                </div>
              </div>        
         
        </section>
        </>
    )
}
