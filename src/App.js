import logo from './logo.svg';
import './App.css';
import { gsap } from "gsap";
import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Poteau from './components/Poteau';

function App() {
  const boxRef = useRef();
  const boxRef2 = useRef();

  const [spanish, setSpanish] = useState(false);

  const handleSpain = (language) => {
    console.log('language', language)
    setSpanish(language)
  }

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
    // gsap/
    const tw3 = gsap.to(".box", {x: 680, duration: 1, rotation: 360, repeat: -1, yoyo: true });
    // const tw4 = gsap.to(".logo-prolyfe", {x: 680, duration: 6, rotation: 360, repeat: -1, yoyo: true });
  //   const scroll2 = gsap.fromTo('.img2', {
  //     opacity: 0,
  //     x: 1000,
  // }, {
  //     scrollTrigger: {
  //         trigger: '.App',
  //         start: "bottom 150px",
  //         scrub: true,
  //         // onUpdate: (e) => {
  //         //     if(e.direction === -1) {
  //         //         scroll2.reverse();
  //         //     }
  //         // },
  //     },
  //     opacity: 1,
  //     x: 0
  // });
  }, []);

  return (
    <div className="App">
      <Header spanish={spanish}/>
      <Home spanish={spanish}/>
      <div className="container-all-poteau">
        <Poteau handleSpain={handleSpain} spanish={spanish}/>
        {/* <div className="main-content">
            <h2>Test</h2>
            <div className="separator"></div>
        </div> */}
      </div>
      {/* <div className="box" ref={boxRef}>Hello</div> */}
      {/* <div className="box2" ref={boxRef2}></div> */}
      {/* <section className="section">
        <div className="img2">elelzlemzlemzemlz</div>
      </section> */}
    </div>
  );
}

export default App;
