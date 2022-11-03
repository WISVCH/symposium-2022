import React from 'react'

import {Page, H2} from '../components/lib'
import Section from '../components/Section'

import ReactPlayer from 'react-player'

export default () => (
    <Page>
        <Section>
            <H2>Solving Crime in No Time Aftermovie</H2>
            <ReactPlayer url={'https://youtu.be/-eZTjspF0FQ'} controls={true} config={{ file: {
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}}/>
        </Section>
    </Page>
)
