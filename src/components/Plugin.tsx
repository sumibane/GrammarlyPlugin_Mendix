import { Component, ReactNode, createElement } from "react";
import { WrittingAssistantContainerProps } from "../../typings/WrittingAssistantProps";
import { InputBox } from "./InputBox";

export class Plugin extends Component<WrittingAssistantContainerProps> {
  private readonly onLeaveHandle = this.onLeave.bind(this);
  
  //private readonly onUpdateHandle = this.onUpdate.bind(this);
  render(): ReactNode {
    const value = this.props.textAttribute.value || "";
    const uniqueID = this.props.grammarlyId;
    return (
      <InputBox
        value={value}
        clientID={uniqueID}
        tabIndex={this.props.tabIndex}
        //onUpdate={this.onUpdateHandle}
        onLeave={this.onLeaveHandle}
      />
    );
  }
  // private onUpdate(value: string): void {
  //   this.props.textAttribute.setValue(value);
  // }
  private onLeave(value: string, isChanged: boolean): void {
    if (!isChanged) {
        return;
    }
    this.props.textAttribute.setValue(value);
  }
}
