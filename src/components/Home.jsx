import { gsap } from "gsap";
import { useEffect } from 'react';

const Home = ({ spanish }) => {

    const moovePatate = () => {
        // const tw4 = gsap.to(".patate", {x: 50, y: 50, duration: 1, repeat: -1, yoyo: true });
    };
    
    useEffect(() => {
       const tw5 = gsap.fromTo(".home-name", {
        y: 100
    }, {
        opacity: 1,
        duration: 3,
        y: 0  
       });

       const tw6 = gsap.fromTo(".home-job, .home-passion", {
        duration: 3,
        y: 200
    }, {
        opacity: 1,
        duration: 3,
        y: 0,
       });

       const tw7 = gsap.to(".circle1", {
        duration: 30, 
        rotation: 360,
        repeat: -1,
       })
    }, [])
    return (
        <div className="home" onMouseMove={moovePatate}>
            <div className="home-presentation">
                <h1 className="home-name">EMAMDEE RAYANE</h1>
                {spanish === 'Espagne' ? <h2 className="home-job">Desarrollador web y móvil</h2> : <h2 className="home-job">Développeur web & mobile</h2>}
                {/* <h2 className="home-job">Développeur web & mobile</h2> */}
                    {spanish === 'Espagne' ? <p className="home-passion">Apasionado de la geografía<br />y el viaje, realizaré tus sitios desde<br />el otro extremo del mundo.</p> : <p className="home-passion">Passioné par la géographie <br />et le voyage, je réaliserai vos sites depuis<br /> l’autre bout du monde.</p>}
                    {/* <p className="home-passion">Passioné par la géographie <br />et le voyage, je réaliserai vos sites depuis<br /> l’autre bout du monde.</p> */}
            </div>
            <div className="home-visuel">
                <img src="/patate.png" alt="" className="patate"/>
                <img src="/circle.png" alt="" className="circle1"/>
            </div>
        </div>
    );
};

export default Home;