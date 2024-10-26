import React, { useState } from 'react'
import "./RecipeForm.css"
// import { toast, } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecipeForm() {
    let [data, setdata] = useState({})
    let [error, seterror] = useState({})
    let navigate= useNavigate

    let setinput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setdata({ ...data, [name]: value })
    }

    let validatedata = () => {
        let err = {}
        if (!data.name) {
            err.name = "Enter Recipe Name"
        }
        if (!data.description) {
            err.description = "Enter Description"
        }
        if (!data.prepTime) {
            err.price = "Select Price"
        }
        if (!data.img) {
            err.img = "Enter Image URL"
        }
        return err;
    }
   

        let submitdata = (e) => {
            e.preventDefault()
            let validation = validatedata()
            if (Object.keys(validation).length > 0) {
                seterror(validation)
                toast.error("Try Again")
            }
            else {
                console.log(data);
                seterror({})
                axios.post("http://localhost:3000/data", data)
                    .then((res) => {
                        console.log(res.data);
                        toast.success("Recipe Added Successfully")
                        setTimeout(() => {
                            navigate("/")
                        }, 2000);
                    })
                setdata({})
            }

        }
        return (
            <>
                <div className='main'>
                    <div className='container'>
                        <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "black", color: "white", padding: "10px", borderRadius: "10px" }}>
                            <form className='recipeForm' onSubmit={(e) => submitdata(e)}>
                                <div className="form-group">
                                    <label for="recipeName" className='title'>Recipe Name*</label>
                                    <input type="text" id="recipeName" name="name"  onChange={(e) => { setinput(e) }} />
                                    <p className='para'>{error.name}</p>
                                </div>

                                <div className="form-group">
                                    <label for="description"  className='title'>Description*</label>
                                    <textarea id="description" name="description" rows="4" onChange={(e) => { setinput(e) }} ></textarea>
                                    <p className='para'>{error.description}</p>
                                </div>

                                <div className="form-group">
                                    <label for="prepTime"  className='title'>Price</label>
                                    <input type="number" id="prepTime" name="price" min="1" onChange={(e) => { setinput(e) }}  />
                                    <p className='para'>{error.price}</p>
                                </div>

                                <div className="form-group">
                                    <label for="cookTime"  className='title'>Enter Image URL</label>
                                    <input type="text" id="" name="img"  onChange={(e) => { setinput(e) }} />
                                    <p className='para'>{error.img}</p>
                                </div>

                                {/* <div className="form-group">
                                    <label for="instructions">Cooking Instructions*</label>
                                    <textarea id="instructions" name="instructions" rows="6" required onChange={(e) => { setinput(e) }}></textarea>
                                </div> */}
                                <button type="submit">Save Recipe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </>
        )
    }

    export default RecipeForm