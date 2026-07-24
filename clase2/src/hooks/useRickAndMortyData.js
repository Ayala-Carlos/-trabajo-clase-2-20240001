import { useState, useEffect } from "react";

const useRickAndMortyData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Respuesta de red no ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error en la llamada Fetch:", err);
        setError("No se pudieron obtener los datos.");
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useRickAndMortyData;