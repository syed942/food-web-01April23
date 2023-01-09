


import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal';
import './UI/Styles.css';
import { AddUserModal } from './AddUserModal';
import { UpdateUserModal } from './UpdateUserModal';
import { SelectAll, SelectAll2 } from './UI/SelectAll2';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import emailjs from '@emailjs/browser';
import 'react-loading-skeleton/dist/skeleton.css'
import QueryString from 'query-string'
import { Pagination } from './UI/Pagination';
import { stepButtonClasses } from '@mui/material';
import SkeletonUser from './UI/SkeletonUser';
import { display } from '@mui/system';
import styles from './List.module.css'
import { AddUserModal1 } from './AddUserModal1';
import { FlexBox } from '../../FlexBox';
import { NavBar } from '../../navbar/NavBar';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };
//const baseURL = `http://localhost/ReactApps/food-web/SearchUser.php`;
const baseURL = `http://localhost/ReactApps/food-web/UpdateUser.php/?`;
export const List = () => {
  const navigate = useNavigate()
  
  const loc = useLocation()
  // const history=useHistory()
  console.log(loc.pathname)
  const { search } = loc
  const parsed = QueryString.parse(search)
  console.log(parsed?.limit)
  console.log(parsed?.offset)
  const location = useLocation()
  //const {name}= location.state.name;
  // console.log(location.state.name)
  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true)
  const [numberOfButtons, setNUmberOfButtons] = useState(0);
  const [editUser, setEditUser] = useState({});
  const [currentItems, setCurrentItems] = useState([])
  const [ProductId, setPid] = useState(0)
  const [limit, setLimit] = useState(parsed.limit)
  console.log(data)
  // const [category,setCategory]=useState("plz enter category")
  // const [searchId,setSearchId]=useState(0)
  const [showPerPage, setShowPerPage] = useState(limit)
  const [pagination, setPagination] = useState({
    start: parsed.offset,
    end: showPerPage
  })
  console.log("per page rec", showPerPage)
  const FecthData = async () => {
    setSkeleton(false)
    await axios.get('http://localhost/ReactApps/food-web/UserList.php').then(res => {
      console.log(res.data)
      setData(res.data)
      //  setCurrentItems(res.data);
      //  setCurrentItems([...res.data.slice(pagination.start, pagination.end)])
      // e.preventDefault()


    })
  }
  useEffect(() => {

    setTimeout(() => {
      console.log('Hello, World!')
      FecthData()
    }, 3000);

  }, [])
  useEffect(() => {
    // setCurrentItems([...data])
    setCurrentItems([...data.slice(pagination.start, pagination.end)])
  }, [...data])

  useEffect(() => {
    // const a=[...data];

    setCurrentItems([...data.slice(pagination.start, pagination.end)])
    // setData([...currentItems])
  }, [pagination.start, pagination.end, limit])


  useEffect(() => {
    changeUrl();
  }, [limit])
  // useEffect(()=>{
  //   navigate("list/?limit=10&&offset=0");

  // },[])
  const changeUrl = () => {
    navigate({
      pathname: '/list',
      search: "?" + new URLSearchParams({ limit: limit }).toString() + "&&" + new URLSearchParams({ offset: pagination.start }).toString()
    })
  }
  const onPageChange = (start, end) => {

    console.log(start, end)
    setPagination({ start: start, end: end })
    navigate({
      pathname: '/list',
      search: "?" + new URLSearchParams({ limit: limit }).toString() + "&&" + new URLSearchParams({ offset: start }).toString()
    })
  }
  const handleLimit = (e) => {
    e.preventDefault()
    setLimit(e.target.value)
    setShowPerPage(e.target.value)
    onPageChange(0, e.target.value)
    setNUmberOfButtons(+Math.ceil(data.length / showPerPage))

  }

  console.log("current itens", [currentItems])
  // const [adduser, setAdduser] = useState({
  //   email: "javed@yahoo.com"
  // })
  // let subtitle;
  // let subtitle1;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const modalData = {
    title: 'Please Add New User',
    //body: ['Apple', 'Ipple', 'Opple', 'Upple', 'Epple']
  };
  const modalData2 = {
    title: 'Please Add New User222',
    //body: ['Apple', 'Ipple', 'Opple', 'Upple', 'Epple']
  };
  const modalData1 = {
    title: 'Please Edit User',
    //body: ['Apple', 'Ipple', 'Opple', 'Upple', 'Epple']
  };
  const [modalIsOpen1, setIsOpen1] = React.useState(false);



  function openFromParent1() {
    setIsOpen1(true);
  }

  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }
  function handleCloseModal1(event, data) {
    console.log(event, data);
    setIsOpen1(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }
  function handleAfterOpen1(event, data) {
    console.log(event, data);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openModal1(user) {
    console.log(user)
    setEditUser(user)
    setIsOpen1(true);

  }
  // function openModal1() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  console.log(data)


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    //e.preventDefault()
    e.preventDefault()

    console.log("form is submitted", form)
    // const formData=new FormData();
    // formData.append('email',form.email)
    const result = await axios.get(`http://localhost/ReactApps/food-web/SingleUser.php/?email=${form.email}`);
    //const result = await axios.get(`http://localhost/ReactApps/food-web/SingleUser.php/?userId=${form.id}`);
    setCurrentItems(result.data)

    // console.log("form is submitted", form)

    // // const user = data.filter((user) => user.email === form.email && user.password === form.password)
    // const user = data.filter((user) => user.email === form.email)
    // console.log(user[0].email)
    // setData(user)
    //navigate("update")


  }
  const handleUpdate = (user) => {
    console.log(user.email)
    console.log("update is pressed")

    // navigate("update", {
    //   state: {
    //     email: user.email,
    //     name:user.name,
    //     image:user.image,
    //     password:user.password,
    //  //  handleChange:{handleChange}

    //   }
    // })
  }

  const onAdd = (event, user,form1) => {
    const data1 = [...user.data]
    event.preventDefault()
    console.log(event.target)
    //console.log(num)
    console.log("add is pressed")
    console.log(user.email)
    console.log(user.file.name)

    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('name', user.name)
    formData.append('image', user.file);
    formData.append('name1', user.name1);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('data', user.data)
    // let url = "http://localhost/Server.php"
    let url = "http://localhost/ReactApps/food-web/AddUser.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })
      emailjs.sendForm('service_45un1qa', 'template_wdhkugw', form1.current, 'dkkdslkjhin_wG7bh')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   // window.location.reload(false);
navigate("/");
    // setData(res.data);

  }
  const onEdit = async (event, user) => {
    event.preventDefault()
    console.log("edit use data is", user)



    const formData = new FormData();
    //formData.append("id",user.id);
    // formData.append('name', user.Imgname)
    // formData.append('image', user.file1);
    formData.append('name1', user.Username);
    formData.append('email', user.userEmail);
    formData.append('password', user.userPassword);

    formData.append('data', user.data1)
    const name = formData.get('name')

    let url = "http://localhost/ReactApps/food-web/UpdateUser.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
        // setData(res.data);
      })

    navigate("/");

    // window.location.reload(false);
    // setData(res.data);


  }
  const EditImage = async (e, user) => {
    e.preventDefault()
    console.log("edit use data is", user)



    const formData = new FormData();
    //formData.append("id",user.id);
    formData.append('name', user.Imgname)
    formData.append('image', user.file1);
    // formData.append('name1', user.Username);
    formData.append('email', user.userEmail);
    // formData.append('password', user.userPassword);

    // formData.append('data', user.data1)
    // const name = formData.get('name')

    let url = "http://localhost/ReactApps/food-web/UpdateUserImg.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })


    window.location.reload(false);
    // setData(res.data);


  }

  const handleDelete = async (email) => {
    console.log("id is ", email)
    const result = await axios.delete(`http://localhost/ReactApps/food-web/DeleteUser.php/?email=${email}`);
    setData(result.data)
    window.location.reload(false);
  }
  const handleChangeChk = (e) => {

    const { name, checked } = e.target;
    console.log(name)
    console.log(checked)
    if (name === "Allselect") {
      // const user=[currentItems]
      let tempUser = currentItems.map(item => {
        return { ...item, isChecked: checked }
        // setCurrentItems(tempUser)
      })
      //  const user=tempUser;
      setCurrentItems(tempUser)
    } else {
      let tempUser = currentItems.map(item => item.email === name ? { ...item, isChecked: checked } : item)
      console.log(tempUser)
      setCurrentItems(tempUser)
      // setData(tempUser)




    }


    // const { name, checked } = e.target;



  }
  const deleteSelected = async (e) => {
    e.preventDefault()
    let newList = [...currentItems]
    const a = currentItems.filter((item) => item?.isChecked === true)
    console.log("checked array", a)
    for (let i = 0; i < a.length; i++) {
      const result = await axios.delete(`http://localhost/ReactApps/food-web/DeleteUser.php/?email=${a[i].email}`);
      // setData(result.data)

      const ind = newList.findIndex(el => el.email === a[i].email)
      newList.splice(ind, 1)
      // const DeleteOne=async()=>{


      // }

    }
    setCurrentItems(newList)
  }
  const DeleteAll = async () => {
    const result = await axios.delete(`http://localhost/ReactApps/food-web/DeleteAllUsers.php`);
    setData(result.data)
    console.log("aall record deketed")
  }
  const handleSubmitchk = (e) => {
    e.preventDefault()
    console.log("ckh pressed")
  }
  const logout = () => {
    localStorage.clear();
    //localStorage.setItem('admin',false)


    // setLogout(true)

  }
  return (
    <div>
{/* <NavBar logout={logout} /> */}
      <div className={styles.searchbar}>
        <div className={styles.searchBarItem}>
          <form onSubmit={handleSubmit}>
            <input type="email" value={form.email} name="email" onChange={handleChange}

              placeholder="Search by Email here!"

            />

            <button type="submit"
              data-toggle="tooltip" data-placement="top" title="Search User by Email "
              className={styles.searchIcon}>
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>

          </form>

        </div>
        <div className={styles.searchBarItem}>
          <button onClick={() => navigate("/")}
            data-toggle="tooltip" data-placement="top" title="View All Users "
            className="btn btn-md btn-secondary" style={{ width: "100%" }}>
            View All Users
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>

        </div>
        <div className={styles.searchBarItem}>
          <button data-toggle="tooltip" data-placement="top" title="Add New User "
            className="btn btn-md btn-success" style={{ width: "100%" }}
            onClick={openModal}>Add New User
            <i class="fa fa-plus"></i>
          </button>

        </div>
        <div className={styles.searchBarItem}>
          <button data-toggle="tooltip" data-placement="top" title="Delete selected users "
            className="btn btn-md btn-danger" style={{ width: "100%" }}
            onClick={(e) => deleteSelected(e)}>Delete  Users
            <i class="fa fa-trash" aria-hidden="true"></i></button>

        </div>

      </div>

      {
        skeleton ?
          <div className={styles.tableContainer}>
            <div className={styles.item}>
              <table className={styles.table}
              >
                <SkeletonTheme baseColor="#202020" highlightColor="#444">

                  <tr className='row18'>


                    <th>Name:</th>
                    <th>Email</th>
                    <th>Picture</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td><Skeleton count={limit} /></td>
                    <td><Skeleton count={limit} /></td>
                    <td><Skeleton count={limit} /></td>
                    <td><Skeleton count={limit} /></td>
                    <td><Skeleton count={limit} /></td>
                    {/* <td><Skeleton count={limit} /></td>
      <td><Skeleton count={limit} /></td> */}
                  </tr>

                  {/* <Skeleton count={limit} /> */}

                </SkeletonTheme>
              </table>
            </div>
          </div>

          :
          <div className={styles.tableContainer}>

            <div className={styles.item}>

              <form onSubmit={handleSubmitchk}>
                <table className={styles.table}>

                  <tr style={{ borderBottom: "2px solid gray" }}>

                    <th style={{ paddingLeft: "20px" }}>

                      <SelectAll2 list={currentItems} handleChange={handleChangeChk} />


                    </th>
                    <th >ID</th>
                    <th >
                      Name:</th>
                    <th>Email</th>
                    <th>Picture</th>
                    <th>Edit</th>
                    <th>Delete</th>


                  </tr>

                  {
                    // data[0].email

                    currentItems.map((user, index) => {
                      return (


                        <tr key={user.userId} style={{ borderBottom: "2px solid gray" }} >

                          <td style={{ paddingLeft: "20px" }}>
                            <input type="checkbox"

                              name={user.email}
                              checked={user?.isChecked || false}
                              onChange={handleChangeChk}

                            // checked={user?.isChecked || false}
                            // onChange={handleChangeChk}
                            />


                          </td>
                          <td style={{ padding: "0px" }}>{user.userId}</td>
                          <td style={{ padding: "0px" }}>
                            {user.name}</td>   <td style={{ padding: "0px" }}>{user.email}</td>   <td style={{ padding: "0px" }}><img src={user.image}
                              alt="ll" width="30px" height="30px" style={{ borderRadius: "50%" }} /></td>



                          {/* <td><button onClick={()=> handleUpdate(user)}>Update</button></td> */}
                          <td>
                            <span
                              className='btn btn-sm btn-warning'
                              onClick={() => openModal1(user)}>

                              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 15, width: 15 }}
                                viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9
30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6
88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3
 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32
  14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0
   32-14.3 32-32s-14.3-32-32-32H96z"/></svg>

                            </span>
                          </td>
                          <td><button
                            className='btn btn-sm btn-danger'
                            onClick={() => handleDelete(user.email)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button></td>

                        </tr>


                      )
                    })
                  }

                </table>
                <div>
                  <ul 

                  >
                    <li >
                      Display
                      <select
                        value={limit}
                        name="limit"
                        //  placeholder={placeholder}
                        onChange={handleLimit}

                      >

                        <option value="10">10</option>
                        <option value="20">
                          20
                        </option>
                        <option value="5">5</option>
                        <option value="25">25</option>
                      </select>
                      {/* <span><label>Records</label></span> */}
                    </li>


                    <div className='pagination  ' >
                      <li>

                        <Pagination showPerPage={showPerPage} onPageChange={onPageChange} numberOfButtons1={numberOfButtons}
                          total={data.length} limit={limit}

                        />



                      </li>
                    </div>
                  </ul>
                </div>

              </form>



            </div>

          </div>





      }




      <div>
        {/* <FlexBox 
        dynData={modalData2}
          handleClick={onAdd}
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
          /> */}

        {/* <AddUserModal1
          dynData={modalData2}
          handleClick={onAdd}
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        /> */}
        <AddUserModal
          dynData={modalData}
          handleClick={onAdd}
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />
        <UpdateUserModal
          dynData1={modalData1}
          data={editUser}
          editImg={EditImage}
          handleClick1={onEdit}

          IsModalOpened1={modalIsOpen1}
          onCloseModal1={handleCloseModal1}
          onAfterOpen1={handleAfterOpen1}
        />




      </div>
      {/* <div className={styles.searchbar}>

</div> */}
      <div>

      </div>


    </div>
  )
}



