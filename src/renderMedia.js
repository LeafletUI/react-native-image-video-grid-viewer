import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MediaItem from './mediaItem';
import { styles } from './styles';

const RenderMedia = (start, overflow, images, onPress) => (
    <>
        <MediaItem image={images[start]} onPress={onPress} index={start} />
        {images[start + 1] && (
            <View style={styles.image_view}>
                <MediaItem
                    image={images[start + 1]}
                    onPress={onPress}
                    index={start + 1}
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

export default RenderMedia;
