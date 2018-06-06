import * as React from 'react';

export interface InputFieldProps {
	/**
	 * HTML id tag of the root element
	 */
	id?: string;
	/**
	 * Input field placeholder text
	 */
	placeholder?: string;
	/**
	 * Input field is marked with red asterisk as required if set to true
	 */
	required?: boolean;
	/**
	 * Input field is disabled is set to true
	 */
	disabled?: boolean;
	/**
	 * Error message shown under the input field
	 */
	errorMessage?: string;
	/**
	 * User-defined styling
	 */
	styles?: (...args: any[]) => any;
}

declare const InputField: React.SFC<InputFieldProps>;

export default InputField;
