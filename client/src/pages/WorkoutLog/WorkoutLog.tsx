import WorkoutLogEntry from "./WorkoutLogEntry.tsx";
import PageHeader from '../../components/PageHeader';
import { CalendarDays } from "lucide-react";


const WorkoutLog = () => {
  return (
    <div className="w-full max-w-3xl">
      <PageHeader 
        line1="workout / " 
        line2="nutrition log" 
        icon={<CalendarDays size={36}/>} 
        description="keep track of your daily workouts and nutrition"
      />
      <WorkoutLogEntry>

      </WorkoutLogEntry>
    </div>

  )
}

export default WorkoutLog;
