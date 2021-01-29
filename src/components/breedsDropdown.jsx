import { DropdownButton, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

// dropdown component that displays cat list
const dropdown = (props) => {
    const { breeds = [], onSelected, current } = props;
    return (
        <DropdownButton 
            title={ current !== null ? current.name : 'Breeds' }
            id="dropdown-basic-button">
            { breeds.map((breed) => (
                <Dropdown.Item 
                    eventKey={breed.name} 
                    onSelect={() => onSelected(breed)}
                    active={breed === current}>
                    {breed.name}
                </Dropdown.Item>)
            )}
        </DropdownButton>    
    );
}

dropdown.propTypes = {
    breeds : PropTypes.array.isRequired,
    onSelected : PropTypes.func,
    current: PropTypes.any
}

export default dropdown;