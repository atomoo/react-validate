var React = require("react");
var ClassNames = require("classnames");

var Input = require("./Input.jsx");

var FormItem = React.createClass({
  getInitialState: function () {
    return {
      inputValid: true,
      inputTip: ""
    };
  },
  render: function () {
    var inputTipClasses = ClassNames({
      form_item_tip: true,
      invalid: this.state.inputValid == false
    });

    return (
      <div className="form_item_wrap">
        <label className="form_item_label">{this.props.label}</label>
        <Input
          inputPlaceholder={this.props.inputPlaceholder}
          onCheckValid={this.handleInputCheckValid}
          onCheckInvalid={this.handleInputCheckInvalid}
          ee={this.props.ee}
        />
        <span className={inputTipClasses}>{this.state.inputTip}</span>
      </div>
    );
  },
  handleInputCheckValid: function () {
    this.setState({
      inputValid: true,
      inputTip: this.props.validTip
    });
  },
  handleInputCheckInvalid: function () {
    this.setState({
      inputValid: false,
      inputTip: this.props.invalidTip
    });
  }
});

module.exports = FormItem;