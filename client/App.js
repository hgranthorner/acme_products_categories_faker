import React, { Component } from 'react'
import { Category, Product } from './components'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }
    this.getCategories()

    this.addCategory = this.addCategory.bind(this)
  }

  getCategories() {
    axios
      .get('/api')
      .then(response => response.data)
      .then(categories => {
        this.setState({ categories: categories })
      })
      .catch(e => console.error(`Could not get categories! Here's why:\n${e}`))
  }

  addCategory() {
    axios
      .post('api/categories')
      .then(response => response.data)
      .then(category => this.setState(prevState => prevState.categories.push(category)))
      .catch(e => console.error(`Failed to create category! Here's why:\n${e}`))
  }

  // removeCategory(id) {
  //   axios
  //     .delete(`api/categories/${id}`)

  // }
  render() {
    const { categories } = this.state
    console.log(`Categories: ${categories.map(category => category.name)}`)
    return (
      <div>
        <h1>Welcome</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log('click')
            this.addCategory()
          }}
          type="submit"
        >
          Create Category
        </button>
        <div>
          <ul className="list-group">
            {categories.map(category => (
              <li key={category.id} className="list-group-item">
                <Category category={category} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
