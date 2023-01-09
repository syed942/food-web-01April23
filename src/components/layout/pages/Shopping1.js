import React ,{useState,useEffect} from 'react'
import { Paginate } from './UI/Paginate'
import axios from 'axios'
export const Shopping1 = () => {
    const [data,setData  ]=useState([])
   const [limit,setLimit]=useState(5)
   const FecthData = async () => {
    //setSkeleton(false)
    await axios.get('http://localhost/ReactApps/food-web/Product.php').then(res => {
      console.log(res.data)
      setData(res.data)
      


    })
  }
  useEffect(() => {
    FecthData()
    

  }, [])
  
  return (
    <div>
      

<div >

           
            {/* <li>
              <PaginatedItems items={data} itemsPerPage={limit}
                initialPage={1}


              />
            </li> */}
             
              <Paginate items={data} 
              
              limit={limit}
                initialPage={1}


              />
            
        
   </div>
    </div>
  )
}
