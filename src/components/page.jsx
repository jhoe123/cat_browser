import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

const page = (props) => {
    const { title, isChild = false, children } = props;
    return ( <div className="page">
            <Navbar bg='light'>
                <Nav>
                    {isChild && 
                        <Nav.Item>
                            <Nav.Link href="/home">Back</Nav.Link>
                        </Nav.Item>
                    }
                </Nav>
                <Navbar.Brand>{title}</Navbar.Brand>
            </Navbar>
            {children}
        </div>
    );
}

page.propTypes = {
    isChild : PropTypes.bool,
    title : PropTypes.string.isRequired
}

export default page;
