import React from 'react'
import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

const MyAppBar = styled(AppBar)({
  background: '#000000',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
})

export default function StyledComponents () {
  return <MyAppBar></MyAppBar>
}
