import React, { Component } from 'react'
import axios from "axios"

import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      productList: []
    }
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata")
      .then(res=> {
        const banners = res.data.data.banner.list
        const productList = res.data.data.recommend.list
        this.setState({
          banners,
          productList
        })
      })
  }

  render() {
    const { banners, productList } = this.state
    return (
      <div className='Main'>
        <MainBanner title={"轮播图"} banners={banners}></MainBanner>
        <MainBanner ></MainBanner>
        <MainProductList title="商品列表" productList={productList}></MainProductList>
      </div>
    )
  }
}

export default Main