import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import MediaItem from './mediaItem';
import Images from './images';
import RenderMedia from './renderMedia';
import { styles } from './styles';
import PropTypes from "prop-types";

/**
 * Render the Videos and Images
 * 
 * @param {Array} images
 * @param {function} onPress
 * @param {object} style
 * @param {number} playIconHeight
 * @param {number} playIconWidth
 * @returns a rendering of the grids to react-native screen
 */

export default class RNImageVideoGridViewer extends Component {
    render() {
        const { images, style, onPress, playIconHeight, playIconWidth } = this.props;

        return images.length > 0 ? (
            <View style={{ ...styles.container_row, ...style }}>
                {images.length < 3 ? (
                    <Images images={images} onPress={onPress} playIconHeight={playIconHeight} playIconWidth={playIconWidth} />
                ) : (
                    <MediaItem image={images[0]} onPress={onPress} index={0} playIconHeight={playIconHeight} playIconWidth={playIconWidth} />
                )}
                {images.length > 2 && (
                    <View style={styles.container}>
                        {RenderMedia(1, false, images, onPress, playIconHeight, playIconWidth)}
                    </View>
                )}
                {images.length > 3 && (
                    <View style={styles.container}>
                        {RenderMedia(3, images.length > 5, images, onPress, playIconHeight, playIconWidth)}
                    </View>
                )}
            </View>
        ) : null;
    }
};

RNImageVideoGridViewer.propTypes = {
    images: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
    playIconHeight: PropTypes.number,
    playIconWidth: PropTypes.number,
};
