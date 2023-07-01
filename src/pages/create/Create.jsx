import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CreateArticleSchema } from "../../validation/article-create";
import { TextField } from "../../components/text-field";
import "./create.scss";
import { useState } from "react";
import { EditorState } from "draft-js";
import { CustomEditor } from "../../components/editor";
import { useCategories } from "../../hooks/useCategories";
import { createOptions } from "../../helpers/utils";
import { Button, FormHelperText, MenuItem } from "@mui/material";
import { CustomSelect } from "../../styled-components/custom-select";
import { CustomButton } from "../../styled-components/custom-button";
import { stateToHTML } from "draft-js-export-html";
import { usePosts } from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export const Create = () => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      title: "",
      image: null,
      categoryId: -1,
    },
    resolver: yupResolver(CreateArticleSchema),
  });

  const navigate = useNavigate();

  const { categories } = useCategories();
  const queryClient = useQueryClient();

  const [editorShortState, setEditorShortState] = useState(() =>
    EditorState.createEmpty()
  );

  const [editorMainState, setEditorMainState] = useState(() =>
    EditorState.createEmpty()
  );

  const { createPost } = usePosts();

  const onSubmit = async ({ title, image, categoryId }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoryId", categoryId);
    formData.append("short", stateToHTML(editorShortState.getCurrentContent()));
    formData.append("body", stateToHTML(editorMainState.getCurrentContent()));
    if (image) {
      formData.append("image", image);
    }
    createPost(formData, {
      onSuccess: () => {
        navigate("/");
        queryClient.invalidateQueries("posts");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-form">
      <h1 className="create-form__title">Create article</h1>
      <TextField
        name="title"
        control={control}
        variant="filled"
        label="Title"
        className="create-form__input"
      />
      <Controller
        name="categoryId"
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <CustomSelect
              {...field}
              size="small"
              error={!!fieldState.error}
              className="create-form__category"
            >
              {createOptions(categories, "name", "Choose category").map(
                (category) => (
                  <MenuItem value={category.value} key={category.value}>
                    {category.label}
                  </MenuItem>
                )
              )}
            </CustomSelect>
            <FormHelperText className="error-text" error>
              {fieldState.error?.message || " "}
            </FormHelperText>
          </div>
        )}
      />
      <input
        accept="image/*"
        className="create-form__file-upload"
        name="image"
        onChange={(e) => setValue("image", e.target.files[0])}
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
      />
      <label htmlFor="raised-button-file">
        <span>Upload header image:&nbsp;</span>
        <Button variant="raised" color="primary" component="span">
          Upload
        </Button>
        <span>{getValues("image")?.name}</span>
      </label>
      <label className="create-form__editor-label">
        Short article description(about 80 words):
        <CustomEditor
          editorState={editorShortState}
          onEditorStateChange={setEditorShortState}
        />
      </label>
      <label className="create-form__editor-label">
        Main article content:
        <CustomEditor
          editorState={editorMainState}
          onEditorStateChange={setEditorMainState}
        />
      </label>
      <CustomButton
        variant="contained"
        type="submit"
        color="primary"
        className="create-form__submit"
      >
        Create
      </CustomButton>
    </form>
  );
};
