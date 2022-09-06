import '../userHome/restroList.css'
import bookmarkImg from '../../../imgs/bookmark.png'
import locationImg from '../../../imgs/locationLogo.png'
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'


function Bookmarks(props) { 

  // to populate bookmark elemet
let [items, setItems] = useState([]);
let [noBookmarks, setNoBookmarks]=useState(false);
useEffect(() => { 
  fetch("http://localhost:9090/allbookmarks?"+`userId_no=${props.userDetailsMain.mo_no}`,
  {
    method:"POST",
  })
  .then(res => res.json())
  .then(
    (result) => {
      if(result.length===0){
        setNoBookmarks(true)
      }else{
        setItems(result)
      }
    },
     (error) => {
     console.log(error);
    }
  )
  }, [])

  
      // to delete and update list
     async function latestFetch(id){
      await   fetch("http://localhost:9090/deletebookmark?"+`userId=${props.userDetailsMain.mo_no}&messId=${id}`,
      {
          method:"POST"
      });

      fetch("http://localhost:9090/allbookmarks?userId_no="+props.userDetailsMain.mo_no,
      {
          method:"POST"
      }).then(res => res.json())
          .then(
            (result) => {
              setItems(result);
              if(result.length===0){
                setNoBookmarks(true)
              }
            },
             (error) => {
             console.log(error);
            }
          )
          
      }
   
  return(
    <>
   
    {noBookmarks?
    <h1  style={{"text-align": "center","margin-top":"200px" }}>No Bookmarks Yet !</h1>
    :      
    items.map(
      (list) =>{
        return(
        <div className='listCompo'>

        <Link onClick={() => props.setMessId(list.busino)} to={"/busipro/status/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <img src={list.mess_img} className="busiProImg" alt="" />
            </Link>

        <div className='titleAndDesc'>

        <Link key={list.id} onClick={() => {props.setMessId(list.busino)}} to={"/busipro"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div>
            <h2>{list.mess_title}</h2>
            <p>{list.mess_desc}</p>
            <div className='locationIconDiv'>
              <br />
              {/* <img src={locationImg} alt="" />
              <p className='dist'>Distance {list.dist}</p> */}
              </div> 
        </div>
        </Link>
        </div>
        <img className='bookmarkimg' onClick={()=>{latestFetch(list.busino)}} style={ { filter: 'contrast(1)' }} src={bookmarkImg} alt="" />
    </div>
    )}
    )}
    </>
  )
}

export default Bookmarks;