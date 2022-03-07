import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Head = styled.header`
  position: center;
  width: 1600px;
  height: 73px;
  background: #343C54;
  display: flex;
  box-sizing: border-box;
 
  
  img{
   width: 150px;
    display:flex;
    justify-content: center;
  
  }
  


`;
export const NavLink = styled(Link)`
  font-size: 18px;
  display:  flex;
  justify-content:center;
  align-items: center;
  padding: 40px;
  color: #ffffff;
  text-decoration: none;

  font-family: "Barlow";


`;



