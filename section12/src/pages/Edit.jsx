import './Edit.css';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import { onUpdated } from 'vue';

const Edit = () =>{
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(()=>{

        const currentDiaryItem = data.find(
            (item)=>String(item.id) === String(params.id)
        );
        console.log(data);
        console.log(params.id);
        if(!currentDiaryItem){
            window.alert("존재하지않는 일기입니다.");
            nav("/", {replace:true});
        }

        return currentDiaryItem;
    },[params.id, data]);

    //삭제실수방지
    const onClickDelte=()=>{
        if(
        window.confirm("일기를 정말 삭제하시겠습니까?")
        ) {
            onDelete(params.id);
            nav('/',{replace:true});
        }
    };

    const onSubmit = (input) =>{
        if(
            window.confirm("일기를 정말 수정할까요?")
        ){
            onUpdate(params.id, input.createdDate.getTime(), input.emotion, input.content);
        }
        nav("/", {replace : true})
    };

    const getCurrentDiaryItem = ()=>{
    };

    const currentDiaryItem = getCurrentDiaryItem();
    console.log(currentDiaryItem);
    return (<div>
                <Header 
                    title={"일기 수정하기"}
                    leftChild={<Button
                                    onClick={()=>nav(-1)} 
                                    text={"< 뒤로 가기"}
                                />}
                    rightChild={<Button
                                    onClick={onClickDelte} 
                                    text={"삭제하기"} 
                                    type={"NEGATIVE"}
                                />}
                />
                <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
            </div>);

};

export default Edit;