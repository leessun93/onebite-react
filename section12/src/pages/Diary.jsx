import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Diary = () =>{
    const params = useParams();
    console.log(params);
    return (<div>
                <Header
                    title={"ymd"}
                    leftChild={<Button text={"< 뒤로가기"}/>}
                    rightChild={<Button text={"수정하기"}/>}
                />
            </div>);
};

export default Diary;

