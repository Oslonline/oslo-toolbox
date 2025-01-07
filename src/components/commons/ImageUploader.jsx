import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const ImageUploader = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    validateFile(file);
  };

  const validateFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setErrorMessage("");
      onFileSelect(file);
    } else {
      setErrorMessage("Please select a valid image file.");
      setSelectedFile(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      <div onClick={() => document.getElementById("file-input").click()} className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md bg-orange-400 p-4 text-center text-white duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400">
        <IoCloudUploadOutline className="text-9xl" />
        <p className="text-lg">Drag here or click to import your image</p>
        <p className="mt-2 text-center text-xs">SVG, PNG, JPG, WEBP, or BMP (MAX. 20MB).</p>
      </div>
      <input id="file-input" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
    </div>
  );
};

export default ImageUploader;
