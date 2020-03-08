import styled, { css } from 'styled-components'

const DefaultStyles = css`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
`

export const AppWrapper = styled.div`
  ${DefaultStyles};
  width: 100%;
  padding: 0 0.5rem;
  margin: 2rem auto;
  min-height: 50vh;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Wrapper = styled.div`
  ${DefaultStyles};
`
