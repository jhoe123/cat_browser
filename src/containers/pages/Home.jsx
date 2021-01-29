import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Page from '../../components/page';
import Catlist from '../../components/catlist';
import BreedsDropdown from '../../components/breedsDropdown';
import { 
    fetchCatBreeds,
    loadCats
} from '../../utils/actions/catActions';

// main or home page that display the catlist
class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCatBreeds());
    }
    // callback when browse button was pressed
    onBrowse() {
        const { dispatch, page } = this.props;
        dispatch(loadCats(null,page + 1));
    }
    onBreedSelected(selected) {
        this.props.dispatch(loadCats(selected));
    }
    render() {
        const { breeds, cats, isLoading, currentBreed } = this.props;
        return (
            <Page title="Home">
                <BreedsDropdown 
                    breeds={breeds} 
                    current={currentBreed}
                    onSelected={this.onBreedSelected.bind(this)}/>
                { !isLoading &&
                    <div>
                    <Catlist cats={cats}/>
                    {cats !== null && cats.length > 0 && <Button onClick={this.onBrowse.bind(this)}>Browse</Button>}
                    </div>
                }
            </Page>
        )
    }
}

const mapStateToProps = (state) => ({
    breeds: state.breeds,
    cats: state.cats,
    currentBreed: state.currentBreed,
    isLoading: state.isLoading,
    page: state.page
});

export default connect(mapStateToProps)(Home);
