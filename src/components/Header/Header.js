import React from 'react';
import Fade from 'react-reveal/Fade';
import BackgroundSlider from 'react-background-slider';
import { Container } from '../../globalStyles';
import {
    HeaderContainer,
    HeaderLink
} from './Header.elements.js';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';
import slider4 from '../../images/slider4.png';

const Header = () => {
    return (
        <>
            <Container>
                <HeaderContainer>
                    <Fade left cascade={true}>
                        <HeaderLink to='/projects'>
                            Go to projects
                    </HeaderLink>
                    </Fade>
                </HeaderContainer>
                <BackgroundSlider images={[slider1, slider2, slider3, slider4]} duration={5} transition={2} />
            </Container>

        </>
    )
}

export default Header;

