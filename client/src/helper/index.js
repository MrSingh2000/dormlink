import { toast } from "react-toastify";

export const showToast = (type = "success", message) => {
  if (type === "success") toast.success(message);
  else toast.error(message);
};

