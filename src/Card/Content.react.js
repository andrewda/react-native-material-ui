/* eslint-disable import/no-unresolved, import/extensions */
import { View } from 'react-native';
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

class CardContent extends PureComponent {
    render() {
        const { children } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <View style={styles.contentContainer}>
                {children}
            </View>
        );
    }

}

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;
CardContent.contextTypes = contextTypes;

export default CardContent;
