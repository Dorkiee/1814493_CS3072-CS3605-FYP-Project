import React from 'react'
import {Image } from 'react-bootstrap';
import testimg from './contentImgs/234.png'

function test() {
  return (
    <div>
      <Image src={testimg} fluid style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}/>
    </div>
  )
}

export default test
