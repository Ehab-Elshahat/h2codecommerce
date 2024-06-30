import { createContext, useEffect, useState } from "react";
import axios from "axios";
  
export const FetchData = createContext()

function DataContextProvider({children}){
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);


useEffect(() => {

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data)
    } catch (error) {
      setError(error)
    }finally {
      setLoading(false)
    }
  }
fetchData()
},[]);

return <FetchData.Provider value={{data, loading, error}}>{children}</FetchData.Provider>

}

export default DataContextProvider

