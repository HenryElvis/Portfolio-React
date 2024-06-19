import { Global } from "../global";
import Presentation from "./presentation";
// import { GetData } from "../../App";

const Main = () => {

    // console.log("Data : " + GetData());

    console.log("global value : " + Global.GetInstance().GetValue());

    return (
        <main>
            <h1>Title</h1>
            <Presentation />
        </main>
    );
};

export default Main;