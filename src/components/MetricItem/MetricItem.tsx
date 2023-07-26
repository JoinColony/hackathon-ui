interface MetricItemProps {
  heading: React.ReactNode;
  value: React.ReactNode;
}

const MetricItem = ({ heading, value }: MetricItemProps) => {
  return (
    <div className="grow shrink basis-0 p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 text-gray-900 text-base font-medium leading-normal">
          {heading}
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="w-5 h-5 relative" />
        </div>
      </div>
      <div className="self-stretch justify-start items-end gap-4 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-gray-900 text-4xl font-semibold leading-[44px]">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricItem;
