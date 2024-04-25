import React from 'react'
import CategoriesSidebar from './CategoriesSidebar'
import AllProducts from './AllProducts'
import "./productsidebar.css"

const Product_Sidebar = () => {
  return (
    <div className='product_sidebar'>
      <CategoriesSidebar/>
      <AllProducts/> 
    </div>
  )
}

export default Product_Sidebar