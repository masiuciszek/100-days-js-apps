import * as React from 'react'
import { StyledKeyword } from './KeywordStyles'

interface Props {
  keyword: string
}

const KeyWord: React.FC<Props> = ({ keyword }) => {
  return <StyledKeyword to={`/tags/${keyword}`}>{keyword}</StyledKeyword>
}
export default KeyWord
