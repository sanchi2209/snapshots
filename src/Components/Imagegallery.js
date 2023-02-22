import React, { useEffect, useState,useContext } from 'react'
import {searchImages} from "./Fetchimages"
import Menuitems from './Menuitems'
import Menus from './Menus'
import { CategoryContext } from '../Helper/Context'
import Search from './Search.js'

const Imagegallery=()=>{
   const [imgs, setImgs]=useState([])
   const [search,setSearch]=useState()
  useEffect( ()=>{
    
    fetchData("Nature")

   },[search])
 

   async function fetchData() {
    const res = await searchImages(search);
    
    setImgs(res.data.results)
    }
  
  
  
 return (
<CategoryContext.Provider value={{image:[imgs, setImgs],query:[search,setSearch]}}>
    <h1 className="mt-5 text-center main-heading my-5">Image Gallery</h1>
        <Search  setSearch={setSearch} />
         <Menus/>
         <Menuitems imgs={imgs}/>
         </CategoryContext.Provider>)
}
export default Imagegallery