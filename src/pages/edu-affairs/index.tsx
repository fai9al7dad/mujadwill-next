import { DisabledButton } from "../../components/atoms/disabled_button";
import { PrimaryButton } from "../../components/atoms/primary_button";
import { EduAffairsLayout } from "../../components/layouts/edu_affairs_layout";

const EduAffairsIndex = () => {
  return (
    <EduAffairsLayout>
      <div>
        <h1 className="text-sm text-gray-500">
          ملاحظة صيغة الترم لابد أن تكون excel
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-2 border border-gray-200 rounded-lg divide-y divide-y-reverse divide-x divide-x-reverse">
            <div className="text-lg text-center py-5 border-b">
              الفصل الدراسي الأول
            </div>
            <div className="py-5 flex items-center justify-center">
              <PrimaryButton className="w-2/4">نشر</PrimaryButton>
            </div>
            <div className="text-lg text-center py-5">الفصل الدراسي الثاني</div>
            <div className="py-5 flex items-center justify-center">
              <DisabledButton className="w-2/4">لم يُنشئ بعد</DisabledButton>
            </div>
            <div className="text-lg text-center py-5">الفصل الدراسي الثالث</div>
            <div className="py-5 flex items-center justify-center">
              <DisabledButton className="w-2/4">لم يُنشئ بعد</DisabledButton>
            </div>
          </div>
        </div>
      </div>
    </EduAffairsLayout>
  );
};

export default EduAffairsIndex;
