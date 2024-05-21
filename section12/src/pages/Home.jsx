import { useSearchParams } from "react-router-dom";
const Home = () =>{
    const [params, setparams] = useSearchParams();
    return <div>홈</div>;
};

export default Home;

