import { Story, Meta } from '@storybook/react';
import { FileCard, FileCardProps } from './file-card';

export default {
  component: FileCard,
  title: 'FileCard',
} as Meta;

const Template: Story<FileCardProps> = (args) => <FileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
