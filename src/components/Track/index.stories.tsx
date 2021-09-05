import CoverJacket, { Props } from '.'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  component: CoverJacket,
  title: 'Components/CoverJacket',
} as Meta

const Template: Story<Props> = args => <CoverJacket {...args} />

export const Sample = Template.bind({})

Sample.args = {
  title: 'Future Girl',
  artist: 'ANON',
  imageUrl:
    'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/3b/0d/9d/3b0d9d1e-0873-05a3-ef37-d417768cc3da/859755605295_cover.png/1000x1000bb.webp',
}
