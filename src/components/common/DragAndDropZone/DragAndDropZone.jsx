import React, { useEffect, useState } from "react";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

const DragAndDropZone = ({ onUpdate, fileInputKey }) => {
  const [files, setFiles] = useState([]); // Assuming initialValue is the URL of the image
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
// console.log(fileInputRef)
  const handleFileChange = (event) => {
    event.preventDefault();
    const selectedFiles = event.target.files;
    // console.log(selectedFiles);
    if (selectedFiles.length > 0) {
      // Convert FileList to array and check every file's type
      const allFilesValid = Array.from(selectedFiles).every((file) =>
        allowedTypes.includes(file.type)
      );
      if (allFilesValid) {
        const newFiles = Array.from(selectedFiles);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Set the files state to an array with just that one file
      } else {
        toast.error("Incorect file type");
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      // Convert FileList to array and check every file's type
      const allFilesValid = Array.from(droppedFiles).every((file) =>
        allowedTypes.includes(file.type)
      );
      if (allFilesValid) {
        const newFiles = Array.from(droppedFiles); // Take the first file only
        setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Set the files state to an array with just that one file
      } else {
        toast.error("Incorect file type");
      }
    }
  };

  const handleRemoveFile = (index) => {
    console.log(index);
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onUpdate(files);
  }, [files, onUpdate]);

  useEffect(() => {
    setFiles([])
  }, [fileInputKey]);

  return (
    <div
      className="relative w-full flex-wrap gap-2 flex  min-h-[70px] max-h-24 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md "
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <input
        key={fileInputKey}
        type="file"
        accept="image/jpeg, image/png, image/webp"
        hidden
        multiple
        id="browse"
        onChange={handleFileChange}
      />

      <div className=" w-full h-full rounded absolute text-center z-10 flex flex-wrap gap-2">
        <label
          htmlFor="browse"
          className="z-10  font-medium text-xs  absolute  h-full w-full opacity-70 cursor-pointer text-violet-700"
        >
          <span
            className={`text-xs overflow-hidden overflow-ellipsis break-words h-full w-full flex ${
              files.length == 0 && "items-center "
            } justify-center text-center`}
          >
            {files.length >= 0 &&
              "Drag your files here. Maximum 10 files. Limit 10MB per file. Supported files: .png, .jpeg, .webp  "}
          </span>
        </label>
      </div>
      <div className="flex flex-wrap gap-2 p-2 pt-4">
        {files?.map((file, index) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFile(index);
            }}
            className={`z-20 btn max-w-md   p-2 flex items-center gap-1 w-auto bg-orange-100`}
          >
            <PhotoIcon className="h-4 p-0" />
            <p className="line-clamp-1 ">{file.name}</p>
            <TrashIcon className="w-4 stroke-red-600 stroke-2 " />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropZone;
