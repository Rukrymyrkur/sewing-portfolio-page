import React from 'react';
import { Container } from '../../globalStyles';
import {
    SectionContainer,
    ProjectContainer,
    SubHeading,
    TitleWrapper,
    Heading,
    DescriptionWrapper,
    Description,
    ImgWrapper,
    Img
} from './ProjectSection.elements';

import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ProjectSection = ({
    lightBg,
    lightSubHeading,
    lightTextDesc,
    description1,
    description2,
    description3,
    headline,
    lightText,
    subHeading,
    img1Src,
    img2Src,
    img3Src,
    alt1,
    alt2,
    alt3,
    start
}) => {
    return (
        <>
            <Container>
                <SectionContainer >
                    <ProjectContainer lightBg={lightBg}>
                        <TitleWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubHeading lightSubHeading={lightSubHeading}>{subHeading}</SubHeading>
                        </TitleWrapper>
                        <LazyLoadComponent>
                            {(img1Src !== '') ?
                                (<ImgWrapper className="img-wrapper-main" start={start}>
                                    <Img className="img-main" src={img1Src} alt={alt1} />
                                </ImgWrapper>) : null}
                        </LazyLoadComponent>
                        {(description1 !== '') ?
                            (<DescriptionWrapper className="wrapper-top">
                                <Description className="description-right" lightTextDesc={lightTextDesc}>{description1}</Description>
                            </DescriptionWrapper>) : null}
                        <LazyLoadComponent>
                            {(img2Src !== '') ?
                                (<ImgWrapper className="img-wrapper-middle" start={start}>
                                    <Img className="img-middle" src={img2Src} alt={alt2} />
                                </ImgWrapper>) : null}
                        </LazyLoadComponent>
                        {(description2 !== '') ?
                            (<DescriptionWrapper className="wrapper-middle">
                                <Description className="description-left" lightTextDesc={lightTextDesc}>{description2}</Description>
                            </DescriptionWrapper>) : null}
                        <LazyLoadComponent>
                            {(img3Src !== '') ?
                                (<ImgWrapper className="img-wrapper-bottom" start={start}>
                                    <Img className="img-bottom" src={img3Src} alt={alt3} />
                                </ImgWrapper>) : null}
                        </LazyLoadComponent>
                        {(description3 !== '') ?
                            (<DescriptionWrapper className="wrapper-bottom">
                                <Description className="description-right" lightTextDesc={lightTextDesc}>{description3}</Description>
                            </DescriptionWrapper>) : null}
                    </ProjectContainer>
                </SectionContainer>
            </Container>
        </>
    )
}

export default ProjectSection;