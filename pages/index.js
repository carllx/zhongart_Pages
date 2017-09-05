import { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import { css } from 'glamor'
import glamorous from 'glamorous'
import {ThemeProvider} from 'glamorous'
import NoSSR from 'react-no-ssr';

import Post from '../components/post'
import {SectionWelcome} from '../components/section.welcome'
import Nav from '../components/nav'
import {IMG} from '../components/img'
import Logo from '../components/logo.svg'
import {changelog,Concept} from '../components/changelog'
import {ThreeInit} from'../components/section.welcome.THREE.sphere.js'

import {isMobile  ,isTablet , isLandscape, getLanguer,setREM }  from '../utils/device'
import {throttle, debounce}  from '../utils/throttle'

import {ui  }  from '../utils/ui'
/**
 * [fontSize description]
 * @type {String}
 */
css.global(

  'html, body', {
    fontSize: '100%',
    color:ui.color.secondary_on_light,
    margin:0
  },
)
/**
 * [color description]
 * @type {[type]}
 */
css.global(

  'h1,h2,h4',{
    color:ui.color.primary_on_light,
  }
)


export default class extends Component {

  constructor (props) {
      super(props)
      this.state = {
        /*
        device   : desktop / moblie / tablet    --2.
        direction: portrait / landscape
        OS       : android / ios / windows / blackberry   --1.
        browser  : chrome /  firefox / safari / IE / wechat /
        language : cn / en / it
        */
        device: '',
        isLandscape: '',
        language: '',
        height:'',
        width:'',

       }
       this.onScorll = debounce(this.handleScroll ,500 );
       this.onReSize = debounce(this.handleReSize ,500 );
    }

  // };
  // shouldComponentUpdate(){
  //   return false
  // }
  handleScroll=()=>{

    const ScrollY = window.scrollY;
    //  ↑ or ↓ ???
    const isScrollUp = ( ScrollY - this.prevScrollY)<=0 ;

    if(isScrollUp) {
      console.log('↑');
    }else{
      console.log('↓');
    }
    // 刷新当前scroll所在位置
    this.prevScrollY = ScrollY;

   };


  handleReSize=()=>{

    this.setState({height : window.innerHeight})
    this.setState({width : window.innerWidth})
    console.log('resize!')

  };


  componentWillMount(){

    if (typeof window == 'undefined') return;
    setREM();
    window.removeEventListener('scroll', this.onScorll, false);
    window.removeEventListener('resize', this.onReSize);

  }


  componentWillUnMount(){
    window.removeEventListener('scroll', this.onScorll)
    window.removeEventListener('resize', this.onScorll)
  }


  componentDidMount(){

    window.addEventListener('scroll', this.onScorll, false)
    window.addEventListener('resize', this.onReSize );

    // SCROLL
    this.prevScrollY = window.scrollY;

    // 检测移动硬件
    if (typeof navigator === 'undefined') {
      console.log(this.state)
      return;
    }
    // device
    if(isMobile()==true){//isMobile
      this.setState({device : 'isMobile'})
    }else if (isTablet()==true){
      this.setState({device : 'isTablet'})
    }else{
      this.setState({device : 'isDesktop'})
    };
    // direction
    this.setState({isLandscape : (isLandscape()?true:false) })
    // language
    this.setState({language : getLanguer()})

    // height width
    this.setState({height : window.innerHeight})
    this.setState({width : window.innerWidth})

    ThreeInit();

  }


  render () {
    return (
      <main >
        <Head></Head>


        {/*服务器初始内容*/}
        <NoSSR onSSR={
          <p>服务器</p>
        }><p>客户端</p>
        </NoSSR>



        {/*<SectionWelcome
         width = {this.state.width}
         height= {this.state.height}
         isLandscape = {this.state.isLandscape}
         />*/}


         <canvas
          {...css({position:'absolute',top:0,left:0})}
          id = "scene"
          width = {this.state.width}
          height = {this.state.height}/>



        <Logo
         isLandscape = {this.state.isLandscape}
         color={ui.color.primary_on_dark}
         bg_color={ui.color.secondary_secondary}
        />
        <Nav
         width = {this.state.width}
         isLandscape={this.state.isLandscape}
         language= {this.state.language}
        />


        <div>{this.props.hh}</div>
        <NoSSR>
        <content onScroll={this.handleScroll}>
          <changelog display = 'none'/>
          <Concept display = 'none'/>
        </content>
        </NoSSR>
      </main>



    )
  }

}

//<section>
//  {this.props.postList.map(post => <Post {...post} key={post.id} />)}
//</section>

