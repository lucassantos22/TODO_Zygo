import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { HouseDoorFill } from 'react-bootstrap-icons';

export default props => (
    <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand><Link to='/' className='white'><b>{props.title}</b> {props.subtitle}</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link><Link to='/' className='white' id='dashboard'><HouseDoorFill className='mb-1'/> Dashboard</Link></Nav.Link>
            <Nav.Link><Link to='/sobre' className='white' id='sobre'>Sobre</Link></Nav.Link>
            </Nav>
        </Navbar>
    </>
)