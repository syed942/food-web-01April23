import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Order } from './Order'
import DatePicker from 'react-date-picker';
import Datetime from 'react-datetime';
import styles from './OrderConfirm.module.css'
import axios from 'axios'
export const OrderConfirm = () => {
    // const [odate,setOdate] =useState("");
    const navigate = useNavigate()
    const location = useLocation()
    const [Odate, setOdate] = useState("2022-12-28")
    const [orderMsg,setOrderMsg] = useState(false)
    console.log(Odate)
    const [OrderForm, setOrderForm] = useState({
        name: "",
       // Amount: location.state.Amount,
        daddress: "",
        contactNo: "",

      //  quantity: location.state.Quantity,
      //  id: location.state.Pid,

    })

    const getDate = () => {
        var date = OrderForm.Odate.getDate().toLocaleString();
        // setOrderForm({...OrderForm,Odate:date})
        setOdate(date)

    }
   
    const HandleSubmit = (e) => {
        e.preventDefault()
       
        const formData = new FormData();
        formData.append('name', OrderForm.name)
         formData.append('Oid',location.state.maxOrderId+1 );
      //   formData.append('GrossAmount', location.state.GrossAmount);
      //  formData.append('pid', OrderForm.id);
        formData.append('odate', Odate);
        formData.append('address', OrderForm.daddress);
        formData.append('contactNo', OrderForm.contactNo);
        for(let i=0;i<location.state.Pids.length;i++){
            const amount= location.state.prices[i] * location.state.Quantities[i]
            console.log("formDta",formData)
           if(i !== location.state.Pids.length - 1){
             
              formData.append('GrossAmount', 0);
           }else{
              formData.append('GrossAmount', location.state.GrossAmount);
           }
           formData.append("pid",location.state.Pids[i])
          // formData.append("names",Names[i])
         //  formData.append("prices",prices[i])
           formData.append("quantity", location.state.Quantities[i])
           formData.append("subTotal", amount)
           let url = "http://localhost/ReactApps/food-web/AddOrder1.php"
           axios.post(url, formData, {
           })
               .then(res => {
                   console.log(res.data);
               })
        }
        // formData.append("key1", "value1");
        // formData.append("key2", "value2");
        
        // // Display the values
        // for (const value of formData.values()) {
        //   console.log(value);
        // }
        setOrderMsg(true)
       
    }
    const HandleChange = (e) => {
        setOrderForm({ ...OrderForm, [e.target.name]: e.target.value })
    }
    


    return (
        <div>

           
            <div className={styles.main}>
            <div onClick={()=>setOrderMsg(!orderMsg)}  className={styles.orderConfirm}>
                {
                     orderMsg ? <div 
                     className={styles.confirmOrderMessage}
                     >Your Order placed successfully</div> :""
                }
            </div>
                <h4 style={{textAlign:"center"}}>Order Particulars</h4>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <table align='center'className={styles.table}>
                        <tr>
                            <td>
                                <label htmlFor='name'>
                                    Customer Name
                                </label>
                            </td>
                            <td>
                                <input type="text" id="name" style={{width:"90%"}}
                                className="form-control"
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
                                <input type="text" id="address" style={{width:"90%"}}
                                className="form-control"
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
                                <input type="text" id="cell" style={{width:"90%"}}
                                className="form-control"
                                value={OrderForm.contactNo} name="contactNo" onChange={HandleChange} />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>
                                <label htmlFor='ItemId'>
                                    Item Id:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="ItemId" style={{width:"90%"}}
                                className="form-control"
                                value={OrderForm.id} name="id"  />
                            </td>
                        </tr> */}
                        {/* <tr>
                            <td>
                                <label htmlFor='amount'>
                                    Order Amount:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="amount" style={{width:"90%"}}
                                className="form-control"
                                amount value={OrderForm.Amount} name="Amount"  />
                            </td>
                        </tr> */}
                        {/* <tr>
                            <td>
                                <label htmlFor='quantity'>
                                    Item Quantity:
                                </label>

                            </td>
                            <td>
                                <input type="number" id="quantity" style={{width:"90%"}}
                                className="form-control"
                                value={OrderForm.quantity} name="quantity"  />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <label htmlFor='date'>
                                    order Date
                                </label>

                            </td>
                            <td>
                                <input type="date" value={Odate} id="date" className="form-control"
                                style={{width:"90%"}}
                                    onChange={(e) => setOdate(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className='btn btn-md btn-success'  >save</button>
                                <button onClick={() => navigate("/shopping1")} className='btn btn-md btn-danger' >
                                    Cancel
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
