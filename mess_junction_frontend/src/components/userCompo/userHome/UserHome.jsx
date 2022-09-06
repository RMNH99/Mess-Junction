import RestroList from './RestroList';
import './userHome.css'
import { useEffect, useState } from 'react';
import searchImg from '../../../imgs/searchImg.png'

function UserHome(props) {


  
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9090/sendMessList?"+`latitude=${props.latLong.latitude}&longitude=${props.latLong.longitude}&radius=${radius}`,{
            method:"POST",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    // to get radius and change list acordingly
    let [radius, setRadius] = useState(500);
    let radiusFun = (e) => {
        setRadius(e.target.value)
    }


    // to get list acording to search
    let [searchValue, setSearchValue] = useState("");
    let searchFun = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <div>
            <div className='searchContiner'>

                <form action="#" className='searchForm'>
                    <input onChange={searchFun} value={searchValue} type="text" id='search' placeholder='Search Mess, Restros, hotels' />
                   <img type="submit" id='searchBtn' src={searchImg} alt="search" />
                </form>

                <div className='Filter'>
                    <p>Radius</p>
                    <select onChange={radiusFun} value={radius} defaultValue={500} name="radius" id="radius">
                        <option value={500}>500 m</option>
                        <option value={1000}>1 km</option>
                        <option value={3000}>3 km</option>
                        <option value={5000}>5 km</option>
                    </select>
                </div>
            </div>
            {
                items.map(
                    (list) => {
                        return <RestroList key={list.object.o_no} id={list.object.o_no} img={list.object.messProfileImg} userId={props.userDetailsMain.mo_no} title={list.object.mname} desc={list.object.description} dist={list.dist} contactNo={list.object.mcontact} wholeElement={list} setMessId={props.setMessId} />
                    }
                )

            }
        </div>
    )
}

export default UserHome;