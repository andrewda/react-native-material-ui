/* eslint-disable import/no-unresolved, import/extensions */
import { View, Image } from 'react-native';
import React, { PureComponent, PropTypes } from 'react';
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes = {
    children: PropTypes.node.isRequired,
};
const defaultProps = {
    style: {},
};
const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

function getStyles(props, context) {
    const { card } = context.uiTheme;

    return {
        contentContainer: [
            card.contentContainer,
            props.style.contentContainer,
        ],
    };
}

class CardMedia extends PureComponent {
    render() {
        const { children } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <View style={styles.contentContainer}>
                <Image source={{ uri: 'http://sehs.4j.lane.edu/wp-content/uploads/MaryTaylorEdmodoPhoto.jpg' }} />
            </View>
        );
    }

}

CardMedia.propTypes = propTypes;
CardMedia.defaultProps = defaultProps;
CardMedia.contextTypes = contextTypes;

export default CardMedia;
