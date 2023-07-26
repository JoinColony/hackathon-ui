import classNames from 'classnames';

interface UserCircleAvatarProps {
  color?: string;
  size?: 'small' | 'medium';
  name: string;
}

const colors = [
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-pink-400'
];

function generateColorClass(letter: string) {
  // Convert the letter to lower case to make the function case insensitive
  const lowerCaseLetter = letter.toLowerCase();

  // Map the letter to a number (a -> 0, b -> 1, ..., z -> 25)
  const letterIndex = lowerCaseLetter.charCodeAt(0) - 'a'.charCodeAt(0);

  // Use modulo operation to make sure the index is within the colors array length
  const colorIndex = letterIndex % colors.length;

  // Return the color class, for example 'bg-red-400'
  return colors[colorIndex];
}

const UserCircleAvatar = ({
  color,
  size = 'medium',
  name,
}: UserCircleAvatarProps) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-3xl',
    medium: 'w-32 h-32 text-6xl',
  };

  const letter = name.slice(0, 1).toUpperCase();

  return (
    <div
      className={classNames(
        'rounded-full flex items-center justify-center text-white',
        color || generateColorClass(letter),
        sizeClasses[size],
      )}
    >
      {letter}
    </div>
  );
};

export default UserCircleAvatar;
