import React,{useState, useEffect} from "react";
import styles from './searchbox.module.css'
import axios from 'axios'

const Searchbox = (props) => {

  const token = localStorage.getItem("token")
  const[categories, setCategories] = useState([])

  useEffect(()=>{

    axios
    .get(`https://connect-ng.herokuapp.com/api/category`, {
    },{headers: {"Authorization": `Token ${token}`}})
    .then(response => {
        const data = response.data
        console.log("data", data)
        setCategories(data)
       
          
    })
    .catch(error => {
      const data = error.response
      console.log("error",data)
  
    })
  },[])
  

  return (
    <div className={`h-16 flex justify-center mx-auto my-10 w-1/2 bg-gray-300`}>
      <select
        onChange={props.categorySelect}
        className={`text-md w-30 text-center outline-none cursor-pointer ${styles.select}`}
      >
        <option>All</option>
        {categories.map(catg=>{return(
          <option>{catg.name}</option>
        )})}
      </select>
      <input
        type='text'
        placeholder='search services...'
        className={`bg-transparent w-full px-4 outline-none`}
        onChange={props.searchitem}
      />
    </div>
  );
}

export default Searchbox