import { useRef } from "react";
import { toast } from "react-toastify";
import { postAPI } from "../../services/API";

const useAddProductLoader = () => {
  const toastId = useRef(null);
  const handleAddProduct = async ({ formData }) => {
    toastId.current = toast("Please wait...", {
      type: "loading",
    });
    try {
      const product = await postAPI("api/products", formData);
      toast.update(toastId.current, {
        render: "Product Successfully Added",
        type: "success",
      });
    } catch (error) {
      toast.update(toastId.current, {
        render: error.response.data.message,
        type: "error",
      });
    }
  };
  return handleAddProduct;
};
export default useAddProductLoader;
