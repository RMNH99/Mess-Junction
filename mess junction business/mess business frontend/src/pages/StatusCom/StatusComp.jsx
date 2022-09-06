import "./StatusCom.css"
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import swal from 'sweetalert';
import dish from '../../img/pngwing.png'
import veg from '../../img/veg1.png'
import meal from '../../img/Meal.jpg'

const Statuscomp = (props)=>{
    let StatusList;
    let today=new Date();
    let time=today.getHours()+':'+today.getMinutes();

    const [statusimg,setStatusimg]=useState("");
    const [statusmsg,setStatusmsg]=useState("");

    const [statusdata,setStatusData]=useState([]);

const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setStatusimg(e.target.files[0]);
        }
    };
   

function uploadStatus (e){
        e.preventDefault(); 
        if(statusimg===""){
            swal({
                title: "Please Select Image",
                icon: "warning",
                button: "OK",
              });
        }else
        if(statusdata.length > 5){
            swal({
                title: "You Can Add Only 6 Status",
                icon: "warning",
                button: "OK",
              });
            setStatusimg("");
        setStatusmsg("");
        }
        else{
       StatusList = {
            o_no:props.mo_no,
            time:time,
            img:(URL.createObjectURL(statusimg)),
            caption:statusmsg,
             };
        setStatusData((statusList)=>{
                return [...statusList,StatusList];
            
        });
        setStatusimg("");
        setStatusmsg("");
    } 
}
const onSelectDelete=(did)=>{
    console.log(did);

    setStatusData((statusList)=>{
        return statusList.filter((arrElem,index)=>{
            return index !== did;
        })
    });

}
const SendStatus=()=>{
    try{
        StatusList = {
            o_no:props.mo_no,
            time:time,
            img:"https://media-cdn.tripadvisor.com/media/photo-s/1a/4a/5d/af/gujarati-thaali-pure.jpg",
            caption:statusmsg,
             }
        fetch("http://localhost:9092/status",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(StatusList)
      
        }).then((res)=>{
            console.log(res)
          
        })
    }catch(err){
        console.log(err)
    }
}

return<div className="mediaQwidth">
<h2 className="status-title">Status</h2>

<div className="status-form-box">
    <input className="inputStatus" type="file" accept="image/png, image/jpeg, image/jpg" 
    onChange={imageChange}/>
    
    <input className="input-status-msg" value={statusmsg} onChange={e=>setStatusmsg(e.target.value)} placeholder="Status Message"/>

    <button className="Save-status" type="Submit" onClick={uploadStatus}>Add</button>
    </div>
   
        <div>
            <ul className="unorderList">
                    {statusdata.map((view,index)=>{
    
                        return<li>
                            
                                <div className="status-content-box">
                                 <div className="abcdefg">
                                 {/* {view.itemStatus && ( */}
                                    <img className="viewStatus" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/4a/5d/af/gujarati-thaali-pure.jpg" alt="Thumb"/>        
                                    {/* )} */}
                                    <div className="inputStatustext">{view.caption}</div>
                                     <i className="delete" onClick={()=>{onSelectDelete(index)}}><MdDelete/></i>
                                 </div>

                                 </div>
                            
                            </li>; })}
                
            </ul>
            <div className="send-button-align">
            <button className="send-status" type="Submit" onClick={SendStatus}>Send Status</button>
            </div>
        </div>
       
</div>
}
export default Statuscomp;