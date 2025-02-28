import "../../assets/css/SignUp.css"

function SignUpPage() {

    return (
        <>
            <div className="WrapLogin">
                <form className="ReauthPhone">
                    <div className="LoginWrap">
                        <section className="LoginSection">
                            <h2 className="LoginTitle">회원가입</h2>

                            {/*<div id="SignupStep" className="wrap">*/}
                            {/*    <h3 className="Title">가입 정보 입력하기</h3>*/}
                            {/*</div>*/}

                            <div className="FormBlock">
                                <label className="FormBlockHead">
                                    <em className="AsteriskRed">*</em> 이름
                                </label>
                                <div className="FormBlockBody">
                                    <div className="InputTextSizeWTypeL">
                                        <input className="EmailInput" id="name" type="text" placeholder="이름을 입력해 주세요" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="FormBlock">
                                <label className="FormBlockHead">
                                    <em className="AsteriskRed">*</em>아이디
                                </label>

                                <div className="FormBlockBody">
                                    <div className="InputTextSizeW">
                                        <input className="EmailInput" />
                                    </div>
                                    <span className="FormError"></span>
                                </div>
                            </div>
                            
                            <div className="FormBlock">
                                <label className="FormBlockHead">
                                    <em className="AsteriskRed">*</em> 비밀번호
                                </label>
                                <div className="FormBlockBody">
                                    <div className="InputTextSizeW">
                                        <input className="EmailInput" id="password" placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)" required />
                                    </div>
                                </div>
                                <div className="FormBlockBody">
                                    <div className="InputTextSizeW">
                                        <input className="EmailInput" placeholder="비밀번호 확인" required />
                                    </div>
                                </div>
                            </div>

                            <div className="FormBlock">
                                <label className="FormBlockHead">
                                    <em className="AsteriskRed">*</em>이메일
                                </label>

                                <div className="FormBlockBody">
                                    <div className="InputTextSizeW">
                                        <input className="EmailInput" />
                                    </div>
                                    <span className="FormError"></span>
                                </div>
                            </div>

                            {/*<div className="FormBlockCheckAllWrap">*/}
                            {/*    <div className="Terms">*/}
                            {/*        <div className="TermsHead">*/}
                            {/*            <div className="InputCheckBox">*/}
                            {/*                <input type="checkbox" value="agree" />*/}
                            {/*            </div>*/}
                            {/*            <label className="TermsLabel">모두 동의합니다.</label>*/}
                            {/*        </div>*/}

                            {/*        <div className="TermsBody">*/}
                            {/*            <div className="TermsItem">*/}
                            {/*                <div className="InputCheckBox">*/}
                            {/*                    /!* <Terms1 type="checkbox"></Terms1> *!/*/}
                            {/*                    <input type="checkbox" value="provision" />*/}
                            {/*                </div>*/}
                            {/*                <label className="Terms1Label">만 14세 이상입니다.</label>*/}
                            {/*            </div>*/}
                            {/*            /!*  *!/*/}
                            {/*            <div className="TermsItem">*/}
                            {/*                <div className="InputCheckBox">*/}
                            {/*                    /!* <Terms1 type="checkbox"></Terms1> *!/*/}
                            {/*                    <input type="checkbox" value="privacy" />*/}
                            {/*                </div>*/}
                            {/*                <a className="Terms2A">이용약관 필수 동의</a>*/}
                            {/*            </div>*/}
                            {/*            /!*  *!/*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*    <span className="Terms1Error" />*/}
                            {/*    <span className="TermsError" />*/}
                            {/*</div>*/}

                            <div className="FormBlockSubmit">
                                <div className="FormBlockBody">
                                    <button className="BtnLogin" type="button">
                                        회원가입하기
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </div>
        </>
    )

}

export default SignUpPage;