import { useState, useEffect } from 'react'
import BusiStatus from "./BusiStatus";

let count = 1;
let statusCount = 0;

function BusiStatusLogic(props) {


    // this func is to fetch mess Status
    const [statusData, setStatusData] = useState([]);
    useEffect(() => {
        count = 1;
         statusCount = 0;
        fetch("http://localhost:9090/status?id_no=" + props.messId,{
            method:"POST",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setStatusData(result);
                    setChangeStatus(<h1 style={{"color":"white","margin":"auto"}}>No Status Today !</h1>);
                    wait(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])



    let [changeStatus, setChangeStatus] = useState();
    let [title, settitle] = useState();
    // to change the status of one busi
    function wait(result) {
        if (result.length > 1) {
          
            setRightBtnVisibility("inline-block")
        }
        if (result.length >= 1) {
            settitle(result[0].caption)
            setChangeStatus(<img src={result[0].img} alt="" />);
        }
    }



    let [rightBtnVisibility, setRightBtnVisibility] = useState("none");

    function onRightClick() {
        count=count+1
        if (count === statusData.length) {
           statusCount++;
            setChangeStatus(<img src={statusData[statusCount].img} alt="" />);
            setRightBtnVisibility("none");
            setLeftBtnVisibility("inline-block")
        }
        else if (count < statusData.length) {
            statusCount++;
            setChangeStatus(<img src={statusData[statusCount].img} alt="" />);
            setLeftBtnVisibility("inline-block")
        }
    }


    let [leftBtnVisibility, setLeftBtnVisibility] = useState("none");

    function onLeftClick() {
        count--
        if (count === 1) {
            statusCount--;
            setLeftBtnVisibility("none");
            setChangeStatus(<img src={statusData[statusCount].img} alt="status" />);
            setRightBtnVisibility("inline-block")

        }
        else if (count !== statusData.length) {
            statusCount--;
            setChangeStatus(<img src={statusData[statusCount].img} alt="status" />);
            setRightBtnVisibility("inline-block")
        }
    }

    return (
        <BusiStatus title={title}  changeStatus={changeStatus} statusData={statusData} onLeftClick={onLeftClick} onRightClick={onRightClick} leftBtnVisibility={leftBtnVisibility} rightBtnVisibility={rightBtnVisibility} setMessId={props.setMessId} messId={props.messId} />
        )
}
export default BusiStatusLogic;