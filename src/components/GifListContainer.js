import React from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: false,
      searchValue: ""
    }

  }

  searchForGifs = (event) => {
    event.preventDefault()
    let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=dc6zaTOxFJmzC`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          gifs: res.data.slice(0, 3)
        })
      })

  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return(
      <div>
        <GifSearch searchFunction={this.searchForGifs} searchValue={this.state.searchValue} changeValue={this.handleChange}/>
        { (this.state.gifs) ? <GifList gifData={this.state.gifs}/> : null }
      </div>
    )
  }
}

export default GifListContainer
