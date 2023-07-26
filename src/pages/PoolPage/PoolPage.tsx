import Container from 'components/Container';
import Metrics from 'components/Metrics';
import ProjectItem from 'components/ProjectItem';
import ProjectListBadge from 'components/ProjectListBadge';

const projects = [
  {
    name: 'Dog',
    votes: 105,
    percentage: 32,
  },
  {
    name: 'Cat',
    votes: 500,
    percentage: 28,
  },
  {
    name: 'Rabbit',
    votes: 98,
    percentage: 18,
  },
  {
    name: 'Horse',
    votes: 54,
    percentage: 12,
  },
];

const PoolPage = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col gap-6">
      <Container>
        <div className="flex flex-col justify-start items-start gap-6 self-stretch">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-gray-900 text-3xl font-semibold leading-[38px]">
                Project Pool
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal leading-normal">
                List of all projects in the pool that are waiting to get
                submitted.
              </div>
            </div>
            <button className="px-4 py-2.5 bg-blue-600 rounded-lg justify-center items-start gap-2.5 flex text-center text-white text-sm font-medium leading-tight">
              View leagues
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <Metrics
          metrics={[
            {
              heading: 'Total projects in the pool',
              value: 10,
            },
            {
              heading: 'Total votes',
              value: 876,
            },
          ]}
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 text-2xl font-semibold leading-[30px]">
            Projects in the pool
          </h3>
          {projects.map(({ name, percentage, votes }, index) => (
            <>
              {index === 2 && <ProjectListBadge type="promoted" />}
              <ProjectItem
                key={index}
                name={name}
                primaryMetric={`${votes} votes`}
                secondaryMetric={`${percentage}% of reputation`}
                rank={index + 1}
                isTop={[0, 1].includes(index)}
              />
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PoolPage;
