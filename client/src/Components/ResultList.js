import React, { Component } from 'react'

const Post = (props) => {
  return (
    <div className="ui segment">
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, asperiores. Fugit sint, atque dignissimos repellat quo ab molestias corporis possimus laudantium autem. Saepe, deleniti placeat? Aspernatur, eveniet deserunt. Nisi excepturi tempora, quae inventore corrupti natus repudiandae minus rem veritatis fugit! Commodi delectus eligendi rerum quos libero natus dolorem magnam sint! </p>
    </div>
  )
}

class ResultList extends Component {
  render() {
    return (
      <div className="result-list">
        <div className="ui raised segments">
          <div className="ui secondary segment">
            <p> xxxx result found</p>
          </div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    )
  }
}

export default ResultList;