import * as React from 'react';

export interface CommandBarButtonProps {
	/**
	 * HTML id tag of the root element
	 */
	id?: string;
	/**
	 * Button label
	 */
	text?: string;
	/**
	 * Button is disabled
	 */
	disabled?: boolean;
	/**
	 * Mouse click event handler
	 */
	onClick?: (...args: any[]) => any;
	/**
	 * Icon name
	 */
	iconName?: string;
	/**
	 * User-defined styling
	 */
	styles?: (...args: any[]) => any;
}

declare const CommandBarButton: React.SFC<CommandBarButtonProps>;

export default CommandBarButton;