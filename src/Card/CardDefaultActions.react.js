/* eslint-disable import/no-unresolved, import/extensions */
import React, { PureComponent, PropTypes } from 'react';
import { View } from 'react-native';
/* eslint-enable import/no-unresolved, import/extensions */
import Button from '../Button';

const propTypes = {
    actions: PropTypes.array.isRequired,
    onActionPress: PropTypes.func.isRequired,
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
        defaultActionsContainer: [
            card.defaultActionsContainer,
            props.style.defaultActionsContainer,
        ],
    };
}

class CardDefaultActions extends PureComponent {
    constructor(props) {
        super(props);

        this.onActionPressed = this.onActionPressed.bind(this);
    }
    onActionPressed(action) {
        const { onActionPress } = this.props;

        if (onActionPress) {
            onActionPress(action);
        }
    }
    render() {
        const { actions } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <View style={styles.defaultActionsContainer}>
                {actions.map(action =>
                    <View key={action} style={{ marginLeft: 8 }}>
                        <Button
                            primary
                            text={action}
                            onPress={this.onActionPressed}
                        />
                    </View>,
                )}
            </View>
        );
    }
}

CardDefaultActions.propTypes = propTypes;
CardDefaultActions.defaultProps = defaultProps;
CardDefaultActions.contextTypes = contextTypes;

export default CardDefaultActions;
