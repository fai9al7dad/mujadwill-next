import { useSchedule } from "@/components/hooks/useSchedule";
import { Schedule } from "@/components/types/types";
import axios from "axios";
import { PrimaryButton } from "../../../../../components/atoms/primary_button";
import { HeadOfDepartmentsLayout } from "../../../../../components/layouts/hod_layout";
export async function getServerSideProps() {
  const schedules = await axios.get(
    "http://192.168.1.37:8000/api/get-schedules/"
  );

  for (let i = 0; i < schedules.data.length; i++) {
    const schedule = schedules.data[i];
    const scheduleDetails = await axios.get(
      `http://192.168.1.37:8000/api/get_schedule/${schedule.id}/`
    );
    schedule.schedule = scheduleDetails.data;
  }

  return {
    props: {
      schedules: schedules.data,
    },
  };
}
const Result = ({ schedules }: { schedules: Schedule[] }) => {
  const { generateSchedule } = useSchedule();
  console.log(schedules);

  return (
    <HeadOfDepartmentsLayout
      backLink={
        <a href="/hod/schedule" className="text-orange-500">
          الجداول
        </a>
      }
    >
      <div className="grid grid-cols-2 gap-10 ">
        {schedules.map((schedule) => (
          <Schedule key={schedule.id} schedule={schedule} isBest={false} />
        ))}
      </div>
      <PrimaryButton className="mt-10 mb-20" onClick={generateSchedule}>
        محاولة أخرى
      </PrimaryButton>
    </HeadOfDepartmentsLayout>
  );
};

const Schedule = ({
  isBest,
  schedule,
}: {
  isBest: boolean;
  schedule: Schedule;
}) => {
  const { exportSchedule } = useSchedule();
  return (
    <div>
      {isBest ? (
        <div className="text-xs font-bold  text-green-500">الأفضل</div>
      ) : (
        <div className="mt-4" />
      )}
      <div className="flex items-end justify-between mb-5">
        <div className="text-lg font-bold ">
          الفتنس {(schedule.fitness * 100).toPrecision(2)}%
        </div>
        {/* <a href={schedule.schedule.downloadurl} download target="_blank"> */}
        <PrimaryButton
          className="text-xs py-1.5"
          onClick={() => {
            exportSchedule(schedule.id);
          }}
        >
          تصدير
        </PrimaryButton>
        {/* </a> */}
      </div>
      <div className="bg-white border border-gray-200 rounded-lg ">
        <ScheduleItem
          right="نسبة التعارض في الوقت"
          left={schedule.conflict_fitness}
        />
        <ScheduleItem
          right="نسبة الأربعة أيام أو أقل"
          left={schedule.fourDays_fitness}
        />
        <ScheduleItem
          right="نسبة الدكاترة الذين حصلوا على نصاب كامل"
          left={schedule.fullLoad_fitness}
        />
        <ScheduleItem right="نسبة المعامل" left={schedule.lab_fitness} />
      </div>
    </div>
  );
};

const ScheduleItem = ({ right, left }: { right: string; left: number }) => {
  const output = left * 100;
  return (
    <div className="flex items-center justify-between p-5 text-xs border-b border-gray-200">
      <div>{right}</div>
      <div>{output.toPrecision(3)}%</div>
    </div>
  );
};
export default Result;
