import './restroList.css'
import bookmarkImg from '../../../imgs/bookmark.png'
import locationImg from '../../../imgs/locationLogo.png'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

function RestroList(props) {

    let [showBookmark , setShowBookmark]=useState();

    useEffect ( () => {
        fetch("http://localhost:9090/allbookmarks?userId_no="+props.userId,
        {
            method:"POST"
        })
          .then(res => res.json())
          .then(
              (result) => {
                let fetchedBookArr=result;
               //to check if already added bookmarks
                fetchedBookArr.forEach(element => {
                    if(element.busino===props.id){
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
            fetch("http://localhost:9090/deletebookmark?"+`userId=${props.userId}&messId=${props.id}`,
            {
                method:"POST",
            }).then((res=>{ setShowBookmark(false);}));
           
        }
        else{
           let bookmarkData={
            "userno":props.userId,
            "busino":props.id,
            "mess_img":props.img,
            "mess_title":props.title,
            "mess_desc":props.desc
           }
              fetch("http://localhost:9090/addbookmark",
              {
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(bookmarkData)
              }).then((res=>{  setShowBookmark(true);}));
        }
    }
    


    return (
        <div className='listCompo'>

            <Link onClick={() => props.setMessId(props.id)} to={"/busipro/status/"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <img className='busiProImg' src={props.img} alt="" />
            </Link>

            <div className='titleAndDesc'>

                <Link onClick={() => props.setMessId(props.id)} to={"/busipro"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                        <div className='locationIconDiv'><img src={locationImg} alt="" /><p className='dist'>Distance {Math.round(props.dist)} m</p></div>
                    </div>
                </Link>

            </div>
            <img  onClick={addBookmarkFun} style={showBookmark ? { filter: 'contrast(1)' } : {}} className='bookmarkimg' src={bookmarkImg} alt="" />
        </div>
    )
}

export default RestroList;