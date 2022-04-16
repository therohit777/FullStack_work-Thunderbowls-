import React, { useState,useEffect } from 'react';
import database from './Firebase';
import { collection,getDocs } from 'firebase/firestore';
import '../Css/workhistory.css';
import { BsFillXSquareFill } from "react-icons/bs";
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';



export const Workhistory = () => {

  const collectionRef = collection(database,'users');
  const [databasedata, setdatabasedata] = useState({ });
  const [loader, setloader] = useState(false)


 
  

  function getDatasets(){
    getDocs(collectionRef)
    .then((response)=>{
      setdatabasedata(response.docs.map((item)=>{
        return {...item.data(),id: item.id}
      }))
      setloader(true)
      console.log(databasedata.map((item)=>{
          return item
      })
      )

    })
  }
    
   useEffect(() => {
    getDatasets()
    console.log(databasedata)
   },[])



   const deletedata=(id)=>{
    const docdel = doc(database,"users",id);
    deleteDoc(docdel)
    .then(()=>{
      alert("Data Deleted");
      window.location.reload(false);
    })
    .catch((err)=>{
      alert(err.message);
    })
   }


  return (
    <div className='workhistory'>
      <div className="worktittle">Work History</div>
      {loader===true && (databasedata.map((item)=>{
                return (
                  
                    <div className='workcontainer'>
                    <div className="delete"><BsFillXSquareFill className='delicon' onClick={()=>deletedata(item.id)}/></div>
                    <div className="Databasetitle">Tittle: {item.tittle}</div>                 
                    <div className="Databasesummi">Summary: {item.summary}</div>
                    </div>
                )
            }))
      }  
    </div>
  )
}