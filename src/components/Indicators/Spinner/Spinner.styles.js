export const styles = props => {
	const { className, theme } = props;
	const { palette, semanticColors } = theme;

	return {
		root: [
			'ms-Spinner',
			{
				// background: props.theme.palette.themePrimary
				// place your styles here
			},
			className
		]
	};
};