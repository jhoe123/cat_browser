import { DropdownButton, 
    Dropdown, 
    Form,
    Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

// dropdown component that displays cat list
const dropdown = (props) => {
    const { breeds = [], onSelected, current } = props;
    return (
        <Row>
        <Col xs={2} md={4} lg={3}>
        <Form>
        <Form.Group>
            <Form.Label>Breeds</Form.Label>
            <Form.Control>
            <DropdownButton 
                title={ current !== null ? current.name : 'Breeds' }
                id="dropdown-basic-button">
                { breeds.map((breed) => (
                    <Dropdown.Item
                        id="breeds" 
                        key={breed.name}
                        eventKey={breed.name} 
                        onSelect={() => onSelected(breed)}
                        active={breed === current}>
                        {breed.name}
                    </Dropdown.Item>)
                )}
            </DropdownButton>   
            </Form.Control>
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