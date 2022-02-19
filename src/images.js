import React from 'react';
import MediaItem from './mediaItem';

const Images = ({ images, onPress }) => (
    <>
        <MediaItem image={images[0]} onPress={onPress} index={0} />
        <MediaItem image={images[1]} onPress={onPress} index={1} />
    </>
);

export default Images;
