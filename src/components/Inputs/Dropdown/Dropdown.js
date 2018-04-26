import * as React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as UIFabDropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { getStyles } from './Dropdown.styles';
import { classNamesFunction, customizable, styled } from 'office-ui-fabric-react/lib/Utilities';

/** Dropdown example */
export function Dropdown({ id, label, selectedKey, placeHolder, options, onChange, className, theme }) {
	const classNames = classNamesFunction()(getStyles, {
		theme,
		className
	});
	return (
		<UIFabDropdown
			id={id}
			label={label}
			selectedKey={selectedKey}
			placeHolder={placeHolder}
			options={options}
			onChanged={onChange}
			className={classNames.root}
		/>
	);
}

Dropdown.propTypes = {
	/** DOM element id */
	id: PropTypes.string,
	/** Dropdown label */
	label: PropTypes.string,
	/** The key of the selected element */
	selectedKey: PropTypes.any,
	/** Default placeholder */
	placeHolder: PropTypes.string,
	/** Dropdown options */
	options: PropTypes.arrayOf(
		PropTypes.shape({
			/** Option key value */
			key: PropTypes.any.isRequired,
			/** Option text value */
			text: PropTypes.string.isRequired,
			/** Option is selected */
			isSelected: PropTypes.bool
		})
	).isRequired,
	/** onChange event handler function */
	onChange: PropTypes.func
};

export default styled(customizable('Dropdown', ['theme'])(Dropdown), getStyles);
