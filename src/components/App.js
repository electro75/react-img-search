import React from 'react';
import unsplash from '../api/unsplash';     // a config object stored in a separate file.
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [], page: 0, term: ''};

    constructor(props) {
        super(props);

        window.onscroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop === this.containerRef.current.clientHeight) {
                this.onSearchSubmit(this.state.term, (this.state.page + 1))
            }
        }

        this.containerRef = React.createRef();
    }

    // async await syntax used to make the asynchronous request.
    // onSearchSubmit is refactored into an arrow function to fix the context of 'this'.
    onSearchSubmit = async (term, page) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term, page },
        });

        this.setState({images: this.state.images.concat(response.data.results), page, term});
        
    }

    render() {
        return (
            <div className="ui container" ref={this.containerRef}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images }/>
            </div>
        )
    }
}

export default App;