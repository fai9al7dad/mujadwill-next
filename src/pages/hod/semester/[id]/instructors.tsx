import Link from "next/link";
import { HeadOfDepartmentsLayout } from "../../../../components/layouts/hod_layout";

import axios from "axios";
import { instructor } from "../../../../components/types/types";
export async function getServerSideProps() {
  const res = await axios.get("http://192.168.1.37:8000/api/get-instructors/");
  return {
    props: {
      instructors: res.data,
    }, // will be passed to the page component as props
  };
}

const Instructors = ({ instructors }: { instructors: instructor[] }) => {
  console.log({ instructors });

  return (
    <HeadOfDepartmentsLayout
      backLink={
        <Link href="/hod" className="text-orange-500">
          الرئيسية
        </Link>
      }
    >
      {instructors.map((instructor) => (
        <Instructor
          name={instructor.name}
          email={"1945069@uj.edu.sa"}
          hasPrefernce={instructor.has_preference}
          key={instructor.id}
        />
      ))}
    </HeadOfDepartmentsLayout>
  );
};

const Instructor = ({
  name,
  email,
  hasPrefernce,
}: {
  name: string;
  email: string;
  hasPrefernce: boolean;
}) => {
  return (
    <div className="py-5 border-b border-gray-200 flex items-center justify-between">
      <div>
        <div className="text-2xl font-bold">{name}</div>
        <div className="mt-2">{email}</div>
      </div>
      <div className="div">
        {hasPrefernce ? (
          <div className="text-green-500">أدخل تفضيلاته</div>
        ) : null}
      </div>
    </div>
  );
};

export default Instructors;
