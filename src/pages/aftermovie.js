import React from 'react'

import {Page, H2} from 'components/lib'
import Section from 'components/Section'

import ReactPlayer from 'react-player'

import AfterMovie from 'assets/AfterMovieComp.mp4'
export default () => (
    <Page>
        <Section>
            <H2>Solving Crime in No Time Aftermovie</H2>
            <ReactPlayer url={AfterMovie} controls={true} config={{ file: {
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}}/>
        </Section>
    </Page>
)
