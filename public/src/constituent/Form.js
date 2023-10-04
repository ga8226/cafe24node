
export default function Form(props) {  
    return (
        <>
            <form id={props.useid} className="position-relative mb-5">
                <div className="pt-3 pt-lg-5 position-relative">
                    <div className="container">
                        <div id="ST">
                            샐러드유 와 함께 세상을 <span className="g">푸룻푸룻</span> 하게<br/>만들어 갈 창업주를 모집합니다!
                        </div>
                        <div id="Sst">
                        샐러드유는 파트너 여러분들의 다양한 창업 조건에 맞는 '맞춤형 점포 개설'을  통해 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다
                        </div>
                        <div className="pt-4">
                            <button className="setbtn"><a href="">가맹점 개설 안내</a></button>
                        </div>
                    </div>                   
                    
                </div>

            </form>
        </>
    )
}