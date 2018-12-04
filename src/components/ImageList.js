import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image)=>{
        const { description, id, urls } = image;
        return <img 
                    src={urls.regular} 
                    alt={description}
                    key={id}/>
    })

    return (
        <div>{ images }</div>
    )
}

export default ImageList