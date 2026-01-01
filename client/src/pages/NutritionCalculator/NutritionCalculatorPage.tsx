import PageHeader from '../../components/PageHeader';
import { Apple } from "lucide-react";


const NutritionCalculatorPage = () => {
    return (
        <div className="w-full max-w-3xl">
            <PageHeader 
                line1="nutrition" 
                line2="calculator" 
                icon={<Apple size={34}/>} 
                description="enter your lift details to estimate your 1RM"
            />
        </div>
    )
}

export default NutritionCalculatorPage;