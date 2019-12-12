import React from 'react';

interface Props {
    alt: string;
    src: string;
    caption: string;
}



const Figure = (props: Props) => {    
    const { alt, src, caption } = props;

    return(
        <figure>
            <img src={src} alt={alt}/>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default Figure;