import React from 'react';
import { Container } from '../../globalStyles';
import { CodingSection, TitleSec, Description, List, ListItems } from './Coding.elements';

const Coding = () => {
    return (
        <Container>
            <CodingSection id="how-was-it-done">
                <TitleSec>Creation of this page</TitleSec>
                <Description>
                    <ListItems>
                        <List>
                            <List className="strong">What's the point of this webpage?</List>
                        I would call myself a curious person. All that curiosity often drives me to do something that makes me smile and feel accomplished, but more often, it actually leads to a lot of unfinished projects.
                        I find myself thinking of a brilliant idea that I want to build, but have no knowledge how to make it, and then I feel sad. And watch more tutorials. And never get back to my brilliant idea.
                        Will this be the end of my motivation to become a web developer?
                        And then it hit me - what if I would <a className="externalLink" href="https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X" target="_blank">show my work</a>?
                        I enjoy designing and sewing myself, but I am so inactive in social media, only my closest friends know about it.
                        </List>
                        <List>
                            <List className="strong">How did you make it?</List>
                            I'm not going to say this is groundbreaking and never seen before, but I will still talk how I've made it!
                            I've decided to build it with React. I've made some small projects with it before, but never learnt how components work together when there are lots of them.
                            You could <a className="externalLink" href="/" target="_blank">check the source code</a> if you're interested!
                            I've also tried using styled-components. Have mixed feelings about them, but still kind of like it.</List>
                        <List>
                            I'll admit, sometimes I get into details too much, and not enough into overall project,
                            that's why I've changed the background 3 times and took too much time photoshopping images so they would 'blend well'.
                        </List>
                    </ListItems>
                </Description>
            </CodingSection>

            <CodingSection id="struggles">
                <TitleSec>Things that got me stuck</TitleSec>
                <Description>
                    <ListItems>
                        <List><List className="strong">The project page had to be as sustainable as possible</List>
                        meaning, adding a project would involve little code.
                        I've had to figure out how to make a project component with object variables that would be stored in another file.
                        </List>
                        <List><List className="strong">How to add a form for the site</List>
                        I've thought a lot about some security issues that forms can have, and postponed this as much as I could, but in the end decided to use a netlify form.
                        </List>
                        <List><List className="strong">What to do with a project grid if there's no data to fill</List>
                        Decided that conditional rendering inside a component code would be the best, CSS didn't really work, as it rendered empty divs.
                        </List>
                    </ListItems>
                </Description>
            </CodingSection>

            <CodingSection id="further">
                <TitleSec>Thoughts on improvement</TitleSec>
                <Description>
                    <ListItems>
                        <List>Implement a dark theme</List>
                        <List>Write a more uniform code</List>
                        <List>Comment section</List>
                        <List>Hoodie builder app</List>
                        <List>Would you have any suggestions?<a className="internalLink" href='/contact#email' target="_blank">Let me know.</a></List>
                    </ListItems>
                </Description>
            </CodingSection>
        </Container>
    )
}

export default Coding;
