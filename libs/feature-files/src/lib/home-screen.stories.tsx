import { Story, Meta } from '@storybook/react';
import { HomeScreen, HomeScreenProps } from './home-screen';

export default {
  component: HomeScreen,
  title: 'HomeScreen',
} as Meta;

const Template: Story<HomeScreenProps> = (args) => <HomeScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
