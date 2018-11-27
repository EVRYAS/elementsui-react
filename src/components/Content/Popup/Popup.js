import * as React from "react";
import { PositionedDraggable } from "react-draggable-elements";
import { Modal } from "react-overlays";
import { Popper } from "react-popper";
import { styles } from "./Popup.styles";
import PropTypes from "prop-types";

export default class Popup extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	onHide = () => {
		const { onHide } = this.props;
		onHide && onHide();
	};

	render() {
		const {
			handle,
			children,
			"aria-labelledby": ariaLabelledBy,
			isDraggable,
			show,
			containerClassName,
			backdropClassName,
			targetNode,
			placement
		} = this.props;

		return (
			<Modal
				aria-labelledby={ariaLabelledBy}
				backdropClassName={backdropClassName}
				backdropStyle={styles.backdrop}
				onHide={this.onHide}
				show={show}
			>
				<Popper referenceElement={targetNode} placement={placement}>
					{({ ref, style }) => (
						<PositionedDraggable handle={handle} disabled={!isDraggable} bounds="html">
							<div
								ref={ref}
								className={containerClassName}
								style={{
									...styles.container,
									...targetNode ? style : styles.centerToScreen
								}}
							>
								{children}
							</div>
						</PositionedDraggable>
					)}
				</Popper>
			</Modal>
		);
	}
}

Popup.defaultProps = {
    isDraggable: true,
    containerClassName: "popup-container",
    backdropClassName: "popup-overlay",
    handle: ".popup-container",
    show: true,
    targetNode: undefined,
    placement: undefined,
	onHide: undefined,
	"aria-labelledby": undefined
};

Popup.propTypes = {
	/** Whether popup can be dragged on the screen. Default: true */
	isDraggable: PropTypes.bool,
	/** CSS class for the top <div> of the popup. Default: "popup-container" */
	containerClassName: PropTypes.string,
	/** CSS class for the backdrop (overlay) <div>. Default: "popup-overlay" */
	backdropClassName: PropTypes.string,
	/** CSS selector for the HTML element serving as a handle of draggable popup. Default: ".popup-container" */
	handle: PropTypes.string,
	/** Whether popup should be made visible. Default: true */
	show: PropTypes.bool,
	/** Target node used for positioning of popup relative to it. Popper.js lib used behind the scene. */
	targetNode: PropTypes.node,
	/** One of the placements supported by Popper.js relative to target node. */
    placement: PropTypes.string,
	/** Handler that is called when backdrop is clicked or ESC key pressed. Typically in this handler you will update state so that popup is removed. */
	onHide: PropTypes.func,
	/** Standard ARIA attribute that will be set on popup root element */
	"aria-labelledby": PropTypes.string
};
