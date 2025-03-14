import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Link} from "react-router-dom";
import Title from "../../components/Title.jsx";


function MyPage() {

    const [pwVisible, setPwVisible] = useState(false);
    const [mailVisible, setMailVisible] = useState(false);

    const [password, setPassword] = useState("");
    const [inputPassword, setInputPassWord] = useState("");

    const [mail, setMail] = useState("test@test.com");
    const [inputMail, setInputMail] = useState("");

    return (
        <>
            <Title title="마이페이지" />
            <table className="3" border="1" style={ {marginLeft: "auto", marginRight: "auto", width: "70%"} }>
                <tbody>
                    <tr>
                        <td className="col-5" rowSpan="6">마이페이지
                            <div>
                                <Link to={"/cartPage"}><Button variant="light">장바구니 보기</Button></Link>
                            </div>
                            <div>
                                <Link to={"/orderPage"}><Button variant="light">주문내역 보기</Button></Link>
                            </div>
                            <div>
                                <Link to={"/interestedPage"}><Button variant="light">관심상품 보기</Button></Link>
                            </div>
                        </td>
                        {/*<td>이름</td>*/}
                        <td>이름</td>
                        <td style={ {textAlign: "left"} }>OOO</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">비밀번호</td>
                        <td style={ {textAlign: "left"} }>{password}<Button variant="light" onClick={ () => {
                            setPwVisible(true);
                        } }>변경</Button></td>
                    </tr>
                    <tr>
                        { pwVisible &&  <td style={ {textAlign: "left"} }><input type="text" onChange={ (e) => {
                            setInputPassWord(e.target.value);
                        } } /><Button variant="light" onClick={ () => {
                            setPassword(inputPassword);
                            setPwVisible(!pwVisible);
                        } }>확인</Button></td> }
                    </tr>
                    <tr>
                        <td>핸드폰번호</td>
                        <td style={ {textAlign: "left"} }>000-1234-5678</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">이메일</td>
                        <td style={ {textAlign: "left"} }>{mail}<Button variant="light" onClick={ () => {
                            setMailVisible(true);
                        } }>변경</Button></td>
                    </tr>
                    <tr>
                        { mailVisible && <td style={ {textAlign: "left"} }><input type="text" onChange={ (e) => {
                            setInputMail(e.target.value);
                        } } /><Button variant="light" onClick={ () => {
                            setMail(inputMail);
                            setMailVisible(!mailVisible);
                        } }>확인</Button></td> }
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default MyPage;