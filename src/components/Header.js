import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Giáo Án Ngữ Văn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Trang Chủ</Nav.Link>
          <Nav.Link href="#about">Giới Thiệu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
