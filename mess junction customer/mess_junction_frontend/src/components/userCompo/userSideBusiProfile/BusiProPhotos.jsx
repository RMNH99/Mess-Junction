import './busiProPhotos.css'

function BusiProPhotos(){

    let photosArr=[
        {
            id:1,
            img: "https://s01.sgp1.digitaloceanspaces.com/large/833260-qmyynzxsft-1490890239.jpg"
        },
        {
            id:2,
            img: "https://images.jdmagicbox.com/comp/coimbatore/l1/0422px422.x422.131130122358.n8l1/catalogue/seerangam-restaurants-uppilipalayam-coimbatore-restaurants-1j7gf8b.jpg?clr="
        },
        {
            id:3,
            img: "https://b.zmtcdn.com/data/pictures/4/19376644/1c16cd203cc9c3ad02a4c03aee3f7bd8_featured_v2.jpg"
        },
        {
            id:4,
            img: "https://im.whatshot.in/img/2019/Sep/punjabi-mess-3-cropped-1568798950.jpg"
        },
        {
            id:5,
            img: "https://4.imimg.com/data4/EH/WV/MY-36572136/mess-services-500x500.jpeg"
        }
    ]
    return(
       <div className='busiProPhotosCompo'>
        {
         photosArr.map(list=>{
           return(
            <img key={list.id} src={list.img} alt="" />
           ) 
         })   
        }
       
       </div>
    )
}

export default BusiProPhotos;