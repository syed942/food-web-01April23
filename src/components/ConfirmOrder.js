import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
//import { Order } from './Order'
import DatePicker from 'react-date-picker';
import Datetime from 'react-datetime';
import styles from '../components/layout/pages/Carts/OrderConfirm.module.css'
import axios from 'axios'
export const ConfirmOrder = () => {
    const [maxId, setMaxId] = useState([]);
    console.log("max is id ", maxId)
  
  
    console.log("max is id ", typeof (maxId))
    const CalculateTotal = (items) =>
      items.reduce((ack, item) => ack + item.amount * item.price, 0);
    // const GrossTotal = CalculateTotal(cartItems).toFixed(2)
    const FetchData = async () => {
      await axios.get('http://localhost/ReactApps/food-web/OrderId.php').then(res => {
        console.log(res.data)
        setMaxId(res.data)
      })
    }
    useEffect(() => {
      FetchData();
  
    }, [])
    const Oids = maxId.map(el => el.orderId)
    console.log(Oids)
    const max = Math.max(...Oids);
    console.log("max order id",max)
    const [ordermsg, setOrderMsg] = useState(false);
    const navigate = useNavigate()
    const loc = useLocation()
    const id = loc.state.id;
    const name = loc.state.name;
    const price = loc.state.price;
    const quantity1 = +loc.state.quantity1;
    const GrossTotal = loc.state.GrossTotal;
    console.log("GrossTotal is",GrossTotal)


    const [Odate, setOdate] = useState("2022-12-28")
    console.log(Odate)
    const [OrderForm, setOrderForm] = useState({
        name: "",
        subTotal: loc.state.subTotal,
        daddress: "",
        contactNo: "",
        price: loc.state.price,
        quantity: loc.state.quantity1,
        id: loc.state.id,

    })

    const getDate = () => {
        var date = OrderForm.Odate.getDate().toLocaleString();
        // setOrderForm({...OrderForm,Odate:date})
        setOdate(date)

    }

    const HandleSubmit = (e) => {
         e.preventDefault();

        console.log(Odate);
        //console.log("form order summitte",OrderForm,Odate.toLocaleString())
        const formData = new FormData();
        formData.append('Oid', max +1);
        formData.append('name', OrderForm.name)
        formData.append('subTotal', OrderForm.subTotal);
        formData.append('quantity', OrderForm.quantity);
        formData.append('pid', OrderForm.id);
        formData.append('odate', Odate);
        formData.append('GrossAmount',GrossTotal);
        formData.append('address', OrderForm.daddress);
        formData.append('contactNo', OrderForm.contactNo);
        // let url = "http://localhost/Server.php"
        // let url = "http://localhost/ReactApps/food-web/AddOrder.php"
        let url = "http://localhost/ReactApps/food-web/AddOrder1.php"
        axios.post(url, formData, {
        })
            .then(res => {
                console.log(res.data);
            })
        //alert(`form is submittes ${OrderForm}`);
        //  navigate("/listtransactionsnew")
        //  console.log("order placed successfully")
        //alert("order submitted successfully")
        //navigate("/listtransactionsnew")
    setOrderMsg(true)
    }
    const HandleChange = (e) => {
        setOrderForm({ ...OrderForm, [e.target.name]: e.target.value })
    }
    const handleDateChange = (date) => {
        // handleChange(date) {  
        setOdate(date)

    }


    return (
        <div>
            

            {/* <h3>Amount:{OrderForm.Amount}</h3>
             <h3>Product Id: {OrderForm.id}</h3>
             <h3>Quantity: {OrderForm.quantity}</h3>
             <h4>Date order: {Odate.toLocaleString()}</h4> */}
            <div className={styles.main}>
            <div onClick={()=>setOrderMsg(!ordermsg)}  className={styles.orderConfirm}>
                {
                     ordermsg ? <div 
                     className={styles.confirmOrderMessage}
                     >Your Order placed successfully</div> :""
                }
            </div>
                <h4 style={{ textAlign: "center" }}>Order Particulars</h4>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <table align='center' className={styles.table}>
                        <tr>
                            <td>
                                <label htmlFor='name'>
                                    Customer Name
                                </label>
                            </td>
                            <td>
                                <input type="text" id="name" style={{ width: "90%" }}
                                    className="form-control" required
                                    onClick={()=> setOrderMsg(false)}
                                    value={OrderForm.name} name="name" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='address'>
                                    Customer Address
                                </label>
                            </td>
                            <td>
                                <input type="text" id="address" style={{ width: "90%" }}
                                    className="form-control" required
                                    value={OrderForm.daddress} name="daddress" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='cell'>
                                    Customer Cell No
                                </label>

                            </td>
                            <td>
                                <input type="text" id="cell" style={{ width: "90%" }}
                                    className="form-control" required
                                    value={OrderForm.contactNo} name="contactNo" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='ItemId'>
                                    Item Id:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="ItemId" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.id} name="id" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='price'>
                                    Item Price:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="price" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.price} name="price" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='quantity'>
                                    Item Quantity:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="quantity" style={{ width: "90%" }}
                                    className="form-control"
                                    value={OrderForm.quantity} name="quantity" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='amount'>
                                    Order Amount:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="amount" style={{ width: "90%" }}
                                    className="form-control"
                                    amount value={OrderForm.subTotal} name="Amount" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='date'>
                                    order Date
                                </label>

                            </td>
                            <td>
                                <input type="date" value={Odate} id="date" className="form-control"
                                    style={{ width: "90%" }}
                                    onChange={(e) => setOdate(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className='btn btn-md btn-success'  >save</button>
                                <button onClick={() => navigate("/listtransactionsnew")} className='btn btn-md btn-danger' >
                                    More Order
                                </button>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </table>



                </form>



            </div>

        </div>
    )
}
