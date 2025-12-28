import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';

const WorkoutHistory = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-light uppercase font-bold">Past Workouts</h2>

        <Link to="/log">
          <Button variant="outline">+ New Workout</Button>
        </Link>
      </div>

      <div className="text-grey italic">No workouts saved yet.</div>
    </div>
  );
};
export default WorkoutHistory;
