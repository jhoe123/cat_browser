import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Page from '../../components/page';
import Catlist from '../../components/catlist';

class Home extends React.Component {
    render() {
        return (
            <Page title="Home">
                <Catlist cats={['asdfasd']}/>
                <Button>Browse</Button>
            </Page>
        )
    }
}
export default Home;
// const mapStateToProps = (state) => ({
    
// });

// export default connect(mapStateToProps)(Home);
