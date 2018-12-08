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
                `background-image: url('${this.props.image.urls.regular}')`,
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
                        textAlign:'center'}} className="iron-image-container ui fade reveal image">
                <div className="iron-image-loaded visible content" 
                    ref={imageLoadedElem => this.newImghd = imageLoadedElem}>
                </div>
                <div className="hidden content">
                    <div className="iron-image-preload" 
                        style={{ backgroundImage: `url('${this.props.image.urls.thumb}')`, filter: 'blur(8px)',
                                height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-reapeat',
                                backgroundSize: 'cover'}}>
                    </div>
                    <div className="bg-text">
                        <div className="item">
                            <div className="ui tiny circular image" style={{float: 'left'}}>
                                <img src={this.props.image.user.profile_image.large} alt="user" />
                            </div>
                            <div className="content">
                                <div className="header">
                                    {this.props.image.user.first_name + ' '+ this.props.image.user.last_name}
                                </div>
                                <div className="meta">
                                <span> 
                                    <i className="heart icon"></i> {this.props.image.user.total_likes}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default ImageCard;