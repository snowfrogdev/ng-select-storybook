import { Meta, Story } from '@storybook/angular';
import { InSelectComponent, InSelectComponentModule } from './select.component';

export default {
  title: 'Select',
  component: InSelectComponent,
  moduleMetadata: {
    imports: [InSelectComponentModule],
  },
} as Meta;

interface TemplateArgs {
  items?: boolean[];
}

const Template: Story = (args: TemplateArgs) => ({
  props: { ...args },
});

export const Default = Template.bind({});
Default.args = {
  items: [true, false],
};
