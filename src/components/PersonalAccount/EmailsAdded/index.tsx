import Divider from '@devbyaj/dev-ui/components/Divider'; // I have used personal UI library (dev-ui) for atoms and components

import { EMAILS_ADDED } from 'constants/account.constants';
import Card from 'components/shared/Card';
import CardContent from 'components/shared/CardContent';
import { TEmailAction, TStatus } from 'types/common.type';

import ManageEmail from './ManageEmail';

type TEmailsAddedProps = {
  addedEmailConfig: typeof EMAILS_ADDED; // We can define the type of addedEmailConfig based on the data
};
const EmailsAdded = ({ addedEmailConfig }: TEmailsAddedProps) => {
  const handleMenuItemClick = (_type: TEmailAction, _email: string) => {
    // We can add the logic to handle the menu item click here
    // Either redirect to some other screen, or API call or show popup based the type (ie: email action)
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-primary sm:text-lg lg:text-xl">
          {addedEmailConfig.label}
        </h2>
        <p className="text-xs text-secondary sm:text-xs lg:text-sm">
          {addedEmailConfig.description}
        </p>
      </div>
      <Card>
        {addedEmailConfig.addedEmails?.map((addedEmail, idx) => (
          <>
            <CardContent
              key={addedEmail.email}
              title={addedEmail.email}
              description={addedEmail.emailDescription}
              statuses={addedEmail.statuses as TStatus[]}
            >
              <ManageEmail
                handleMenuItemClick={(type) =>
                  handleMenuItemClick(type, addedEmail.email)
                }
              />
            </CardContent>
            {idx !== addedEmailConfig.addedEmails.length - 1 && <Divider />}
          </>
        ))}
      </Card>
    </div>
  );
};

export default EmailsAdded;
