import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './sellerTemplate.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'


const SellerTemplate = () => {

    const navigate = useNavigate()
    const[categories, setCategories] = useState([])
    const[name, setName] = useState("")
    const[description, SetDescription] = useState("I will")
    const[price, setPrice] = useState("")
    const[category, setCategory] = useState([])
    const notify = (message) => toast.error(message)
    const token = localStorage.getItem("token")
    const fname = localStorage.getItem("first_name")
    const lname = localStorage.getItem("last_name")
    const seller = localStorage.getItem("id")

    
    const sortedCategories = categories.map((catg)=>{return( {"value" : catg.name, "label": catg.name})})
    // console.log("category", category)

    console.log("sort", sortedCategories)
    useEffect(()=>{
        setName(`${fname} ${lname}`)
        
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

    const refactoredCategory = category.map(c=>({"name" : c.value}))
    console.log("categorySend", refactoredCategory)
    const handleSubmit = e =>{
        e.preventDefault()

        axios
        .post(`https://connect-ng.herokuapp.com/api/user/${seller}/services`, {
          seller,
          name,
          description,
          price,
          category: refactoredCategory
        },{headers: {"Authorization": `Token ${token}`}})
        .then(response => {
            const message = response.data
            console.log("message", message)
            setTimeout(() => {
                navigate('/sellerlistings');
              }, 2000)
              
        })
        .catch(error => {
          const er = error.response  
          console.log("error",er)
        //   notify(data.data.message)
  
        })
        
    }

    return (
        <>
        <ToastContainer />
        <div className={`${styles.modalContainer}`}>

        <div className={`${styles.modalOverlay}`}>
        <div className={`${styles.modal}`}>
        <div className={`${styles.imgCon}`}>
            <img className={`${styles.img}`} src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img" />
        </div>
        <div >
            <form 
            onSubmit={handleSubmit}
            method="post"
            action=""
            className={`${styles.content}`}
            >
            <div className={`${styles.block}`}>
                
                
                <input 
                placeholder="name" 
                className={`${styles.input}`} 
                // onChange={e => setName(e.target.value)}
                value={name}
                />

                {/* <input placeholder="i will" className={`${styles.input}`} /> */}
                 
                <textarea 
                placeholder="Description" 
                className={`${styles.textarea}`} 
                onChange={e => SetDescription(e.target.value)}
                value={description}
                /> 
                
                <Select 
                options={sortedCategories}
                isMulti={true}
                hideSelectedOptions={false}
                placeholder='Category'
                className={`${styles.category}`}
                value={category}
                onChange={value =>setCategory(value)}
                /> 

                <div className={`${styles.bottomBlock}`}>
                <input 
                placeholder="enter price" 
                type="number"
                className={`${styles.price}`} 
                onChange={e => setPrice(e.target.value)}
                value={price}
                >
                </input>

                <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btn}`}>
                    POST    
                </button>
                </div>
                </div>
                        
            </div>
            </form>
        </div>
        </div>
        </div>

        </div>
        </>
    )
}

export default SellerTemplate
