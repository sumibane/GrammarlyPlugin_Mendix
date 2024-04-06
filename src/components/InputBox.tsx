import { CSSProperties, ChangeEvent, Component, createElement } from "react";
import classNames from "classnames";

import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export interface InputProps {
  value: string;
  className?: string;
  index?: number;
  style?: CSSProperties;
  tabIndex?: number;
  clientID: string;
  //onUpdate?: (value: string) => void;
  onLeave?: (value: string, changed: boolean) => void;
}
interface InputState {
  editedValue?: string;
}
export class InputBox extends Component<InputProps> {
  private readonly onChangeHandle  = this.onChange.bind(this);
  private readonly onBlurHandle = this.onBlur.bind(this);
  readonly state: InputState = { editedValue: undefined };
    componentDidUpdate(prevProps: InputProps): void {
        if (this.props.value !== prevProps.value) {
            this.setState({ editedValue: undefined });
        }
    }
  render() {
    const textStyle = {
      width: 1200 ,
      height: 60
    }
    const className = classNames("form-control  mx-textarea-input mx-textarea-noresize", this.props.className);
    return (
      <GrammarlyEditorPlugin clientId={this.props.clientID} style = {textStyle}>
        <textarea
          className={className}
          style={this.props.style}
          value={this.getCurrentValue()}
          tabIndex={this.props.tabIndex}
          onChange={this.onChangeHandle}
          onBlur={this.onBlurHandle}
        />
      </GrammarlyEditorPlugin>
    );
  }
  private getCurrentValue(): string {
    return this.state.editedValue !== undefined
        ? this.state.editedValue
        : this.props.value;
  }
  private onChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({ editedValue: event.target.value });
  }
  private onBlur(): void {
    const inputValue = this.props.value;
    const currentValue = this.getCurrentValue();
    if (this.props.onLeave) {
        this.props.onLeave(currentValue, currentValue !== inputValue);
    }
    this.setState({ editedValue: undefined });
  }
}
