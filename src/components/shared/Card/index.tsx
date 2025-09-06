import { twMerge } from 'tailwind-merge';

type TCardProps = {
  className?: string;
  children: React.ReactNode;
};
const Card = ({ className, children }: TCardProps) => {
  return (
    <div
      className={twMerge(
        'rounded-2xl border border-secondary bg-primary px-6 py-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
