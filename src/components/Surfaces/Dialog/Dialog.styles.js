export const styles = props => {
	const { className, theme } = props;
	const { palette, semanticColors } = theme;

	return {
		root: [
			'ms-Modal',
			{
				// place your styles here
			},
			className
		]
	};
};