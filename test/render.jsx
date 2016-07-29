var React = require("react");
var ReactDOM = require("react-dom");

var Form = require("../src/component/Form.jsx");
var FormItem = require("../src/component/FormItem.jsx");

require("../src/style/render.less");

var App = React.createClass({
  render: function () {
    return (
      <Form onSubmit={() => {console.log("handle form submit!")}}>
        <FormItem
          label="nickname:"
          validTip="valid!"
          invalidTip="invalid!"
          inputPlaceholder="input nickname"
        />
        <FormItem
          label="mobile:"
          validTip="valid!"
          invalidTip="invalid!"
          inputPlaceholder="input mobile"
        />
      </Form>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById("app_container"),
  function () {
    console.log("rendered!");
  }
);