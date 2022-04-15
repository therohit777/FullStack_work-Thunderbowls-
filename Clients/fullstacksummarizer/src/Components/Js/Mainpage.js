import React, { useRef,useState,useEffect } from 'react';
import "../Css/mainpage.css";



const Mainpage = () => {
  const summarisation_txt = useRef("");
  const [frontdata, setfrontdata] = useState("")
  const [Backend, setBackend] = useState({})

  useEffect(() => {
    fetch(`http://localhost:6001/summarize?article=${frontdata}`)
    .then(
      response => response.json()
    )
    .then(data =>{
      setBackend(data);
      console.log(data);
    })
  }, [frontdata])
 
  
  const Summarisation_processing = (sum_text) =>{
    setfrontdata(sum_text);
  }



  return (
  <div className="Main_Home">
    <div className="Textsumm_Box">
      <textarea type="text" className="Textsum_container" ref={ summarisation_txt }/>
      <button className='textsumbtn'onClick={()=>Summarisation_processing(summarisation_txt.current.value)}>Summarise</button>
      <div className="mainHometext">
        <div className="textoutputhead">Summary:</div>
        <div className="textoutput">{Backend.Summary}</div>
        <div className="textoutput textoutput1">Number of words before Summarisation: {Backend.BeforeSummarisation}</div>
        <div className="textoutput textoutput1">Number of words after Summarisation: {Backend.AfterSummarisation}</div>
      </div>
    </div>    
  </div>
  )
}

export default Mainpage