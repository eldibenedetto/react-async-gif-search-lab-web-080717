import React from 'react'

const GifList = props => {

  const gifHTML = props.gifData.map(gif => (
    <li>
      <img key={gif.id} src={gif.images.original.url} />
    </li>
  ))

  return(
    <ul>
      {gifHTML}
    </ul>
  )
}

export default GifList
