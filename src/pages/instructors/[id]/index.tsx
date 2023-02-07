import InstructorsLayout from "../../../components/layouts/instructors_layout";

const Instructor = () => {
  return (
    <InstructorsLayout
      header={
        <div>
          <div className="text-4xl mb-2 font-bold">مرحبا محمد خالد</div>
          <div className="text-md text-gray-500  ">
            نرجو منك ادخال تفضيلاتك أدناه
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-2">
        <div className=" col-span-1">
          <Item title="المواد">....</Item>
          <div className="text-gray-500 text-sm mt-2">مطلوب 3 مواد</div>
          <Item title="الأيام المفضلة">
            <div className="flex items-center">
              <input type="checkbox" name="" id="" className="ml-3" />
              <label htmlFor="">الاثنين، الأربعاء</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" name="" id="" className="ml-3" />
              <label htmlFor="">الأحد، الثلاثاء، الخميس</label>
            </div>
          </Item>
          <Item title="الفترات المفضلة">
            <div className="flex items-center">
              <input type="checkbox" name="" id="" className="ml-3" />
              <label htmlFor="">الصباح</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" name="" id="" className="ml-3" />
              <label htmlFor="">المساء</label>
            </div>
          </Item>
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
