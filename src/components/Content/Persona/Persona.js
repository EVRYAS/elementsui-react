import * as React from 'react';
import PropTypes from 'prop-types';
import { styles } from './Persona.styles';
import { classNamesFunction, customizable, styled } from 'office-ui-fabric-react/lib/Utilities';
import { Persona as FABPersona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';

export function Persona(props) {
	const { id, styles } = props;
	const classNames = classNamesFunction()(styles, props);

	let initials = (props.text && props.text.match(/\b\w/g)) || [];
	initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

	return (
		<FABPersona
			id={id}
			className={classNames.root}
			size={PersonaSize.size40}
			imageInitials={initials}
			{...props}
		/>
	);
}

Persona.propTypes = {
	/** HTML id tag of the root element */
	id: PropTypes.string,
	/** Image URL */
	imageUrl: PropTypes.string,
	/** Primary text */
	text: PropTypes.string,
	/** Secondary text */
	secondaryText: PropTypes.string,
	/** Tertiary text */
	tertiaryText: PropTypes.string,
	/** Optional text */
	optionalText: PropTypes.string,
	/** User-defined styling */
	styles: PropTypes.func
};

export default styled(customizable('Persona', ['theme'])(Persona), styles);
