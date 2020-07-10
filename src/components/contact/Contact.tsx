import * as React from 'react'
import { ContactStyles } from './ContactStyles'

interface Props {
  onTitle: string
}

const Contact: React.FC<Props> = ({ onTitle }) => {
  return (
    <ContactStyles>
      <h4>This is the social Platforms the would be easiest to reach me</h4>
      <p>Twitter and Instagram for contacting med, Github to se my work.</p>
      <p>
        You could also visit my blog ore my personal web site if you liked.
        Thank you for visiting {onTitle}
      </p>
      <p>
        Hope you got inspired or even would like to improve some applications
      </p>
    </ContactStyles>
  )
}
export default Contact
