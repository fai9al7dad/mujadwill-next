import Link from "next/link";
import React from "react";
import { NavigationButton } from "../components/atoms/navigation_button";
import { MainLayout } from "../components/layouts/main_layout";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <div className="text-4xl text-center mb-10">
        مرحبا، 
      </div>     */}
      <Link href="/edu-affairs">
        <NavigationButton className="px-28 py-5">
          الشؤون التعليمية
          {/* <div className="bg-amber-400 w-32 h-32 rounded-full flex items-center justify-center ">
            <BeakerIcon className="text-amber-700 w-20 h-20 " />
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold">انشاء دورة</h3>
          </div> */}
        </NavigationButton>
      </Link>
      <Link href="/hod">
        <NavigationButton className="px-28 py-5 mr-5">
          رئيس القسم
          {/* <div className="bg-amber-400 w-32 h-32 rounded-full flex items-center justify-center ">
            <BeakerIcon className="text-amber-700 w-20 h-20 " />
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold">انشاء دورة</h3>
          </div> */}
        </NavigationButton>
      </Link>
    </div>
  );
}
