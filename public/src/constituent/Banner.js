import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';


export default function Banner(props) {  

  const [ swiperbanner, swiperbannerUpdate ] = useState([]);    

  const dataSetting = async () => {                      
    axios.get('/data', 
              {
                 params : { tablenm : "saladu_swiperbanner"}
              } 
           
         )
    .then(
           (result) => {     
                        try{  
                            console.log(result)
                           
                            swiperbannerUpdate([...result.data]);
                                                                                                 
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
   <div className="px-5">
            <Swiper
            id={props.id}
             spaceBetween={0}
             slidesPerView={1}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
    
            pagination={{
            clickable: true,
             }}

             modules={[Autoplay, Pagination]}
             loop={true}
           
          >
        {
       swiperbanner.map(function(v, i){
     return(
        <SwiperSlide className={`bg${v.bcls}`} key={i}></SwiperSlide>
     )
  })


        }
      
        
      </Swiper>
      </div>
        </>
    )
}