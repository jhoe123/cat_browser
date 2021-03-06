import { Button, Card } from 'react-bootstrap';

// component for displaying  cat item for list
const listItem = (props) => {
    const {cat, onClick} = props;
    return (<Card className='cat-card'>
        <Card.Img variant="top" src={cat.url}/>
        <Card.Body>
            <Button 
                className="buttonDetails" 
                variant='primary' 
                onClick={() => onClick(cat)}>
                View Details
            </Button>
        </Card.Body>
    </Card>);
}

export default listItem;