import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/context';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavbarToggler,
    NavbarText
} from 'reactstrap';



const Header = function(){
    
    const [isOpen,setIsOpen] = useState(false)
    const context = useContext(Context);
    const toggle = () => setIsOpen(!isOpen); 
    return(
        <Navbar color="info" light expand="md" >
            <NavbarBrand>
                <Link to="/" className="text-white">
                    CMP github fire app {console.log(context.user?.email)}{context.user?.email == null? "" :context.user?.email }
                </Link>
            </NavbarBrand>
            <NavbarText>
                {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse navbar isOpen={isOpen}>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem className="p-2">
                                <Link to="" onClick={ () => context.setUser(null)} className="text-white">LogOut</Link>
                            </NavItem>) : (
                            <>
                            <NavItem className="p-2">
                                <Link to="/signin" className="text-white">SingIn</Link>
                            </NavItem>
                            <NavItem className="p-2">
                                <Link to="/signup" className="text-white">SingUp</Link>
                            </NavItem>
                            </>    
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;