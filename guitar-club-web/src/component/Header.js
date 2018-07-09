import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const LogInButton = ()=>(
  <NavItem href="/login">로그인</NavItem>
);

const UserDropdown = ()=>(
  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    <MenuItem eventKey={3.1}>Action</MenuItem>
    <MenuItem eventKey={3.2}>Another action</MenuItem>
    <MenuItem eventKey={3.3}>Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.4}>Separated link</MenuItem>
  </NavDropdown>
);

const Header = ({User})=>(
  <Navbar inverse>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">한울림 기타동아리</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/info">
      동아리 소개
    </NavItem>
    <NavItem eventKey={1} href="/master_class">
      사부제자
    </NavItem>
    <NavItem eventKey={2} href="/album">
      동아리앨범
    </NavItem>
    <NavItem eventKey={2} href="/concert">
      정기연주회
    </NavItem>
    <NavItem eventKey={2} href="/notice">
      공지
    </NavItem>
    {User!=null?<UserDropdown/>:<LogInButton/>}
  </Nav>
</Navbar>
);


Header.defaultProps = {
  User:null
}

Header.PropTypes = {
  User:PropTypes.shape({
    id:PropTypes.string.isRequired,
    nickname:PropTypes.string.isRequired
  }).isRequired
};

export default Header;
