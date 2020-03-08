import styled from 'styled-components'

interface IStyledBanner {
  width?: string
}

export const StyledBanner = styled.section<IStyledBanner>`
  width: ${({ width }) => width || '80%'};
`
