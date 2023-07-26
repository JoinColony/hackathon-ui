import classNames from 'classnames';
import { BsArrowUpShort } from 'react-icons/bs';

interface ProjectListBadgeProps {
  type: 'promoted' | 'demoted';
}

const ProjectListBadge = ({ type }: ProjectListBadgeProps) => {
  return (
    <div className="border border-gray-900 px-3 py-1.5 bg-white rounded-3xl flex items-center gap-1 w-fit mt-2">
      <BsArrowUpShort
        className={classNames(type === 'demoted' && 'rotate-180')}
      />
      <div className="text-gray-900 text-[10px] font-medium leading-none">
        Projects being {type === 'promoted' ? 'promoted' : 'demoted'}
      </div>
    </div>
  );
};

export default ProjectListBadge;
