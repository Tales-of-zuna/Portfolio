"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import { SetStateAction, useEffect, useRef, useState } from "react";

const CreateBlog = () => {
  const editorRef = useRef<any>(null);

  const [title, setTitle] = useState<any>("");
  const [summary, setSummary] = useState<any>("");
  const [content, setContent] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [video, setVideo] = useState<any>("");
  const [tags, setTags] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [remoteCategories, setRemoteCategories] = useState<any>([]);
  const [categoryToCreate, setCategoryToCreate] = useState<any>("");
  const [submitting, setSubmitting] = useState<any>(false);
  const [type, setType] = useState<any>();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const categories = await res.json();
        setRemoteCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  const submitBlog = async () => {
    setSubmitting(true);
    const newBlog = {
      title,
      summary,
      content: content.replace('"', `\"`),
      image,
      video,
      tags,
      categories: categories,
      type: type + "",
    };
    console.log(newBlog);
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });
      if (response.ok) {
        console.log("Blog created successfully!");
        setTitle("");
        setSummary("");
        setContent("");
        setImage("");
        setVideo("");
        setTags([]);
        setCategories([]);
        setCategoryToCreate("");
        setRemoteCategories([]);
        setSubmitting(false);
        setType("");
        editorRef.current.editor.setContent("");
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditorChange = (content: SetStateAction<string>) => {
    setContent(content);
  };
  const toggleCategory = (categoryName: any) => {
    if (categories.includes(categoryName)) {
      setCategories(categories.filter((name: any) => name !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
  };

  const addCategory = async () => {
    if (!categoryToCreate) return;
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: categoryToCreate,
        }),
      });
      const data = await res.json();
      setRemoteCategories([...remoteCategories, data]);
      setCategoryToCreate("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  return (
    <div className="space-y-4 rounded-xl bg-white p-4">
      <div className="flex justify-around gap-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          label="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <Input
          label="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          label="Video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <Input
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(","))}
        />
        <Select label="Type" selectedKeys={type} onSelectionChange={setType}>
          <SelectItem className="text-center text-neutral-800" key={"blog"}>
            Blog
          </SelectItem>
          <SelectItem className="text-center text-neutral-800" key={"project"}>
            Project
          </SelectItem>
          <SelectItem
            className="text-center text-neutral-800"
            key={"experiment"}
          >
            Experiment
          </SelectItem>
          <SelectItem className="text-center text-neutral-800" key={"podcast"}>
            Podcast
          </SelectItem>
          <SelectItem className="text-center text-neutral-800" key={"demo"}>
            Demo
          </SelectItem>
        </Select>
      </div>
      <div className=" ">
        <div className="flex min-w-60 flex-wrap gap-2">
          {remoteCategories.map((category: any) => (
            <Button
              key={category._id}
              size="sm"
              className={`${categories.includes(category.name) ? "bg-neutral-700 text-white" : "bg-neutral-100"} transform transition-all duration-300 ease-in-out hover:bg-neutral-700 hover:text-white`}
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      <Editor
        apiKey="ubflr0wgpoppbg5z06a3ax83dqtz8fht105bjauj0ws8l9io"
        onInit={(_evt: any, editor: any) => (editorRef.current = editor)}
        onEditorChange={handleEditorChange}
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
      <div className="flex items-center justify-center py-4">
        <Button
          isLoading={submitting}
          onClick={() => {
            submitBlog();
          }}
          className="transform bg-neutral-700 font-bold uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl active:translate-y-0 active:scale-95"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateBlog;
