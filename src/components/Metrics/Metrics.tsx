import MetricItem from './MetricItem';
import { Metric } from './types';

interface MetricsProps {
  metrics: Metric[];
}

const Metrics = ({ metrics }: MetricsProps) => {
  return (
    <div className="flex gap-5">
      {metrics.map((metric, index) => (
        <MetricItem key={index} metric={metric} />
      ))}
    </div>
  );
};

export default Metrics;
