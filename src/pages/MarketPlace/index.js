import React, { useState, useEffect } from "react";
import MarketplaceCard from "../../components/MarketplaceCard";
import Searchbox from "../../components/Searchbox";
import axios from 'axios'
import { marketplace } from "../../utils/marketplace";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MarketPlace() {

  const [services, setServices] = useState([])
  const [filtereditem, setitem] = useState("");
  const [filteredcategory, setCategory] = useState("All");
  const[loading, setLoading] = useState(true)

  // console.log("cateeee", filteredcategory)
  const errorNotify = (message) => toast.error(message)
  const successNotify = (message) => toast.success(message)

  const token = localStorage.getItem("token")

  
  useEffect(()=>{
    axios
    .get('https://connect-ng.herokuapp.com/api/services',
      {headers: {"Authorization": `Token ${token}`}})
    .then(response => {
        const data = response.data
        console.log("data", data)
        setServices(data)
        setLoading(false)
    })
    .catch(error => {
      const data = error.response
      console.log("error", data)
    })
  },[])

  const onInputChange = (e) => setitem(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);


  const filteredEntry = services.filter((item) => {
     if (filtereditem === "" && filteredcategory === "All"){
       return item;
     }else if(filtereditem === "" && item.category.map(each => { return each.name.toLowerCase()}).includes(filteredcategory.toLowerCase())){
        return item;
     }
     else if(filteredcategory === "All" && item.description.toLowerCase().includes(filtereditem.toLowerCase())){
        return item;
     }
     else if(item.category.map(each => { return each.name.toLowerCase()}).includes(filteredcategory.toLowerCase())
     && item.description.toLowerCase().includes(filtereditem.toLowerCase())){
      return item;
     }
     });

  return (  
    <>
    <ToastContainer />
    <div className={`mt-6`}>
      <Searchbox 
      searchitem={onInputChange} 
      categorySelect={onCategoryChange}
      />
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 my-4`}>   
        {loading && <Skeleton height={200}/>}  {loading && <Skeleton height={200}/>}  {loading && <Skeleton height={200}/>}
        {loading && <Skeleton height={200}/>}  {loading && <Skeleton height={200}/>}  {loading && <Skeleton height={200}/>}
        {// filterCategories
        !loading && filteredEntry.map((items) => {
          return <MarketplaceCard 
                  errorNotify={(d)=>errorNotify(d)}
                  successNotify={(d)=>successNotify(d)}
                  dummy={marketplace} 
                  marketplace={items} 
                  key={items.id} />;
                })}
      </div>
    </div>
    </>
  );
}
