import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import { Design, Develop } from './AllSvgs'
import Loading from '../subComponents/Loading'
import { lightTheme, mediaQueries } from './Themes'

//components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
  import('../subComponents/ParticlesComponent'),
)
const BigTitle = lazy(() => import('../subComponents/BigTitle'))

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
          flex-direction:column;  
          padding:8rem 0;
height:auto;
          &>*:nth-child(5){
            margin-bottom:5rem;
          }
         
`};
  ${mediaQueries(30)`
         
          &>*:nth-child(5){
            margin-bottom:4rem;
          }
         
`}
`

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  ${mediaQueries(60)`
          height: 55vh;
`};

  ${mediaQueries(50)`
            width: 50vw;
            height: max-content;

`};

  font-family: 'Poppins', san-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
        font-size:calc(0.8em + 1vw);
`};

  ${mediaQueries(50)`
        font-size:calc(1em + 2vw);
        margin-bottom:1rem;
`};

  ${mediaQueries(30)`
                    font-size:calc(1em + 1vw);
`};
  ${mediaQueries(25)`
                    font-size:calc(0.8em + 1vw);
                    svg{
                      width:30px;
                      height:30px;
                    }
`};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Desc = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
          font-size: calc(0.8em + 1vw);

`};

  ${mediaQueries(30)`
      font-size:calc(0.7em + 1vw);

            

`};

  ${mediaQueries(25)`
      font-size:calc(0.5em + 1vw);

            

`};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`

const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />
          <PowerButton />
          <Main>
            <Title>
              <Design width={40} height={40} /> Electrician
            </Title>
            <Desc>
              I love to do electrical wiring which speaks and it's clean.
            </Desc>
            <Desc>
              <strong>I do:</strong>
              <ul>
                <li>Surface Wiring</li>
                <li>Conduit Wiring</li>
                <li>Etc.</li>
              </ul>
            </Desc>
            <Desc>
              <strong>Tools</strong>
              <p>
                Digital Multimeter, MultiScrew Driver, Electric Tester, etc.
              </p>
            </Desc>
          </Main>
          <Main>
            <Title>
              <Develop width={40} height={40} /> Frontend Developer
            </Title>
            <Desc>
              I value business or brand for which I'm creating, thus I enjoy
              bringing new ideas to life.
            </Desc>
            <Desc>
              <strong>Skills</strong>
              <p>Html, Css, Js, React, Redux-ToolKit, MUI, Firebase etc.</p>
            </Desc>
            <Desc>
              <strong>Tools</strong>
              <p>VScode, Github, etc.</p>
            </Desc>
          </Main>
          <BigTitle text="Skills" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}
export default MySkills
