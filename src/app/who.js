import React from 'react'

/* global __PRODUCTION__ __DEVELOPMENT__ */

export default () => (
  <div>
    <i>Examples?</i>
    <br /><br />
    {__PRODUCTION__
    && <div>Production mode</div>}
    {__DEVELOPMENT__
    && <div>Development mode</div>}
  </div>
)
