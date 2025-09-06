import { twMerge } from 'tailwind-merge';
import Chip from '@devbyaj/dev-ui/components/Chip';
import { TCommonVariant } from '@devbyaj/dev-ui/types/common.type';

import { TStatus } from 'types/common.type';

type TBadgeProps = {
  className?: string;
  variant?: TStatus;
  children: React.ReactNode;
};
const Badge = ({ children, variant = 'VERIFIED', className }: TBadgeProps) => {
  const chipVariant = {
    PRIMARY: 'error',
    UNVERIFIED: 'secondary',
    VERIFIED: 'success',
  };
  return (
    <Chip
      className={twMerge('py-0.5', className)}
      withDot={false}
      size="sm"
      variant={chipVariant[variant] as TCommonVariant}
    >
      {children}
    </Chip>
  );
};

export default Badge;
