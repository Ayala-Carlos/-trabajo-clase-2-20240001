//https://retoolapi.dev/GH2Ivb/dataMovil

import {useState, useEffect} from 'react'

const useCustomData = () => {

  //creación de estado donde guardaremos la información que obtenemos de la API, y otro estado para manejar el loading
  const [workerData, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  //función que se encarga de hacer la petición a la API y guardar la información en el estado
   const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://retoolapi.dev/GH2Ivb/dataMovil');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

  //useEffect que se ejecuta una sola vez cuando el componente se monta, y llama a la función fetchData para obtener la información de la API
  useEffect(() => {
     fetchData();
  }, []);

  //retornamos la información obtenida de la API y el estado de loading para que pueda ser utilizado en el componente que lo llame
  return { workerData, loading };
}   

//exportamos el hook para que pueda ser utilizado en otros componentes
export default useCustomData;