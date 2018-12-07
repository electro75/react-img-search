import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans : Math.ceil(((this.props.image.height * 275)/this.props.image.width)/20)};
        this.newImghd = null;

    }

    componentDidMount() {
        let hdImg = new Image();
        hdImg.src = this.props.image.urls.regular
        hdImg.onload = () => {
            this.newImghd.setAttribute(
                'style',
                `background-image: url('${this.props.image.urls.regular}')`
            );

            this.newImghd.classList.add('image-fade-in');
        }
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 20);
        this.setState({spans})
    }

    render() {
        // const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`,
                        textAlign:'center'}} className="iron-image-container">
                <div className="iron-image-loaded" 
                    ref={imageLoadedElem => this.newImghd = imageLoadedElem}>
                </div>
                <div    className="iron-image-preload" 
                        style={{ backgroundImage: `url('${this.props.image.urls.thumbnail}')` }}>
                </div>
            </div>
        )
    }
}

export default ImageCard;