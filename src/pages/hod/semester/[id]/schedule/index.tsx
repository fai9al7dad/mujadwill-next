import Link from "next/link";
import { PrimaryButton } from "../../../../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../../../../components/layouts/hod_layout";

const Shedule = () => {
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
        <div className="mr-5">جاهزة 👍 </div>
      </div>
      <div className="flex items-center mb-5">
        <div className="w-72 py-5 px-5 bg-white border border-gray-200 rounded-lg text-center">
          تفضيلات الدكاترة
        </div>
        <div className="mr-5 text-orange-500 underline">متابعة</div>
      </div>
      <div className="mt-5">
        <PrimaryButton>انشاء الجداول</PrimaryButton>
      </div>
    </HeadOfDepartmentsLayout>
  );
};

export default Shedule;
