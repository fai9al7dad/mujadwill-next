import { PrimaryButton } from "@/components/atoms/primary_button";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import InstructorsLayout from "../../../components/layouts/instructors_layout";

export async function getServerSideProps(context: any) {
  // get last part of url
  const { id } = context.query;

  const res = await axios.get(
    `http://192.168.1.37:8000/api/get-instructor/${id}`
  );
  return {
    props: {
      instructor: res.data,
    }, // will be passed to the page component as props
  };
}

type IInstructor = {
  name: string;
  email: string;
};

const Instructor = ({ instructor }: { instructor: IInstructor }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    preffered_subjects: [],
    prefferd_days: [],
    prefferd_time: [],
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: any; value: any } = e.target;

    // if a checkbox is unchecked, remove it from the array
    if (name !== "prefferd_subjects" && formData[name].includes(value)) {
      return setFormData({
        ...formData,
        [name]: formData[name].filter((item: any) => item !== value),
      });
    }

    if (name !== "prefferd_subjects" && !value) {
      return setFormData({
        ...formData,
        [name]: [],
      });
    }
    if (name === "prefferd_subjects") {
      // split the value by comma
      const values = value.split(",");

      setFormData({
        ...formData,
        prefferd_subjects: values,
      });
    } else {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    }
  };

  const submit = async () => {
    console.log(formData);

    // if the the formdata is empty, return
    if (
      !formData.prefferd_subjects ||
      !formData.prefferd_days ||
      !formData.prefferd_time
    )
      return toast.error("الرجاء ملئ جميع الحقول");
    const send = async () => {
      // convert the array to string
      formData.prefferd_subjects = formData.prefferd_subjects.join(",");
      formData.prefferd_days = formData.prefferd_days.join(",");
      formData.prefferd_time = formData.prefferd_time.join(",");
      try {
        const res = await axios.post(
          "http://192.168.1.37:8000/api/add-preference/",
          {
            prefferd_subjects: formData.prefferd_subjects,
            prefferd_days: formData.prefferd_days,
            secret_token: router.query.id,
            prefferd_time: formData.prefferd_time,
          }
        );
      } catch (err) {
        throw err;
      }
    };
    await toast.promise(send(), {
      pending: "جار الإرسال...",
      success: "تم الإرسال بنجاح 👍",
      error: "حدث خطأ أثناء الإرسال 😔",
    });
  };

  return (
    <InstructorsLayout
      header={
        <div>
          <div className="text-4xl mb-2 font-bold">مرحبا {instructor.name}</div>
          <div className="text-md text-gray-500  ">
            نرجو منك ادخال تفضيلاتك أدناه
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-2">
        <div className=" col-span-1">
          <Item title="المواد">
            <input
              type="text"
              name="prefferd_subjects"
              id=""
              onChange={onChange}
              className="ml-3 border border-gray-200 rounded-lg px-5 py-2"
              placeholder="ادخل المواد مفصولة بفاصلة"
              value={formData.subjects}
            />
          </Item>
          <div className="text-gray-500 text-xs mt-2">
            مطلوب 3 مواد، وفق الصيغة اسم المادة - رمزها | مثال (ccsw-214)
          </div>
          <Item title="الأيام المفضلة">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="prefferd_days"
                id=""
                className="ml-3"
                onChange={onChange}
                value="MW"
              />
              <label htmlFor="">الاثنين، الأربعاء</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="prefferd_days"
                id=""
                className="ml-3"
                onChange={onChange}
                value={"UTR"}
              />
              <label htmlFor="">الأحد، الثلاثاء، الخميس</label>
            </div>
          </Item>
          <Item title="الفترات المفضلة">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="prefferd_time"
                id=""
                className="ml-3"
                onChange={onChange}
                value="morning"
              />
              <label htmlFor="">الصباح</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="prefferd_time"
                onChange={onChange}
                id=""
                className="ml-3"
                value="night"
              />
              <label htmlFor="">المساء</label>
            </div>
          </Item>
          <div className="col-span-1 mt-10">
            <PrimaryButton onClick={submit}>ارسال</PrimaryButton>
          </div>
        </div>
      </div>
    </InstructorsLayout>
  );
};

const Item = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-5">
      <div className="bg-orange-500 text-md font-bold py-4 text-white px-5 rounded-t-lg">
        {title}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Instructor;
