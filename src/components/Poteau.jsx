import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from 'react';

const Poteau = ({ handleSpain, spanish }) => {

    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);
    const [pays, setPays] = useState(false);

    const [competences, setCompetences] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);
    // const [espagne, setEspagne] = useState(false);

    const goToCompetences = () => {
        setCompetences(true);
        if(competences) {
            const tw12 = gsap.to((".poteau-panneaux"), {duration: 1, rotationY: 360, ease: 'circ' });
        } else {
            console.log(false)
        }
    }

    const goToProjets = () => {
        setProjects(true);
        if(projects) {
            const tw13 = gsap.to((".poteau-panneaux-left"), {duration: 1, rotationY: 360, ease: 'circ'});
        } else {
            console.log(false)
        }
    }

    const goToContact = () => {
        setContact(true);
        if(contact) {
            const tw14 = gsap.to((".poteau-panneaux-third"), {duration: 1, rotationY: 360, ease: 'circ'});
        } else {
            console.log(false)
        }
    }
    
    const rotateElement = (msg) => {
        if(msg) {
            const tw22 = gsap.to((".ticket-small-section"), {duration: 1, rotationZ: -20, ease: 'circ', x: -50});
        }
    }
    
    const ticketMoove = () => {
        console.log(email, message)
        if(email && message) {
            const tw33 = gsap.to((".ticket-small-section"), {duration: 1, rotationZ: -20, ease: 'circ', x: -45, y: 50});
        } else if(email || message) {
            const tw18 = gsap.to((".ticket-small-section"), {duration: 1, rotationZ: -10, ease: 'circ', x: -25, y: 10});
        }
        // setEmail(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        pays === 'Espagne' ? handleSpain('Espagne') : console.log('cc');


        const tw34 = gsap.to((".ticket-small-section"), {duration: 2, rotationZ: -10, ease: 'circ', x: -25, y: 200, opacity: 0});
        const tw35 = gsap.to((".envoyer-avion-icon"), {
            duration: 2, 
            scale: 10, 
            // x: -1200, 
            // y: -550,
            rotationZ: 180,
            onComplete() {
                console.log('animation fini')
                // window.scrollTo({
                //     top: 0,
                //     behavior: 'smooth'
                // })

                


                const scrollToTop = window.setInterval(() => {
                    const pos = window.pageYOffset;
                    if ( pos > 0 ) {
                        window.scrollTo( 0, pos - 20 );
                        const tw36 = gsap.to((".envoyer-avion-icon"), {
                            duration: 3, 
                            scale: 40,
                            onComplete() {
                                console.log('FINITO')
                                gsap.to((".envoyer-avion-icon"), {duration: 2, y: -2200 });
                            }
                        })
                        let avion = document.querySelector('.envoyer-avion-icon')
                        avion.style.position = 'fixed'
                        avion.style.top = '50%'
                    } else {
                        window.clearInterval(scrollToTop);
                    }
                }, 20)

                // gsap.to(window, {duration: 2, scrollTo: -2000});

                // const tw36 = gsap.to((".envoyer-avion-icon"), {
                //     duration: 20, 
                //     // y: -5000,
                //     scale: 20,
                //     position: 'fixed',
                //     top: -0,
                //     backgroundColor: 'red'
                // })
            }
        });
        
    }
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".separator-vertical-first, .separator-vertical-second, .panneaux-indication", {
            x: 600,
        }, {
            x: 0,
            duration: 2,
            ease: "bounce",
            delay: 0.25,
            scrollTrigger: {
              trigger: ".panneaux-indication"
            }
        });

        gsap.fromTo(".separator-vertical-first-project, .separator-vertical-second-project, .panneaux-indication-project", {
            x: 600,
        }, {
            x: 0,
            duration: 2,
            ease: "bounce",
            delay: 0.25,
            scrollTrigger: {
              trigger: ".panneaux-indication-project"
            }
        });

        gsap.fromTo(".separator-vertical-first-contact, .separator-vertical-second-contact, .panneaux-indication-contact, .panneaux-indication-avion-contact, .separator-vertical-midle-contact", {
            x: 600,
        }, {
            x: 0,
            duration: 2,
            ease: "bounce",
            delay: 0.25,
            scrollTrigger: {
              trigger: ".panneaux-indication-contact"
            },
        });


        gsap.fromTo(".competences-card", {
            scale: 0,
        }, {
            scale: 1,
            duration: 4,
            ease: "bounce",
            delay: 0.25,
            scrollTrigger: {
              trigger: ".competences-card"
            }
        });

        // gsap.to(".separator-vertical-first, .separator-vertical-second, .panneaux-indication", {
        //     x: 100,
        //     duration: 2,
        //     ease: "bounce",
        //     delay: 1,
        //     scrollTrigger: {
        //       trigger: ".panneaux-indication"
        //     }
        //   });
    }, []);

    // const urlPlane = pays;
    const urlPlane = pays === 'France' ? 'avion-airfrance.svg' 
    : pays === 'Espagne' ? 'avion-espagne.svg' : 'avion-rayaneair.svg';
    // :'avion-rayaneair.svg';

    // pays === 'Espagne' ? setEspagne(true) : console.log('cc');

    return (
        <div className="poteau-container">
            <div className="poteau"></div>
            <div className="poteau-ball"></div>
            <a href="#" className="poteau-panneaux" onMouseOver={goToCompetences} onMouseOut={() => setCompetences(false)}>
                <img src="panneaux.svg" alt="" className="panneaux"/>
                {spanish === 'Espagne' ? 
                <span className="panneaux-text">
                    Habilidades 10Km
                </span> 
                :
                <span className="panneaux-text">
                    Compétences 10Km
                </span> 
            }
                
            </a>

            <a href="#" className="poteau-panneaux-left" onMouseOver={goToProjets} onMouseOut={() => setProjects(false)}>
                <img src="panneaux.svg" alt="" className="panneaux" />
                {spanish === 'Espagne' ? 
                <span className="panneaux-text-left">
                    Proyectos 300Km
                </span> 
                :
                <span className="panneaux-text-left">
                    Projets 300Km
                </span> 
                }
            </a>

            <a href="#" className="poteau-panneaux-third" onMouseOver={goToContact} onMouseOut={() => setContact(false)}>
                <img src="panneaux.svg" alt="" className="panneaux" />
                {spanish === 'Espagne' ? 
                <span className="panneaux-text">
                    Contácteme 666Km
                </span> 
                :
                <span className="panneaux-text">
                    Contact 666Km
                </span> 
                }
                
            </a>
            <p className="language-hello">こんにちは</p>
            <p className="language-hello2">你好</p>
            <p className="language-hello3">Merhaba</p>
            <p className="language-hello4">السٌَلامُ عَلَيْكُمْ</p>
            <p className="language-hello5">γεια</p>
            <p className="language-hello6">Привет</p>
            <p className="language-hello7">สวัสดี</p>
            <div className="separator"></div>
            <div className="separator-vertical-first"></div>
            <div className="separator-vertical-second"></div>
            <div className="panneaux-indication">
                <h3>Compétences</h3>
                <h3>مهارات</h3>
                <div className="panneaux-arrow-container">
                    <img src="arrow.svg" alt=""/>
                    <img src="arrow.svg" alt=""/>
                </div>
            </div>

            <div className="competences-section">
                <div className="competences-card">
                    <img className="competences-card-image" src="html.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="css.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="js.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="react.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="next.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="redux.png" alt=""/>
                </div>
                <div className="competences-card">
                    <img className="competences-card-image" src="wordpress.png" alt=""/>
                </div>
            </div>


            <div className="separator-project"></div>
            <div className="separator-vertical-first-project"></div>
            <div className="separator-vertical-second-project"></div>
            <div className="panneaux-indication-project">
                <h3>Projets</h3>
                <h3>mga proyekto</h3>
                <div className="panneaux-arrow-container">
                    <img src="arrow.svg" alt=""/>
                    <img src="arrow.svg" alt=""/>
                </div>
            </div>

            <div className="project-section">
                <div className="project-card">
                    <img className="project-card-image" src="geolyfe.png" alt=""/>
                    <p>GéoLyfe;</p>
                </div>
                <div className="project-card">
                    <img className="project-card-image" src="kanalyfe.png" alt=""/>
                    <p>KanaLyfe;</p>
                </div>
                <div className="project-card">
                    <img className="project-card-image" src="codelyfe.png" alt=""/>
                    <p>Panneaux;Lyfe</p>
                </div>
                <div className="project-card">
                    <img className="project-card-image" src="bootcode.png" alt=""/>
                    <p>BootCode</p>
                </div>
                <div className="project-card">
                    <img className="project-card-image" src="portfolio.png" alt=""/>
                    <p>Portfolio</p>
                </div>
                <div className="project-card">
                    <img className="project-card-image" src="pokeidon.png" alt=""/>
                    <p>Pokéidon</p>
                </div>
            </div>

            <div className="separator-contact"></div>
            <div className="separator-vertical-first-contact"></div>
            <div className="separator-vertical-second-contact"></div>
            <div className="separator-vertical-midle-contact"></div>
            <div className="panneaux-indication-avion-contact">
                {/* <p>test</p> */}
                <img className="panneaux-indication-avion-icon" src="avion.svg" alt=""/>
            </div>
            <div className="panneaux-indication-contact">
                <h3>Contactez-moi</h3>
                <h3>मुझसे संपर्क करें</h3>
                <div className="panneaux-arrow-container">
                    <img src="arrow.svg" alt=""/>
                    <img src="arrow.svg" alt=""/>
                </div>
            </div>

            <div className="contact-section">
                <div className="ticket-container">
                    <div className="ticket-small-section" onClick={(e) => rotateElement(e.target.value)}>
                        {/* <img className="ticket-logo" src="logo-prolyfe-light-purple.png" alt=""/> */}
                        <img className="codebar" src="qrcode.svg" alt=""/>
                        <p className="rayaneair">Rayane Air</p>
                    </div>
                    <div className="ticket-main-section">
                        <form action="" className="ticket-form" onSubmit={handleSubmit}>
                            <input className="email" type="text" required placeholder="Email" onChange={(e) => {ticketMoove(); setEmail(e.target.value)}}/>
                            <input className="email" type="text" placeholder="From :" onKeyUp={(e) => {setPays(e.target.value); console.log(pays)}}/>
                            <input className="message" type="text" required placeholder="Message" onChange={(e) => {ticketMoove(); setMessage(e.target.value)}}/>
                            <button>
                                ENVOYER
                                {
                                    // console.log('fdd', pays === 'France'),
                                    // let planeUrl = 
                                    // pays === 'France' ? <img className="envoyer-avion-icon" src="avion-rayaneair.svg" alt=""/> : 
                                    <img className="envoyer-avion-icon" src={urlPlane} alt=""/>
                                }
                            </button>
                        </form>
                        <span className="boarding-pass">Boarding Pass</span>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Poteau;