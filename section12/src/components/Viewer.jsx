import "./Viewer.css";
import Header from "./Header";
import Button from "./Button";
const Diary = () => {
    const params = useParams();

    return(
        <div>
            <Header
                title={"tmd기록"}
            />
        </div>
    );
};