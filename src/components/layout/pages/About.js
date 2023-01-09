import React from 'react'
import Slider from '../../Slider/Slider'
import styles from '../pages/About.module.css'
export const About = () => {
  return (
    <div>
     
      {/* <div className={styles.header}> */}
        <div className={styles.sliderContainer}>
        <div className={styles.headerText}>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.aboutBriefing}>
            We are manufacturing and prodiding healthy and delicious foods at economical rates to our valuable
            customers. with in Pakistan. Since 1990. in about 9 cities. Our detail will be given
            later on.
          </p>
         
        </div>
        <Slider />
        </div>
      

      {/* </div> */}
      <div >
        <div className={styles.row1}>
          <div className={`row mt-5 ${styles.row}`} >
            <div class=" col-md-5" > 
            <div className="card" style={{ width: "18rem" }}>
                {/* <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title"><h1>About Me !</h1></h5>
                  <p className="card-text"> I am highly thanksful to Great ALLAH to complete 30 years
                succesfully from all aspects.we are serving our customers since 1990.
                we shall continue our latest cousions at affordable prices in best quality..</p>

                </div>
              </div>
              </div>
            <div class=" col-md-5 " >

              <div className="card" style={{ width: "18rem" }}>
                <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mian AAmir Qayyum</h5>
                  <p className="card-text">Founnder Food Web.</p>

                </div>
              </div>
            </div>






          </div>
          <div className="row mt-5">
            <div class=" col-md-5" > 
            <div className="card" style={{ width: "18rem" }}>
                {/* <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title"><h1>Our Vision ! !</h1></h5>
                  
                  <p className="card-text">
                  <span style={{fontSize:"20px",fontWeight:"bold",fontStyle:"-moz-initial"}}>To Provide: </span>
                  best services and quality in comparison with other food potals in the world at afoordable prices</p>

                </div>
              </div> </div>
            <div class=" col-md-5 " >

              <div className="card" style={{ width: "18rem" }}>
                <img src="../images/SEO.svg" class="card-img-top" alt="..." style={{borderRadius:"50%"}} />
                <div className="card-body">
                  <h5 className="card-title">Syed Sibtul Hasnain</h5>
                  <p className="card-text">CEO Food Web.</p>

                </div>
              </div>
            </div>






          </div>
          <div className="row " style={{padding:"50px"}}>
            <div class=" col-md-5" > 
            <div className="card" style={{ width: "18rem" }}>
                {/* <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title"><h1>Our Mission !</h1></h5>
                  
                  <p className="card-text">
                  <span style={{fontSize:"20px",fontWeight:"bold",fontStyle:"-moz-initial"}}>To Do: </span>
                  Maximum efforts to serve our customers well in time. every where they live in our outlets 
                in different countries of pakistan.
                  
                  </p>

                </div>
              </div> 
              </div>
            <div class=" col-md-5 " >

              <div className="card" style={{ width: "18rem" }}>
                <img src="../images/DirectorStrategy.svg" class="card-img-top" alt="..." style={{borderRadius:"50%"}} />
                <div className="card-body">
                  <h5 className="card-title">Muneer Chughtai</h5>
                  <p className="card-text">Operation Manager.</p>

                </div>
              </div>
            </div>






          </div>
          <div className="row mt-5">
            <div class=" col-md-5" > 
            <div className="card" style={{ width: "18rem" }}>
                {/* <img src="../images/96701-Ceo.svg" class="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title"><h1>Our Tomarrow !</h1></h5>
                  
                  <p className="card-text">
                  <span style={{fontSize:"20px",fontWeight:"bold",fontStyle:"-moz-initial"}}>To Become: </span>
                 
                One of the largest food portal in pakistan with huge variety of items with largest outlet profile.
                  
                  </p>

                </div>
              </div> 
              </div>
            <div class=" col-md-5 " >

              <div className="card" style={{ width: "18rem" }}>
                <img src="../images/Director.svg" class="card-img-top" alt="..." style={{borderRadius:"50%"}} />
                <div className="card-body">
                  <h5 className="card-title">Mian Khalid Meer</h5>
                  <p className="card-text">Director Strategy.</p>

                </div>
              </div>
            </div>






          </div>
        </div>
      </div>
      <section className={styles.branches}>
        <h1>Our Outlets In

        
        </h1>
        <hr className={styles.hr}/>
        <div className={styles.outlets}>
        <div className="row mt-5">
            <div class=" col-md-3" > 
            <div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
              <figure className={styles.figure}>
              <img src="../images/sargodha.svg" class={`card-img-top ${styles.img}`} alt="..."  />
              </figure>
               
                <div className="card-body">
                  <h5 className="card-title">Sargodha</h5>
                  <p className="card-text">University Road Sargodha.</p>

                </div>
              </div>
          
              </div>
            <div class=" col-md-3 " >

              <div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
                <figure className={styles.figure}>
                <img src="../images/multan.svg" class={`card-img-top ${styles.img}`} alt="..."  />
                </figure>
               
                <div className="card-body">
                  <h5 className="card-title">Multan</h5>
                  <p className="card-text">Sher Shah Road. Multan Cantt.</p>

                </div>
              </div>
            </div>
            <div class=" col-md-3 " >

<div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
  <figure className={styles.figure}>
  <img src="../images/lahore.svg" class={`card-img-top ${styles.img}`} alt="..." />
  </figure>
  
  <div className="card-body">
    <h5 className="card-title">Lahore</h5>
    <p className="card-text">155-A Commercial Area D.H.A.</p>

  </div>
</div>
</div>
<div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
  <figure className={styles.figure}>
  <img src="../images/karachi.svg" class={`card-img-top ${styles.img}`} alt="..."  />
  </figure>
                
                <div className="card-body">
                  <h5 className="card-title">Karachi</h5>
                  <p className="card-text">177 I.I.Chandrigar Road Karachi.</p>

                </div>
              </div>





          </div>
        </div>
        <div className={styles.outlets}>
        <div className="row mt-5">
            <div class=" col-md-3" > 
            <div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
              <figure className={styles.figure}>
              <img src="../images/islamabad.svg" class={`card-img-top ${styles.img}`} alt="..."  />
              </figure>
                
                <div className="card-body">
                  <h5 className="card-title">Islamabad</h5>
                  <p className="card-text">77-A Blue Area Islamabad.</p>

                </div>
              </div>
          
              </div>
            <div class=" col-md-3 " >

              <div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
                <figure className={styles.figure}>
                <img src="../images/rahimyarkhan.svg" class={`card-img-top ${styles.img}`} alt="..."  />
                </figure>
               
                <div className="card-body">
                  <h5 className="card-title">Rahim Yar Khan</h5>
                  <p className="card-text">101-B Shahbaz Pur Road Rahim Yar Khan</p>

                </div>
              </div>
            </div>
            <div class=" col-md-3 " >

<div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
  <figure className={styles.figure}>
  <img src="../images/bahawalpur.svg" class={`card-img-top ${styles.img}`} alt="..."  />
  </figure>
  
  <div className="card-body">
    <h5 className="card-title">Bahawalpur</h5>
    <p className="card-text">Ahmed Puri Gate Bawalpur.</p>

  </div>
</div>
</div>
<div className={`card ${styles.card1}`}style={{ width: "18rem" }}>
  <figure className={styles.figure}><img src="../images/gujranwala.svg" className={`card-img-top ${styles.img}`} alt="..."  /></figure>
  
                
                <div className="card-body">
                  <h5 className="card-title">Gujranwala</h5>
                  <p className="card-text">66-B Commercial Arae Satellite town.</p>

                </div>
              </div>
              <div className={`card ${styles.card1}`} style={{ width: "18rem" }}>
                <figure className={styles.figure}>
                <img src="../images/faisalabad.svg" class={`card-img-top ${styles.img}`} alt="..."  />
                </figure>
               
                <div className="card-body">
                  <h5 className="card-title">Faisalabad</h5>
                  <p className="card-text">44-B Commercial Arae Madina town.</p>

                </div>
              </div>





          </div>
        </div>
        
      </section>
    </div>
  )
}
