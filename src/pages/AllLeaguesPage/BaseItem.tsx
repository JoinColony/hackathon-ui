import React from 'react';

interface LeagueItemProps {
  subtitle: React.ReactNode;
  title: string;
  value: string;
  extra: React.ReactNode;
  icon: React.ReactNode;
  curr?: string;
  top?: React.ReactNode;
}

const BaseItem = ({
  subtitle,
  title,
  value,
  icon,
  curr = '$',
  extra,
  top,
}: LeagueItemProps) => {
  return (
    <div className="group flex items-center justify-between border border-light-gray-200 p-6 hover:bg-light-blue-100 hover:border-light-blue-400 rounded-md">
      <div className="flex gap-x-6">
        {icon}
        <div className="flex flex-col">
          {subtitle}
          <div className="text-lg font-semibold">{title}</div>
        </div>
      </div>
      <div className="flex gap-x-4">
        {top}
        <div className="flex items-center font-semibold">
          {curr}
          {value}
        </div>
        {extra}
      </div>
    </div>
  );
};

export default BaseItem;
