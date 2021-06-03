import React from "react";

class BaseComponent extends React.Component {
    foo() {
      return (<div>Hello life</div>);
    }

    goo() {
      return (<div>Hello death</div>);
    }
}

export default BaseComponent;
