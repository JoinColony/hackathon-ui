import ProjectForm from './ProjectForm';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-black p-4">
      <h1 className="text-3xl normal-case font-semibold leading-9">{title}</h1>
      <h2 className="text-base font-normal leading-6">{subtitle}</h2>
    </header>
  );
};

const ProjectSetupPage = () => {
  return (
    <>
      <Header
        title="Submit your project to Budgetbox"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <ProjectForm />
    </>
  );
};

export default ProjectSetupPage;
