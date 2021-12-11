import React from 'react';
import "./testimonial.scss";
import { testimonials} from "../data";

export default function Testimonial() {
    return (
        <div className='testimonials' id='testimonials'>
  <h1>Testimonials</h1>
           <div className='container'>
                   
                    { testimonials.map((testimonial)=>(
               <div className={testimonial.featured? "card featured":"card"}>
                   <div className='center'>
                         {testimonial.opinion} 
                   </div>
                   <div className='bottom'>
                   
                    <h3><img src="assets/right-arrow.png" className='left' alt="" /> {testimonial.name}</h3>
                    <h4>{testimonial.position}</h4>
                   </div>
               </div>
                  ))}
                <div className='card inputs'>
                        <input type="text" className='opinion'  placeholder='Your opinion'/>
                      <input type="text" className="profession" placeholder="Your Name" />
                        <input type="text"  className="profession"placeholder='Your Profession' />
                        <button type='submit'>Submit</button>
 
                </div>
           </div>
        </div>
    )
}
