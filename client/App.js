import React, { Component } from 'react'
import { Category } from './components'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }
    this.getCategories()

    this.addCategory = this.addCategory.bind(this)
    this.removeCategory = this.removeCategory.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
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
      .then(category => {
        category.products = []
        this.setState(prevState => prevState.categories.push(category))
      })
      .catch(e => console.error(`Failed to create category! Here's why:\n${e}`))
  }

  removeCategory(id) {
    axios
      .delete(`api/categories/${id}`)
      .then(() => {
        this.setState(prevState => {
          return { categories: prevState.categories.filter(category => category.id !== id) }
        })
      })
      .catch(e => console.error(e))
  }

  addProduct(id) {
    axios
      .post(`api/categories/${id}`)
      .then(response => response.data)
      .then(product => {
        this.setState(prevState => {
          const newCategories = JSON.parse(JSON.stringify(prevState.categories))
          newCategories.find(x => x.id === id).products.push(product)
          return { categories: newCategories }
        })
      })
      .catch(e => console.error(e))
  }

  removeProduct(id) {
    axios
      .delete(`api/products/${id}`)
      .then(() => {
        this.setState(prevState => {
          const newCategories = JSON.parse(JSON.stringify(prevState.categories))
          newCategories.map(category => {
            const products = category.products.filter(p => p.id !== id)
            category.products = products
            return category
          })
          return { categories: newCategories }
        })
      })
      .catch(e => console.error(e))
  }
  render() {
    const { categories } = this.state

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
                <Category
                  category={category}
                  removeCategory={this.removeCategory}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
