
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import CatItem from './catlistItem';

// component for displaying list of cat item
const catlist = (props) => {
    const { cats = [] } = props;
    
    return (
        <Container>
            <Row>
            {
                cats.map((item, index) => (
                    <Col key={'cat' + index} xs={2} md={4} lg={3}>
                        <CatItem cat={item}/>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
    
}

catlist.propTypes = {
    cats: PropTypes.array.isRequired
}

export default catlist;