import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import Page from '../components/page';
import { loadCatImage } from '../utils/actions/catActions';

// this container page hold information for specific cat image
class Profile extends React.Component {
    loadedImage = '';
    // callback when back navigation was pressed
    onBack() {
        this.props.history.goBack();
    }
    // if the cat loaded is not correct then reload it
    checkIfCorrectCat() {
        const params = this.props.match.params;
        if (params.imageId !== undefined && 
            params.imageId !== this.loadedImage) {
            this.loadedImage = params.imageId;
            this.props.dispatch(loadCatImage(params.imageId));
        }
    }
    // callback when error was close
    onErrorClose() {
        this.props.dispatch(clearError());
    }
    render() {
        const { isLoading, currentImage, error } = this.props;
        this.checkIfCorrectCat();
        if (isLoading || currentImage === null) {
            return 'Loading'
        }
        const breedData = currentImage.breeds[0];
        return (<Page 
            error={error}
            onErrorClose={this.onErrorClose.bind(this)}
            onBack={this.onBack.bind(this)} isChild>
            <Card>
                <Card.Img variant='top' src={currentImage.url}/>
                <Card.Body>
                    <Card.Title>{breedData.name}</Card.Title>
                    <h5>{'Origin: ' + breedData.origin}</h5>
                    <h6>{breedData.temperament}</h6>
                    <Card.Text>{breedData.description}</Card.Text>
                </Card.Body>
            </Card>
        </Page>)
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    currentImage: state.currentImage,
    error: state.error,
});

Profile = withRouter(Profile);

export default connect(mapStateToProps)(Profile);