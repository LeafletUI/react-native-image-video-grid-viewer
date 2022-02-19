import React, { Component } from 'react';
import { View } from 'react-native';
import MediaItem from './mediaItem';
import Images from './images';
import RenderMedia from './renderMedia';
import { styles } from './styles';
import PropTypes from "prop-types";

/**
 * 
 * @param {Array} images
 * @param {function} onPress
 * @param {object} style
 * @returns a rendering of the grids to react-native screen
 */

export default class RNImageVideoGridViewer extends Component {
    render() {
        const { images, style, onPress } = this.props;

        return images.length > 0 ? (
            <View style={{ ...styles.container_row, ...style }}>
                {images.length < 3 ? (
                    <Images images={images} onPress={onPress} />
                ) : (
                    <MediaItem image={images[0]} onPress={onPress} index={0} />
                )}
                {images.length > 2 && (
                    <View style={styles.container}>
                        {RenderMedia(1, false, images, onPress)}
                    </View>
                )}
                {images.length > 3 && (
                    <View style={styles.container}>
                        {RenderMedia(3, images.length > 5, images, onPress)}
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
};
