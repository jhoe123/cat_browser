import PropTypes from 'prop-types';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';

// reusable component for pages
const page = (props) => {
    const { 
        title= '', isChild = false, 
        children, onBack, 
        error = false, onErrorClose } = props;
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
            <Modal show={error} onHide={onErrorClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Problem Found</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Apologies but we could not load new cats for you at this time! Miau!
                </Modal.Body>
            </Modal>
        </Container>
    </div>);
}

page.propTypes = {
    isChild : PropTypes.bool,
    title : PropTypes.string,
    onBack: PropTypes.func,
}

export default page;
