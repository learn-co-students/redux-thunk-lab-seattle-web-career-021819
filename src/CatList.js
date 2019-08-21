import React from 'react';

class CatList extends React.Component {
  render() {
    const cats = this.props.catPics.map((pic, index) => {
      return (
        <img
          key={index}
          src={pic.url}
        />
      )
    })
    return (
      <div>
        {cats}
      </div>
    )
  }
}

export default CatList;