import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const ImageUploader = ({ onFileSelect, text = "Drag here or click to import your image", multiple = false, maxSizeMB = 20 }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    validateFiles(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    validateFiles(files);
  };

  const validateFiles = (files) => {
    const validFiles = Array.from(files).filter((file) => file.type.startsWith("image/") && file.size <= maxSizeMB * 1024 * 1024);
    if (validFiles.length !== files.length) {
      setErrorMessage(`Please select valid image files (max size: ${maxSizeMB}MB).`);
    } else {
      setErrorMessage("");
      onFileSelect(validFiles);
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
        className={`hover:bg-button-hover dark:hover:bg-button-dark-hover text-text-dark dark:text-text-base flex w-full cursor-pointer flex-col items-center justify-center rounded-md p-4 py-8 text-center duration-200 ${isDragging ? "bg-button-hover dark:bg-button-dark-hover" : "bg-accent"}`}
      >
        <IoCloudUploadOutline className="text-9xl" />
        <p className="text-lg">{text}</p>
        <p className="mt-2 text-center text-xs">SVG, PNG, JPG, WEBP, or BMP (MAX. {maxSizeMB}MB).</p>
      </div>
      <input id="file-input" type="file" accept="image/*" multiple={multiple} onChange={handleFileChange} className="hidden" />
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
    </div>
  );
};

ImageUploader.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
  text: PropTypes.string,
  multiple: PropTypes.bool,
  maxSizeMB: PropTypes.number,
};

export default ImageUploader;
