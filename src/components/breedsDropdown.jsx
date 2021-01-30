import { DropdownButton, 
    Dropdown, 
    Form,
    Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

// dropdown component that displays cat list
const dropdown = (props) => {
    const { breeds = [], onSelected, current } = props;
    return (
        <Row>
        <Col>
        <Form>
            <Form.Group>
                <Form.Label>Breeds</Form.Label>
                <DropdownButton 
                    className="dropdown"
                    variant='outline-info'
                    disabled={breeds.length === 0}
                    title={ current !== null ? current.name : 'Breeds' }>
                    { breeds.map((breed) => (
                        <Dropdown.Item
                            key={breed.name}
                            eventKey={breed.name} 
                            onSelect={() => onSelected(breed)}
                            active={breed === current}>
                            {breed.name}
                        </Dropdown.Item>)
                    )}
                </DropdownButton> 
            </Form.Group>
        </Form>   
        </Col>
        </Row>
    );
}

dropdown.propTypes = {
    breeds : PropTypes.array.isRequired,
    onSelected : PropTypes.func,
    current: PropTypes.any
}

export default dropdown;