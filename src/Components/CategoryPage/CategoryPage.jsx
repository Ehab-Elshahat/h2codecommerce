import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import Product from '../Product/Product';
import { Helmet } from 'react-helmet';

function CategoryPage() {
  const { category } = useParams();
  const [data, setData] = useState([])
  const [loading, setLoading] =useState(false)


  async function getData () {
    setLoading(true)
    try {

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setData(response.data)
       setLoading(false);
      
    } catch (error) {
     
      setLoading(false);
    }
  }

 

  useEffect(() => {
    getData()
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce {category}</title>
      </Helmet>
      <h2 className="my-4 text-primary text-center text-capitalize">
        {category}
      </h2>
      <div className="row">
        {loading && (
          <div className=" d-flex justify-content-center align-items-center  mt-5">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage