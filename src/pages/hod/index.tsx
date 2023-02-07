import Link from "next/link";
import { DisabledButton } from "../../components/atoms/disabled_button";
import { PrimaryButton } from "../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../components/layouts/hod_layout";

import styles from "../../styles/main.module.css";

const CustomRow = ({
  title,
  button,
}: {
  title: string;
  button: JSX.Element;
}) => {
  return (
    <>
      <div className="p-4 font-bold"> {title}</div>
      <div className="p-4 ">{button}</div>
    </>
  );
};
const HodIndex = () => {
  const sem = [
    { id: 1, title: "الفصل الدراسي الأول", isFinished: true },
    { id: 2, title: "الفصل الدراسي الثاني", isFinished: false },
    { id: 3, title: "الفصل الدراسي الثالث", isFinished: false },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-2/4">
        <div className="">
          <h1 className="text-sm text-gray-500 mb-2">
            ملاحظة صيغة الترم لابد أن تكون excel
          </h1>
          <div className="grid grid-cols-4 border border-gray-200 rounded-lg divide-y divide-y-reverse divide-x divide-x-reverse">
            <div className="text-lg text-center py-5 border-b">
              الفصل الدراسي الأول
            </div>
            <div className="py-5 flex items-center justify-center">
              <DisabledButton>تم الإنشاء</DisabledButton>
            </div>
            <div className="py-5 flex items-center justify-center">
              <DisabledButton>تم التحميل</DisabledButton>
            </div>
            <Link href="/hod/semester/1/instructors">
              <div className="py-5 flex items-center justify-center px-1 text-sm">
                <PrimaryButton>تصفح</PrimaryButton>
              </div>
            </Link>
            <div className="text-lg text-center py-5">الفصل الدراسي الثاني</div>
            <div className="py-5 flex items-center justify-center">
              <PrimaryButton className="text-sm w-3/4 px-1">
                انشاء فصل دراسي
              </PrimaryButton>
            </div>
            <div className="py-5 flex items-center justify-center text-center px-10 font-bold">
              تحتاج إلى إنشاء الفصل أولا
            </div>
            <div></div>
            <div className="text-lg text-center py-5">الفصل الدراسي الثالث</div>
            <div className="py-5 flex items-center justify-center">
              <PrimaryButton className="text-sm w-3/4 px-1">
                انشاء فصل دراسي
              </PrimaryButton>{" "}
            </div>
            <div className="py-5 flex items-center justify-center text-center px-10 font-bold">
              تحتاج إلى إنشاء الفصل أولا
            </div>{" "}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodIndex;
