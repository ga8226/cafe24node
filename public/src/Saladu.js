import Hd from './layout/Hd'
import Content from './layout/Content'
import Ft from './layout/Ft';
import db from './data/db.json'

export default function Saladu(props) {  
    return (
        <>
          <Hd usedb={db}></Hd>  
          <Content cid="content" usedb={db}></Content>
          <Ft></Ft>
        </>
    )
}