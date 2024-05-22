import { GetData } from "../../App";
import Presentation from "./presentation";

const Main = () => {

    console.log("Data : " + GetData());

    return (
        <main>
            <h1>Title</h1>
            <Presentation />
        </main>
    );
};

export default Main;