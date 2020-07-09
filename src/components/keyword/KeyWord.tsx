import * as React from 'react'

interface Props {
  keyword: string
}

const KeyWord: React.FC<Props> = ({ keyword }) => {
  return (
    <div>
      {' '}
      <h1> {keyword} </h1>{' '}
    </div>
  )
}
export default KeyWord
