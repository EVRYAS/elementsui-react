import * as React from 'react';
import InputField from 'elements-ui/Inputs/InputField';

/** Required input field with error */
export default function InputFieldRequiredWithError() {
	return <InputField placeholder="Username..." required errorMessage="Username is required" />;
}