
const HelpBox = ()=>{
return<>
    <div className="contact-heading">
    <h1 className="heding">Contact Us</h1>
    <br />
    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et quo at quia. Distinctio beatae repellat eum, excepturi asperiores laboriosam, natus aliquid et accusamus consectetur, possimus accusantium voluptatibus consequuntur delectus?</h4>
    </div>
    <br />
<hr className="contact-border"/>
<div className="help-flex">
    <div className="help-mode">
<b className="help-mode-heading">Address</b>
<p>Karve Nagar, Pune Pin: 444605</p>
<br />
<br />
<b className="help-mode-heading">Phone </b>
<p>+91 9999 888 777</p>
<br />
<br />
<b className="help-mode-heading">E-Mail</b>
<p>messjunction@gmail.com</p>

    </div>

    <div className="help-box">
        <h4>Send Message</h4>
<form action="">
        <div className="Help-Message">
        <br /><br />
        <input type="text" className="inputText" required placeholder="Enter Your Full Name"/>
        <br /><br />
        <input type="email" className="inputText" required placeholder="Type Your E-Mail" />
        <br /><br />
        <textarea className="inputTextArea" required name="" id="" cols="30" rows="1" placeholder="Type Your Message"></textarea>
        <br /><br />
        <button type="submit" className="button1">Send</button>
        </div>
</form>
        
    </div>
</div>
<br />
<br />
<br />

</>
}
export default HelpBox;
