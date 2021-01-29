
import { Container, Row, Column } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

// component for displaying list of cat item
const catlist = (props) => {
    const { cats = [] } = props;
    
    return (
        <Container>
            {
                _.forEach(cats, (item, index) => {
                    console.log(index);
                })
            }
        </Container>
    )
    
}

catlist.propTypes = {
    cats: PropTypes.array.isRequired
}

export default catlist;