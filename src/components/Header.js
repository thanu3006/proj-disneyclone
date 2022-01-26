import styled from "styled-components";

const Header = (props) => {
 return <Nav>
    <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
    </Logo>
    <NavMenu>
        <a href='/home' >
            <img src="/images/home-icon.svg" alt="HOME"/>
            <span>HOME</span>
        </a>
        <a >
            <img src="/images/search-icon.svg" alt="search"/>
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" alt="watchlist"/>
            <span>WATCHLIST</span>
        </a>
         <a>
            <img src="/images/movie-icon.svg" alt="movie"/>
            <span>MOVIE</span>
        </a>
         <a>
            <img src="/images/series-icon.svg" alt="series"/>
            <span>SERIES</span>
        </a>
        
    </NavMenu>
    <Login>
        Login
    </Login>
    </Nav>;
};

const Nav = styled.nav`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
height:70px;
background-color:#090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing : 16px;
z-index:3;
`;

const Logo = styled.a`
padding:0;
margin-left : 25px;
width : 80px;
margin-top : 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img {
    display: block;
    width: 100%;
}`;

const NavMenu = styled.div`
align-items: center;
margin-right : 25px;
display: flex;
flex-flow: row nowrap;
height : 100%;
justify-content: flex-end;
margin:0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height:20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span{
        color: rgb(249, 249, 249);
        font-size:13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2x 0px;
        //white-spacing: nowrap;
        position: relative;

        &:before {
        background-color: rgb(249,249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scale(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width : auto;
        }
        
    }

    &:hover {
    span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;

    }
  }
}


`;

const Login = styled.a`
background-color:rdga(0,0,0,0.6);
padding: 8px 16px;

text-transform: uppercase;
letter-spacing:1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
margin-right: 25px;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
}`



export default Header; 