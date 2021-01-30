import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import Page from '../components/page';
import Catlist from '../components/catlist';
import BreedsDropdown from '../components/breedsDropdown';
import { 
    fetchCatBreeds,
    loadCats,
    loadCatsById
} from '../utils/actions/catActions';

// main or home page that display the catlist
class Home extends React.Component {
    lastSearch = "";
    componentDidMount() {
        this.props.dispatch(fetchCatBreeds());
    }
    // callback when browse button was pressed
    onBrowse() {
        const { dispatch, page } = this.props;
        dispatch(loadCats(null,page + 1));
    }
    // callback when breed was selected from the dropdown
    onBreedSelected(selected) {
        this.lastSearch = selected.id;
        this.props.history.push('/?breed=' + selected.id);
        this.props.dispatch(loadCats(selected));
    }
    // callback when cat details button was pressed
    onPressDetails(cat) {
        this.props.history.push('/' + cat.id);
    }
    // use to load breed based from search path
    componentDidUpdate() {
        const { breeds, isLoading, dispatch } = this.props;
        if (breeds.length > 0 && !isLoading) {
            const location = this.props.location;
            if (location && location.search) {
                var search = new URLSearchParams(location.search);
                var breed = search.get("breed");
                if (breed && breed !== this.lastSearch) {
                    dispatch(loadCatsById(breed));
                    this.lastSearch = breed;
                }
            }
        }
    }
    render() {
        const { breeds, cats, isLoading, currentBreed, hasNext } = this.props;
        return (
            <Page title="Kitty Shop">
                <BreedsDropdown 
                    breeds={breeds} 
                    current={currentBreed}
                    onSelected={this.onBreedSelected.bind(this)}/>
                <Catlist cats={cats} onSelected={this.onPressDetails.bind(this)}/>
                {hasNext && <Button 
                    variant="success" 
                    disabled={isLoading || currentBreed === null} 
                    onClick={this.onBrowse.bind(this)}>
                    { isLoading? "Please wait" : "Load more"}
                </Button>}
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    breeds: state.breeds,
    cats: state.cats,
    currentBreed: state.currentBreed,
    isLoading: state.isLoading,
    page: state.page,
    hasNext: state.hasNext,
});

Home = withRouter(Home);

export default connect(mapStateToProps)(Home);
