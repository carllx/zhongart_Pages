import {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import {css} from 'glamor'
import NoSSR from 'react-no-ssr';
import Head from 'next/head'
import {GR , makeKEY , perspZ}  from '~/utils/ui'
import {isMobile  ,isTablet , getLanguer}  from '~/utils/device'
import {switchLanguage,onDevice} from'~/reducers/root'

import Scroller from '~/components/controller.scroll'
import Resizer from '~/components/controller.resize'
import Nav from '~/components/nav'
import Seczione from '~/components/section'
import {initStore} from '~/store'

import markdown from 'markdown-in-js'
import Copyright from '~/components/copyright'


class News extends PureComponent {

  static async getInitialProps({ isServer, query }) {
      /*es: query :{ id: 'EnzoCucchi' }*/
      const post = require(`../static/contents/news/${query.id}`);
      return { ...post }
  }

  constructor(props) {
    super(props)
  }

  setLanguage = (language) => {
      this.props.switchLanguage(language)
  }


  setDevice = () => {
      let whatDevice;
      if (isMobile()) { whatDevice = 'mobile' } else if (isTablet()) { whatDevice = 'tablet' } else { whatDevice = 'desktop' }
      this.props.onDevice(whatDevice)
  }


  componentDidMount() {
      // DEVICE
      this.setDevice()
      /* LANGUGE */
      this.setLanguage(getLanguer())
  }

  render () {

    const {language } = this.props ||{language:'zh'}
    const {vw,vh,is_landscape} = this.props.view_size||{view_size:{vw:0,vh:0,is_landscap:false}}
    const WIDTH = is_landscape?GR.px(1,vw):GR.px(0.4,vw)

    return (
      <main
       key = {`page-${this.props.id}` }
       >
        <Head>
            <title>{this.props.title[language]}</title>
            {/*meta 不支持重复 property*/}
            <meta content={`ZAI - ${this.props.title[language]}`} name='title' />
            <meta content={`ZAI - ${this.props.title[language]}`} property='og:title' />
            <meta content={`ZAI - ${this.props.title.zh} ${this.props.title[language]} ${this.props.title.en}`} name='description' />
            <meta content={`ZAI - ${this.props.title.zh} ${this.props.title[language]} ${this.props.title.en}`} property='og:description' />
            <meta content={`${this.props.keywords} ZAI,中艺国际, zhongart, firenze, Gallery, arte, 佛罗伦萨 `} name='keywords' />
            <meta content='article' property='og:type' />

            <meta content={`http://www.zhongart.it/news/${this.props.id}`} property='og:url' />

            {/*
            <meta content='//s3.amazonaws.com/所用的图片' property='og:image' />
            */}

            {/*<style dangerouslySetInnerHTML={{ __html: this.props.css }} />*/}

        </Head>




      <div
       {
       ...css({
        overflowY: 'auto',
        // height: '100%',
        // weight:'100%',
        marginTop: `${is_landscape?GR.vw(4):GR.vw(6)}vw`,
        marginBottom: is_landscape?`${GR.vw(7)}vh`:`${GR.vw(7)}vw`,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      })}


      >
      {/*TITLE*/}
      <div
       {...css({
          margin:is_landscape?'0 5em 1em 5em':'0 1em 1em 1em',
       })}
      >
        <h1 {
          ...css({
            textAlign:"center",
          })
        }>{this.props.title[language]}</h1>
      </div>
      {/*TITLE*/}


        {/* 头像和描述
        宽屏--横向2列 竖屏--1列 */}

          <div
          {...css({
              // is_landscape
              display:'flex',
              flexDirection:'column',
              margin:is_landscape?'0 5em 15em 5em':'0 1em 15em 1em',

              // transform: `rotate3d(${this.state.tiltx},${this.state.tilty},0,${this.state.degree}deg)`,
              // transition: `transform 1s cubic-bezier(0.1, 0.5, 0.4, 1)`,
            })}
           key= {`${this.props.id}-${this.props.language}`}
           id ='win_scroller'
          >

            {markdown`
## 一、 项目简介


中国、意大利两国都是文明古国，在世界文明的发展史上有着不可替代的地位。在浩瀚的历史的长河中，中意两国的文化交流便有非常丰富的史料记述。早在明代时期，意大利传教士利玛窦来华，将西方文化带入中国，绘制了《山海舆地图》。清代时期，又有意大利艺术家郎世宁来华任宫廷画师，并曾参与圆明园西洋楼的建设。郎世宁的画作创造了新的样式，兼顾了中国审美观念，同时又把西方创作的方式结合起来，其诸多作品至今都还收藏在故宫博物院中。纵观艺术发展史，中意两国艺术源远流长，作为文艺复兴发祥地的意大利率先将绘画从宗教和祭坛中独立出来，成为重要的艺术门类后，影响了整个欧洲继而影响到全世界。而作为中华文明象征的水墨艺术历经千年传承，在21世纪的今天也成为世界范围内的重要艺术表达手段。就像这两种不同的艺术样式间日渐交融的趋势一样，中意两国的艺术也在不断地深入交流与发展。在这一趋势下，青年艺术家之间的交流显得尤为重要，因为他们是当今青年艺术的现实面貌，代表着两国当代艺术的发展的未来。


新世纪以来，越来越多的青年学子进入艺术院校学习，同时，越来越多的艺术青年也从高校步入社会。高等艺术教育的蓬勃发展令人欣慰，但同时，众多富有艺术才华的青年学子初毕业，即因市场与就业的压力，放弃了艺术之路，这实在是高等艺术教育、乃至中国文化事业发展的一大憾事。同样，西方也面临着相似的问题。
为了加强中国、意大利在文化艺术领域的进一步交流，培育更多优秀的艺术家，使双方在艺术创作、理论研究、展览策划等领域进行密切而实际的合作，鼓励和推动高等学校艺术专业毕业生在学术领域能深入开展学术研究工作和在创作领域持续探索，国家当代艺术档案库理事长、著名艺术家王艺先生，国家当代艺术档案库秘书长、著名收藏家丁大立先生联合设立“中国青年艺术家赴意大利佛罗伦萨驻留计划”基金会。由中艺国际文化艺术中心主席张修中先生负责执行。旨在于打破体制机制障碍，对刚刚毕业的、有艺术理想、有艺术才华的青年学子”扶一把，送一程”。


2018年，由佛罗伦萨市政府、中国国家画院当代艺术档案库、中国国家画院文化产业研究中心、佛罗伦萨Le Murate 当代艺术中心、时代美术馆、腾控股集团以及中艺国际联合推出中意青年艺术家驻留计划项目，具体内容如下


1. 宗旨与目标
“中国艺术家赴意大利佛罗伦萨驻留计划”以“助创、助学”为宗旨， 坚持“公开公正、择优交换”的原则。旨在鼓励和推动中意青年艺术家在艺术领域深入开展学术研究工作和在创作领域持续探索，以取得更为丰硕的艺术创作成果。
2. 主办单位: 佛罗伦萨市政府、中国国家画院当代艺术档案库、中国国家画院文化产业研究中心、佛罗伦萨Le Murate当代艺术中心
承办单位: 时代美术馆、腾业控股集团及中艺国际
3. 评审委员会:
中方: 国家当代艺术档案库理事长、著名艺术家王艺先生，国家当代艺术档案库秘书长、著名收藏家丁大立先生，国家当代艺术档案库发起人、著名艺术家方力钧先生。
意方: 佛罗伦萨市政府文化局局长、著名策展人Tommaso Sacchi先生,佛罗伦萨 Le Murate当代艺术中心主任、评论家 Valentina Gensini女士，中艺国际文化中心主席张修中先生。

## 二、 招募对象
首批“中意青年艺术家驻留计划”驻留艺术家在遴选上将面向全国青年艺术家开放，接受社会申请（40岁以下、具备基本英语交流能力）。具有3年以上艺术创作经验、富有独立艺术思考与突破性实践的艺术家提供申请机会。

驻留计划艺术创作以当代艺术为创作领域，创作媒介分为“绘画与雕塑”、“新媒体影像与摄影”、“声音装置与装置艺术”三大类 。

## 三、评审流程
从即日起，驻留艺术家报名正式开始，报名日期截止至北京时间2018年2月28日北京时间12时，佛罗伦萨驻留计划名单录取表将在2018年3月9日北京时间12时公布，届时，将公布最终确定参加此次驻留计划的3名艺术家
2018年2月28日前提交材料 2018年3月5日中方专家初审 2018年3月7日意方专家终审 2018年3月9日公布名单

## 四、资助明细
1. 往返机票及签证申请费用
2. 驻留艺术家创作工作室（由佛罗伦萨Le Murate 艺术中心提供）。
3. 驻留期间住宿（由佛罗伦萨市政府提供）
4. 每位艺术家驻留期间，一次性为其资助提供创作经费及生活补贴，共计2000欧元/每人
《2018中国艺术家赴意大利佛罗伦萨驻留计划》项目由中国国家当代艺术档案库理事长、著名艺术家王艺先生和中国国家当代艺术档案库秘书长、著名收藏家丁大立先生支持。

## 五、 提交材料
1. 艺术家驻留计划申请表
2. 个人作品集(20/45页)
3. 为本次驻留创作主题所制定的创作方案
4. 护照扫描件

> 注:格式要求，文件2和文件3均需中英文双语。
邮件需命名为:2018 Art Residency Florence + 申请人姓名 + 申请人所在地( 例:2018 Art Residency Florence 王小明 北京 )。本次艺术驻留只接受在线申请， 申请驻留项目的艺术家，请在规定期限内将申请所需材料以PDF文档格式 发送至邮箱 artresidency@zhongart.it

## 六、驻留汇报展和作品捐赠
1. 驻留期间双方将通过举办学术沙龙、定期与艺术机构组织学术交流、积极为驻留艺术家搭建成长平台，并在驻留结束后为驻留艺术家举办一次驻留群展并出版画册。
2. 驻留艺术家驻留结束时，需总结汇报驻留期间的学术创作成果，每位艺术家通过协议，由中方项目学术委员会从驻留群展中选取一件作品无偿捐赠驻留地。

## 七、考核与退出
1. 驻留艺术家接受驻留主办方日常管理、学术委员会定期随访。
2. 驻留期间，因各种原因无故退出者，须交退出申请，并完清各项手续，资助费用(往返机票费用、签证费用及生活创作材料补贴)须全额退还。
驻留艺术家遴选将面向社会，公平公开接受青年艺术家、艺术院校青年教师的申请，欢迎广大青年艺术才俊的参与。



>【附】
>2018意大利佛罗伦萨艺术驻留计划创作主题介绍
>2018中国青年艺术家赴意大利佛罗伦萨驻留计划申请表
>





*联系我们*

  *中艺国际文化艺术中心* 驻留项目

  *袁季威* yuan.jiwei@zhongart.it

  *官方网站* www.zhongart.it



### 附件一:
意大利佛罗伦萨艺术驻留计划创作主题介绍
创作主题: “现代城市公共空间与河流、自然环境的可持续发展与共存”
#### 阐释:
佛罗伦萨是意大利托斯卡纳大区的首府，自11世纪建城以来，就是欧洲重要 的文化、商业中心，被公认为是一个艺术城市，拥有建筑、绘画、雕塑、历史与 科学等大量世界文化遗产，素有“文艺复兴之都”的美誉。意大利中部最重要的河 流之一阿诺河横贯整座佛罗伦萨城，在其历史和文化中占有重要地位。历史上， 阿诺河为佛罗伦萨带来过商业利益，为城市的繁荣作出过不可磨灭的贡献，但是 也带来过泛滥的洪水，最近的一次洪水泛滥是1966年，给城市造成了重大损失。 因此，佛罗伦萨人对阿诺河虽说是感情深厚，但也是爱恨交加。
“城市与河流、自然环境”是历年来经久不衰的佛罗伦萨艺术驻留主题，每次 艺术驻留都吸引了全世界的艺术家、社会学家、哲学家和生物学家来此作研究创 作，本次艺术驻留计划力图通过对这一话题的深入展开，以丰富的艺术形式，发 掘出诸如“佛罗伦萨的城市规划和河流规划”、“城市自然化”这类在艺术与环境、 城市发展、环境的建设与共存等方面的文化和社会维度，是反思，也是展望。
期待驻留艺术家用自己所擅长的艺术语言，结合驻留地的社会区域性、地域 性的实际问题，以艺术作品的方式向观众呈现。
关键词: 洪水、河流、艺术与环境、城市与环境、公共艺术、可持续建设


### 附件二:
2018中国青年艺术家赴意大利佛罗伦萨驻留计划申请表`}
            {/*md`${this.props.content[language]}`*/}







          </div>


      <Copyright></Copyright>



        </div>








        <NoSSR>
            <Nav show_on_init = {!is_landscape}/>
        </NoSSR>
        <NoSSR>
          <Scroller />
        </NoSSR>
        <Resizer/>

      </main>
      )
}
}





const mapStateToProps = (state) => ({
    view_size:state.Root.view_size,
    language:state.Root.language,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // root
    switchLanguage: bindActionCreators(switchLanguage, dispatch),
    onDevice: bindActionCreators(onDevice, dispatch),
    // setBrowser: bindActionCreators(setBrowser, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(News)
