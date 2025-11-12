import Style from '../subfolders/SubCards.module.css';
// Este componente solo se encarga de mostrar UN servicio
const SubCards = ({ iconSr, title, description }) => {
    return ( 

        <div className={Style.service_card}>
            <img src={iconSr} alt={`Icono de ${title}`}  className={Style.image}/> 
            <h3>{title}</h3>
            <p className={Style.parr}>{description}</p> 
            </div>

    );
}

export default SubCards;