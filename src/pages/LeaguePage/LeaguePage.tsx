import Container from 'components/Container';
import Metrics from 'components/Metrics';
import ProjectItem from 'components/ProjectItem';
import ProjectListBadge from 'components/ProjectListBadge';
import UserCircleAvatar from 'components/UserCircleAvatar';

const projects = [
  {
    name: 'Dog',
    avatar: <UserCircleAvatar name="Dog" size="small" />,
    amount: 45110,
    percentage: 44,
  },
  {
    name: 'Cat',
    avatar: <UserCircleAvatar name="Cat" size="small" />,
    amount: 34110,
    percentage: 34,
  },
  {
    name: 'Rabbit',
    avatar: <UserCircleAvatar name="Rabbit" size="small" />,
    amount: 22098,
    percentage: 12,
  },
  {
    name: 'Horse',
    avatar: <UserCircleAvatar name="Horse" size="small" />,
    amount: 6756,
    percentage: 8,
  },
];

const LeaguePage = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col gap-6">
      <Container>
        <div className="flex flex-col justify-start items-start gap-6 self-stretch">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-gray-900 text-3xl font-semibold leading-[38px]">
                Colony League
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <button className="px-4 py-2.5 bg-blue-600 rounded-lg justify-center items-start gap-2.5 flex text-center text-white text-sm font-medium leading-tight">
              Vote
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <Metrics
          metrics={[
            { heading: 'Total projects in league', value: '10' },
            {
              heading: 'Total funding amount',
              value: (
                <>
                  <span className="text-gray-900 text-4xl font-semibold leading-[44px]">
                    $100,000{' '}
                  </span>
                  <span className="text-gray-900 text-base font-semibold leading-[44px]">
                    USD
                  </span>
                </>
              ),
            },
            { heading: 'Total votes', value: '10' },
          ]}
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 text-2xl font-semibold leading-[30px]">
            Finished League
          </h3>
          {projects.map(({ name, avatar, amount, percentage }, index) => (
            <>
              {index === 2 && <ProjectListBadge type="demoted" />}
              <ProjectItem
                key={index}
                rank={index + 1}
                name={name}
                avatar={avatar}
                isTop={index === 0}
                primaryMetric={`$${new Intl.NumberFormat('en-US').format(
                  amount,
                )} USD`}
                secondaryMetric={`${percentage}%`}
              />
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaguePage;
