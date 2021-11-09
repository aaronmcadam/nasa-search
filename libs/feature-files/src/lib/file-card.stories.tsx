import { Story, Meta } from '@storybook/react';
import { FileCard, FileCardProps, NasaFile, NasaFileLabel } from './file-card';

export default {
  component: FileCard,
  title: 'FileCard',
} as Meta;

const file: NasaFile = {
  id: 'apollo',
  name: 'Apollo taking off',
  src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
  timestamp: '2021-04-21T00:00:00Z',
  label: NasaFileLabel.PHOTO,
};

const Template: Story<FileCardProps> = (args) => <FileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  file,
};
