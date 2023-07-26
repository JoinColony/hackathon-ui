interface TitleContainerProps {
  title: string;
  subtitle: string;
  button?: React.ReactNode;
}

const PageTitle = ({ title, subtitle, button }: TitleContainerProps) => {
  return (
    <div className="flex px-8 flex-col justify-start items-start gap-6 self-stretch mt-12 mb-8">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch text-gray-900 text-3xl font-semibold leading-[38px]">
            {title}
          </div>
          <div className="self-stretch text-gray-500 text-base font-normal leading-normal">
            {subtitle}
          </div>
        </div>
        {button}
      </div>
    </div>
  );
};

export default PageTitle;
