import db from '../data/db.json';
import Useexplain from './Useexplain'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

export default function Use(props) {  

    const [ reviewbox, reviewboxUpdate ] = useState([]);    

    const dataSetting = async () => {                      
      axios.get('/data', 
      {
         params : { tablenm : "saladu_reviewbox"}
      } 
   
  )
      .then(
             (result) => {                            
                          try{  
                              console.log(result)
                              reviewboxUpdate([...result.data]);                                                                             
                          }
                          catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                      }
      )
      .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
      ) 
  }   
  useEffect( () => {  
    dataSetting(); 
  } , []  ) 
  
    return (
        <>
            <section  id={props.useid} className="pt-3 pt-lg-5">
              <Useexplain></Useexplain>
                <div id='use2' className='md-bg'>
                    <div className='container'>
                       <h2 className='mb-4 center'><img className='review mt-3 mb-5' src={process.env.PUBLIC_URL+db.Use.reicon} alt="별이미지"/>✨ 샐러드유 고객들의 별별리뷰 ✨</h2>
                            <div className='d-flex justify-content-between pt-lg-4 pt-md-3'>                                                    
                                  <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                            
                                    
                                    navigation
                                    loop={true}
                                    >
                                    {
                                       reviewbox.map(function(v, i){
                                        return(
                                        <SwiperSlide id='reviewswiper'>
                                            <div>
                                                <div className='d-flex align-items-center re1'>
                                                    <img src={process.env.PUBLIC_URL+v.reimg} alt="" />
                                                    <div>
                                                        <p>
                                                        {v._rename}
                                                        </p>
                                                        <span className='d-block'>
                                                        {v.resubde}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='re2'>
                                                    <h4>{v.retitle}</h4>
                                                    <p className='pt-md-3 pt-lg-2'>{v.realview}</p>
                                                </div>
                                            </div>
                                            
                                        </SwiperSlide>
                                        )
                                    })
                                    
                                    }
                                    </Swiper>
                            </div>
                     </div> 
                    
                </div>
             
            </section>
        </>
    )
}