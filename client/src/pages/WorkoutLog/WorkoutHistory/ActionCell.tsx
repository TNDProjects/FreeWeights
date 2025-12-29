import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const ActionCell = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <div className="text-right">
      <Button
        variant="outline"
        className="text-[10px] px-3 h-8 uppercase tracking-widest"
        onClick={() => navigate(`/log/${id}`)}
      >
        View
      </Button>
    </div>
  );
};

export default ActionCell;
