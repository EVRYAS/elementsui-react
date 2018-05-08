export const getStyles = props => {
	const { className, theme } = props;
	const { palette, semanticColors } = theme;

	return {
		root: [
			'ms-Tooltip',
			{
				// background: props.theme.palette.themePrimary
				// place your styles here
			},
			className
		]
	};
};