import React from "react";

class BaseComponent<Props, State> extends React.Component<Props, State> {
    foo() {
      return (<div>Hello life</div>);
    }

    goo() {
      return (<div>Hello death</div>);
    }
}

export default BaseComponent;
