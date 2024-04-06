import { Component, ReactNode, createElement } from "react";

import { InputBox } from "./components/InputBox";
import { WrittingAssistantPreviewProps } from "../typings/WrittingAssistantProps";

export class preview extends Component<WrittingAssistantPreviewProps> {
  render(): ReactNode {
    return (
      <InputBox
        value={this.props.textAttribute}
        clientID={this.props.grammarlyId}
      />
    );
  }
}

export function getPreviewCss(): string {
  return require("./ui/WrittingAssistant.css");
}
