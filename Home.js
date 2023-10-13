import React from 'react';
import Slider from './Slider.js';
import {Link} from 'react-router-dom'
import Vision from '../Vision.js';
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'

const Home = () => {
  return (
    <div>
      <Slider/>
     <section className='section'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className='heading text-center'> Our company</h3>
            <div className='underline' mx-auto></div>
            <p className='text-center'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <Link to="/about" className='btn btn-warning shadow '>Read more</Link>
          </div>
        </div>
      </div>
     </section>


    <Vision/>
{/* our services */}
 <section className=''> <Link to="services">
  <h6 className='heading'> Our services</h6></Link>
 <div class="row row-cols-1 row-cols-md-3 ">
  <div class="col">
    <div class="card shadow">
      <img src={img4} class="card-img-top" alt="Services"/>
      <div class="card-body">
        <h5 class="card-title">Web Development</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/services" className='btn btn-link'> readmore
        </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} class="card-img-top" alt="/Services"/>
      <div class="card-body">
        <h5 class="card-title">Backend Project</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/services" className='btn btn-link'> readmore
        </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Cyber Security</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to="/services" className='btn btn-link'> readmore
        </Link>
      </div>
    </div>
  </div>
 
</div>
</section>
     
    </div>
    
  );
}

export default Home;
