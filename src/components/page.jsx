import PropTypes from 'prop-types';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const page = (props) => {
    const { title= '', isChild = false, children, onBack } = props;
    return ( <div className="page">
            <Container>
            <Navbar bg='light'>
                <Nav>
                    {isChild && 
                        <Button onClick={onBack}>Back</Button>
                    }
                </Nav>
                <Navbar.Brand>{title}</Navbar.Brand>
            </Navbar>
            {children}
            </Container>
        </div>
    );
}

page.propTypes = {
    isChild : PropTypes.bool,
    title : PropTypes.string,
    onBack: PropTypes.func,
}

export default page;
