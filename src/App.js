import React, { Component } from 'react';
import {InvoiceRevision} from './InvoiceRevision'
import {Location} from './Location'
import {Overview} from './Overview'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import mainLogo from'./images/logo.png';
import { FaSearch, FaBell } from 'react-icons/fa/'
import { MdHelpOutline } from 'react-icons/md'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" id="dashboardNav">
          <NavbarBrand>
          <img  src={mainLogo} alt="Main Logo"/>
          <span className="module">Dashboard</span>
              </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar id="left-nav">              
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Billing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Network</NavLink>
              </NavItem>

            </Nav>

            <Nav className="ml-auto"  id="right-nav" navbar>
              <NavItem>
                <NavLink><FaSearch /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><MdHelpOutline /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <div className="icon-wrapper">
                    <FaBell className="bell" />  
                    <span class="badge">2</span>
                  </div>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="dropdownjs">
                <DropdownToggle nav caret>
                  <span className="jslogo">JS</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>


          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <InvoiceRevision />
        <Location />
        <Overview /> 
        <div className="footer"></div> 
      </div>
    );
  }
}

export default App;
