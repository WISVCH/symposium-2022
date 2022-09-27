import React from 'react'

import { Page, H2, Text } from 'components/lib'
import Section from 'components/Section'
import Host from 'components/Host'
import RvA from 'components/RvA'
import Committee from 'components/Committee'

export default () => (
  <Page>
    <Section>
      <H2>About the Symposium</H2>
      <Text>This symposium is a biyearly event organized by the Mathematics and Computer Science study association ‘Christiaan Huygens’. The association puts time and resources into organizing these symposia, because they see value in the ability for students and fresh graduates to get an insight in what their studies can achieve in practice. In this edition, titled ‘Solving Crime in No Time – The Strength of Digital Forensics’, various speakers will give an insight into how mathematics and computer science can contribute to solving crime. </Text>
    </Section>
    <Section>
      <H2>The Host</H2>
      <Host />
      <Text> Gabriella Adèr is a journalist and also works on producing and researching for documentaries and podcasts. Currently, she works for the NRC in the editorial team for podcasts as well as hosting the daily podcast ‘Vandaag’. She collaborated in documentaries such as ‘De Villamoord’, a documentary about the villa murder in 1998 and what mistakes were made trying to solve this crime. Other projects are ‘Misdaaddokters’ (‘Crime Doctors’), ‘Cocainekoorts’ (‘Cocaine Fever’) and ‘Leven met de Maffia’ (‘Live with the Mafia’). She is also still working on releasing more exciting documentaries. In her work Gabriella is searching for stories representing our society and she is especially interested in the paradoxes that are present in these. This makes crime and justice a particular interest of hers. This interest and her enthusiasm makes her a fantastic host for our symposium. </Text>
    </Section>
    <Section>
      <H2>Board of Advice</H2>
      <Text>For acquiring contacts with several parties and for other support and tips, we have turned to the experience and wisdom of professors, researchers and employees from our university.</Text>
      <RvA />
    </Section>
    <Section>
      <H2>The Organizing Committee</H2>
      <Committee />
    </Section>
  </Page>
)
