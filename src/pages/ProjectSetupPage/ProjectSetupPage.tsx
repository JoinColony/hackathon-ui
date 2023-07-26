import ProjectForm from './ProjectForm';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-black py-4 flex flex-col gap-y-2">
      <h1 className="text-3xl normal-case font-semibold leading-9">{title}</h1>
      <h2 className="text-base font-normal leading-6">{subtitle}</h2>
    </header>
  );
};

const ProjectSetupPage = () => {
  return (
    <div className="w-screen flex justify-center">
      <div
        className="px-8 flex flex-col gap-y-8 mt-12"
        style={{ width: '1280px' }}
      >
        <Header
          title="Submit your project"
          subtitle="Gain funding through community votes by detailing your project's value to the Colony Network."
        />
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectSetupPage;
