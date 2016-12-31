import styled, { css } from 'styled-components'

const heading = css`
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
  font-weight: 600;
`

export const H1 = styled.h1`
  ${heading}
  font-size: 34px;
  margin: 0 12px;
  font-weight: 300;
  line-height: 2.6;
`

export const H2 = styled.h2`
  ${heading}
  font-size: 28px;
  margin: 0 12px;
  font-weight: 300;
  line-height: 2.2;
`
