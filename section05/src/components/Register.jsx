import { useState, useRef } from "react";
//간단한 회원가입 폼
//이름 생년월일 국적 자기소개
const Register = () => {
/*    
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setbio] = useState("");
*/
/*고도화*/
    const [input, setInput] = useState({
        name : "",
        birth:"",
        country:"",
        bio:"",
    });

    const countRef = useRef(0);
    //dom요소 핸들링을 위해
    const inputRef = useRef();


/*고도화*/
    const onChange = (e) =>{
        countRef.current++;
        console.log(countRef.current);
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit= ()=>{
        if(input.name === ""){
            //이름을 입력하는 dom 요소 포커스
            inputRef.current.focus();
        }
    };
/*
    const onChangeName = (e) =>{
        //setName(e.target.value);
        setInput({
            ...input,
            name : e.target.value,
        });
    };

    const onChangeBrith = (e) =>{
        // setBirth(e.target.value);
        setInput({
            ...input,
            birth: e.target.value,
        });
    };
    const onChangeCountry = (e) =>{
        // setCountry(e.target.value);
        setInput({
            ...input,
            country: e.target.value,
        });
    }
    const onChangeBio = (e)=>{
        // setbio(e.target.value);
        setInput({
            ...input,
            bio: e.target.value,
        });
    };
*/   
    return (
        <div>

            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"}/>
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />{input.birth}
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>{input.bio}
            </div>    

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;