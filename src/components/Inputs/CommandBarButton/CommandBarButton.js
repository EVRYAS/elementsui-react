import * as React from 'react';
import PropTypes from 'prop-types';
import { CommandBarButton as FabricCommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { getStyles } from './CommandBarButton.styles';
import { classNamesFunction, customizable, styled } from 'office-ui-fabric-react/lib/Utilities';

/** CommandBarButton example */
export function CommandBarButton(props) {
	const { text, disabled, onClick, iconName, getStyles } = props;
	const classNames = classNamesFunction()(getStyles, props);
	return (
		<FabricCommandBarButton
			className={classNames.root}
			text={text}
			disabled={disabled}
			onClick={onClick}
			iconProps={{ iconName: iconName }}
		/>
	);
}

CommandBarButton.propTypes = {
	/** Button label */
	text: PropTypes.string,
	/** Button is disabled */
	disabled: PropTypes.bool,
	/** Mouse click event handler */
	onCLick: PropTypes.func,
	/** Icon name */
	iconName: PropTypes.string,
	/** User-defined styling */
	getStyles: PropTypes.func
};

export default styled(customizable('CommandBarButton', ['theme'])(CommandBarButton), getStyles);