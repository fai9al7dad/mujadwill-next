import Link from "next/link";
import { HeadOfDepartmentsLayout } from "../../../../components/layouts/hod_layout";

const Instructors = () => {
  return (
    <HeadOfDepartmentsLayout
      backLink={
        <Link href="/hod" className="text-orange-500">
          الرئيسية
        </Link>
      }
    >
      <Instructor name="محمد عبد الرحمن" email="1945069@uj.edu.sa" />
      <Instructor name="محمد عبد الرحمن" email="1945069@uj.edu.sa" />
      <Instructor name="محمد عبد الرحمن" email="1945069@uj.edu.sa" />
    </HeadOfDepartmentsLayout>
  );
};

const Instructor = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="py-5 border-b border-gray-200 ">
      <div className="text-2xl font-bold">{name}</div>
      <div className="mt-2">{email}</div>
    </div>
  );
};

export default Instructors;
