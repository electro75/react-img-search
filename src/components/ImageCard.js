import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans : Math.ceil(((this.props.image.height * 275)/this.props.image.width)/20)}
    }

    // componentDidMount() {
    //     this.imageRef.current.addEventListener('load', this.setSpans)
    // }

    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spans = Math.ceil(height / 20);
    //     this.setState({spans})
    // }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`,
                        textAlign:'center',
                        marginTop: '20px'}} >
                <img 
                    style={{ borderRadius: '10px' }}
                    alt={description} 
                    src={urls.regular}
                    />
            </div>
        )
    }
}

export default ImageCard;