"use client";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";

const CreateBlog = () => {
  const editorRef = useRef<any>(null);
  type category = { name: string; _id: string };
  const [categories, setCategories] = useState<category[]>([]);
  const [values, setValues] = useState<any>();
  const [title, setTitle] = useState<string>();
  const [metadata, setMetadata] = useState<string>();
  const [summary, setSummary] = useState<string>();
  const [image, setImage] = useState<string>();
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [video, setVideo] = useState<string>();
  const [data, setData] = useState<string>("");
  const submitBlog = async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        metadata: metadata,
        summary: summary,
        image: image,
        video: video,
        tags: tags,
        category: JSON.stringify(Array.from(values)),
        content: data.replace('"', `\"`),
        slug: "",
        comments: [],
      }),
    });
  };
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div>
      <Editor
        apiKey="ubflr0wgpoppbg5z06a3ax83dqtz8fht105bjauj0ws8l9io"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Roboto; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
};

export default CreateBlog;
