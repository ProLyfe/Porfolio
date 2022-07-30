import { gsap, Power0 } from "gsap";
import { useEffect } from 'react';

const Header = ({ spanish }) => {

    useEffect(() => {
        const tw4 = gsap.to(".logo-prolyfe", {x: 0, duration: 14, rotation: 360, repeat: -1, ease: Power0.easeNone });
    }, []);

    return (
        <div className="header">
            <img src="prolyfe.png" alt="" className="logo-prolyfe"/>
            <nav>
                {spanish === 'Espagne' ? <a href="">Presentación</a> : <a href="">Présentation</a>}
                {spanish === 'Espagne' ? <a href="">Habilidades</a> : <a href="">Compétences</a>}
                {spanish === 'Espagne' ? <a href="">Proyectos</a> : <a href="">Projets</a>}
                {spanish === 'Espagne' ? <a href="">Contácteme</a> : <a href="">Contactez-moi</a>}
            </nav>
        </div>
    );
};

export default Header;