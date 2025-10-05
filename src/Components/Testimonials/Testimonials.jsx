import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


const slideForward = () => {
if (tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = () => {
if (tx < 0){
    tx += 25;
}
slider.current.style.transform = `translateX(${tx}%)`;

}
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
      <ul ref= {slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="User 1" />
                    <div>
                        <h3>Ashish Kumar (Research Scholar)</h3>
                        <span>Karya Saarthi, New delhi</span>
                    </div>
                </div>
                <p>"The team at Karya Saarthi transformed my career. Their guidance and support helped me land my dream job in tech. I am forever grateful for their dedication and expertise." </p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="User 1" />
                    <div>
                        <h3>Anishka (Research Scholar)</h3>
                        <span>Karya Saarthi, New delhi</span>
                    </div>
                </div>
                <p>"The team at Karya Saarthi transformed my career. Their guidance and support helped me land my dream job in tech. I am forever grateful for their dedication and expertise."</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="User 1" />
                    <div>
                        <h3>Shakshi (Businesss Owner)</h3>
                        <span>Karya Saarthi, New delhi</span>
                    </div>
                </div>
                <p>"The team at Karya Saarthi transformed my career. Their guidance and support helped me land my dream job in tech. I am forever grateful for their dedication and expertise."</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="User 1" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Karya Saarthi, India</span>
                    </div>
                </div>
                <p>"The team at Karya Saarthi transformed my career. Their guidance and support helped me land my dream job in tech. I am forever grateful for their dedication and expertise."</p>
            </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Testimonials
