import { ReactNode } from 'react';
import {
  usePopperTooltip,
  TriggerType,
  PopperOptions,
} from 'react-popper-tooltip';
import { Placement as PlacementType } from '@popperjs/core';

interface Props {
  children: ReactNode;
  content: ReactNode;
  trigger?: TriggerType | TriggerType[] | null;
  placement?: PlacementType;
  popperOptions?: PopperOptions;
  showArrow?: boolean;
  isOpen?: boolean;
}

const Tooltip = ({
  children,
  content,
  placement = 'top',
  popperOptions,
  showArrow = true,
  trigger = 'hover',
  isOpen,
}: Props) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip(
    {
      delayShow: 200,
      placement,
      trigger: content ? trigger : null,
      visible: isOpen,
    },
    popperOptions,
  );

  return (
    <>
      <span ref={setTriggerRef}>{children}</span>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: `flex p-2.5 relative z-50 bg-[rgb(60,68,77)] rounded text-xs font-semibold leading-4 text-white tracking-wider transition-opacity duration-300` })}
        >
          <div
            {...getArrowProps({
              className: showArrow ? `tooltip-arrow border-t-4 border-transparent border-r-4 border-l-4 border-b-4 border-[rgb(60,68,77)] w-4 h-4` : '',
            })}
          />
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
