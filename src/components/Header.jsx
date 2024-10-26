import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, logoutuser } from '../Redux/Actions/SignInActions';
import './Header.css'


function Header() {
  let dispatch = useDispatch()
  let getlogin = useSelector((state) => {
    return state.SignInReducers.data
  })
  // console.log(getlogin);


  useEffect(() => {
    setTimeout(() => {
      dispatch(getuser())
    }, 1000);
  }, [getuser])

  let logout = () => {
    dispatch(logoutuser())
  }


  return (
    <>
      <div style={{backgroundColor:"black", color:"white", padding:" 0px"}}>
        {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "black" }}>
          <Container>
            <Navbar.Brand href="#home">Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{display:"flex" ,alignItems:"center"}}>
              <Nav className="me-auto" style={{display:"flex", alignItems:"center",paddingTop:"15px"}}>
                <Link to={"/"} style={{color:"black" ,fontWeight:"700"}}>
                Home
                </Link>
                <Nav.Link href="#pricing">Your Recipe</Nav.Link>
              </Nav>
              <Nav>
                {getlogin.name ?
                  <>
                    <Link style={{display:"flex"}}>
                      <Button style={{ marginRight: "10px" }} variant="primary" onClick={() => { logout() }}>Sign Out</Button>{' '}
                      <h1>{getlogin.name}</h1>
                    </Link>
                  </>
                  :
                  <>
                    <Link to={"/signup"}>
                      <Button style={{ marginRight: "10px" }} variant="primary">Sign Up</Button>{' '}
                    </Link>
                    <Link to={"/signin"}>
                      <Button style={{ marginRight: "10px" }} variant="primary">Sign In</Button>{' '}
                    </Link>
                  </>
                }
               
                <Link to={"/recipeform"}>
                  <Button variant="primary">Add Recipe</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

        <div className="container">
          <div>
            {/* <div className="navbar"> */}
              <navbar style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <ul style={{display:"flex", gap:"10px", }}>
                  <li style={{textDecoration:"none", listStyle:"none"}}>
                    <Link to={"/"} style={{color:"white", textDecoration:"none"}}>Home</Link>
                  </li>
                  <li style={{listStyle:"none", color:"white"}}>
                    <Link to={"/"} style={{color:"white", textDecoration:"none"}}>About</Link>
                  </li>
                </ul>
              <div style={{display:"flex" ,gap:"10px"}}>
                {getlogin.name ?
                  <>
                    <Link style={{ display: "flex" }}>
                      {/* <Button style={{ marginRight: "10px" }} variant="primary" onClick={() => { logout() }}>Sign Out</Button>{' '} */}
                      <button className='btns' onClick={() => { logout() }}>Sign Out</button>
                      <h2 style={{color:"white", textDecoration:"none"}}>{getlogin.name}</h2>
                    </Link>
                    <Link to={"/recipeform"}>
                    <button>Add Recipe</button>
                </Link>
                  </>
                  :
                  <>
                    <Link to={"/signup"}>
                      {/* <Button style={{ marginRight: "10px" }} variant="primary">Sign Up</Button>{' '} */}
                      <button className='btns'>Sign Up</button>
                    </Link>
                    <Link to={"/signin"}>
                      {/* <Button style={{ marginRight: "10px" }} variant="primary">Sign In</Button>{' '} */}
                      <button className='btns'>Sign In</button>
                    </Link>
                    {/* <Link to={"/recipeform"}>
                    <button>Add Recipe</button>
                </Link> */}
                  </>
                }
              </div>
              </navbar>
            </div>
          </div>
        </div>
      {/* </div> */}

    </>
  )
}

export default Header