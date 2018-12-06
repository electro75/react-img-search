import React from 'react';
import unsplash from '../api/unsplash';     // a config object stored in a separate file.
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';

class App extends React.Component {

    state = { 
        images: [],
        page: 0,
        term: '',
        isLoading: false
    };

    constructor(props) {
        super(props);

        window.onscroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop === this.containerRef.current.clientHeight) {
                this.onSearchSubmit(this.state.term, (this.state.page + 1), 'addon')
            }
        }

        this.containerRef = React.createRef();
    }

    // async await syntax used to make the asynchronous request.
    // onSearchSubmit is refactored into an arrow function to fix the context of 'this'.
    onSearchSubmit = async (term, page, type) => {
        this.setState({isLoading: true});
        const response = await unsplash.get('/search/photos', {
            params: { query: term, page },
        });

        console.log(response.data.results);

        if(type === 'reload') {
            this.setState({images: response.data.results, page, term, isLoading: false});
        } else {
            this.setState({images: this.state.images.concat(response.data.results), page, term, isLoading: false});
        }
        
        
    }

    render() {
        return (
            <div className="ui container" ref={this.containerRef}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images }/>
                <Loader isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App;