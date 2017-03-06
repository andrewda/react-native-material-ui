/* eslint-disable import/no-unresolved, import/extensions */
import { View, Text } from 'react-native';
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
        titleContainer: [
            card.titleContainer,
            props.style.titleContainer,
        ],
        titleText: [
            card.titleText,
            props.style.titleText,
        ],
    };
}

class CardHeader extends PureComponent {
    render() {
        const { children } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {children}
                </Text>
            </View>
        );
    }

}

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
CardHeader.contextTypes = contextTypes;

export default CardHeader;
