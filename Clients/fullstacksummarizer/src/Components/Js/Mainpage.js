import React, { useRef } from 'react';
import "../Css/mainpage.css";



const Mainpage = () => {
  
  const summarisation_txt = useRef("");
  
  const Summarisation_processing = (sum_text) =>{
  }

  return (
  <div className="Main_Home">
    <div className="Textsumm_Box">
      <textarea type="text" className="Textsum_container" ref={ summarisation_txt }/>
      <button className='textsumbtn'onClick={()=>Summarisation_processing(summarisation_txt.current.value)}>Summarise</button>
    </div>    
  </div>
  )
}

export default Mainpage