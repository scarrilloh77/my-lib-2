import '../tailwind.css';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <div>
      <div>
        <Button color="primary">Outlined</Button>
      </div>
      <div>
        <Button color="secondary">Filled</Button>
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
  },
};

export const Secondary: Story = {
  render: () => (
    <div className="flex flex-col border bg-red-700">
      <div className="border-8 border-sky-500">
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button variant="filled">Filled</Button>
      </div>
    </div>
  ),
  args: {
    color: 'primary',
  },
};

export const Tertiary: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 mt-8">
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div>
        <Button size="md">Medium</Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'primary',
  },
};

// export default {
//   title: 'Components/Button',
//   component: Button,
//   argTypes: {
//     variant: {
//       control: { type: 'radio', options: ['filled', 'outlined'] },
//     },
//     color: {
//       control: { type: 'radio', options: ['primary', 'secondary'] },
//     },
//     size: {
//       control: { type: 'radio', options: ['sm', 'md', 'lg'] },
//     },
//   },
// };
