import React from 'react';

import './App.css';

const App = () => {
    return (
      <>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <header>
          <h1>seo landing page</h1>
          <h2>Let us help you to expand your business</h2>
          <h2 className="adsa">With The greatest seo service.</h2>
          <div className="time flex">
            <div className="days">
              <h1>14</h1>
              <h3>Days</h3>
            </div>
            <div className="hours">
              <h1>22</h1>
              <h3>Hours</h3>
            </div>
            <div className="mints">
              <h1>18</h1>
              <h3>Minutes</h3>
            </div>
            <div className="secs">
              <h1>26</h1>
              <h3>Seconds</h3>
            </div>
            <div className="btn">
              <h3>
                grab your jvzoo link here &nbsp;
                <i className="fas fa-angle-double-right"></i>
              </h3>
            </div>
          </div>
          <img
            src="./video1.png"
            alt="v1"
            className="play"
            width="480"
            height="255"
          />
        </header>
        <main>
          <section className="services">
            <h1>our services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              facere sit earum. Omnis, aspernatur nulla.
              <br />
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                porro.
              </p>
            </p>
            <img
              src="./video2.png"
              alt="v2"
              className="iframe"
              width="600"
              height="335"
            />
          </section>
          <section className="promotion">
            <h1>join the massive promotion of the influencer software</h1>
            <input type="submit" name="name" id="name" value="Name:" />
            <input type="submit" name="email" id="email" value="Email:" />
            <input type="submit" name="btn" id="btn" value="Subscribe" />
          </section>
          <section className="benefits">
            <h1>benefits of seo</h1>
            <div className="cards">
              <div className="card1">
                <img src="./icons/1.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
              <div className="card2">
                <img src="./icons/2.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
              <div className="card3">
                <img src="./icons/3.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
              <div className="card4">
                <img src="./icons/4.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
              <div className="card5">
                <img src="./icons/5.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
              <div className="card6">
                <img src="./icons/6.png" alt="icons" />
                <h3>Great For Analysis</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque deleniti <br />
                  aspernatur atque aliquam obcaecati dolorum. <br />
                  Animi in sunt neque soluta.
                </p>
              </div>
            </div>
          </section>
          <section className="search-generator">
            <div className="content">
              <h3>seo search generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
                architecto accusamus a perspiciatis error quos deserunt quisquam
                veritatis, quod, omnis necessitatibus tempore quidem totam hic
                consequuntur odit officia molestiae reprehenderit iste ullam?
                Dignissimos soluta mollitia perspiciatis corrupti, non ullam
                tempora maxime quam sit voluptatem nobis!
              </p>
              <button className="learn-more">
                Learn More &nbsp; <i className="fas fa-angle-right"></i>
              </button>
            </div>
            <div className="image">
              <img
                src="./search_generator.png"
                width="840"
                height="605"
                alt="generator"
              />
            </div>
          </section>
          <section className="sales">
            <h1>
              <strong>get 50% off</strong> on our packages
            </h1>
          </section>
        </main>
        <footer>
          <img src="./Zylme-Logo.png" alt="logo" />
          <h3 className="headings">
            <strong>Contact Us:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium.
          </h3>
          <div className="flex-2">
            <img src="./phone-call.png" alt="phone" className="icon-ph" />
            <h3 className="phone">404 2909547</h3>
            <img src="./email.png" alt="phone" className="icon-em" />
            <h3 className="email">www.zylme.com</h3>
          </div>
          <div className="end-line">
            <h3>2020 Consulancy www.zylme.com. All rights reserved.</h3>
          </div>
        </footer>
      </>
    );
}

export default App;