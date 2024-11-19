import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createConfession } from "../features/ConfessionSlice";

const ConfessionForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    if (image) formData.append("image", image);

    dispatch(createConfession(formData));
    setText("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your confession..."
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ConfessionForm;