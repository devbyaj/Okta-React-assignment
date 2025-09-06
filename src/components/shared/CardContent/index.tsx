import { twMerge } from 'tailwind-merge';

import { TStatus } from 'types/common.type';

import Badge from '../Badge';

type TCardContentProps = {
  title: string;
  description?: string;
  statuses?: TStatus[];
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
  titleClassName?: string;
};
const CardContent = ({
  title,
  description,
  statuses,
  className,
  childrenClassName,
  children,
  titleClassName,
}: TCardContentProps) => {
  return (
    <div
      className={twMerge('flex items-center justify-between py-3', className)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-2 sm:flex-row lg:flex-row">
          <p
            className={twMerge(
              'max-w-44 truncate text-sm text-primary sm:max-w-72 lg:max-w-96',
              titleClassName,
            )}
            title={title}
          >
            {title}
          </p>
          <div className="flex items-center gap-2">
            {statuses?.map((status) => (
              <Badge key={status} variant={status}>
                {status}
              </Badge>
            ))}
          </div>
        </div>
        {!!description && (
          <p className="text-xs text-secondary">{description}</p>
        )}
      </div>
      <div
        className={twMerge(
          'flex items-center justify-center',
          childrenClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CardContent;
