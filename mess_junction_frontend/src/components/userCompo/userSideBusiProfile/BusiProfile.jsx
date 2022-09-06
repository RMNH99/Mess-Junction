import './busiProfile.css'
import BusiProMenuList from './BusiProMenuList';
import BusiProPhotos from './BusiProPhotos';
import { useEffect,useState } from 'react';
import axios from 'axios';  //---------->to use api requests
import contactNoImg from '../../../imgs/contactNoImg.png'
import locationImg from '../../../imgs/locationLogo.png'
import { Link } from 'react-router-dom'
import BusiProReviews from './BusiProReviews'

function BusiProfile(props) {
     

let [busiProfile, setBusiProfile]=useState({});
useEffect(() => {
    fetch("http://localhost:9090/sendMessProfile?messId="+props.messId,{
      method:"POST",
  })
      .then(res => res.json())
      .then(
        (result) => {
            setBusiProfile(result);
        },
         (error) => {
         console.log(error);
        }
      )
  }, [])
// console.log(busiProfile.lattitude)
// console.log(busiProfile.longitude)


      //  this func is to fetch mess menu list
      const [busiProMenuArr, setBusiProMenuArr] = useState([]);
      useEffect(() => {
          fetch("http://localhost:9090/sendMessMenu?id_no="+props.messId,{
            method:"POST",
        })
            .then(res => res.json())
            .then(
              (result) => {
                setBusiProMenuArr(result);
              },
               (error) => {
               console.log(error);
              }
            )
        }, [])

        // this function is to add and remove bookmark from user acc
    
        let [showBookmark , setShowBookmark]=useState();
       useEffect ( () => {
        fetch("http://localhost:9090/allbookmarks?userId_no="+props.userDetailsMain.mo_no,
        {
            method:"POST"
        })
              .then(res => res.json())
              .then(
                  (result) => {
                    let fetchedBookArr=result;
                   //to check if already added bookmarks
                    fetchedBookArr.forEach(element => {
                        if(element.busino===props.messId){
                            setShowBookmark(true);
                        }
                      });
                },
                 (error) => {
                 console.log(error);
                }
              )
          }, [])
          
        function addBookmarkFun(){
            if(showBookmark === true){
                fetch("http://localhost:9090/deletebookmark?"+`userId=${props.userDetailsMain.mo_no}&messId=${props.messId}`,
                {
                    method:"POST",
                }).then((res=>{  setShowBookmark(false);}));              
            }
            else{
                let bookmarkData={
                    "userno":props.userDetailsMain.mo_no,
                    "busino":props.messId,
                    "mess_img":props.messId.object.messProfileImg,
                    "mess_title":props.messId.object.mname,
                    "mess_desc":props.messId.object.description
                   }
                      fetch("http://localhost:9090/addbookmark",
                      {
                          method:"POST",
                          headers:{"Content-Type":"application/json"},
                          body:JSON.stringify(bookmarkData)
                      }).then((res=>{  setShowBookmark(true);}));
            }
        }


    // to change the business profile inner navbar functionalities
    let  [forBusiProNav, setForBusiProNav] = useState("menu")

    function busiProNavControl(click) {
        if(click==="photos"){
            setForBusiProNav("photos")
        }else if(click==="reviews"){
            setForBusiProNav("reviews")
        }
        else{
            setForBusiProNav("menu")
        }
    }

    return (
        <div>
            <div className='busiProContainer'>
                <img src={busiProfile.messProfileImg} alt="Profile Pic" />
                <div className='busiProDesc'>
                    <h2>{busiProfile.mname}</h2>
                    <p>{busiProfile.description}</p>
                    <p>Timing : {busiProfile.m_time} & {busiProfile.e_time}</p>
                    <div className="addressDiv"><img src={locationImg} alt="" />
                     <p>    <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${busiProfile.lattitude},${busiProfile.longitude}`}>Address</a> :{busiProfile.madress}</p>
                    </div>
                   
                    <div className='busiProContact'><img src={contactNoImg} alt="" /><p><a href={`tel:${busiProfile.mcontact}`}></a>{busiProfile.mcontact}</p></div>
                   <div className='busiProBtnsContainer'>
                   <Link onClick={() => props.setMessId(busiProfile.o_no)} to={"/busipro/status/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <button className='busiProBtns'>See Status</button>
                    </Link>

                    <button className='busiProBtns' onClick={addBookmarkFun}>{showBookmark?"Bookmark Added" : "Add to Bookmarks"}</button>
                   </div>
                   
                </div>
            </div>

            <ul className="busiProNav">
                <li onClick={()=>busiProNavControl("menu")} style={{color:forBusiProNav==="menu"?"orange":""}} >Menu</li>
                <li onClick={()=>busiProNavControl("photos")} style={{color:forBusiProNav==="photos"?"orange":""}} >photos</li>
                <li onClick={()=>busiProNavControl("reviews")} style={{color:forBusiProNav==="reviews"?"orange":""}} >Reviews</li>
            </ul>
          
            { 
            forBusiProNav==="menu"?
                busiProMenuArr.map(
                    list => {
                        return (
                            <BusiProMenuList key={list.id} dishImg={list.img} dishTitle={list.dishTitle} dishDesc={list.dishDescription} dishPrice={list.dishPrice}/>     
                        )
                    }):
                    forBusiProNav==="photos"?
                    <BusiProPhotos />
                    :
                    <BusiProReviews/>
                } 
        </div>
    )
}

export default BusiProfile;