import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Greeting } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Greeting',
    component: Greeting,
  } as ComponentMeta<typeof Greeting>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Greeting> = (args) => <Greeting/>;
  
  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    primary: true,
    label: 'Greeting',
  };