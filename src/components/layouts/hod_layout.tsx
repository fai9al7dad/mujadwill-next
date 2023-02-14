import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationButton } from "../atoms/navigation_button";
import { Wrapper } from "../wrapper";

export const HeadOfDepartmentsLayout = ({
  children,
  backLink,
  bottomNavigationLinks,
}: {
  children: React.ReactNode;
  backLink: React.ReactNode;
  bottomNavigationLinks?: {
    title: string;
    href: string;
  }[];
}) => {
  // get current page from router
  const router = useRouter();

  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center pt-10 bg-white border-b border-neutral-200">
        <div className="w-2/4 flex items-start justify-between">
          <div>
            <div className="mb-2 text-orange-500 flex items-center ">
              <ChevronRight />
              <div className="mr-1 text-lg">{backLink}</div>
            </div>
            <div className="text-3xl font-bold">مرحبا رئيس القسم</div>
          </div>
          <div className="flex ">
            <Link href={`/hod/semester/${router.query.id}/instructors`}>
              <NavigationButton
                className={`rounded-2xl w-36 h-48 py-2 px-2 
            ${
              router.pathname.includes("/instructors")
                ? "bg-orange-500/100 text-white/100 hover:bg-orange-500"
                : "bg-white text-gray-800"
            }
            `}
              >
                <div
                  className={` w-full h-24 rounded-lg flex items-center justify-center
                ${
                  router.pathname.includes("/instructors")
                    ? "bg-white border-0"
                    : "bg-gray-100/100 border border-gray-200 "
                }
 
              `}
                >
                  <UserIcon />
                </div>

                <div className="mt-4 font-bold text-center ">
                  أعضاء هيئة التدريس
                </div>
              </NavigationButton>
            </Link>

            <Link href={`/hod/semester/${router.query.id}/schedule`}>
              <NavigationButton
                className={`rounded-2xl w-36 h-48 py-2 px-2  mr-5
            ${
              router.pathname.includes("/schedule")
                ? "bg-orange-500/100 text-white/100 hover:bg-orange-500"
                : "bg-white text-gray-800"
            }`}
              >
                <div
                  className={` w-full h-24 rounded-lg flex items-center justify-center
               ${
                 router.pathname === "/schedule"
                   ? "bg-white border-0"
                   : "bg-gray-100/100 border border-gray-200 "
               }
              `}
                >
                  <CalendarIcon />
                </div>

                <div className="mt-4  text-center ">الجدول</div>
              </NavigationButton>
            </Link>
          </div>
        </div>
        <div className="mt-5 flex items-center   w-2/4">
          {bottomNavigationLinks?.map((link) => (
            <div className="flex flex-col items-center hover:bg-gray-100 transition duration-150 hover:cursor-pointer">
              <div className="text-lg py-2">{link.title}</div>
              <div className="w-48 bg-orange-500 h-2  rounded-[1px]"></div>
            </div>
          ))}
        </div>
      </div>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
};

const ChevronRight = () => (
  <svg
    fill="none"
    stroke="currentColor"
    className="w-5"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="68"
    fill="none"
    viewBox="0 0 68 68"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22.803 19.833V8.667m22.333 11.166V8.667M20.011 31h27.917m-33.5 27.916h39.083a5.583 5.583 0 005.584-5.583v-33.5a5.583 5.583 0 00-5.584-5.583H14.428a5.584 5.584 0 00-5.583 5.583v33.5a5.583 5.583 0 005.583 5.584z"
    ></path>
  </svg>
);

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="59"
      fill="none"
      viewBox="0 0 58 59"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M38.494 17.796c0 2.563-1 5.022-2.782 6.835a9.418 9.418 0 01-6.718 2.831 9.418 9.418 0 01-6.717-2.831 9.753 9.753 0 01-2.783-6.835c0-2.564 1.001-5.023 2.783-6.836a9.418 9.418 0 016.717-2.831 9.418 9.418 0 016.718 2.831 9.753 9.753 0 012.782 6.836v0zm-9.5 16.916a16.48 16.48 0 00-11.756 4.955c-3.117 3.172-4.869 7.475-4.869 11.962h33.25c0-4.487-1.751-8.79-4.87-11.962a16.481 16.481 0 00-11.755-4.955v0z"
      ></path>
    </svg>
  );
}
