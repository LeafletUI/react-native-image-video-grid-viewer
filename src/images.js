import React from 'react';
import MediaItem from './mediaItem';
import PropTypes from "prop-types";

/**
 * 
 * @param {Array} images
 * @param {function} onPress
 * @returns two image grid
 */

const Images = ({ images, onPress }) => (
    <>
        <MediaItem image={images[0]} onPress={onPress} index={0} />
        <MediaItem image={images[1]} onPress={onPress} index={1} />
    </>
);

Images.propTypes = {
    images: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default Images;
