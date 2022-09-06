// import react from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import veg from '../../img/veg1.png'
import nonveg from '../../img/nonveg.png'
import "./Menu_list.css"

const Menulist =(props)=>{

    let vegicon=(props.text.veg);
    let vegImg;
    if(vegicon==="Veg"){
        vegImg = veg;
    }else{
        vegImg = nonveg;
    }
    
return<li>
    <div className="item">
    {props.text.Img && (
            <img className="item-image" src={props.text.Img} alt="Thumb"/>        
        )}
        <div className="text">
            <h3>{props.text.dishTitle}</h3>
            <br/> {props.text.veg} <img className="vegimg" src={vegImg} alt="vegimage" />
            <br/>{props.text.dishDescription}  
            <br/><b>Price : </b>{props.text.dishPrice} . Rs.                    
        </div>
        <i className="edit" onClick={()=> 
            props.onEdit(props.text.id)}><FaEdit/></i>

        <i className="delete" onClick={()=>{
            props.onSelect(props.id)}}><MdDelete/></i>
    </div>
    </li>;
}
export default Menulist;