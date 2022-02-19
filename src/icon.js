import React from "react";
import { Image, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

/**
 * 
 * @param {object} style
 * @param {object} source - can be { uri: <url> } or require(<url>)
 * @param {boolean} useDefault
 * @param {object} useDefaultImage
 * @param {string} resizeMode
 * @param {number} width
 * @param {number} height
 * @param {number} borderWidth
 * @returns play icon image
 */

const Icon = ({
    style,
    source,
    useDefault,
    useDefaultImage,
    resizeMode,
    width, height, borderWidth
}) => {
    const [uri, setUri] = React.useState(source);

    return (
        <Image
            source={uri}
            style={[{ width: width, height: height, borderWidth: borderWidth }, style]}
            resizeMode={resizeMode || "contain"}
            onError={() => {
                if (useDefault && !useDefaultImage) {
                    setUri(useDefaultImage);
                }
            }}
        />
    );
};

Icon.defaultProps = {
    height: 50,
    width: 50,
    borderWidth: 0,
    useDefault: false,
    useDefaultImage: {},
    style: {},
};

Icon.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    borderWidth: PropTypes.number.isRequired,
    useDefault: PropTypes.bool,
    useDefaultImage: PropTypes.symbol,
    style: ViewPropTypes.style,
};

export default Icon;
