import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useSchedule = () => {
  const router = useRouter();
  const generateSchedule = async () => {
    const generateReq = async () => {
      try {
        await axios.post("http://localhost:8000/api/generate-schedules/");
        router.push("/hod/semester/1/schedule/result");
      } catch (err) {
        console.log(err);
        throw err;
      }
    };

    await toast.promise(generateReq(), {
      pending: "جار الإنشاء...",
      success: "تم الإنشاء بنجاح 👍",
      error: "حدث خطأ أثناء الإنشاء 😔",
    });
  };

  const exportSchedule = async (id: number) => {
    const exportReq = async () => {
      try {
        await axios.get(`http://localhost:8000/api/get_schedule/${id}/`);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };

    await toast.promise(exportReq(), {
      pending: "جار التصدير...",
      success: "تم التصدير بنجاح 👍",
      error: "حدث خطأ أثناء التصدير 😔",
    });
  };
  return { generateSchedule, exportSchedule };
};
