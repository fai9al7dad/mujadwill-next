import { Wrapper } from "../wrapper";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Header /> */}
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
};
