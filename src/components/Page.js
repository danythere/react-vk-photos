import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  constructor() {
    super();
    this.photoNumber=0;
  }
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year, this.props.userId)
  }
  getPhotosAlbum=(photos,year)=>{
    let newsTemplate;
    const self=this;
    if(photos.length){
      this.photoNumber=0;
     newsTemplate = photos.map(function(item) {
        const date=new Date(item.date*1000);
        if(date.getFullYear()===year){
          self.photoNumber++;
        return (
        <div key={item.id} >
          <img src={item.sizes[0].url}></img>
        </div>
        )
        }
    }
  )
    } else {
      newsTemplate=<div></div>
    }
    return newsTemplate
  }

  renderTemplate=()=>{
    const { year, photos, isFetching } = this.props
    if(isFetching)
    return (
      <div>
        <div>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2016</button>
          <button onClick={this.onBtnClick}>2015</button>
          <button onClick={this.onBtnClick}>2014</button>
        </div>
        <p>
         Загрузка...
        </p>
      </div>
    )
    else {
      return (
        <div>
          <div>
            <button onClick={this.onBtnClick}>2018</button>
            <button onClick={this.onBtnClick}>2017</button>
            <button onClick={this.onBtnClick}>2016</button>
            <button onClick={this.onBtnClick}>2015</button>
            <button onClick={this.onBtnClick}>2014</button>
          </div>
          <p>
            {this.getPhotosAlbum(photos,year)}
            У тебя {this.photoNumber} фото за {year} год
          </p>
        </div>
      )
    }
  }
  render() {
    return (
      <div>{this.renderTemplate()}</div>
      )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired, // добавили новое свойство в propTypes
}