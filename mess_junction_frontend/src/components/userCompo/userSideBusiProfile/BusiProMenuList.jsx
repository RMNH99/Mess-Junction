import './busiProMenuList.css'

function BusiProMenuList(props){

    return(
        <div className='busiProMenuCompo'>
            <img src={props.dishImg} alt="" />
            <div className='dishTitleAndDesc'>
            <h3>{props.dishTitle}</h3>
            <p>{props.dishDesc}</p>
            <p>{props.dishPrice} rs</p>
            </div>
        </div>
    )
}

export default BusiProMenuList;