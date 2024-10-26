import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Update.css'

function Update() {
    let pos = useParams()
    const [data, setdata] = useState({})
    let navigate = useNavigate()
    // console.log(pos);

    let setinput = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    useEffect(() => {
        axios.get("http://localhost:3000/data/" + pos.id)
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
            })
    }, [])
    let submit=(e)=>{
        e.preventDefault()
        console.log(data);
        axios.put("http://localhost:3000/data/"+pos.id ,data)
        .then((res)=>{
            if (res) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
               
            }
        })
    }

    return (
        <>
            <div className="container">
                <div>
                    <form onSubmit={(e) => { submit(e) }}>
                        <div className="form-group">
                            <label for="recipeName" className='titles'>Recipe Name*</label>
                            <input type="text" id="recipeName" name="name" value={data.name?data.name:""} onChange={(e) => { setinput(e) }} />
                            {/* <p className='para'>{error.name}</p> */}
                        </div>

                        <div className="form-group">
                            <label for="description" className='titles'>Description*</label>
                            <textarea id="description" name="description" rows="4" value={data.description?data.description:""} onChange={(e) => { setinput(e) }} ></textarea>
                            {/* <p className='para'>{error.description}</p> */}
                        </div>
                        <div className="form-group">
                            <label for="prepTime" className='titles'>Price</label>
                            <input type="number" id="prepTime" name="price" min="1" value={data.price?data.price:""} onChange={(e) => { setinput(e) }} />
                            {/* <p className='para'>{error.preptime}</p> */}
                        </div>

                        <div className="form-group">
                            <label for="cookTime" className='titles'>Enter Image URL</label>
                            <input type="text" id="" name="img" onChange={(e) => { setinput(e) }} value={data.img?data.img:""} />
                            {/* <p className='para'>{error.img}</p> */}
                        </div>

                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update