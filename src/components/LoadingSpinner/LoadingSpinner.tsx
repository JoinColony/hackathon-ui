import { SpinnerCircle } from 'icons/SpinnerCircle';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium';
}
const LoadingSpinner = ({ size = 'medium' }: LoadingSpinnerProps) => {
  return (
    <div
      className={`flex justify-center w-full gap-x-1 p-8 ${
        size === 'small' ? '' : 'scale-150'
      }`}
    >
      <SpinnerCircle className="origin-center animate-spin" />
      Loading...
    </div>
  );
};

export default LoadingSpinner;
