import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const [list, setlist] = useState([])
  const [search, setsearch] = useState("")
  const [userlogin, setuserlogin] = useState({})
  let navigate= useNavigate()
  useEffect(() => {
    getrecipe()
  }, [])
  useEffect(() => {
    let getlogin= JSON.parse(localStorage.getItem("recipeuser"))
    setuserlogin(getlogin)
    // console.log(getlogin);
  }, [])
  console.log(userlogin);

  if (!userlogin.email) {
     navigate="/signin"
  }
  
  

  let getrecipe = () => {
    axios.get("http://localhost:3000/data")
      .then((res) => {
        // console.log(res.data);
        setlist(res.data)
      })
  }
  let remove=async(val,pos)=>{
    console.log(val.id);
    console.log(pos);
    let newlist= list.filter((val,i)=>{
      return i!=pos
    })
    setlist(newlist)
    await axios.delete("http://localhost:3000/data/"+val.id)
  }
  let searchdata=(e)=>{
    // console.log(e.target.value);
    setsearch(e.target.value)
  }
  let sortdata=(e)=>{
    console.log(e.target.value);
    let value=e.target.value
    let newlists= [...list]
    if (value=="lowtohigh") {
      newlists.sort((a,b)=>a.price-b.price)
    }
    if (value=="hightolow") {
      newlists.sort((a,b)=>b.price-a.price)
    }
    setlist(newlists)
  }


  return (
    <>
      <div className="container">
        {/* <h1>Home</h1> */}
        <div>
          <input style={{width:"290px"}} placeholder='search' type="text" name='name' onChange={(e)=>{searchdata(e)}} />
        </div>
        <div>
          <select name="sort" id="" style={{width:"290px"}} onChange={(e)=>{sortdata(e)}}>
            <option value="">Price</option>
            <option value="lowtohigh">Low to high</option>
            <option value="hightolow">High to low</option>
          </select>
        </div>
        <div style={{ display: "flex" }}>
          {list
          .filter((val)=>{
            if (val=="") {
              return val
            }
            else if (val.name.toLocaleLowerCase().match(search.toLocaleLowerCase())) {
              return val
            }
          })
          .map((val,i) => {
            return (
              <>
                <div style={{ width: "25%" }}>
                  <div style={{ margin: "10px", }}>
                    <div>
                      <div className='img'>
                        <img src={val.img} alt="" srcset="" />
                      </div>
                      <div>
                        <h1>{val.name}</h1>
                        <h6>{val.description}</h6>
                        <h6 style={{color:"green"}}>price    ${val.price}</h6>
                      </div>
                      {/* <button style={{marginTop:"10px"}}>Add Recipe</button> */}
                      <button style={{backgroundColor:"red", margin:"10px" }} onClick={()=>{remove(val,i)}}>Remove</button>
                      <Link to={"/update/"+val.id}>
                      <button style={{backgroundColor:"green", margin:"10px" }} >Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Home