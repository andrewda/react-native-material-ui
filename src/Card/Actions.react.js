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
        actionsContainer: [
            card.actionsContainer,
            props.style.actionsContainer,
        ],
        actionsInnerContainer: [
            card.actionsInnerContainer,
            props.style.actionsInnerContainer,
        ],
    };
}

class CardFooter extends PureComponent {
    render() {
        const { children } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <View style={styles.actionsContainer}>
                <View style={styles.actionsInnerContainer}>
                    {children}
                </View>
            </View>
        );
    }

}

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;
CardFooter.contextTypes = contextTypes;

export default CardFooter;
