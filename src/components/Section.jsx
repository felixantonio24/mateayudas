import Style from './styles/Section.module.css'
import { SubData } from './subfolders/data/SubData';
import SubCards from './subfolders/SubCards';
const Section = () =>{

    return(
        <><section>
            <div className={Style.container_section}>
                <div className={Style.title_h2Section}>
                    <h2>Nuestros Servicios</h2>
                </div>

                <div>
                    <div className={Style.container}>
                {SubData.map((service, index) => (
                    <SubCards
                      
                        key={index} 
                        iconSr={service.iconSr}
                        title={service.title}
                        description={service.description}/>
                ))} 
                    </div>   
                </div>
            </div>
          </section>  
        </>
    )
}

export default Section;