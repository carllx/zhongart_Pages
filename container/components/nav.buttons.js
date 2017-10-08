import { css } from 'glamor'
import {ui  ,GR}  from '~/utils/ui'

const CONFIG = [{
        'title':{zh:'艺术家',en:'ARTISTS',it:'ARTISTI'},
        'id':'artisti',
    },{
        'title':{zh:'展览',en:'EXHIBITIONS',it:'MOSTRE'},
        'id':'mostre',
    },{
        'title':{zh:'新闻',en:'NEWS',it:'EVENTI'},
        'id':'eventi',
    },{
        'title':{zh:'关于',en:'ABOUT',it:'DI NOI'},
        'id':'about',
    }
]



export const BUTTONS = (props)=>

    <div
     {...css({
        fontSize: props.is_landscape?`${GR.vw(9)}vw`:`${GR.vw(7)}vw`,
        color: ui.color.b_1,
        right: props.is_landscape? '0':'50%',
        top: props.is_landscape? 0:'100%',
        transform: props.is_landscape? 'translate(0, 0)':'translate(50%, -100%)' ,
        width: props.is_landscape? '40%':'100%',
        opacity:props.show?1:0,
        pointerEvents:props.show?'auto':'none',//svg 禁用了pointerEvents

        justifyContent:'space-around',
        position:'fixed',
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        transition: `all 0.5s cubic-bezier(0, 0.6, 0, 1)`,
        transitionDelay: props.show?'0.5s':'0s',// 等待BG动画覆盖后在显示
        willChange: 'max-height,opacity',
     })}
     className = {`nav_btns${props.is_landscape?` landscape`:''}${props.show?` show`:'close'}`}
    >
        {
            CONFIG.map(
                (items) =>
                    <div
                     {...css({
                        paddingTop:props.is_landscape?`${GR.vw(8)}vw`:`${GR.vw(6)}vw`,
                        paddingBottom:`${GR.vw(6)}vw`,
                        cursor: 'pointer',
                        userSelect: 'none',
                     })}
                     key= {`nav_button_${items.id}`}
                     onClick = {(e)=>{
                        e.stopPropagation();//防止冒泡触发已注册的nav onClose
                        props.foo(items.id)
                        }}
                     >
                     {items.title[props.language]}
                    </div>
                )
        }
    </div>
