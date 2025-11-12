import Style from './styles/Nav.module.css'
import Image from '../assets/reglatriangular.png'

const Nav = () => {

    return(
        <>   
        <div className={Style.container_nav}>
             <div className={Style.tittle_principal}><img src={Image} className={Style.icon_regla} alt="" />MateAyudas</div>
            <ul >
                
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Ventajas</li>
                <li>Contactos</li>
            </ul>
        </div>
        
        </>
    )
}
export default Nav;