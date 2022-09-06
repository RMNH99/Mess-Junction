import './busiStatus.css'
import leftArrowImg from '../../../imgs/leftArrow.png'
import rightArrowImg from '../../../imgs/rightArrow.png'
import closeBtnImg from '../../../imgs/closeButton.png'
import { useNavigate } from 'react-router-dom'


function BusiStatus(props) {
    const nav = useNavigate();
    // props.setMessId(props.messId);
    return (
        <div className='statusContainer'>
              <div className='statusDiv'>
          
                <div className='statusContent'>{props.changeStatus}</div>
                <img className='closeBtn' onClick={() => { nav(-1) }} src={closeBtnImg} alt="" />
                <img className='leftRightBtns' onClick={props.onLeftClick} style={{ display:  props.leftBtnVisibility  }} src={leftArrowImg} alt="" />
                <img className='leftRightBtns' onClick={props.onRightClick} style={{ display:  props.rightBtnVisibility }} src={rightArrowImg} alt="" />
                <h2 className='busiName'>{props.title}</h2>
                </div>
        </div>
    )
}

export default BusiStatus;