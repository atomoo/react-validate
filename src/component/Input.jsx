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
    this.setState({
      value: e.target.value
    });
  },
  handleInputSubmit: function () {
    var checkFunc = this.props.checkFunc || CheckFuncs.defaultCheckFunc;
    var checkValid = checkFunc(this.state.value);
    if (checkValid == true) {
      this.props.onCheckValid();
    } else {
      this.props.onCheckInvalid();
    }
  }
});

module.exports = Input;