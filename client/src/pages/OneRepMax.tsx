import { useState } from "react";
import { Calculator } from "lucide-react";
import "./OneRepMax.css"; // We will create this CSS file next

const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

const OneRepMax = () => {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [oneRepMax, setOneRepMax] = useState<number | null>(null);

  const calculateOneRepMax = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (w > 0 && r > 0 && r <= 30) {
      // Epley formula: 1RM = w * (1 + r/30)
      const orm = w * (1 + r / 30);
      setOneRepMax(Math.round(orm * 10) / 10);
    }
  };

  const getWeightAtPercentage = (percentage: number) => {
    if (!oneRepMax) return 0;
    return Math.round((oneRepMax * percentage) / 100 * 10) / 10;
  };

  return (
    <div className="orm-container">
      <div className="orm-header">
        <div className="icon-wrapper">
          <Calculator className="icon" />
        </div>
        <h1>One Rep Max Calculator</h1>
        <p>Enter your lift details to estimate your 1RM</p>
      </div>

      <div className="orm-card">
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="weight">Weight Lifted (lbs)</label>
            <input
              id="weight"
              type="number"
              placeholder="225"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="reps">Reps Performed</label>
            <input
              id="reps"
              type="number"
              placeholder="5"
              min="1"
              max="30"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateOneRepMax}>
          Calculate 1RM
        </button>
      </div>

      {oneRepMax && (
        <div className="results-area">
          <div className="result-card">
            <p className="label">Estimated One Rep Max</p>
            <p className="big-number">
              {oneRepMax} <span>lbs</span>
            </p>
          </div>

          <div className="percentage-list">
            <h3>Percentage Breakdown</h3>
            {percentages.map((pct) => (
              <div key={pct} className="percentage-row">
                <span className="pct-label">{pct}%</span>
                <span className="pct-weight">{getWeightAtPercentage(pct)} lbs</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OneRepMax;
