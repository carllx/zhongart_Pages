import { css } from 'glamor'
import {ui,GR}  from 'utils/ui'
import {PureComponent} from 'react'
import {TweenMax} from "gsap";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setFocusOn} from'reducers/artisti.tabs'
import { setPanelOn } from 'reducers/nav'

const Shape= (props) => (
    <div
     {...css({
        /*初始值*/
        opacity:0,visibility:'hidden',
        // transform: 'scale(0) translate(-50%, -50%)',
        transform: 'scale(0)',
        /*初始值*/
        /*center*/
        zIndex:10,
        position:'absolute',

        /*center*/
        left:0,
        right:0,
        background: props.color||ui.color.w_o2,
        width:`${props.width||1400}px`,
        height:`${props.height||1400}px`,
       })}
     className = {'aboutBG'}
     >

    </div>
)



class AboutBG extends PureComponent {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // this.close();
    }

    // 两个数之间的随机值
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    /*
                // ease: Power4.easeOut,

                // ease: Elastic.easeOut.config(1, 0.3),

                 ease:Back.easeOut.config(2),

                // ease: Elastic.easeOut.config(1, 0.3),

                ease: Back.easeIn.config(2)

     */
    toInfo(){
        let rot_value = this.props.landscape?500:-122
        // console.log(`toInfo_${rot_value}`)

        this.props.setPanelOn('show')
        TweenMax.staggerTo(".aboutBG",
            0.5,
            {
                scale:1,
                rotationZ:rot_value,
                transformOrigin: "center center",
                ease: Power4.easeOut,
                autoAlpha:1,//opacity:0,visibility:'hidden'
            },
            0.06)
    }
    toLogo(){
        let rot_value =this.getRandomInt(-360,360)
        // console.log(`toLogo_${rot_value}`)

        this.props.setPanelOn('close')
        TweenMax.staggerTo(".aboutBG",
            0.3,
            {
                scale:0.1,
                rotationZ:rot_value,
                transformOrigin: "center center",
                // ease: Power4.easeOut,
                autoAlpha:0,//opacity:0,visibility:'hidden'
            },
            0.06);
    }



    componentWillReceiveProps(nextProps){
        if(nextProps.showAbout !== this.props.showAbout) {
            if(nextProps.showAbout===false) {
                this.toLogo();
            }else{
                this.toInfo();
            }
        }

    }

    render(){
        const {landscape,vw,vh} = this.props
        return(
            <div
             {...css({
                position:'fixed',
                overflow: 'hidden',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                top:0,
                left:0,
                width:'100vw',
                height:'100vh',
             })}
            >

                <Shape
                 width = {vw}
                 height = {vh}/>
                <Shape
                 width = {vw}
                 height = {vh}/>
                <Shape
                 width = {vw}
                 height = {vh}/>
                {/*详细描述*/}
                {this.props.showAbout?
                    <div
                     {...css({
                        // fontSize:'14px',
                        position:'relative',
                        zIndex:13,
                        width:landscape?`45vw`:`80vw`,
                        overflowY:'auto',
                        maxHeight: landscape?'58vh':'58vh',
                        fontSize:'0.8em',
                        // height:'100vh',
                        // zIndex:10,


                     })}
                    >
                        {aboutInfo[`${this.props.language}`]
                            .split('\n')
                            .map((item, key) =>
                                <div
                                 {...css({
                                        // fontSize:'.5em',
                                        // paddingTop:'2em',
                                        // paddingLeft:'2em',
                                        // paddingRight:'2em',
                                 })}
                                 key={`aboutInfo_${this.props.language}_${key}`}
                                 // className = {'aboutBG'}
                                 >
                                    {item}<br/>
                                </div>
                    )}
                    </div>:null

                }





            </div>
        )/*return*/
    }/*render*/
}

//aboutInfo[`en`]
//aboutInfo[`${this.props.language}`]
const mapStateToProps = (state) => {

    return ({
        vw:state.Root.view_size.vw,
        vh:state.Root.view_size.vh,
        landscape:state.Root.view_size.is_landscape,
        language:state.Root.language,
        worksFocusOn:state.Tab.worksFocusOn,
    });
}

