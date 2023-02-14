import Link from "next/link";
import { PrimaryButton } from "../../../../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../../../../components/layouts/hod_layout";
import axios from "axios";
import { importsStatus } from "../../../../../components/types/types";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSchedule } from "@/components/hooks/useSchedule";

export async function getServerSideProps() {
  const importsStatus = await axios.get(
    "http://192.168.1.37:8000/api/get-imports-status/"
  );
  const getHours = await axios.get("http://192.168.1.37:8000/api/get-hours/");
  return {
    props: {
      importsStatus: importsStatus.data,
      getHours: getHours.data,
    }, // will be passed to the page component as props
  };
}

type IgetHours = {
  sections_hours: {
    hours__sum: number;
  };
  instructors_hours: {
    max_hours__sum: number;
  };
};
const Shedule = ({
  importsStatus,
  getHours,
}: {
  importsStatus: importsStatus;
  getHours: IgetHours;
}) => {
  const { generateSchedule } = useSchedule();
  console.log(getHours);

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

      <table>
        <thead>
          <tr>
            <th className="border  border-gray-300 p-2">ساعات الجدول</th>
            <th className="border  border-gray-300 p-2">
              ساعات أعضاء هيئة التدريس
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border  border-gray-300 p-2">
              {getHours.sections_hours.hours__sum}
            </td>
            <td className="border  border-gray-300 p-2">
              {getHours.instructors_hours.max_hours__sum}
            </td>
          </tr>
        </tbody>
      </table>
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
