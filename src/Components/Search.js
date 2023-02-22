import React from "react";
import { CategoryContext } from '../Helper/Context'
const Search =() => {
    const { image,query } = React.useContext(CategoryContext); 
    const [search,setSearch]=query
  
 
return(
    <>
     <div className="input-group">
    <div className="form-outline">
    <input id="search-Term" type="search" className="form-control" />
    
  </div>
  <button type="button" className="btn btn-primary"  onClick={()=>{setSearch(document.getElementById("search-Term").value)}}      >
   {/* <i className="fas fa-search"></i> */}
   Search
  </button>
        </div>
    </>
)
}
export default Search
