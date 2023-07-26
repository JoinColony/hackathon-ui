import classNames from 'classnames';

interface UserCircleAvatarProps {
  color?: string;
  size?: 'small' | 'medium';
  name: string;
}

const UserCircleAvatar = ({
  color = 'bg-pink-400',
  size = 'medium',
  name,
}: UserCircleAvatarProps) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-3xl',
    medium: 'w-32 h-32 text-6xl',
  };

  return (
    <div
      className={classNames(
        'rounded-full flex items-center justify-center text-white',
        color,
        sizeClasses[size],
      )}
    >
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default UserCircleAvatar;
