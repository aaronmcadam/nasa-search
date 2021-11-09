import { Story, Meta } from '@storybook/react';
import { FileDetailScreen, FileDetailScreenProps } from './file-detail-screen';

export default {
  component: FileDetailScreen,
  title: 'FileDetailScreen',
} as Meta;

const Template: Story<FileDetailScreenProps> = (args) => (
  <FileDetailScreen {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
