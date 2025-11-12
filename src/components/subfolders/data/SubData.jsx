// En src/components/subfolders/data/SubData.jsx
// Sube tres niveles (data -> subfolders -> components -> src) y entra a 'assets'

import Algebra from '../../../assets/algebra.png'; 
import Geometria from '../../../assets/geometria.png';
import Aritmetica from '../../../assets/aritmetica.png';
import Preparacion from '../../../assets/trigonometria.png';
import ReglaTriangular from '../../../assets/reglatriangular.png';
import Fisica from '../../../assets/sistemapng.png'

// Ya no tendrás que usar 'trigonometria.png' para "Preparación",
// ya que tienes 'preparacion.png' en tu carpeta de assets:


export const SubData = [
    { 
    iconSr: Algebra,
    title : "Algebra",
    description:" Ecuaciones lineales, cuadráticas, sistemas de ecuaciones, factorización y más. Resolvemos problemas paso a paso." },
    {
      iconSr:Aritmetica,
      title:"Aritmetica",
      description:"Suma, Resta, Multiplicación, División, Potenciación, Raíces."
    }
,
    {
       iconSr:Geometria,
       title: "Geometria",
       description:"Geometría plana y espacial, teoremas, demostraciones y cálculo de áreas y volúmenes."
    },
    {
        iconSr:ReglaTriangular,
        title: "Geometría",
        description: "Funciones trigonométricas, identidades, ecuaciones trigonométricas y aplicaciones en geometría."

    },

    {
        iconSr:Preparacion,
        title:"Preparación de examen",
        description:"Preparación específica para exámenes, repaso de temas y práctica intensiva."
    },
    {
        iconSr: Fisica,
        title:"Fisica",
        description:"Cinemática, dinámica, energía, electricidad y más. Resolvemos problemas paso a paso."
    }


];


