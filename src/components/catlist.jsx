
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import CatItem from './catlistItem';

// component for displaying list of cat item
const catlist = (props) => {
    const { cats = [], onSelected } = props;
    if (cats.length === 0) {
        return (<div>
            No cats available
        </div>)
    }
    
    return (
        <Row className="displayRow">
        {
            cats.map((item, index) => (
                <Col key={'cat' + index} xs={2} md={4} lg={3}>
                    <CatItem cat={item} onClick={onSelected}/>
                </Col>
            ))
        }
        </Row>
    )
    
}

catlist.propTypes = {
    cats: PropTypes.array.isRequired
}

export default catlist;