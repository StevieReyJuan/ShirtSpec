import React, { Component } from 'react'
import Content from '../Content'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Content className='not-found'>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Content>
    )
  }
}
