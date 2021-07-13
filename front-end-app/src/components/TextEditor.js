import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./css/TextEditor.css";

const TextEditor = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <>
      <div className="editor">
        <Editor
          apiKey="qremq799ysgfkdf70i5p8gtpuayfu3srih0g04jons51xoac"
          initialValue="<p></p>"
          init={{
            height: 625,
            width: 1200,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "toc",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </>
  );
};

export default TextEditor;
