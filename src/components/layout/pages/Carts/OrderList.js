import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './OrderList.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { PaginateOrderList } from '../UI/PaginateOrderList';
export const OrderList = () => {
    const [data, setData] = useState([{}])
    const [limit, setLimit] = useState(5)
    const [FromDate, setFromDate] = useState("2022-12-06")
    const [ToDate, setToDate] = useState("2022-12-28")
    console.log(FromDate)
    console.log(ToDate.getDate)
    const FecthData = async () => {
        // setSkeleton(false)
        await axios.get('http://localhost/ReactApps/food-web/ListOrder.php').then(res => {
            console.log(res.data)
            setData(res.data)
            //  setCurrentItems(res.data);
            //  setCurrentItems([...res.data.slice(pagination.start, pagination.end)])
            // e.preventDefault()


        })
    }
    useEffect(() => {

        setTimeout(() => {
            // console.log('Hello, World!')
            FecthData()
        }, 3000);

    }, [])



    const SearchOrder = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        //formData.append('id', user.id);
        formData.append('date1', FromDate.toString())
        formData.append('date2', ToDate.toString());

        // let url = "http://localhost/Server.php"
        let url = "http://localhost/ReactApps/food-web/SearchOrder.php"
        axios.post(url, formData, {
        })
            .then(res => {
                console.log(res.data);
            })
        console.log("form date", FromDate)
        console.log("to date", ToDate)
        console.log("serach order pressed")
        var params = {
            date1: FromDate.toString(),
            date2: ToDate.toString()
        }
        const result1 = axios.get("http://localhost/ReactApps/food-web/SearchOrder.php", { params }).then((data) => {
            console.log("data is", data)
            setData(data.data)
        }).catch((error) => { })
      

    }

    return (
        <div>
            <label><h4>From Date</h4></label>
            <input type="date" value={FromDate}

                onChange={(e) => setFromDate(e.target.value)}
            />
            <label><h4>To Date</h4></label>
            <input type="date" value={ToDate}
                onChange={(e) => setToDate(e.target.value)}
            />
            <button onClick={SearchOrder}>
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>




            <PaginateOrderList limit={limit} items={data}
                from={FromDate} to={ToDate}
            />




        </div>
    )
}
