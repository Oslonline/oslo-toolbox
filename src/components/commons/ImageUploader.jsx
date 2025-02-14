import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const ImageUploader = ({ onFileSelect }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    validateFile(file);
  };

  const validateFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    } else {
      setErrorMessage("Please select a valid image file.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      <div
        onClick={() => document.getElementById("file-input").click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-md p-4 text-center text-white duration-200 ${isDragging ? "bg-orange-600 dark:bg-orange-400" : "bg-orange-400 dark:bg-orange-600"}`}
      >
        <IoCloudUploadOutline className="text-9xl" />
        <p className="text-lg">Drag here or click to import your image</p>
        <p className="mt-2 text-center text-xs">SVG, PNG, JPG, WEBP, or BMP (MAX. 20MB).</p>
      </div>
      <input id="file-input" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default ImageUploader;
