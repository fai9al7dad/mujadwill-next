import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useSchedule = () => {
  const router = useRouter();
  const generateSchedule = async () => {
    const generateReq = async () => {
      try {
        await axios.post("http://192.168.1.37:8000/api/generate-schedules/");
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
        const res = await axios.get(
          `http://192.168.1.37:8000/api/get_schedule/${id}/`
        );

        var element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," + encodeURIComponent(res.data)
        );
        element.setAttribute("download", `schedule_${id}.csv`);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

        // window.open(
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
