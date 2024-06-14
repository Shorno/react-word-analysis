import {useState} from "react";
import Warning from "./Warning.jsx";

export default function WordAnalysis() {

    const [text, setText] = useState("");
    const [warningText, setWarningText] = useState("")

    const numberOfChar = text.length;
    const instaCharLeft = 280 - numberOfChar;
    const fbCharLeft = 2200 - numberOfChar;
    const numberOfWords =  text.split(" ").filter((word) => word !== "").length;

    const handleChange = (event) => {
        let newText = event.target.value;
        if (newText.includes("<script>")) {
            setWarningText("No script tag is allowed!")
            newText = newText.replace("<script>", "")
        }else if(text.includes("@")){
            setWarningText("No @ symbol is allowed!")
            newText = newText.replace("@", "");
        }else {
            setWarningText("")
        }

        setText(newText)
    }

    return (
        <>
            <div className={"flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-1/3"}>
                <h1 className={"text-6xl font-bold text-[#A7E6FF]"}>Word Analysis</h1>
            </div>
            <div className={"w-[60dvw] h-1/2 mx-auto -mt-20 flex "}>
                <textarea
                    value={text}
                    placeholder={"Enter your text"}
                    className={"w-full outline-none resize-none p-10 rounded-l-2xl"}
                    onChange={handleChange}
                    spellCheck={"false"}
                />
                { <Warning warningText={warningText} />}
                <div className={"w-1/3 flex flex-col"}>
                    <div className={"flex flex-col items-center justify-center h-1/2 w-full bg-pink-300 text-2xl font-semibold"}>
                        <h1 className={"text-6xl text-white"}>{numberOfWords}</h1>
                        <h1 className={"uppercase text-gray-500"}>Words</h1>
                    </div>
                    <div className={"flex flex-col items-center justify-center h-1/2 w-full bg-gray-600 text-2xl font-semibold"}>
                        <h1 className={`text-6xl text-white} ${fbCharLeft < 0 ? "text-red-500" : ""}`}>{fbCharLeft}</h1>
                        <h1 className={"uppercase text-gray-500"}>Facebook</h1>
                    </div>
                </div>
                <div className={"w-1/3 flex flex-col"}>
                    <div className={"flex flex-col items-center justify-center h-1/2 w-full bg-blue-400 text-2xl font-semibold"}>
                        <h1 className={"text-6xl text-white"}>{numberOfChar}</h1>
                        <h1 className={"uppercase text-gray-500"}>Char</h1>
                    </div>
                    <div
                        className={"flex flex-col items-center justify-center h-1/2 w-full bg-lime-500 text-2xl font-semibold"}>
                        <h1 className={`text-6xl text-white} ${instaCharLeft < 0 ? "text-red-500" : ""}`}>{instaCharLeft}</h1>
                        <h1 className={"uppercase text-gray-500"}>Instagram</h1>
                    </div>
                </div>
            </div>
        </>
    )
}