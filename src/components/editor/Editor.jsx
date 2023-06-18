import "./editor.scss";
import { Editor } from "react-draft-wysiwyg";

const toolbarOptions = {
  options: ["inline", "textAlign", "list", "link", "fontSize", "emoji"],
  inline: { inDropdown: true },
  list: { inDropdown: true },
  textAlign: { inDropdown: true },
  link: { inDropdown: true },
  history: { inDropdown: true },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
};

export const CustomEditor = ({
  editorState,
  onEditorStateChange,
  onChange,
}) => {
  return (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      editorState={editorState}
      onChange={onChange}
      onEditorStateChange={onEditorStateChange}
      stripPastedStyles
      toolbar={toolbarOptions}
    />
  );
};
