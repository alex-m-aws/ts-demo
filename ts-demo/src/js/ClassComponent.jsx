import React from "react";
import BaseClassComponent from "./BaseClassComponent";
import { add } from "./utils";

class Component extends BaseClassComponent {
    render() {
      console.log(add(1,2));
      return (this.foo());
    }
}

export default Component;
