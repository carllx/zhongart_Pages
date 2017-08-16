import Link from 'next/link'
import React, {Component} from 'react'
import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'




// Font

const ZaiFont = css.fontFace({
  fontFamily: 'ZAI',
  fontStyle: 'normal',
  fontWeight: 400,
  src: "url('../static/font/SFElectrotome-Bold.woff2') format('woff2'),"+
  "url('../static/font/SFElectrotome-Bold.woff') format('woff'),"+
  "url('../static/font/SFElectrotome-Bold.svg') format('svg')",
  unicodeRange: "U+0000-00FF, U+0131, ... U+E0FF, U+EFFD, U+F000"
})

const ZhoFont = css.fontFace({
  fontFamily: 'Zho',
  fontStyle: 'normal',
  fontWeight: 400,
  src: "url('../static/font/SquadaOne-Regular.woff2') format('woff2'),"+
  "url('../static/font/SquadaOne-Regular.woff') format('woff'),"+
  "url('../static/font/SquadaOne-Regular.svg') format('svg')",
  unicodeRange: "U+0000-00FF, U+0131, ... U+E0FF, U+EFFD, U+F000"
})



const Image = glamorous.div({


	width: 350,
	height: 300,
	backgroundColor:'#353535',
	
	display: 'flex',
	// ??????????????
    justifyContent: 'stretch',
    lineHeight: 'normal',
    padding: 16,
});



const Description = glamorous.div({

	color: 'rgba(0,0,0,.54)',
    fontSize: '1rem',
    lineHeight: 1,
    overflow: 'hidden',
    padding: 16,
    width: '90%',
});


const CartaContainer = glamorous.div({

	// minHeight: 200,
	width: 350,

	boxShadow: `0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)`,
  flexDirection: 'column',
  fontSize: 16,
  fontWeight: 400,
  
  overflow: 'hidden',
  // width: 330px;
  zIndex: 1,
  position: 'relative',
  background: '#fff',
  borderRadius: 2,
  boxSizing: `border-box`,
});


const Title = glamorous.h2({

	alignSelf: 'flex-end',

	fontSize: 24,
    fontWeight: 300,
	color:'white',
	lineHeight: 'normal',
});



const Carta = ()=>(
    <div>
    	<CartaContainer>
    	<Image>
			<Title >{'My Title'}</Title>
		</Image>
    	<Description>{'ea molestias quasi exercitationem repellat qui ipsa sit aut'}</Description>    		
    	</CartaContainer>
    </div>
);

export default Carta;




// css.global(
// 	'@font-face', { 
// 		fontFamily: 'fontZai', src: "url('../static/SFElectrotome-Bold.woff') format('woff')"
// 	}
// );



// let abc = css({
//   // color: 'red',
//   // ':hover': { color: 'blue' },  
//   // 'html.ie9 & span.title': { fontWeight: 'bold' }, 
//   // '@media(min-width: 300px)': { fontSize: 20 }
// })