import type { Config } from 'tailwindcss';
import preset from '@devbyaj/dev-ui/dist/theme/preset';
export default {
  presets: [preset],
  content: ['./src/**/*.{js,jsx,ts,tsx}', ...preset.content],
} as Config;
