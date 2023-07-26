import CircleComponent from 'components/UserCircleAvatar';

interface ProjectCardProps {
  title: string;
  subtitle: string;
}

const ProjectCard = ({ title, subtitle }: ProjectCardProps) => {
  return (
    <div className="group self-stretch flex-col justify-start items-center gap-4 flex">
      <CircleComponent name="Cat" />
      <div />
      <div className="flex flex-col gap-y-4">
        <div className="group-hover:text-light-blue-400 font-semibold text-2xl text-center">
          {title}
        </div>
        <div className="group-hover:text-light-blue-400 self-stretch text-center text-slate-600 text-sm font-medium leading-tight">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
