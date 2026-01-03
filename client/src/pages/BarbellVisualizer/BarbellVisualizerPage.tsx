import PageHeader from '../../components/PageHeader';
import { Dumbbell } from "lucide-react";

const BarbellVisualizerPage = () => {
    return (
        <div className="w-full max-w-3xl">
            <PageHeader 
                line1="barbell weight" 
                line2="visualizer" 
                icon={<Dumbbell size={34}/>} 
                description="enter your lift details to estimate your 1RM"
            />
        </div>
    )
}

export default BarbellVisualizerPage;