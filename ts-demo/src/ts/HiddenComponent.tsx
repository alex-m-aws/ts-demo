import React from "react";
import Toggle from "./Toggle";
import BaseClassComponent from "./BaseClassComponent";

interface State {
  checked: boolean;
}

class HiddenComponent extends BaseClassComponent<{}, State> {
  constructor() {
    super({});
    this.state = { checked: false }
  }

  render() {
    const { checked } = this.state;
    const setChecked = (checked: boolean) => this.setState({ checked });

    return (
      <div>
        <Toggle
          checked={checked}
          onChange={setChecked}
        />
        {checked &&
          <div>{this.goo()}</div>
        }
      </div>
    )
  }
}

export default HiddenComponent;
