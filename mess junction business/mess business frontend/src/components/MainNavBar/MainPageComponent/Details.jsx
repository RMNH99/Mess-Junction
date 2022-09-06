import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import profileImg from './ProfileIMG.jpg';
import swal from 'sweetalert';
// import Map from "./Map";

import './homepage.css';


const HpDetail =(props)=>{
    let nav=useNavigate('');
    
    const [detailImg,setDetailImg]=useState('');
    const [ownName,setOwnName]=useState('');
    const [messName,setMessName]=useState('');
    const [custNo,setCustNo]=useState('');
    const [hpVeg,setHPVeg]=useState(' ');
    const [messType,setMessType]=useState('');
    const [messDescription,setMessDescription]=useState('');
    const [messAddress,setMessAddress]=useState('');
    const [mornStartTime,setMornStartTime]=useState('');
    const [mornClosingTime,setMornClosingTime]=useState('');
    const [eveStartTime,setEveStartTime]=useState('');
    const [eveClosingTime,setEveClosingTime]=useState('');
    let[validationMsg, setValidationMsg]=useState("");
    

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setDetailImg(e.target.files[0]);
        }
    };
    
    function saveMessData (e){
        e.preventDefault(); 

        let Details = {
            o_no: props.lmo_no ? props.lidmo_no : props.mo_no,
            mess_profile_img:"https://content3.jdmagicbox.com/comp/aurangabad-maharashtra/v6/9999px240.x240.170913150430.k1v6/catalogue/indian-hotel-aurangabad-aurangabad-maharashtra-restaurants-lpnnb.jpg",
            mname: messName,
            oname : ownName,
           mcontact: custNo,
           veg: hpVeg,
           lattitude:18.487058,
           longitude:73.818386,
           mtype:messType,
           description:messDescription,
           madress:messAddress,
           mo_time:mornStartTime.toString(),
            mc_time:mornClosingTime.toString(),
            eo_time:eveStartTime.toString(),
           ec_time:eveClosingTime.toString(),
             };
console.log(Details.o_no)
             console.log(validationMsg);
             let phoneno = /^\d{10}$/;
             if( (custNo.match(phoneno))){
                try{
                    fetch("http://localhost:9092/adddetail",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(Details)
                  
                    }).then((res)=>{
                        console.log(res)
                        if(res.ok===false){
                            setValidationMsg("Data already filled !")
                        }
                      else  {
                        setOwnName(''); setMessName(''); setCustNo(''); setHPVeg(''); setMessType('');
                            setMessDescription(''); setMessAddress(''); setMornStartTime(''); setMornClosingTime('');
                            setEveStartTime(''); setEveClosingTime(''); setDetailImg('');
            
                        setValidationMsg("Successfully save data");
                        props.setReg(true);
                        nav('/login')
                        }
                    })
                }catch(err){
                    setValidationMsg("mobile number already registered");
                    console.log(err)
                }
                   
                
             }else{
                 swal({
                     title: "Please enter valid Mobile number",
                     icon: "warning",
                     button: "OK",
                   });
                   setCustNo("");
             } 
   
    console.log(Details);
    console.log(props.mo_no);
  
    }
    return <div>
        <h2 className="reg2" >Business Details</h2>
    
         <form action=""  onSubmit={saveMessData}>
                <div className="flex">
                    <div className="HPprofile-main-box">
                        <div>
                            <div className="HPFileBox">
                            {detailImg && (<img className="HPimg" src={URL.createObjectURL(detailImg)} alt=""/>)}
                            </div>
                            <input className="HPFile" accept="image/*" required type="file" onChange={imageChange} />
                        </div>
                    </div>
                    <div className="t1outerbox">                      
                            <table className="table1">
                                <tr>
                                    <td>Mess Name :</td>
                                    <td><input type="text" className="inputText" placeholder="Mess Name" 
                                    value={messName} onChange={e=>setMessName(e.target.value) } required/></td>
                                </tr>
                                <tr>
                                    <td>Owner Name :</td>
                                    <td><input type="text" className="inputText" placeholder="Owner Name" 
                                    value={ownName} onChange={e=>setOwnName(e.target.value)} required/></td>
                                </tr>
                                <tr>
                                    <td>Contact Number :</td>
                                    <td>{props.lmo_no ? props.lidmo_no : props.mo_no}</td>
                                </tr>
                                <tr>
                                    <td>Contact Number For Customer :</td>
                                    <td><input type="number" className="inputText" placeholder="Customer Number" 
                                    value={custNo} onChange={e=>setCustNo(e.target.value)} required/></td>
                                </tr>
                                <tr>
                                    <td>Veg / Non-Veg :</td>
                                    <td><select name="Veg/Non-Veg" value={hpVeg} onChange={e=>setHPVeg(e.target.value)}>
                                        <option>Select</option>
                                        <option value="Veg">Veg</option>
                                        <option value="Non-Veg">Non-Veg</option>
                                        <option value="Veg/Non-Veg">Veg/Non-Veg</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bussiness Type :</td>
                                    <td><select value={messType} onChange={e=>setMessType(e.target.value) }>
                                        <option>Select</option>
                                        <option>Mess</option>
                                        <option>Hotel + Mess</option>
                                        <option>Restaurant + Mess</option>
                                        <option>PG + Mess</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                <td>First Half Time :</td>
                                    <td>Opening Time : <input type="time" value={mornStartTime} onChange={e=>setMornStartTime(e.target.value) }/>
                                    </td>
                                </tr>
                                <tr>
                                <td></td>
                                    <td>Closing Time : <input type="time" value={mornClosingTime} onChange={e=>setMornClosingTime(e.target.value) }/>
                                    </td>
                                </tr>
                                <tr>
                                <td>Second Half Time :</td>
                                    <td>Opening Time : <input type="time" value={eveStartTime} onChange={e=>setEveStartTime(e.target.value) }/>
                                    </td>
                                </tr>
                                <tr>
                                <td></td>
                                    <td>Closing Time : <input type="time" value={eveClosingTime} onChange={e=>setEveClosingTime(e.target.value) }/>
                                    </td>
                                </tr>
                            </table>
                    </div>
                </div>


                 <div className="box123">
                   <table>
                    <tr>
                        <td>Details</td>
                        <td className="width"><textarea type="text" className="inputText" maxLength={300}
                         placeholder="Details" value={messDescription} onChange={e=>setMessDescription(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td>Mess Address</td>
                        <td className="width"><input type="text" className="inputText" maxLength={300} 
                         placeholder="Mess Address" value={messAddress} onChange={e=>setMessAddress(e.target.value)} required/></td>
                    </tr>
                   </table>
                 </div>
                <div id="svbtn">
                <button className="Save-btn" type="Submit" >Save</button>
                </div>
                <p>{validationMsg}</p>
            </form>

            {/* <div style={{ margin: '100px' }}>
            <Map
            google={props.google}
            center={{lat: 18.5204, lng: 73.8567}}
            height='300px'
            zoom={15}
            />
            </div> */}
           
          </div>
}
export default HpDetail;