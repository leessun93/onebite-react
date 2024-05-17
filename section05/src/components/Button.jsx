const Button = ({text, color, children}) =>{
    //이벤트 객체 == 이벤트 핸들러는 모든 이벤트 객체를 지원한다 == e(합성이벤트), 
    const onClickButton = (e) =>{
        console.log(e);
        console.log(text+"함수");
    };


    console.log({text, color, children});
    return <button
            onClick={onClickButton}
            //onMouseEnter={onClickButton}
            style={{color : color}}>
                {text} - {color.toUpperCase()}
                {children}
            </button>;
};

Button.defaultProps = {
    color : "black",
};

export default Button;