import Link from "next/link";
import { DisabledButton } from "../../components/atoms/disabled_button";
import { PrimaryButton } from "../../components/atoms/primary_button";
import axios from "axios";
import { importsStatus } from "../../components/types/types";
import { useUpload } from "../../components/hooks/useUpload";
import HoverToolTip from "../../components/atoms/hover_tooltip";
import { useEffect } from "react";
export async function getServerSideProps() {
  const importsStatus = await axios.get(
    "http://192.168.1.37:8000/api/get-imports-status/"
  );
  return {
    props: {
      importsStatus: importsStatus.data,
    },
  };
}

const HodIndex = ({ importsStatus }: { importsStatus: importsStatus }) => {
  const { uploadFile } = useUpload("import-instructors/");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-2/4">
        <div className="">
          <div className="flex items-end justify-between mb-5">
            <p className="text-sm text-gray-500 mb-2">
              رفع أعضاء هيئة التدريس .. ملاحظة: يجب رفع ملف بصيغة .xlsx
              <HoverToolTip
                content={
                  <div>
                    <div className="text-xs mb-2">مثال:</div>
                    <table className="">
                      <thead>
                        <tr>
                          <th className="border  border-gray-300 p-2">
                            اسم المدرس
                          </th>
                          <th className="border border-gray-300 p-2">
                            الحد الأقصى لعدد الساعات
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">
                            محمد عبدالله
                          </td>
                          <td className="border border-gray-300 p-2">14</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                }
              >
                <span className="p-5 bg-white shadow py-1 rounded-lg border border-gray-100 mr-2">
                  ؟
                </span>
              </HoverToolTip>
            </p>
          </div>

          <div className="grid grid-cols-3 border border-gray-200 rounded-lg divide-y divide-y-reverse divide-x divide-x-reverse">
            <div className="text-lg text-center py-5 border-b flex items-center justify-center">
              الفصل الدراسي الأول
            </div>
            <div className="py-5 ">
              <div className="mr-5 mt-2">
                <input type="file" onChange={uploadFile} accept=".xlsx" />
              </div>
            </div>

            <Link href="/hod/semester/1/instructors">
              <div className="py-5 flex items-center justify-center px-1 text-sm">
                {importsStatus.instructors ? (
                  <PrimaryButton>تصفح</PrimaryButton>
                ) : (
                  <HoverToolTip content="يجب رفع أعضاء هيئة التدريس أولا">
                    <DisabledButton>تصفح</DisabledButton>
                  </HoverToolTip>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodIndex;