/*关闭的时候,切换的时候使用*/
const mapDispatchToProps = (dispatch) => {
  return {
    setPanelOn: bindActionCreators(setPanelOn, dispatch),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutBG)




const aboutInfo ={
  "it": "Fondata nel 2017 la Zhong Art International è un’agenzia che opera nel campo dell'Arte e delle Attività Culturali. La Mission consiste nell’organizzare di mostre d’arte ed eventi. Abbiamo la parternship con Enti ed Istituzioni, tra cui il Ministero della Cultura cinese, i Consolati e le Ambasciate in Cina in Italia e siamo impegnati inoltre a favorire scambi culturali tra Università ed Accademie, Musei statali e privati. Essa è fortemente radicata nel territorio fiorentino e a Beijing, ed offre un ventaglio di servizi completo. Un team di professionisti al tuo fianco per assicurare qualità, serietà e risultati. \n\nPartendo da quelle che sono le esigenze ed i desideri del cliente siamo in grado di progettare, organizzare e realizzare Mostre ed Eventi di alto profilo scientifico, con elevata creatività ed esperienza professionale, offrendo servizi e consulenze su misura per ogni occasione.\nOltre all’organizzazione di mostre temporanee, ci dedichiamo alla realizzazione di tutte quelle attività che possano creare un ponte culturale tra Italia e Cina e favorire rapporti di scambio tra Enti ed Istituti dei due Paesi, progetti e collaborazioni che uniscono realtà che hanno come fondamento l’Arte e la Cultura.\nCrediamo che l’arte sia un mezzo di comunicazione efficace ed immediato, in grado di superare ogni difficoltà e barriere linguistiche, di stimolare, incuriosire e far conoscere nuove realtà.",
  "zh": "中艺国际是一个位于意大利佛罗伦萨的国际性艺术与文化交流机构。\n成立于2017年，在中国北京和意大利佛罗伦萨均有办事机构，我们的宗旨是为中国和意大利两国提供文化领域的交流与合作，通过积极为两国的艺术机构之间和艺术家之间策划展览和艺术家之间的学术交流活动，推动促进两国文化积极友好的发展。\n我们与意大利很多国家级的很多重要文化机构如文化部、大使馆等都有长期项目往来，与一些艺术类高等院校如罗马美术学院、佛罗伦萨大学美术学院、欧洲设计学院等都有校际合作关系。\n我们为专业人士提供专业性对接交流，旨在为中国和意大利两国的艺术发展建立文化沟通的桥梁。\n",
  "en": " Zhong Art International is a reality based in Italy and China, which operates in the field of Arts and Cultural Activities Italy-China. Our main activity is organizing art exhibitions and cultural events. We have parternships with Entities and Institutions, including the Chinese Ministry of Culture, Consulates and Embassies both in China and in Italy, as well as cultural exchanges between Universities and Academies, State and Private Museums, and the most important artistic organization of the country.\nIn addition to exhibitions, we are dedicated to the realization of all those activities that can create a cultural bridge between Italy and China: for example, we work to create new and lasting exchanges between institutions and institutes of the two countries, projects and collaborations that combine similar realities the basis of Art and Culture.\nThe root of our work, the will that drives our whole business, is the commitment to create a strong link between two ancient cultures—China and Italy. We believe that art is the most effective and immediate ways of communication, the only one able to overcome every difficulty and language barriers. Our purpose today is to stimulate the culture’s vitality, to excite our curiosity and to create some new meaningful activities,  and we hope that in the future we can make a prosperous world for our next generation.\nStarting from the demands of our customers, we are able to organize quality events with high creativity and professional experience, offering customized services and practical consultations for every occasions.\nFounded in 2017, Zhong Art International, a highly organized event agency in the Florence and Beijing areas, offers a full range of services.We are the propagators of Chinese art and culture, we strive to promote them to be duly appreciated in Italy. A team of professionals beside you to ensure the quality, reliability and results. "
}
