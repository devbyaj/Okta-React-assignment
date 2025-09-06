import Menu from '@devbyaj/dev-ui/components/Menu';

import { DeleteIcon, ManageIcon, MenuIcon } from 'components/shared/Icons';
import { TEmailAction } from 'types/common.type';

type TManageEmailProps = {
  handleMenuItemClick: (type: TEmailAction) => void;
};
const ManageEmail = ({ handleMenuItemClick }: TManageEmailProps) => {
  const menuOptions = [
    {
      label: (
        <div className="flex items-center gap-1">
          <ManageIcon className="stroke-secondary" />
          <span className="text-sm text-primary/80">Manage</span>
        </div>
      ),
      onClick: () => handleMenuItemClick('MANAGE'),
    },
    {
      label: (
        <div className="flex items-center gap-1">
          <DeleteIcon className="text-error" />
          <span className="text-sm text-error">Remove</span>
        </div>
      ),
      onClick: () => handleMenuItemClick('REMOVE'),
    },
  ];
  return (
    <Menu options={menuOptions}>
      <div className="flex h-8 w-10 items-center justify-center hover:rounded-lg hover:border hover:border-secondary hover:bg-secondary">
        <MenuIcon />
      </div>
    </Menu>
  );
};

export default ManageEmail;
