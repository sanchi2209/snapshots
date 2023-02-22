import axios from "axios";
export const searchImages = async (searchTerm) => {
  
  const headers = {
    Authorization: `Client-ID Tn0M3jozghR4Y1FYHR9shAKiYIintWx5CdoqTeqwouU`
};


 const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}`,{headers})
  .then(response =>  
    response
  )
  .catch(error => {
      
      console.error('There was an error!', error);
  });

  return response
} 