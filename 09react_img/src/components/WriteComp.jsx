import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { postAdd } from "../api/testImageApi";
import { useNavigate } from "react-router-dom";

const initState = {
  title: "",
  name: "",
  content: "",
};

function WriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...initState });
  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");
  // const [content, setContent] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!testImageAdd.title.trim()) {
      toast.error("title을 입력하세요.");
      document.querySelector("input[name='title']").focus();
      return;
    }

    if (!testImageAdd.name.trim()) {
      toast.error("name을 입력하세요.");
      document.querySelector("input[name='name']").focus();
      return;
    }

    if (!testImageAdd.content.trim()) {
      toast.error("content를 입력하세요.");
      document.querySelector("input[name='content']").focus();
      return;
    }

    const formData = new FormData();

    formData.append("title", testImageAdd.title);
    formData.append("name", testImageAdd.name);
    formData.append("content", testImageAdd.content);
    if (testImageAdd.files) {
      formData.append("files", testImageAdd.files[0]);
    }

    try {
      const result = await postAdd(formData);
      console.log("postAdd result : " + result);
      setTestImageAdd({ ...initState });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    // if (title == "") {
    //   toast.error("title을 입력하세요.");
    //   document.querySelector("input[name='title']").focus();
    // }

    // if (name == "") {
    //   toast.error("name을 입력하세요.");
    //   document.querySelector("input[name='name']").focus();
    // }

    // if (content == "") {
    //   toast.error("content를 입력하세요.");
    //   document.querySelector("textarea[name='content']").focus();
    // }
  }

  // function handleTitle(e) {
  //   setTitle(e.target.value);
  // }

  // function handleName(e) {
  //   setName(e.target.value);
  // }

  // function handleContent(e) {
  //   setContent(e.target.value);
  // }

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log("데이터 : " + name + " / " + value);

    setTestImageAdd({ ...testImageAdd, [name]: value });
  }

  function handleFileChange(e) {
    setTestImageAdd({
      ...testImageAdd,
      files: e.target.files,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h3 className="mb-3 text-center">글작성</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="px-4 mt-3">
            <label htmlFor="title" className="block mb-3">
              <span className="text-red-500">*</span>제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded"
              value={testImageAdd.title}
              onChange={handleChange}
            />
          </div>
          <div className="px-4 mt-3">
            <label htmlFor="name" className="block mb-3">
              <span className="text-red-500">*</span>이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-48 p-2 border rounded"
              value={testImageAdd.name}
              onChange={handleChange}
            />
          </div>
          <div className="px-4 mt-3">
            <label htmlFor="content" className="block mb-3">
              <span className="text-red-500">*</span>내용
            </label>
            <textarea
              type="textarea"
              id="content"
              name="content"
              rows="4"
              className="w-full p-2 border rounded"
              value={testImageAdd.content}
              onChange={handleChange}
            />
          </div>
          <div className="px-4 mt-3">
            <label htmlFor="files" className="block mb-3">
              파일
            </label>
            <input
              type="file"
              id="files"
              name="files"
              className="w-full p-2 border rounded"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-end px-4 mt-3">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 "
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default WriteComp;
