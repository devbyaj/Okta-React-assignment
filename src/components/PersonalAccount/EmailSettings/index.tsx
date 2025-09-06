import { useCallback, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import Divider from '@devbyaj/dev-ui/components/Divider';
import Select from '@devbyaj/dev-ui/components/Select';
import Toggle from '@devbyaj/dev-ui/components/Toggle';

import { EMAILS_SETTINGS } from 'constants/account.constants';
import Card from 'components/shared/Card';
import CardContent from 'components/shared/CardContent';
import { CheckIcon } from 'components/shared/Icons';
import { TOption, TUpdatedSettingsConfig } from 'types/common.type';
type TEmailSettingsProps = {
  emailSettingsConfig: typeof EMAILS_SETTINGS;
};
const EmailSettings = ({ emailSettingsConfig }: TEmailSettingsProps) => {
  const [settingsConfig, setSettingsConfig] = useState<TUpdatedSettingsConfig>({
    primaryEmail: null,
    backupEmail: null,
    isPrivate: false,
  });

  const handleToggleChange = useCallback(
    (change: { id: string; checked: boolean }) => {
      setSettingsConfig((prevConfig) => ({
        ...prevConfig,
        isPrivate: change.checked,
      }));
    },
    [],
  );

  const handleSelectChange = (option: TOption, type: string) => {
    setSettingsConfig((prevConfig) => ({
      ...prevConfig,
      [type]: option,
    }));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-primary sm:text-lg lg:text-xl">
          {emailSettingsConfig.label}
        </h2>
        <p className="text-xs text-secondary sm:text-xs lg:text-sm">
          {emailSettingsConfig.description}
        </p>
      </div>
      {/* Created a shared Card component */}
      <Card>
        {emailSettingsConfig.settings?.map((setting, idx) => (
          <>
            {/* Created a shared Card content component */}
            <CardContent
              key={setting.settingsLabel}
              description={setting.description}
              titleClassName="font-semibold text-primary"
              className="flex-col items-start gap-1 py-4 sm:flex-row lg:flex-row lg:items-center"
              title={setting.settingsLabel}
            >
              {setting.optionType === 'SELECT' && (
                // Basically this is react-select, I have used react-select for Select component in my UI Library (@devbyaj/dev-ui)
                <Select
                  options={setting.options}
                  value={settingsConfig?.[setting.id]}
                  onChange={(option) =>
                    handleSelectChange(option as TOption, setting.id)
                  }
                  className="w-56"
                  size="sm"
                  placeholder="Select an option"
                  components={{
                    ValueContainer: (props) => (
                      <Select.components.ValueContainer {...props}>
                        <div className="flex items-center truncate text-sm">
                          {props.children}
                        </div>
                      </Select.components.ValueContainer>
                    ),
                    Option: (props) => (
                      <Select.components.Option {...props}>
                        <div className="flex items-center justify-between">
                          <span className="max-w-44 truncate">
                            {props.data.label}
                          </span>
                          {props.isSelected && <CheckIcon />}
                        </div>
                      </Select.components.Option>
                    ),
                  }}
                />
              )}
              {setting.optionType === 'TOGGLE' && (
                <Toggle
                  checked={settingsConfig.isPrivate}
                  onChange={handleToggleChange}
                  inputClassName={twMerge(
                    settingsConfig.isPrivate && 'bg-black',
                  )}
                />
              )}
            </CardContent>
            {idx !== emailSettingsConfig.settings.length - 1 && <Divider />}
          </>
        ))}
      </Card>
    </div>
  );
};

export default EmailSettings;
