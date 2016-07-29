var React = require("react");
var EE = require("event-emitter");

var Form = React.createClass({
  getInitialState: function () {
    return {
      ee: EE({})
    }
  },
  render: function () {
    var _this = this;
    return (
      <div className="form_wrap">
        {
          React.Children.map(this.props.children, function (children) {
            return React.cloneElement(children, {ee: _this.state.ee});
          })
        }
        <button
          className="form_submit_button"
          type="submit"
          onClick={this.handleClickSubmit}
        >submit!</button>
      </div>
    );
  },
  handleClickSubmit: function () {
    this.props.onSubmit && this.props.onSubmit();
    this.state.ee.emit("CLICK_SUBMIT");
  }
});

module.exports = Form;