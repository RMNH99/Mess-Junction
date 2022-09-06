import './home.css'
import doodle1 from '../../../imgs/doodle1.png'

function Home(){

    return(
        <div className='container1'>
         <div className='content1'>
            <h1>Don't waste time on searching for good food !.</h1>
           <br />
            <p>
            From spots that serve mindfully-and owesome meals those offer a cosy dining experience, so... here we are to provide our service to you to full your stomach with tasteful environment
Search mess on our Application and make eassier to find reliable mesess            </p>
         </div>
         <img id='doodle1' src={doodle1} alt="doodle" />
        </div>
    )
}
export default Home;