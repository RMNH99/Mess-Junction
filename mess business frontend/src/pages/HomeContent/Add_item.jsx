import "./Add_item.css";
import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import Menulist from "./Menu_list";
import swal from 'sweetalert';
import dish from '../../img/pngwing.png'
import meal from '../../img/Meal.jpg'


const Additem=(props)=>{

const [name,setName]=useState("");
const [veg,setVeg]=useState(" ");
const [description,setDescription]=useState("");
const [price,setPrice]=useState("");
const [image,setImage]=useState("");
const [toggleEdit,setToggleEdit]=useState(true);
const[isEditItem,setIsEditItem]=useState(null);
let[validationMsg, setValidationMsg]=useState("");


const [data,setData]=useState([
    {
        id:props.mo_no,
        dishTitle:"Rice Thali",
        veg: "Veg",
        dishDescription:"2 Bhaji + 3 Poli + Salad + Jira Rice",
        dishPrice:100,
        Img:meal,
    },
    {
        id:props.mo_no,
        dishTitle:"PG Thali",
        veg: "Non-Veg",
        dishDescription:"Chicken + 3 Poli + Salad + Jira Rice + Papad",
        dishPrice:124,
        Img:dish,
    },
]);
const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setImage(e.target.files[0]);
    }
};

function saveData (e){
    e.preventDefault();
    if(!toggleEdit){
        setData(
            data.map((elem)=>{
                if(elem.id===isEditItem){
                    return {...elem,Name:name,
                        veg:veg,
                        details:description,
                        ammount:price,
                        Image:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/r8on89z1l1wxxhvccfsk"}
                }
                return elem;
            })
        )  
        setToggleEdit(true);
        setPrice('');
        setName('');
        setDescription('');
        setImage('');
        setIsEditItem(null);   

    }
    else{
    let Menulist1 = {
        businessId :props.mo_no,
        dishTitle:name,
        veg:veg,
        dishDescription:description,
        dishPrice:price,
        // Image:image,URL.createObjectURL(selectedImage)
        Img:(URL.createObjectURL(image)).toString('')
         };
         try{
            fetch("http://localhost:9092/addmenu",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(Menulist1)
          
            }).then((res)=>{
                console.log(res)
                setPrice('');
                setName('');
                setDescription('');
                setImage('');
                setValidationMsg("Successfully save data");
            })
        }catch(err){
            console.log(err)
        }
        
    setData((menuList)=>{
        if(name===""){
            swal({
                title: "All Fields Are Mandatory",
                icon: "warning",
                button: "OK",
              });
              return[...menuList];
        }else if(price===""){
            swal({
                title: "All Fields Are Mandatory",
                icon: "warning",
                button: "OK",
              });
              return[...menuList];
        }
        else{
            return [...menuList,Menulist1];
        }
        
        
    });
    console.log(Menulist1)
    setPrice('');
    setName('');
    setDescription('');
    setImage('');
    
}
}
function uploadButton(){

}
// --------------EDIT DATA-----------------
const editItems=(id)=>{
    let newEditItem = data.find((elem)=>{
        return elem.id === id;
    });
    console.log(newEditItem);
    
    setToggleEdit(false);

    setName(newEditItem.Name);
    setVeg(newEditItem.veg);
    setDescription(newEditItem.details);
    setPrice(newEditItem.ammount);
    setIsEditItem(id);
}
// -----------------DELETE DATA---------------
const deleteItems=(id)=>{
    console.log("Deleted");
    setData((menuList)=>{
        return menuList.filter((arrElem,index)=>{
            return index !== id;
        })
    });
}

    return <div className="main-box">
        <div className="item-input">
        <h2 className="add-menu">Add Menu Items</h2>
        <form action="">
            <table className="table" >
                <tr>
                    <td><b>Item Name :</b></td>
                    <td><input type="text" className="inputText" required value={name} onChange={e=>setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><b>Veg/Non-Veg :</b></td>
                    <td><select className="selectOption" name="Veg/Non-Veg" id="Veg/Non-Veg" onChange={e=>setVeg(e.target.value)} value={veg} >
                        <option>Select</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                        </select></td>
                </tr>
                <tr>
                    <td><b>Item Description :</b></td>
                    <td> <textarea name="Description" maxLength={50} className="inputTextArea" value={description} rows="1" cols="20" placeholder="Add Description" onChange={e=>setDescription(e.target.value)}></textarea></td>
                </tr>
                <tr>
                    <td><b>Price :</b></td>
                    <td className="fa"><input maxLength={4} className="inputText" type="number" value={price} onChange={e=>setPrice(e.target.value)}/><FaRupeeSign/></td>
                </tr>
                <tr>
                    <td><b>Add Image</b></td>
                    
                    <td><input className="inputText" type="file" required accept="image/png, image/jpeg, image/jpg" 
                     onChange={imageChange}/> </td>
                </tr>
            </table>
            
            <div className="upld-sav-btn">
            {/* <button className="Upload-btn" onClick={uploadButton}>Upload</button> */}
            {
                toggleEdit ? <button className="Save-btn" type="Submit" onClick={saveData}>Save</button> :
                <button className="Save-btn" type="Submit" onClick={saveData}>Update</button>
            }
            
            </div>
            <p>{validationMsg}</p>
            </form> 
        </div>
        <div className="menu-data">
        <h3>Menu</h3>
            <ul>
            {data.map((menu,index)=>{
                return <>
                <Menulist text={menu}
                key={index}
                id={index}
                onSelect={deleteItems}
                onEdit={editItems}
                />
                </>
            })}
            </ul>
        </div>
    </div> 
}
export default Additem;