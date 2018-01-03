import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Emitter from 'yaemit'

export default class EventProvider extends Component {
  static childContextTypes = {
    [EventProvider.name]: PropTypes.object,
  }

  static propTypes = {
    eventMap: PropTypes.object.isRequired,
  }

  getChildContext() {
    const context = {}
    const { eventMap } = this.props

    context[EventProvider.name] = new Emitter()

    for (const eventName in eventMap)
      context[EventProvider.name].on(eventName, eventMap[eventName])

    return context
  }

  render() {
    return this.props.children
  }
}
