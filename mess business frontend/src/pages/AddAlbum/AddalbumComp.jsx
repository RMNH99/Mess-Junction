import { MdDelete } from "react-icons/md";
import { useState } from "react";
import dish from '../../img/pngwing.png'
import veg from '../../img/veg1.png'
import meal from '../../img/Meal.jpg'

import swal from 'sweetalert';


const Addalbumcomp = (props)=>{
    const [statusimg,setStatusimg]=useState("");

    const [statusdata,setStatusData]=useState([
        {id:props.mo_no,
            itemStatus:dish,},
        {id:props.mo_no,
            itemStatus:veg,},
        {id:props.mo_no,
            itemStatus:meal,},
    ]);
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setStatusimg(e.target.files[0]);
        }
    };
   
   

function uploadStatus (e){
        e.preventDefault(); 
        if(statusimg === ""){
            swal({
                title: "Please select a file",
                icon: "warning",
                button: "OK",
              });
        }else
        if(statusdata.length > 11){
            swal({
                title: "You Can Add Only 12 files",
                icon: "",
                button: "OK",
              });
            setStatusimg("");
        }
        else{
        let StatusList = {
            id:props.mo_no,
            itemStatus:(URL.createObjectURL(statusimg)),
             };
     
        setStatusData((statusList)=>{
                return [...statusList,StatusList];
            
        });
        setStatusimg("");
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
const SaveImages =()=>{
    swal({
        title: "Successfully Save with "+(statusdata.length)+ " Files",
        icon: "success",
        button: "OK",
      });
}


return<div>
<h2 className="status-title">Gallary</h2>

<div className="status-form-box">
    <input className="inputStatus" type="file" accept="image/*" 
   onChange={imageChange}/>
    
    <button className="Save-status" type="Submit" onClick={uploadStatus}>Add</button>
    </div>
   
        <div>
            <ul className="unorderList">
                    {statusdata.map((view,index)=>{
    
                        return<li>
                            
                                <div className="status-content-box">
                                 <div className="abcdefg">
            
                                  <img className="viewStatus" src={view.itemStatus} alt="" />
                
                                     <i className="delete" onClick={()=>{onSelectDelete(index)}}><MdDelete/></i>
                                 </div>

                                 </div>
                            
                            </li>; })}
                
            </ul>
            <div className="send-button-align">
            <button className="send-status" type="Submit" onClick={SaveImages}>Save</button>
            </div>
        </div>
       
</div>
}
export default Addalbumcomp;