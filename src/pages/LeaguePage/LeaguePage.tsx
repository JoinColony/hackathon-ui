import Container from 'components/Container/Container';
import MetricItem from 'components/MetricItem/MetricItem';

const LeaguePage = () => {
  return (
    <div className="pt-12 flex flex-col gap-5 items-stretch">
      <Container>
        <div className="flex px-8 flex-col justify-start items-start gap-6 self-stretch">
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
        <div className="p-4 bg-red-500 w-full" />
      </Container>
    </div>
  );
};

export default LeaguePage;
