var React = require("react");

var CheckFuncs = require("../CheckFuncs");

var Input = React.createClass({
  getInitialState: function () {
    return {
      value: "",
      ee: this.props.ee
    };
  },
  render: function () {
    return (
      <input
        className="form_item_input"
        type="text"
        placeholder={this.props.inputPlaceholder}
        value={this.state.value}
        onChange={this.handleInputChange}
      />
    );
  },
  componentDidMount: function () {
    this.state.ee.on("CLICK_SUBMIT", () => {
      this.handleInputSubmit();
    });
  },
  handleInputChange: function (e) {
    this.props.onChange && this.props.onChange();
    this.setState({
      value: e.target.value
    });
  },
  handleInputSubmit: function () {
    this.props.onSubmit && this.props.onSubmit();
    var checkValid = CheckFuncs.checkNickNameValid(this.state.value);
    if (checkValid == true) {
      this.props.onCheckValid();
    } else {
      this.props.onCheckInvalid();
    }
  }
});

module.exports = Input;