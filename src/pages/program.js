import React from 'react'

import { Page, H2, Text } from 'components/lib'
import Section from 'components/Section'
import Program from 'components/Program'

export default () => (
  <Page>
    <Section>
      <H2>Program</H2>
      <Text>Our host Gabriella Adèr will open the symposium and introduce the first speaker. For the second speaker you can choose which speaker you want to attend. During the break a delicious lunch will be waiting for you; all drinks and food are included with your ticket. After the lunch you can decide again which speaker you would like to attend. Hereafter you can experience for yourself what experts do for their daily jobs during the workshops. You can enroll for the workshops during the symposium. More information on the workshops will be announced.</Text>
      <Program />
    </Section>
  </Page>
)
