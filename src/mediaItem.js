import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from "./icon";
import { styles } from './styles';
import PropTypes from "prop-types";

/**
 * MediaItem
 * 
 * @param {function} onPressVideo
 * @param {object} image
 * @param {*} index
 * @param {string} videoPlayIcon
 * @returns a rendering of each of the image or video
 */

const MediaItem = ({
    onPressVideo,
    image,
    index,
    videoPlayIcon,
}) => {
    return (image ? (
        image.type === "video" ? (
            <TouchableOpacity
                style={styles.image_view}
                onPress={onPressVideo}
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
                    <Icon source={{ uri: videoPlayIcon ? videoPlayIcon : "https://www.coollockers.co.uk/wp-content/uploads/2020/04/play-icon.png" }} height={50} width={50} />
                </View>
            </TouchableOpacity>
        ) : (

            <TouchableOpacity
                style={styles.image_view}
                onPress={(event) => props.onPress(image.url, index, event)}>
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
    onPressVideo: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
    index: PropTypes.any,
    videoPlayIcon: PropTypes.string,
};

export default MediaItem;
