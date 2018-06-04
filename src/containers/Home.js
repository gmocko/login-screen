import React from 'react'
import { withSiteData } from 'react-static'

import { Form } from './ui/Form';

export default withSiteData(() => (
  <div>
    <Form test="super" />
  </div>
))
