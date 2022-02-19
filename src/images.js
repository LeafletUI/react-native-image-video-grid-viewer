import React from 'react';
import MediaItem from './mediaItem';
import PropTypes from "prop-types";

/**
 * Render more than 2 videos in a side by side layout same width and height
 * 
 * @param {Array} images
 * @param {function} onPress
 * @param {number} playIconHeight
 * @param {number} playIconWidth
 * @returns two image grid
 */

const Images = ({ images, onPress, playIconHeight, playIconWidth }) => (
    <>
        <MediaItem image={images[0]} onPress={onPress} index={0} playIconHeight={playIconHeight} playIconWidth={playIconWidth} />
        <MediaItem image={images[1]} onPress={onPress} index={1} playIconHeight={playIconHeight} playIconWidth={playIconWidth} />
    </>
);

Images.propTypes = {
    images: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
    playIconHeight: PropTypes.number,
    playIconWidth: PropTypes.number,
};

export default Images;
