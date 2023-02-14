import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { DisabledButton } from "../../components/atoms/disabled_button";
import { PrimaryButton } from "../../components/atoms/primary_button";
import { EduAffairsLayout } from "../../components/layouts/edu_affairs_layout";
import axios from "axios";
import { importsStatus } from "../../components/types/types";
import { useUpload } from "../../components/hooks/useUpload";

export async function getServerSideProps() {
  const importsStatus = await axios.get(
    "http://192.168.1.37:8000/api/get-imports-status/"
  );
  return {
    props: {
      importsStatus: importsStatus.data,
    }, // will be passed to the page component as props
  };
}

const EduAffairsIndex = ({
  importsStatus,
}: {
  importsStatus: importsStatus;
}) => {
  const { uploadFile } = useUpload("import-sections/");

  return (
    <EduAffairsLayout>
      <div>
        <h1 className="text-sm text-gray-500">
          ملاحظة صيغة الترم لابد أن تكون excel
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-2 border border-gray-200 rounded-lg divide-y divide-y-reverse divide-x divide-x-reverse">
            <div className="text-lg text-center py-5 border-b flex items-center justify-center">
              الفصل الدراسي الأول
            </div>
            <div className="py-5 flex items-center justify-center">
              {/* {importsStatus.sections ? (
                <DisabledButton>تم رفع الشعب</DisabledButton>
              ) : (
                )} */}
              <input type="file" onChange={uploadFile} accept=".xlsx" />
            </div>
          </div>
        </div>
      </div>
    </EduAffairsLayout>
  );
};

export default EduAffairsIndex;
