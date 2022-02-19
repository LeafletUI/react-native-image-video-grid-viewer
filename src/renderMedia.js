import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MediaItem from './mediaItem';
import { styles } from './styles';
import PropTypes from "prop-types";



/**
 * Render more than 2 and 3 images in a better grid layout on the screen
 * 
 * @param {number} start
 * @param {boolean} overflow
 * @param {Array} images
 * @param {Function} onPress
 * @param {number} playIconHeight
 * @param {number} playIconWidth
 * @returns +<number of remaining images or videos> for more than 5 images or videos
 */
const RenderMedia = (start, overflow, images, onPress, playIconHeight, playIconWidth) => (
    <>
        <MediaItem image={images[start]} onPress={onPress} index={start} />
        {images[start + 1] && (
            <View style={styles.image_view}>
                <MediaItem
                    image={images[start + 1]}
                    onPress={onPress}
                    index={start + 1}
                    playIconHeight={playIconHeight}
                    playIconWidth={playIconWidth}
                />
                {overflow && (
                    <TouchableOpacity
                        onPress={(event) => onPress(images[start + 1], start + 1, event)}
                        style={styles.item_view_overlay}>
                        <Text style={styles.text}>{`+${images.length - 5}`}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )}
    </>
);

RenderMedia.propTypes = {
    start: PropTypes.func,
    overflow: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.object),
    onPress: PropTypes.func,
    playIconHeight: PropTypes.number,
    playIconWidth: PropTypes.number,
};

export default RenderMedia;
