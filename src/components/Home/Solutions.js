import React from 'react'
import './Solutions.css'
import bg from '../images/desktop-bg.png'
import img1 from '../images/Cloud hosting-amico.png'
import img2 from '../images/Cloud hosting-cuate.png'

function Solutions() {
  return (
   <>
   <main className='solution'>
    <div className='bg'>
      <img src={bg} alt="bg"/>
    </div>
    <div className='solutions_'>
      <div className='sol_content'>
        <div className='sol_content_'>
          <p>It's Time To Give Your Business</p>
          <h1>A FUTURISTIC SPIN</h1>
          <p>Host Any Software On Our Secured Cloud Now</p>
        </div>
        <div className='sol_btns'>
          <button className='try'>Try Now Free</button>
          <button className='plans'>See Plans & Offers</button>
        </div>
      </div>
      <div className='sol_img'>
        <div className='img1'>
          <img src={img1} alt=""/>
        </div>
        <div className='img2'>
          <img src={img2} alt=""/>
        </div>
      </div>
    </div>
   </main>
   </>
  )
}

export default Solutions