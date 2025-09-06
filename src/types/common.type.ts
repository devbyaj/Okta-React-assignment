export type TStatus = 'PRIMARY' | 'VERIFIED' | 'UNVERIFIED';
export type TEmailAction = 'MANAGE' | 'REMOVE';
export type TOption = {
  label: string;
  value: string;
};
export type TUpdatedSettingsConfig = {
  primaryEmail: TOption | null;
  backupEmail: TOption | null;
  isPrivate: boolean;
};
