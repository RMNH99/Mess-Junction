import { useState } from 'react';
import './footer.css'

function Footer(){

    let newDate = new Date();
    let latestYear=useState(newDate.getFullYear());

    return(
        <div className='footerContainer'>
             <div class="copyrightPara"><span>
                    <p>&copy;</p>
                    <p id="footerYear">{latestYear}</p>
                    <p>Mess Junction</p>
                </span>
                <p> All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;