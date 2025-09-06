export const EMAILS_ADDED = {
  label: 'Emails',
  description: 'Emails you can use to sign in to your account',
  addedEmails: [
    {
      email: 'hello@example.com',
      emailDescription:
        'This email address is the default for all notifications and account access.',
      statuses: ['PRIMARY', 'VERIFIED'],
    },
    {
      email: 'alternative@example.com',
      statuses: ['VERIFIED'],
    },
    {
      email: 'alternative-unverified@example.com',
      statuses: ['UNVERIFIED'],
    },
  ],
};

export const EMAILS_SETTINGS = {
  label: 'Email settings',
  description: 'Configure how emails are used in relation to your account.',
  settings: [
    {
      id: 'primaryEmail',
      settingsLabel: 'Primary email address',
      description:
        'Select an email to be used for account-related notifications and can be used for password reset.',
      optionType: 'SELECT',
      options: [
        {
          label: 'hello@example.com',
          value: 'hello@example.com',
        },
        {
          label: 'alternative@example.com',
          value: 'alternative@example.com',
        },
        {
          label: 'alternative-unverified@example.com',
          value: 'alternative-unverified@example.com',
        },
      ],
    },
    {
      settingsLabel: 'Backup email address',
      id: 'backupEmail',
      description:
        'Your backup email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.',
      optionType: 'SELECT',
      options: [
        {
          label: 'Allow all verified emails',
          value: 'allow_all',
        },
        {
          label: 'hello@example.com',
          value: 'hello@example.com',
        },
        {
          label: 'alternative@example.com',
          value: 'alternative@example.com',
        },
      ],
    },
    {
      settingsLabel: 'Keep my email addresses private',
      id: 'isPrivate',
      description:
        "We'll remove your public profile email when performing web-based operations and settings email on your BiCircleHalf.",
      optionType: 'TOGGLE',
      options: [
        {
          label: 'Yes',
          value: 'YES',
        },
        {
          label: 'No',
          value: 'NO',
        },
      ],
    },
  ],
};
