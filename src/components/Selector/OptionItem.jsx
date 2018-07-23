import * as React from "react";
import PropTypes from 'prop-types';

export default class OptionItem extends React.Component {
  handleClick = (e) => {
    const {prevClick, onClick, value, disabled} = this.props;
    if (disabled) {
      e.stopPropagation();
      return;
    }

    prevClick && prevClick(value);
    onClick && onClick(value);
  }
  render() {
    const {prevClick, disabled, value, ...otherProps} = this.props;
    return <div {...otherProps} onClick={this.handleClick}>{this.props.children}</div>;
  }
}
OptionItem.propTypes = {
  prevClick: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
