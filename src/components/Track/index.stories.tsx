import { Meta, Story } from '@storybook/react'
import React from 'react'
import Track, { Props } from '.'

export default {
  component: Track,
  title: 'Components/Track',
} as Meta

const Template: Story<Props> = args => <Track {...args} />

export const Sample = Template.bind({})
Sample.args = {
  title: 'Future Girl',
  artist: 'ANON',
}
