import "../../assets/css/Login.css"

function LoginPage() {

    return (
        <>

            <div className="LoginWrap">
                <div className="LoginContainer">
                    <div className="LoginHeadLogo">
                        <h1>
                            <a>{/* <IconLogo /> */}</a>
                        </h1>
                    </div>

                    <div className="LoginSigninContent">
                        <div className="BorderAndText">
                            <span>로그인</span>
                        </div>
                        <div className="EmailLoginContainer">
                            <div>
                                <input className="EmailLoginInput" id="email" type="email" placeholder="이메일" required />
                                <input className="EmailLoginInput" id="password" placeholder="비밀번호" required />
                            </div>
                            <div className="EmailLoginOption">
                                <div>
                                    <div className="InputCheckbox">
                                        <input className="Bp" type="checkbox"></input>
                                    </div>
                                    <label>이메일 저장하기</label>
                                </div>
                                <a>아이디 / 비밀번호 찾기</a>
                            </div>
                        </div>
                        <button className="CommonButton" type="button">
                            로그인
                        </button>
                    </div>
                </div>
            </div>

        </>
    )

}

export default LoginPage;