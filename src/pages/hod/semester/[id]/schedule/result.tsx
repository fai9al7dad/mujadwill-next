import { PrimaryButton } from "../../../../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../../../../components/layouts/hod_layout";

const Result = () => {
  return (
    <HeadOfDepartmentsLayout
      backLink={
        <a href="/hod/schedule" className="text-orange-500">
          الجداول
        </a>
      }
    >
      <div className="grid grid-cols-2 gap-10 ">
        <Schedule isBest={true} />
        <Schedule isBest={false} />
        <Schedule isBest={false} />
        <Schedule isBest={false} />
      </div>
      <PrimaryButton className="mt-10 mb-20">محاولة أخرى</PrimaryButton>
    </HeadOfDepartmentsLayout>
  );
};

const Schedule = ({ isBest }: { isBest: boolean }) => {
  return (
    <div>
      {isBest ? (
        <div className="text-xs font-bold  text-green-500">الأفضل</div>
      ) : (
        <div className="mt-4" />
      )}
      <div className="flex items-end justify-between mb-5">
        <div className="text-lg font-bold ">نسبة التطابق 90%</div>
        <PrimaryButton className="text-xs py-1.5">تصدير</PrimaryButton>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg ">
        <ScheduleItem right="نسبة المواد الغير المسجلة" left="30%" />
        <ScheduleItem right="نسبة المواد الغير المسجلة" left="30%" />
        <ScheduleItem right="نسبة المواد الغير المسجلة" left="30%" />
        <ScheduleItem right="نسبة المواد الغير المسجلة" left="30%" />
      </div>
    </div>
  );
};

const ScheduleItem = ({ right, left }: { right: string; left: string }) => {
  return (
    <div className="flex items-center justify-between p-5 text-xs border-b border-gray-200">
      <div>{right}</div>
      <div>{left}</div>
    </div>
  );
};
export default Result;
