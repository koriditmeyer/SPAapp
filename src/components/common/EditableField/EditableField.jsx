import React, { useState } from "react";
import { PencilSquareIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

const EditableField = ({ initialValue, fieldName, onUpdate }) => {
  //   const handleFieldUpdate = useFieldUpdate();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [originalValue, setOriginalValue] = useState(initialValue); // Keep track of the original value
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUpdate = async () => {
    if (value === originalValue) {
      // If value hasn't changed, simply exit edit mode
      setEditing(false);
      return;
    }
    try {
      await onUpdate(dispatch,fieldName, value); // Trigger the update action
      setEditing(false);
    } catch (error) {
      setValue(originalValue);
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div 
      className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="text-sm w-full lowercase py-1 border border-zinc-400 px-2  rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
        />
        <CheckIcon
          onClick={handleUpdate}
          className="cursor-pointer h-5 stroke-[1px] pr-1 hover:text-green-500 hover:stroke-[2px]"
        />
      </div>
    );
  }

  return (
    <div 
    className="flex items-center justify-between group ">
      <div className="text-sm pt-1 group-hover:text-[#e77600]  ">{value}</div>
      <PencilSquareIcon
        onClick={handleEdit}
        className="cursor-pointer h-5 stroke-[1px] pr-1  group-hover:text-[#e77600] hover:stroke-[2px]"
      />
    </div>
  );
};

export default EditableField;
