import React, { useCallback, useEffect, useState } from "react";
import {
  PencilSquareIcon,
  CheckIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { DndContext, useDroppable } from "@dnd-kit/core";
import { toast } from "react-toastify";

const EditablePicture = ({ initialValue, fieldName, onUpdate }) => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const [editing, setEditing] = useState(false);
  const [files, setFiles] = useState([]); // Assuming initialValue is the URL of the image
  const [originalPicture, setOriginalPicture] = useState(initialValue);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile // && ["image/jpeg", "image/png", "image/webp"].includes(selectedFile.type)
    ) {
      setFiles([selectedFile]); // Set the files state to an array with just that one file
    } else{
      toast.error("Incorect file type")
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0 //&& ["image/jpeg", "image/png", "image/webp"].includes(droppedFiles[0].type)
    ) {
      const selectedFile = droppedFiles[0]; // Take the first file only
      setFiles([selectedFile]); // Set the files state to an array with just that one file
    } else{
      toast.error("Incorect file type")
    }
  };

  const handleRemoveFile = (index) => {
    setFiles([]);
  };

  const handleUpdate = async () => {
    if (files.length === 0) {
      // If picture hasn't changed, simply exit edit mode
      setEditing(false);
      return;
    }
    try {
      // console.log(files);
      let updatedUser = await onUpdate(
        dispatch,
        userInfo._id,
        fieldName,
        files
      ); // Trigger the update action
      // console.log(updatedUser)
      setOriginalPicture(updatedUser.payload.profilePhoto); // Update the original picture to the new one
      setEditing(false);
      setFiles([]);
    } catch (error) {
      setOriginalPicture(originalPicture); // Revert to the original picture if the update fails
      setFiles([])
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div
        className="relative flex items-center flex-grow w-20 h-20 "
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <input
          type="file"
          accept="image/jpeg, image/png, image/webp"
          hidden
          id="browse"
          onChange={handleFileChange}
        />

        <label
          htmlFor="browse"
          className="rounded-full border-2 border-dashed border-zinc-400 p-1 z-10  font-medium text-xs  absolute   h-full w-full opacity-70 cursor-pointer text-violet-700"
        >
          <span className=" text-xs overflow-hidden overflow-ellipsis break-words h-full w-full flex items-center justify-center text-center ">
            {files.length == 0 && "Drag your file (png, jpeg, webp) here "}
            {files.length > 0 && files[0]?.name}
          </span>
        </label>

        <img
          src={originalPicture}
          alt="Preview"
          className="z-0 rounded-full opacity-20 h-full w-full hover:opacity-10"
        />

        {files.length > 0 && (
          <div className="absolute rounded-full bg-white text-center z-10">
            {files.length}
            <TrashIcon
              onClick={() => handleRemoveFile(0)}
              className="z-20 bg-white opacity-80 p-1 cursor-pointer h-5 w-5 stroke-[2px] pr-1 hover:text-red-500 hover:stroke-[2px]"
            />
          </div>
        )}

        <CheckIcon
          onClick={handleUpdate}
          className="z-20 bg-white opacity-80 rounded-full p-1 absolute bottom-0 right-0  cursor-pointer h-5 w-5 stroke-[2px] pr-1 hover:text-green-500 hover:stroke-[2px]"
        />
      </div>
    );
  }

  return (
    <div className="relative flex-col items-center justify-between group">
      <img
        src={originalPicture}
        alt="Editable"
        className="w-20 h-20 rounded-full object-cover"
      />
      <PencilSquareIcon
        onClick={handleEdit}
        className=" bg-white opacity-70 rounded-full p-1  absolute bottom-0 right-0 cursor-pointer h-5 w-5 stroke-[2px] pr-1 group-hover:text-[#e77600] hover:stroke-[2px]"
      />
    </div>
  );
};

export default EditablePicture;
