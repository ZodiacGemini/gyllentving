import * as React from "react";

interface IButtonProps {
  text?: string;
}

class Button extends React.Component<
  React.ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps
> {
  public render() {
    const { text, children } = this.props;
    return text ? (
      <button {...this.props}>{text}</button>
    ) : (
      <button {...this.props}>{children}</button>
    );
  }
}

export default Button;
