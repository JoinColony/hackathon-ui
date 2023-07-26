const ProjectFeedItem = ({ content, timestamp }: { content: string; timestamp: number}) => {
  const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: 'short' });
  const timeFormat = new Intl.DateTimeFormat("en", { timeStyle: 'short' });

  return (
    <div className="self-stretch flex-col justify-start items-start gap-1 flex">
      <div className="text-gray-900 text-xs font-normal leading-[18px]">{content}</div>
      <div className="justify-start items-center gap-1.5 inline-flex">
        <div className="text-slate-600 text-[10px] font-normal leading-none">{dateFormat.format(new Date(timestamp))} @ {timeFormat.format(new Date(timestamp))}</div>
      </div>
    </div>
  );
};

export default ProjectFeedItem;
