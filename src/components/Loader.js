import React from 'react';

const Loader = (props) => {
    if(props.isLoading){
        return (
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        )
    } else {
        return null;
    }
    
}

export default Loader;