import Banner from '../constituent/Banner'
import Menu from '../constituent/Menu'
import Use from '../constituent/Use'
import Q from '../constituent/Q'
import Form from '../constituent/Form'

export default function Content(props) {  
    return (
        <section  id={props.cid}>
            <Banner id="mainBanner"></Banner>
            <Menu useid={props.usedb.navi[1].href} ></Menu>
            <Use useid={props.usedb.navi[0].href}></Use>
            <Q useid={props.usedb.navi[2].href}></Q>
            <Form useid={props.usedb.navi[3].href}></Form>

        </section>
    )
}
