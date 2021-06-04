import React, { ReducerAction, useEffect, useReducer, useState } from 'react';
import Head from '../components/Layout/Head';
import Link from 'next/link'
import { Button, Container } from '@material-ui/core'
import Navbar from '../components/Layout/Navbar';
import { WithUserAgentProps, withUserAgent, UserAgent } from 'next-useragent'
import { useOperatingSystem } from '../modules/contexts/OperatingSystem';
import { useAuthenticated } from '../modules/contexts/Authentication';
import AuthenticationModals from '../components/UI/AuthenticationModals';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import { Secured } from '../components/Vectors/Secured';
import isOdd from 'is-odd'
import { useResponsive } from '../modules/hooks/useResponsive';
import { Universal } from '../components/Vectors/Universal';
const Index = () => {
  const [authModalState, setAuthModalState] = useState({
    open: false,
    type: 'login',
  } as {open: boolean, type: 'login' | 'register', switch?: (type: 'login' | 'register') => any}) 
  const os = useOperatingSystem()
  const responsive = useResponsive()
  useEffect(() => {
    AOS.init({
      duration: 800
    });
    
  }, []);
  return (
    <Head title="Home">
      <div className="hero min-h-screen m-auto flex-1 flex flex-col page pb-18" >
        <Container classes={{ root: 'bg-transparent', }} className="flex flex-1 py-8 flex-col gap-3 p-4 space-y-3" style={{minHeight: '18rem'}}>          
          <Navbar authModalState={setAuthModalState} />
          <div className="my-4 w-full h-6" data-spacing />
          <div className="flex flex-col my-4 items-center justify-start md:justify-center flex-1 flex-grow p-4 bg-black rounded-md shadow-lg ring-opacity-20 ring-inset ring-pink-50 ring-2 bg-opacity-5 blur-lg hero-inset py-8" style={{flexGrow: 1}}>
            <div className="px-3 py-5 text-center w-8/12">
              <h3 className="flex-1 my-4 text-4xl font-bold text-center text-white md:text-6xl">
                A light of hope for better messaging.
              </h3>
              <p className="mb-3 text-base">
                Photon is a revolutionary chat client designed to fit users needs best while still remaining <u>easy to use</u> and <u>customizable</u>, it uses <u>top-tier security</u> protocols to keep you messaging anonymously. This project is created by BF from 7-5! 
              </p>
              <span className="my-3 font-bold" >Did we mention it's free?</span>
            </div>
            <div className="flex flex-row flex-wrap gap-3 my-4 p-2">
              {
                os === 'Windows' ? <Button className="w-full" color="primary" variant="contained">Download for Windows</Button> : <Button className="w-full" color="primary" variant="contained" disabled>Unsupported Operating System</Button>
              }
              <Button color="secondary" className="w-full" variant="contained">Open Photon</Button>
            </div>
            
          </div>
        </Container>
        <svg fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill-opacity="1" d="M0,64L40,53.3C80,43,160,21,240,16C320,11,400,21,480,64C560,107,640,181,720,213.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,154.7C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-8 mt-10 flex-wrap">
        {
          [
            {
              heading: 'Security is Priority',
              message: 'We hash all of your data multiple times using distinct keys linked to your account, and your account only.',
              img: (
                <>
                  {
                    responsive === "3-cols" && <Secured width={"522"} />
                  }
                  {
                    responsive === "2-cols" && <Secured width={"442"} />
                  }
                  {
                    responsive === "1-cols" && <Secured width={"400"} />
                  }
                  {
                    responsive === "fullscreen" && <Secured width={"320"} />
                  }
                </>
              )
            },
            {
              heading: 'Inclusive to Everyone',
              message: 'We are an open community that is inclusive of everyone, unbias of race, gender, sexuality or device!',
              img: (
                <>
                  {
                    responsive === "3-cols" && <Universal width={"542"} />
                  }
                  {
                    responsive === "2-cols" && <Universal width={"442"} />
                  }
                  {
                    responsive === "1-cols" && <Universal width={"400"} />
                  }
                  {
                    responsive === "fullscreen" && <Universal width={"320"} />
                  }
                </>
              )
            }
          ].map((item, key) => (
            <div data-aos="fade-up" key={key} className={`flex-wrap md:w-3/5 gap-3 ${isOdd(key) ? 'bg-gray-700' : 'bg-gray-800'} p-3 rounded-md`}>
              <div className="flex flex-row items-center justify-center p-3 flex-wrap large:flex-nowrap">
                {
                  !isOdd(key) ? (
                    <>
                      <span className="text-5xl md:text-left text-center flex-1">
                        {item.img}  
                      </span>
                      <div className="space-y-2">
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-bold text-white md:text-left text-center">{item.heading}</h1>
                        <p className="text-xl text-gray-300 md:text-left text-center text-wrap md:w-102 w-auto">
                          {item.message}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2 flex-1 md-2 md:mb-inherit">
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-bold text-white md:text-left text-center">{item.heading}</h1>
                        <p className="text-xl text-gray-300 md:text-left text-center text-wrap md:w-102 w-auto">
                          {item.message}
                        </p>
                      </div>
                      <span className="text-5xl md:text-left text-center">
                        {item.img}  
                      </span>
                    </>
                  )
                }
              </div>
            </div>
        ))}
      </div>
      <AuthenticationModals switchType={(type: 'login' | 'register') => setAuthModalState({...authModalState, type})} {...authModalState} close={() => setAuthModalState({open: false, type: authModalState.type})} />
    </Head>
  );
};

export default Index;