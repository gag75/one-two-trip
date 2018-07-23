import * as React from "react";
import OptionItem from './OptionItem';
import './style.css';

class Select extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleBlur = () => {
    this.handleClick();
  };

  /**
   * Вызывается при клике на children
   * 
   * @param {string} value - значение выбранного элемента(Option Item)
   */
  handleItemClick = (value) => {
    this.props.onChange(value);
  }

  /**
   * Отрисовывает children(Option Item) и добавляем к ним нужные props
   */
  renderChildrens = () => {
    const { children, value } = this.props;
    return (
      <div className="select__list-items">
        {React.Children.map(children, (el) => {
            return React.cloneElement(el, {
              className: 'select__item' + (el.props.value === value ? ' select__item--selected' : '') +
                (el.props.disabled ? ' select__item--disabled' : ''),
              value: el.props.value,
              prevClick: el.props.onClick,
              onClick: this.handleItemClick,
            })
          }
        )}
      </div>
    );
  };

  /**
   * Отрисовывает выбранного children в селекторе
   */
  renderSelectedChildren = () => {
    const { children, value } = this.props;
    const selectedItem = React.Children.toArray(children).filter(el => el.props.value === value)[0];
    return (
      <div className="select__selected-item">
        {selectedItem ? selectedItem.props.children : 'Выберите элемент'}
      </div>
    );
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div
        className="select"
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        tabIndex="0"
      >
        {this.renderSelectedChildren()}
        {isOpen && this.renderChildrens()}
      </div>
    );
  }
}

export { OptionItem, Select };
