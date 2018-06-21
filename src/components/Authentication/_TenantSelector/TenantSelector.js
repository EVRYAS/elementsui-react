import * as React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Inputs/Dropdown';
import LoggedInBar from '../_LoggedInBar';
import Label from '../../Inputs/Label';
import { styles } from './TenantSelector.styles';
import { classNamesFunction, customizable, styled } from 'office-ui-fabric-react/lib/Utilities';
import { FormattedMessage } from 'react-intl';
import LanguagePicker from '../../Pickers/LanguagePicker';

/** TenantSelector example */
class TenantSelector extends React.Component {
	static getDerivedStateFromProps(props, state) {
		return { ...state, selectedDatabase: props.selectedTenant };
	}

	constructor(props) {
		super(props);

		this.state = {
			selectedDatabase: this.props.selectedTenant || this.props.tenants[0]
		};

		this.classNames = classNamesFunction()(styles, props);
	}

	callOnChange = value => {
		if (this.props.tenants != null) {
			this.props.tenants.forEach(tenant => {
				if (tenant.Id === value) {
					this.props.onChange(tenant.Id);
				}
			});
		}
	};

	handleSelectChange = option => {
		this.callOnChange(option.key);
		this.setState(ps => ({
			...ps,
			selectedDatabase: option.key
		}));
	};

	render() {
		let options;
		if (this.props.tenants != null && !this.props.isLoggedIn) {
			options = this.props.tenants.map(tenant => ({
				key: tenant.Id,
				text: tenant.Description,
				isSelected: tenant.Id === this.props.selectedTenant
			}));
		}

		return (
			<div>
				{!this.props.isLoggedIn ? (
					<div>
						<div className={this.classNames.dropdown_label_wrapper}>
							<Label className={this.classNames.label}>
								<FormattedMessage id="database" />
							</Label>
							<Label className={this.classNames.label}>
								<FormattedMessage id="languagePicker" />
							</Label>
						</div>
						<div className={this.classNames.dropdown_wrapper}>
							<Dropdown
								id="databaseDropdown"
								className={this.classNames.selectTenantDropdown}
								selectedKey={this.state.selectedDatabase}
								placeHolder={'...'}
								options={options || []}
								onChange={option => this.handleSelectChange(option)}
							/>
							<LanguagePicker
								id="languagePicker"
								className={this.classNames.languagePicker}
								languageCodes={['en', 'nb', 'nn', 'sv']}
								defaultLanguage={this.props.defaultLanguage}
								onChange={code => this.props.onLanguageChange(code)}
							/>
						</div>
					</div>
				) : (
					<LoggedInBar
						currentUserName={this.props.currentUserName}
						tenant={this.state.selectedDatabase}
						handleLogoutClick={this.props.handleLogoutClick}
						goBack={this.props.goBack}
						logout={this.props.logout}
					/>
				)}
			</div>
		);
	}
}

TenantSelector.propTypes = {
	/** Default locale 2-letter code */
	defaultLanguage: PropTypes.string,
	/** Selected tenant */
	selectedTenant: PropTypes.string,
	/** List of tenant configs */
	tenants: PropTypes.arrayOf(
		PropTypes.shape({
			Id: PropTypes.string,
			Description: PropTypes.string
		})
	),
	/** Logged in user's name */
	currentUserName: PropTypes.string,
	/** Is logged in */
	isLoggedIn: PropTypes.bool,
	/** Selected tenant changed event handler */
	onChange: PropTypes.func,
	/** Selected language changed event handler */
	onLanguageChange: PropTypes.func,
	/** Back button click event handler */
	goBack: PropTypes.func,
	/** User-defined styling */
	styles: PropTypes.func
};

export default styled(customizable('TenantSelector', ['theme'])(TenantSelector), styles);