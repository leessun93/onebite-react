import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName : "완전좋음"
    },
    {
        emotionId: 2,
        emotionName : "좋음"
    },
    {
        emotionId: 3,
        emotionName : "그냥저냥"
    },
    {
        emotionId: 4,
        emotionName : "나쁨"
    },
    {
        emotionId: 5,
        emotionName : "테러블함"
    }
]


const Editor = ({ initData, onSubmit }) =>{

    const [input, setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content : ""
    });

    const nav = useNavigate();

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate))
            });
        }
    }, [initData]);

    //사용자가 수정한 날짜
    const onChangeInput = (e) =>{
        
        //객체로 받음
        let name = e.target.name;
        let value = e.target.value;

        if(name === "createdDate" ){
            value = new Date(value);
        }
        setInput({
            ...input,
            [name] : value,
        });
    };

    //
    const onClickSubmitButton = () => {
        onSubmit(input);
    };

    //날짜형식은 입력불가해서 스트링으로 형변환
    const getStringedDate = (targetDate)=>{
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() +1;
        let date = targetDate.getDate();

        //월이 한자리면 9 이렇게 설정되어서 09로 나오도록 변경
        if(month < 10){
            month = `0${month}`;
        }
        if(date < 10){
            date = `0${date}`;
        }
        return `${year}-${month}-${date}`;
    };
    return (<div className="Editor">
                <section className="date_section">
                    <h4>오늘의 날짜</h4>
                    <input 
                        name = "createdDate"
                        onChange={onChangeInput} 
                        value={getStringedDate(input.createdDate)}
                        type="date" 
                    />
                </section>
                <section className="emotion_section">
                    <h4>오늘의 감정</h4>
                    <div className="emotion_list_wrapper">
                        {emotionList.map((item)=>(
                            <EmotionItem 
                                onClick={()=>
                                    onChangeInput({
                                        target : {
                                            name : "emotionId",
                                            value : item.emotionId
                                        }
                                    })
                                }
                                key={item.emotionId} 
                                {...item}
                                isSelected={item.emotionId === input.emotionId}
                            />
                        ))}
                    </div>
                </section>
                <section className="content_section">
                    <h4>오늘의 일기</h4>
                    <textarea 
                        name={"content"}
                        value={input.content}
                        onChange={onChangeInput}
                        placeholder="오늘은 어떠셨소?"/>
                </section>
                <section className="button_section">
                    <Button
                        onClick={()=>nav(-1)}
                        text={"취소하기"} />
                    <Button
                        onClick={onClickSubmitButton}
                        text={"작성완료"} 
                        type={"POSITIVE"} 
                    />
                </section>
            </div>
    );
};

export default Editor;