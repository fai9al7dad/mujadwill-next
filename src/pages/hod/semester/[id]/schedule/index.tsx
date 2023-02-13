import Link from "next/link";
import { PrimaryButton } from "../../../../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../../../../components/layouts/hod_layout";
import axios from "axios";
import { importsStatus } from "../../../../../components/types/types";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const importsStatus = await axios.get(
    "http://localhost:8000/api/get-imports-status/"
  );
  return {
    props: {
      importsStatus: importsStatus.data,
    }, // will be passed to the page component as props
  };
}
const Shedule = ({ importsStatus }: { importsStatus: importsStatus }) => {
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

  return (
    <HeadOfDepartmentsLayout
      backLink={
        <Link href="/hod" className="text-orange-500">
          الرئيسية
        </Link>
      }
    >
      <div className="flex items-center mb-5">
        <div className="w-72 py-5 px-5 bg-white border border-gray-200 rounded-lg text-center">
          جدول الفصول الدراسية{" "}
        </div>
        {importsStatus.sections ? (
          <div className="mr-5">جاهزة 👍 </div>
        ) : (
          <div className="mr-5">غير جاهزة</div>
        )}
      </div>
      {/* <div className="flex items-center mb-5">
        <div className="w-72 py-5 px-5 bg-white border border-gray-200 rounded-lg text-center">
          تفضيلات الدكاترة
        </div>
        <div className="mr-5 text-orange-500 underline">متابعة</div>
      </div> */}
      <div className="mt-5">
        <PrimaryButton onClick={generateSchedule}>انشاء الجداول</PrimaryButton>
      </div>
    </HeadOfDepartmentsLayout>
  );
};

export default Shedule;
