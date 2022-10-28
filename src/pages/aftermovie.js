import React from 'react'

import {Page, H1, H2, Text, Button} from 'components/lib'
import Section from 'components/Section'

import ReactPlayer from 'react-player'

export default () => (
    <Page>
        <Section>
            <H1>Solving Crime in No Time Aftermovie</H1>
            <ReactPlayer url={"https://youtu.be/dQw4w9WgXcQ"} controls={true} config={{ file: {
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}}/>
        </Section>
    </Page>
)
