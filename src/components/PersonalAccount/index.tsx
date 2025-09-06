import { useState } from 'react';

import { twMerge } from 'tailwind-merge';
import Button from '@devbyaj/dev-ui/components/Button';
import Tooltip from '@devbyaj/dev-ui/components/Tooltip';

import { EMAILS_ADDED, EMAILS_SETTINGS } from 'constants/account.constants';
import { BackIcon, DarkModeIcon, LightModeIcon } from 'components/shared/Icons';

import EmailsAdded from './EmailsAdded';
import EmailSettings from './EmailSettings';

const PersonalAccount = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setSelectedTheme(theme);
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-primary">
      <div className="border-b border-secondary px-2 py-1.5">
        <div className="mx-auto flex w-full items-center justify-between gap-2 sm:w-3/4 lg:w-1/2">
          <div className="flex items-center gap-2">
            <button>
              <BackIcon className="h-7 stroke-primary" />
            </button>
            <span className="text-sm font-medium text-primary sm:text-sm lg:text-base">
              Your personal account
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip content="Light mode" withArrow>
              <Button
                asIcon
                variant={selectedTheme === 'light' ? 'primary' : 'ghost'}
                className="px-2 py-1"
                onClick={() => handleThemeChange('light')}
                size="sm"
              >
                <LightModeIcon
                  className={twMerge(
                    'h-10',
                    selectedTheme !== 'light' && 'text-primary',
                  )}
                />
              </Button>
            </Tooltip>
            <Tooltip content="Dark mode" withArrow>
              <Button
                asIcon
                variant={selectedTheme === 'dark' ? 'primary' : 'ghost'}
                className="px-2 py-1"
                onClick={() => handleThemeChange('dark')}
                size="sm"
              >
                <DarkModeIcon
                  className={twMerge(
                    'h-10',
                    selectedTheme !== 'dark' && 'fill-primary',
                  )}
                />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-secondary py-10">
        <div className="mx-auto flex w-full flex-col gap-10 px-2 sm:w-3/4 lg:w-1/2">
          {/* Defined the configs in constants file, can be changed as per requirement either it can be an API response or can be hard coded */}
          <EmailsAdded addedEmailConfig={EMAILS_ADDED} />
          <EmailSettings emailSettingsConfig={EMAILS_SETTINGS} />
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
