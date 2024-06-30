/** @format */
import React,{useContext} from 'react'
import { FetchData } from '../Context/AllProductsContext';
import Product from '../Product/Product';
import { Circles } from 'react-loader-spinner';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import { Helmet } from 'react-helmet';


function Home() {
  const { data, loading } = useContext(FetchData);


  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce Home</title>
        
      </Helmet>
      <div className="container" style={{ marginBottom: "100px" }}>
        <h2 className="fw-normal text-center my-4  mx-auto ">
          {" "}
          Filter By Category
        </h2>
        <CategoryBtn />
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
        <div className="row align-items-center ">
          {data.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home