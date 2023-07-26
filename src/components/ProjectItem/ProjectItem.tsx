import classNames from 'classnames';
import { PiMedal } from 'react-icons/pi';

interface ProjectItemProps {
  rank: number;
  name: string;
  primaryMetric: React.ReactNode;
  secondaryMetric: React.ReactNode;
  avatar?: React.ReactNode;
  isTop?: boolean;
}

const ProjectItem = ({
  rank,
  name,
  avatar,
  isTop,
  primaryMetric,
  secondaryMetric,
}: ProjectItemProps) => {
  return (
    <div
      className={classNames(
        'p-6 bg-white rounded-lg border items-center gap-6 flex',
        isTop && 'border-blue-600',
      )}
    >
      {avatar}
      <div className="justify-start items-center gap-6 flex">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-blue-600 text-sm font-medium leading-tight">
            #{rank}
          </div>
          <div className="self-stretch h-7 flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="justify-start items-end gap-2.5 flex">
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-gray-900 text-lg font-semibold leading-7">
                    {name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto h-7 justify-end items-center gap-2 flex">
        <div className="justify-end items-center gap-[18px] flex">
          {isTop && (
            <div className="px-3 py-1 bg-sky-50 rounded-3xl justify-start items-center gap-1 flex text-blue-600">
              <PiMedal />
              <div className="text-xs font-medium leading-[18px]">Top</div>
            </div>
          )}
          <div className="text-gray-900 text-lg font-semibold leading-7">
            {primaryMetric}
          </div>
        </div>
        <div
          className={classNames(
            'text-sm font-medium leading-tight',
            isTop && 'text-blue-600',
          )}
        >
          {secondaryMetric}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
