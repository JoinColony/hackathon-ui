import Container from 'components/Container/Container';
import MetricItem from 'components/MetricItem/MetricItem';
import StreamingWidget from 'components/StreamingWidget/StreamingWidget';
import UserCircleAvatar from 'components/UserCircleAvatar';

const LeaguePage = () => {
  return (
    <div className="pt-12 pb-24 flex flex-col gap-5 items-stretch">
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
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-start items-center gap-6 inline-flex">
            <MetricItem heading="Total projects in league" value="10" />
            <MetricItem
              heading="Total funding amount"
              value={
                <>
                  <span className="text-gray-900 text-4xl font-semibold leading-[44px]">
                    $100,000{' '}
                  </span>
                  <span className="text-gray-900 text-base font-semibold leading-[44px]">
                    USD
                  </span>
                </>
              }
            />
            <MetricItem heading="Total votes" value="10" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <div className="self-stretch text-gray-900 text-2xl font-semibold leading-[30px]">
            Finished League
          </div>
          <div className="flex flex-col gap-4">
            <StreamingWidget
              rank={1}
              name="Dog"
              avatar={<UserCircleAvatar name="Dog" size="small" />}
              isTop
              amount={45110}
              percentage={44}
            />
            <StreamingWidget
              rank={2}
              name="Cat"
              avatar={<UserCircleAvatar name="Cat" size="small" />}
              amount={34110}
              percentage={34}
            />
            <StreamingWidget
              rank={3}
              name="Rabbit"
              avatar={<UserCircleAvatar name="Rabbit" size="small" />}
              amount={22098}
              percentage={12}
            />
            <StreamingWidget
              rank={4}
              name="Horse"
              avatar={<UserCircleAvatar name="Horse" size="small" />}
              amount={6756}
              percentage={8}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LeaguePage;
