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

//import logo
import LogoV2 from '../images/Artboard 1 copy@4x.png';

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
                    <img src={LogoV2} alt="BigBoiBudget" style={{ maxWidth: '170px' }}/>
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/services">
                        Services
                    </NavLink>
                    <NavLink to="/budget">
                        Budget
                    </NavLink>
                    <NavLink to="/contact-us">
                        Contact Us
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