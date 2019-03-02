import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }

  }

  getCategories() {
    axios.get('/api')
      .then(response => response.data)
      .then(categories => this.setState({ categories: categories }))
      .catch(e => console.error(`Could not get categories! Here's why:\n${e}`))
  }

  render() {
    const { categories } = this.state
    return ( 
      <div>
        { categories }
      </div>
    )
  }
}

export default App
