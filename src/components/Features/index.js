import React from 'react'
import { H2, FeaturesContainer, FeaturesWrap, FeaturesRow } from './FeaturesStyles'
import FeaturesCard from './FeaturesCard'
import {Feature1, Feature2, Feature3, Feature4, Feature5, Feature6} from './Data'
import DownloadApp from '../DownloadApp';

const Features = () => {
  return (
    <FeaturesContainer id='features'>
        <H2>Student Zen app features</H2>
        <FeaturesWrap>
            <FeaturesRow>
                <FeaturesCard {...Feature1} />
                <FeaturesCard {...Feature2} />
                <FeaturesCard {...Feature3} />
            </FeaturesRow>
            <FeaturesRow>
                <FeaturesCard {...Feature4} />
                <FeaturesCard {...Feature5} />
                <FeaturesCard {...Feature6} />
            </FeaturesRow>
        </FeaturesWrap>
        <DownloadApp/>
    </FeaturesContainer>
  )
}

export default Features