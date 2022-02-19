import React from "react";
import { Image, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

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
            style={[{ width, height, borderWidth }, style]}
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
    size: fs(18),
    style: undefined,
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: ViewPropTypes.style,
};

export default React.memo(Icon);
