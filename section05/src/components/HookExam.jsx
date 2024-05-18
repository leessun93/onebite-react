import useInput from "./../hooks/useInput";

//3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건문 반복문등 조건부로 호출될 수 없다.
//3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

// const state = useState(); 그냥하면 오류난다 반드시 함수 안에서 호출해야한다.



const HookExam = () =>{
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();



    return (<div>
                <inpuut value={input} onChange={onChange} />
                <inpuut value={input2} onChange={onChange2} />
            </div>
    );
};

export default HookExam;