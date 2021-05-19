import React from 'react';

const Imagelist = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description}></img>
    })
    return <div>{images}</div>
};

export default Imagelist;