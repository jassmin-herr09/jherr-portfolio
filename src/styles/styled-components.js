import styled from "styled-components"

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #F4EEED;
color: #3D5361;
height: 5rem;
padding: 0 1rem;
//box-shadow: 1px 1px 3px 1px #808080;
h1 {
margin: 0;
 }
a {
font-family: Helvetica;
text-decoration: none;
color: inherit;
&:hover {
color: #DDB7AB;
} 
}
nav {
display: flex;
align-items: center;
}
ul {
list-style: none;
margin: 0;
display: flex;
align-items: center;
li {
margin: 0 1rem 0 0;
a {
font-weight: 700;
   }
  }
}
`
export const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 5rem;
color: #3D5361;
p {
margin: 0; 
}

`

export const StyledLayout = styled.div`
display: flex;
margin: 0;
background: #F4EEED;
flex-direction: column;
min-height: 100vh;
& > div {
flex-grow: 1;
padding: 1rem;
}
`
export const StyledNavDrawer = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background: #F4EEED;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
@media (max-width: 576px) {
width: 100%;
}
a, div {
font-size: 2rem;
text-transform: uppercase;
padding: 3rem;
font-weight: bold;
letter-spacing: 0.5rem;
color: #3D5361;
text-decoration: none;
transition: color 0.80s linear;
@media (max-width: 576px) {
font-size: 1.5rem;
text-align: center;
}
&:hover {
color: #DDB7AB;
}
}
`
export const StyledBurger = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
animation: fadeIn 1800ms linear forwards;
@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }
}
&:focus {
outline: none;
}
div {
width: 2rem;
height: 0.25rem;
background: #3D5361;
border-radius: 10px;
transition: all 0.3s linear;
position: relative;
transform-origin: 1px;
@media (max-width: 576px) {
background: ${({ open }) => open ? '#fff' : '#F4EEED'};
}
:first-child {
transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
}
:nth-child(2) {
opacity: ${({ open }) => (open ? '0' : '1')};
transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
}
:nth-child(3) {
transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
}
}
`

export const StyledForm = styled.form`
    align-items: stretch;
    box-sizing: border-box;
    border: 2px;
    padding: 12px 20px;
    margin: 8px 0;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn {
        background-color: #1f87db;
        width: 10rem;
        cursor: pointer;
    }
    .input {
        width: 292px;
        align-items: center;
    }
`