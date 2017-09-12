import React, {Component} from 'react';
import { Navbar,Nav,NavItem,FormGroup,FormControl,InputGroup,Glyphicon,Image } from 'react-bootstrap';
import './header.css';
import profile from '../../profile.jpg'

class Header extends Component {
    render() {
        return (
            <Navbar inverse fixedTop='true'>
                <Navbar.Header>
                  <Navbar.Brand>AudioSpace</Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>Home</NavItem>
                    <NavItem>Collection</NavItem>
                    <NavItem id='navItemSearch'>
                        <Navbar.Form id='navBarSearchForm' style = {{ padding : 0 }}>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Search" />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="search" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                    </NavItem>
                    <NavItem>Upload</NavItem>
                    <NavItem>
                        <Image src={profile} style={{ width: 26,height: 26 }}circle />
			Akash Kathiriya
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default Header;
