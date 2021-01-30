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
        <DropdownButton 
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