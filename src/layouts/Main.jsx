import React from 'react'
import { Form, Outlet, useLoaderData } from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBarElements';
// lets us use the loader
import { fetchData } from '../tools'
// loader

export function mainLoader(){
    const userName = fetchData("userName");
    return {userName}
  }
  const Main = () => {
    const {userName} = useLoaderData()
    return (
        <>
            <Nav>
                <NavLink to="/">
                    {/* <img src="" alt=""/> */}
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                </NavBtn>
                <div>
                    {
                        userName && (
                            <Form
                                id='logout'
                                method='post'
                                action='/logout'>
                                    <button type='submit'className='btn btn--warning'>
                                        <span>Delete User</span>
                                    </button>
                            </Form>
                        )
                    }
                </div>
            </Nav>
            <Outlet />
        </>
    )
}
  

export default Main;