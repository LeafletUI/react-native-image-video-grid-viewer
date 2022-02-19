import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from "./icon";
import { styles } from './styles';
import PropTypes from "prop-types";

/**
 * Conditionally render video with play icon or image without the play icon
 * 
 * @param {function} onPress
 * @param {object} image
 * @param {*} index
 * @param {string} videoPlayIcon
 * @param {number} playIconHeight
 * @param {number} playIconWidth
 * @returns a rendering of each of the image or video
 */

const MediaItem = ({
    onPress,
    image,
    index,
    videoPlayIcon,
    playIconHeight, playIconWidth,
}) => {
    return (image ? (
        image.type === "video" ? (
            <TouchableOpacity
                style={styles.image_view}
                onPress={(event) => onPress(image, index, event)}
            >
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                        uri: image.videoThumbnail,
                    }}
                />
                <View
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "47%",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: [{ translateX: -20 }, { translateY: -20 }],
                        borderRadius: 5000,
                        borderWidth: 4,
                        borderColor: "#fff",
                        width: 50,
                        height: 50,
                    }}
                >
                    <Icon source={{ uri: videoPlayIcon ? videoPlayIcon : "https://www.coollockers.co.uk/wp-content/uploads/2020/04/play-icon.png" }} height={playIconHeight} width={playIconWidth} />
                </View>
            </TouchableOpacity>
        ) : (

            <TouchableOpacity
                style={styles.image_view}
                onPress={(event) => onPress(image, index, event)}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                        uri: image.url,
                    }}
                />
            </TouchableOpacity>
        )
    ) : (
        <View />
    )
    )
};

MediaItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
    index: PropTypes.any,
    videoPlayIcon: PropTypes.string,
    playIconHeight: PropTypes.number,
    playIconWidth: PropTypes.number,
};

export default MediaItem;
