import React from 'react';

const Home = () => {
  return (
    <div className='home-container'>
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>SYNTHMASTER</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              Choose your perfect synthesizer
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className='d-lg-flex justify-content-around w-100 my-md-3 ps-md-3'>
          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center d-flex align-items-end flex-column overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Electronic sound</h2>
              <p className='lead'>
                The first electronic sound synthesizer, an instrument of awesome
                dimensions, was developed by the American acoustical engineers
                Harry Olson and Herbert Belar in 1955 at the Radio Corporation
                of America RCA laboratories at Princeton, New Jersey. The
                information was fed to the synthesizer encoded on a punched
                paper tape. It was designed for research into the properties of
                sound and attracted composers seeking to extend the range of
                available sound or to achieve total control of their music.
              </p>
            </div>
            <div
              className='adv-l bg-light shadow-sm mt-auto p-2'
              style={{
                width: '100%',
                height: '160px',
                borderRadius: '15px 15px 15px 15px',
              }}
            ></div>
            <br />
          </div>

          <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center d-flex align-items-end flex-column overflow-hidden'>
            <div className='my-3 py-3'>
              <h2 className='display-5'>Music synthesizer</h2>
              <p className='lead'>
                Also called electronic sound synthesizer, machine that
                electronically generates and modifies sounds, frequently with
                the use of a digital computer. Synthesizers are used for the
                composition of electronic music and in live performance. The
                intricate apparatus of the sound synthesizer generates wave
                forms and then subjects them to alteration in intensity,
                duration, frequency, and timbre, as selected by the composer or
                musician. Synthesizers are capable of producing sounds far
                beyond the range and versatility of musical instruments.
              </p>
            </div>
            <div
              className='adv-r bg-light shadow-sm mt-auto p-2'
              style={{
                width: '100%',
                height: '160px',
                borderRadius: '15px 15px 15px 15px',
              }}
            ></div>
            <br />
          </div>
        </div>
        <div className=' adv-c position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-light bg-light'>
          <div className='col-md-5 p-lg-5 mx-auto my-5'>
            <h1 className='display-4 fw-normal'>
              NAMM 2022: The best synths and music tech gear releases this yeare
            </h1>
            <p className='lead fw-normal'>
              January is normally a month reserved for an insane number of gear
              launches. Last year, we visited Anaheim in California to check out
              all the latest and greatest synths, plug-ins, studio hardware and
              more from big brands and boutique makers. However, the Winter NAMM
              Show in 2021 is a little different.
            </p>
            <a
              className='btn btn-outline-light btn-lg rounded-pill'
              href='https://www.namm.org/'
            >
              Find Out
            </a>
          </div>
          <div className='product-device shadow-sm d-none d-md-block'></div>
          <div className='product-device product-device-2 shadow-sm d-none d-md-block'></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
