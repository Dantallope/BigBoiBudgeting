import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav `
  background: #012d46;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  border: none;
  border-radius: 70rem;
  margin-top: 3rem;
`

export const NavLink = styled(Link)`
  color: #efefef;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem; 
  height: 100%;
  cursor: pointer;
  margin-right: 10px; 

  &.active {
    color: #ef8113;
  }
`


export const Bars = styled(FaBars) `
  display: none;
  color: #efefef;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link) `
  border-radius:4px;
  background:#ef8113;
  padding: 10px 22px;
  color:#efefef;
  border:none;
  outline:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background:#d21327;
    color:#012d46;
  }
`