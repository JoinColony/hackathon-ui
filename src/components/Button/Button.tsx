interface Props {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ label, variant = 'primary', onClick }: Props) => (
  <button
    onClick={onClick}
    className={`rounded-lg flex py-2 px-3 items-center justify-center ${
      variant === 'primary'
        ? 'bg-light-blue-400 border-light-blue-400 text-white'
        : 'bg-light-base-white text-light-gray-700 border-light-gray-200'
    } border-[1px] border-solid`}
  >
    <div className="relative leading-[18px] font-medium">{label}</div>
  </button>
);

export default Button;
