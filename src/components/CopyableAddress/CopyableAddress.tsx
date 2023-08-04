import React, { ReactNode, useState, useEffect } from 'react';
import copyToClipboard from 'copy-to-clipboard';

import Tooltip from '../Tooltip';

interface Props {
  children: ReactNode;
  address: string;
}

const CopyableAddress = ({
  children,
  address,
}: Props) => {
  const [copied, setCopied] = useState(false);
  const tooltipMessage = copied ? 'Copied' :  'Click to copy address';

  const handleClipboardCopy = () => {
    setCopied(true);
    copyToClipboard(address);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <Tooltip
      placement="right"
      content={tooltipMessage}
    >
      <div className="inline-block">
        <div
          onClick={handleClipboardCopy}
          role="button"
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </Tooltip>
  );
};

export default CopyableAddress;
