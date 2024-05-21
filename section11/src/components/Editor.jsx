import "./Editor.css";
import {useState, useRef, useContext} from "react";
import { TodoDispatchContext } from "../App";

const Editor = () =>{

    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };
    
    const onKeyUp = (e) =>{
        console.log(e.keyCode);
        if(e.keyCode === 13 ){
            onSubmit();
        }
    };

    const onSubmit = () =>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return  <div className="Editor">
                <input placeholder="새로운 Todo..."
                    ref={contentRef}
                    value={content}
                    onKeyDown={onKeyUp}
                    onChange={onChangeContent}
                ></input>
                <button onClick={onSubmit}>추가</button>
            </div>;
};

export default Editor;