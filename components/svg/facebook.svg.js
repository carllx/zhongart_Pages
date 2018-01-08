import {PureComponent} from 'react'
import {ui,GR}  from '~/utils/ui'

const SVG= (props) => (

    <svg

     width={props.size||32}
     height={props.size||32}
     viewBox="0 0 32 32">
        <title>facebook</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>

    </svg>
)



export default SVG
