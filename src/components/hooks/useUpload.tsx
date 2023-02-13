import { ChangeEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useUpload = (endpoint: string) => {
  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(`http://localhost:8000/api/${endpoint}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          toast.success("تم رفع الملف بنجاح");
        })
        .catch((err) => {
          console.log(err);
          e.target.value = "";
          toast.error("حدث خطأ أثناء رفع الملف");
        });
    }
  };
  return { uploadFile };
};
