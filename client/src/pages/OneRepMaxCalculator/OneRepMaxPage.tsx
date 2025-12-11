import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";

const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

const OneRepMaxPage = () => {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [oneRepMax, setOneRepMax] = useState<number | null>(null);

  const calculateOneRepMax = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (w > 0 && r > 0 && r <= 30) {
      const orm = w * (1 + r / 30);
      setOneRepMax(Math.round(orm * 10) / 10);
    }
  };

  const getWeightAtPercentage = (percentage: number) => {
    if (!oneRepMax) return 0;
    return Math.round((oneRepMax * percentage) / 100 * 10) / 10;
  };

  return (
    // "min-h-screen" makes it full height
    // "pt-24" adds top padding
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-primary-bg text-primary rounded-xl mb-4">
            <Calculator size={32} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">One Rep Max Calculator</h1>
          <p className="text-muted">
            Enter your lift details to estimate your 1RM
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              id="weight"
              label="Weight Lifted (lbs)"
              type="number"
              placeholder="225"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <Input
              id="reps"
              label="Reps Performed"
              type="number"
              placeholder="5"
              min="1"
              max="30"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>

          <Button onClick={calculateOneRepMax}>
            Calculate 1RM
          </Button>
        </div>

        {/* Results Section */}
        {oneRepMax && (
          <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-300">
            <div className="bg-card border border-primary rounded-xl p-8 text-center shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <p className="text-sm text-muted mb-2">Estimated One Rep Max</p>
              <p className="text-6xl font-bold text-foreground">
                {oneRepMax} <span className="text-2xl text-muted">lbs</span>
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 px-6 border-b border-border bg-white/5">
                <h3 className="font-semibold text-foreground">Percentage Breakdown</h3>
              </div>
              <div className="divide-y divide-border">
                {percentages.map((pct) => (
                  <div key={pct} className="flex justify-between px-6 py-4 hover:bg-input transition-colors">
                    <span className="text-muted">{pct}%</span>
                    <span className="font-semibold text-foreground">
                      {getWeightAtPercentage(pct)} lbs
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneRepMaxPage;
