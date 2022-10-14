import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

const TitleBar = () => {
  return (
    <Navbar color="light" expand="md" light>
      <Link to="/" className="navbar-brand" style={{textDecoration: "none"}}>
         Rp Product
      </Link>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              William Martel Q.
            </DropdownToggle>
            <DropdownMenu className="user-context-menu">
              <DropdownItem
                href="https://github.com/williammq"
                target="_blank"
              >
                GitHub
              </DropdownItem>
              <DropdownItem
                href="https://www.linkedin.com/in/william-felipe-martel-quiroz-2765b5202/"
                target="_blank"
              >
                LinkedIn
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TitleBar;
