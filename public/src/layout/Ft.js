export default function Ft(props) {  
    return (
        <>
            <footer id="ft">
                <div className=" pt-3 pt-lg-4 mx-lg-5">
                    <div className="d-flex justify-content-between align-items-center" id="ft1">
                         <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="푸터로고" className="img-fluid"/>
                    </div>
                    <div className="pt-lg-4 pt-2">
                        <div>
                            <div className="d-flex justify-content-between">
                                <ul className="d-lg-flex mb-lg-3 mb-0">
                                    <li className="py-lg-0 py-2"><span>(주) 샐러드유</span>대전광역시 유성구 문지로 291,206호</li>
                                    <li className="px-lg-3 py-lg-0 py-2"><span>사업자 등록번호</span>831-81-02134</li>
                                    <li className="px-lg-3 py-lg-0 py-2"><span>대표</span>유미정</li>                                
                                </ul>
                            </div>
                            <ul className="d-flex d-lg-none mb-0">
                                <li><a href="#none">고객문의</a></li>
                                <li className="px-lg-3 px-3"><a href="#none">창업문의</a></li>
                            </ul>
                            <ul className="d-flex  py-lg-0 py-2  mb-lg-0 mb-0">
                                <li><span>Tel</span>1544-7386</li>
                                <li className="px-lg-3"><span>E-mail</span>epfree@naver.com</li>
                            </ul>
                        </div>
                    </div>
                    <div id="quickmenu">
                        <ul id="qiuck-lg">
                            <li><a href="#none"><img src={`${process.env.PUBLIC_URL}/img/quick_1.png`} alt="lg 가맹문의" /></a></li>
                            <li><a href="#none"><img src={`${process.env.PUBLIC_URL}/img/quick_2.png`} alt="lg 가맹설명회" /></a></li>
                        </ul>
                    </div>
                    <div id="quickmenu_m">
                        <ul id="qiuck-md" className="d-md-none">
                                <li><a href="#none"><img src={`${process.env.PUBLIC_URL}/img/quick_ico01.png`} alt="md 가맹문의" /></a></li>
                                <li><a href="#none"><img src={`${process.env.PUBLIC_URL}/img/quick_ico02.png`} alt="md 가맹설명회" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        
        </>
    )
}