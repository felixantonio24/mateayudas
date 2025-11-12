 import Styles from './styles/Header.module.css'

 const Header = ()=>{

    return(
        <>
        <div className={Styles.container
        }>
            <h1 className={Styles.tittle_principal}>Resuelve tus Exámenes de Matemáticas</h1>
            <p className={Styles.parr_header}> Ayuda profesional en matemáticas, trigonometría y más. Obtén soluciones paso a paso y mejora tus calificaciones con nuestro equipo de expertos.</p>
            <button> Solicitar Ayuda Ahora</button>
        </div>
        </>
    )
 }  

 export default Header;