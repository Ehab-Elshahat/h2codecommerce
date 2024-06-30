import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CategoryBtn() {

  const [category, setCategory] = useState([]);

 async function getCategories() {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategory(data);
    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(() => {
    
    getCategories();
  }, []);

  return (
    <div className="my-4 text-center">
      {category.map((item, index) => (
        <Link to={`/${item}`} className="btn btn-outline-primary mx-1 text-capitalize mb-md-0 mb-3" key={index}>
          {item}
        </Link>
      ))}

      
    </div>
  );
}

export default CategoryBtn