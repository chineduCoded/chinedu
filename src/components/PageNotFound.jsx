import React from 'react'
import styled from 'styled-components'
import img from '../assets/404.png'
import PowerButton from '../subComponents/PowerButton'

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background: #000;
  height: 100vh;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`
const ImageHolder = styled.div`
  width: min(400px, 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`

const Image = styled.img`
  object-fit: cover;
`

const PageNotFound = () => {
  return (
    <Container>
      <PowerButton />
      <Wrapper>
        <ImageHolder>
          <Image src={img} alt="page not found" />
          <div>Page Not Found</div>
        </ImageHolder>
      </Wrapper>
    </Container>
  )
}
export default PageNotFound
