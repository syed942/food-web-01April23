import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
//import { Container } from './Container'
import axios from 'axios'
// import { Items } from './Items/Items';
//import Carts from './Carts/Carts';
//import styles from './Items/Items.module.css'
import styles from './Paginate.module.css'

import ReactDOM from 'react-dom';
import { Items } from '../Items/Items';
import Carts from '../Carts/Carts';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TransactionContext } from '../../../../context/TransactionContext';
import { CartTransaction } from '../../../CartTransaction';
function Items1() {
    const { addTransaction,cart,getTransactions,transactions } = useContext(TransactionContext)
    //const { getTransactions,transactions}=   useContext(TransactionContext)
    const navigate = useNavigate()
    //const [data, setData] = useState([...items])

    const [currentItems, setCurrentItems] = useState([]);
    const [openDrawer, setOpenDrawer] = useState(false)
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)
    const [counter, setCouter] = useState(0)
    console.log("currentPage", currentPage)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [forcePage, setForcePage] = useState(0)
    //const [data,setData]= useState([...items])
    //console.log(data)
    const [list, setList] = useState([])
    const [limit, setLimit] = useState(5)
    const [itemsPerPage, setItemsPerPage] = useState(limit)
    //let itemsPerPage= limit;



useEffect(()=>{
    getTransactions()
    setCouter(transactions)

},[])
    const handleLimit = (e) => {
        e.preventDefault()
        setLimit(e.target.value)
        setItemOffset(0)

        setItemsPerPage(e.target.value)
        setForcePage(0)
        setCurrentPage(0)

    }


    const handlePageClick = (event) => {

        let selected = event && event.selected;
        console.log(event.selected)
        console.log(selected)
        //    setCouter(selected)
        //  setCurrentPage(parseInt(event&& event.selected))

        setForcePage(selected)


        const newOffset = (parseInt(selected) * limit)



        console.log("newOffset", newOffset)
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);

        navigate({
            pathname: '/listtransactionsnew',
            search: "?" + new URLSearchParams({ limit: limit }).toString() + "&&" + new URLSearchParams({ offset: newOffset }).toString()
        })
    }
    useEffect(() => {
        changeUrl();
    }, [limit])
    // useEffect(()=>{
    //   navigate("list/?limit=10&&offset=0");

    // },[])
    const changeUrl = () => {
        navigate({
            pathname: '/listtransactionsnew',
            search: "?" + new URLSearchParams({ limit: limit }).toString() + "&&" + new URLSearchParams({ offset: itemOffset }).toString()
        })
    }

    useEffect((e) => {
        // Fetch items from another resources.
        const endOffset = parseInt(itemOffset) + parseInt(itemsPerPage);
        console.log(endOffset)
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const current = transactions
        console.log(current)
        console.log(transactions.slice(itemOffset, endOffset));

        setCurrentItems(transactions.slice(itemOffset, endOffset));
        //setCurrentItems(items.slice(5, 10));
        setPageCount(Math.ceil(transactions.length / limit));

    }, [itemOffset, limit, currentItems, itemsPerPage]);
    
    const CalculateTotal1 = (cart) =>
        cart.reduce((ack, item) => ack + item.quantity1, 0);
        const   AddItem =(item)=>{
            //  QuantityInc()
               addTransaction(item)
              // console.log(QuantityInc())
              
              }

    return (<>
        <header style={{ backgroundColor: "skyblue" }}>
            <IconButton aria-label="cart" onClick={() => setOpenDrawer(true)} style={{marginLeft:"85%"}}>
                <Badge badgeContent={CalculateTotal1(cart).toFixed(0)} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>

        </header>
        <div className={styles.wrapper}>{
            currentItems?.map(item =>{
                return(<>
                    <div key={item.productId} className={styles.item}>
                      <span style={{fontSize:"14px",fontWeight:"bold"}}>Id: {item.productId}</span>
                  <p style={{fontSize:"14px",fontWeight:"bold"}}>Name:    {item.name}</p>  
                  <p style={{fontSize:"14px",fontWeight:"bold"}}> Price:   {item.price}</p>
                        <img src={item.image} alt="ll" height="100px" width="100px"/>
                        <br/>
                        <br/>
                    
          <button onClick={()=>AddItem(item)}
          className="btn btn-lg btn-success"
          >Add</button>
         
                    </div>
                    </>)
            })
                // (<Items item={item} addToCart={handleAddToCart} key={item.productId} />))
        }</div>

        <Drawer anchor='right' onClose={() => setOpenDrawer(false)} open={openDrawer} 
          PaperProps={{
            sx: {
              height: 700,
              marginTop:"110px"
             
            }
          }}
        >


           <CartTransaction />
        </Drawer>
        {/* {
   currentItems?.map((item) => {
    return(
      <div key={item.productId}>
        <div>
          {item.name}
        </div>
        
      </div>
    )
   })
  } */}
        <div>



            <ul className='d-flex flex-wrap'>
                <li style={{ position: "relative", top: "10px", left: "-20px" }}>
                    <select style={{ height: "50px" }}
                        //  value={limit}
                        name="limit"
                        //  placeholder={placeholder}
                        onChange={e => handleLimit(e)}

                    >

                        <option value="5">5</option>
                        <option value="10">
                            10
                        </option>
                        <option value="15">15</option>
                    </select>
                </li>
                <li style={{ position: "relative", top: "10px", left: "-20px" }}>

                    <div>




                        <ReactPaginate

                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLabel="..."

                            nextLabel="next >"
                            itemsPerPage={itemsPerPage}

                            onPageChange={(event) => handlePageClick(event)}
                            pageRangeDisplayed={null}
                            forcePage={forcePage}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                        />








                    </div>

                </li>
            </ul>








        </div>
    </>)

}
export const PaginateProductReducers = () => {
  //  console.log(items)
    // console.log(initialPage)


    return (
        <div>
            <Items1
                //currentItems={currentItems} 
              //  items={items}
            // initialPage={initialPage}


            />

        </div>
    )
}

