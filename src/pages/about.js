import React from 'react'

import { Page, H2, Text } from 'components/lib'
import Section from 'components/Section'
import Host from 'components/Host'
import RvA from 'components/RvA'
import Committee from 'components/Committee'

export default () => (
  <Page>
    <Section>
      <H2>About the symposium</H2>
      <Text>This symposium is a biyearly symposium organized by the Mathematics- and Computer Science association ‘Christiaan Huygens’. The association puts time and resources into organizing these symposia, because they see value in the ability for students and fresh graduates to get an insight in what their studies can achieve in practice. In this edition, titled ‘Solving Crime in No Time – The strength of digital forensics’, various speakers will give an insight into the advancements in digital forensics and apprehending criminals.</Text>
    </Section>
    <Section>
      <H2>The Host</H2>
      <Host />
      <Text> TBD </Text>
       <Text> TBD</Text>
    </Section>
    <Section>
      <H2>Board of Advice</H2>
      <Text>For acquiring contacts with several parties and for other support and tips, we have turned to the long experience and wisdom of professors, researchers and employees from our university.</Text>
      <RvA />
    </Section>
    <Section>
      <H2>The Organising Committee</H2>
      <Committee />
    </Section>
  </Page>
)
