import './App.css';
import React, { useEffect, useState,useContext } from 'react'
import { searchImages } from './Components/Fetchimages';
import Menuitems from './Components/Menuitems'
import Menus from './Components/Menus'
import { CategoryContext } from './Helper/Context'
import Search from './Components/Search.js'
// import './.env'
function App() {
  const [imgs, setImgs]=useState([])
   const [search,setSearch]=useState("Nature")
  useEffect( ()=>{
    
    fetchData()

   },[search])
 

   async function fetchData() {
    const res = await searchImages(search);
    
    setImgs(res.data.results)
    }
  return (
<CategoryContext.Provider value={{image:[imgs, setImgs],query:[search,setSearch]}}>
    <div className="App">
      
    <h1 className="mt-5 text-center main-heading my-5">Image Gallery</h1>
        <Search  />
         <Menus/>
         <Menuitems />
        
    </div>
    </CategoryContext.Provider>
  );
}

export default App;