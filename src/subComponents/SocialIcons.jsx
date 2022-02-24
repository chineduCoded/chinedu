import React from 'react'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { DarkTheme, mediaQueries } from '../components/Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;


  `}
  }

  ${mediaQueries(40)`
  left: 1rem;

      svg{
        width:20px;
        height:20px
      }

  `}
`

const LogoLink = styled.a`
  color: inherit;
`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  const mq = window.matchMedia('(max-width: 40em)').matches

  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <LogoLink target="_blank" href="https://github.com/chineduCoded">
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </LogoLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <LogoLink target="_blank" href="#">
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </LogoLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <LogoLink
          target="_blank"
          href="https://web.facebook.com/okoronkwo.chinedu"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </LogoLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <LogoLink
          target="_blank"
          href="https://www.youtube.com/channel/UCdVoSojOx0vlabgPW0NCyfA"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </LogoLink>
      </motion.div>
      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? '5rem' : '8rem' }}
        color={props.theme}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      />
    </Icons>
  )
}

export default SocialIcons
