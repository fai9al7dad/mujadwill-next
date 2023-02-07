import { Wrapper } from "../wrapper";

export const EduAffairsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-center justify-center py-10 bg-white border-b border-neutral-200">
        <div className="w-2/4 ">
          <span className="text-3xl font-bold">مرحبا الشؤون التعليمية</span>
        </div>
      </div>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
};
