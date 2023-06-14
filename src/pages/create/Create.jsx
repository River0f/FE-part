import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateArticleSchema } from "../../validation/article-create";
import { TextField } from "../../components/text-field";
import "./create.scss";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

export const Create = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(CreateArticleSchema),
  });

  const [editorShortState, setEditorShortState] = useState(() =>
    EditorState.createEmpty()
  );

  const [editorMainState, setEditorMainState] = useState(() =>
    EditorState.createEmpty()
  );

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-form">
      <h1 className="create-form__title">Create article</h1>
      <TextField
        name="title"
        control={control}
        variant="filled"
        label="Title"
        error={errors["title"]?.message}
        className="create-form__input"
      />
      <label>
        <p className="create-form__short-label">
          Short article description(about 80 words):
        </p>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorShortState}
          onEditorStateChange={setEditorShortState}
          toolbar={{
            options: ["inline", "blockType"],
          }}
        />
      </label>
      <label>
        <p className="create-form__short-label">Main article content:</p>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorMainState}
          onEditorStateChange={setEditorMainState}
          toolbar={{
            options: ["inline", "blockType"],
          }}
        />
      </label>
    </form>
  );
};
