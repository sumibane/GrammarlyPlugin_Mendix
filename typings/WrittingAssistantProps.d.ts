/**
 * This file was generated from WrittingAssistant.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export interface WrittingAssistantContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    grammarlyId: string;
}

export interface WrittingAssistantPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    grammarlyId: string;
    onChangeAction: {} | null;
}
