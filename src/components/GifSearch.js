import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.searchFunction}>
          <input type="text" onChange={this.props.changeValue}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
