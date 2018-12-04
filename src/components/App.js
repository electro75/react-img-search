import React from 'react';
import unsplash from '../api/unsplash';     // a config object stored in a separate file.
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    // async await syntax used to make the asynchronous request.
    // onSearchSubmit is refactored into an arrow function to fix the context of 'this'.
     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}} >
                <SearchBar onSubmit={ this.onSearchSubmit } />
                Found: { this.state.images.length } images
            </div>
        )
    }
}

export default App;