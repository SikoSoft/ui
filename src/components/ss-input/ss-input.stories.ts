import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-input';
import { InputType } from '../../models/Input';
import {
  SSInputPropConfig,
  SSInputProps,
  ssInputProps,
} from './ss-input.models';

const argTypes: Meta<SSInputProps>['argTypes'] = {};

Object.keys(ssInputProps).forEach(propKey => {
  const propName = propKey as keyof SSInputPropConfig;
  const propConfig = ssInputProps[propName];
  console.log('default', propConfig.default);
  argTypes[propName] = {
    description: ssInputProps[propName].description,
    control: ssInputProps[propName].control,
    table: {
      defaultValue: {
        summary: JSON.stringify(ssInputProps[propName].default).replace(
          /^"|"$/g,
          '',
        ),
      },
    },
  };
});

const meta = {
  title: 'components/ss-input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: InputType.TEXT,
  },
  argTypes,
  render: args => html`
    <ss-input type=${args.type} ?autoComplete=${args.autoComplete}></ss-input>
  `,
} satisfies Meta<SSInputProps>;

export default meta;
type Story = StoryObj<SSInputProps>;

export const Text: Story = {
  args: {
    type: InputType.TEXT,
  },
};
