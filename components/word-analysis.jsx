import {useState} from "react";
import Warning from "./Warning.jsx";

export default function WordAnalysis() {

    const [text, setText] = useState("");
    // const [warning, setWarning] = useState(false)
    const [warningText, setWarningText] = useState("")

    const countWords = () => {
        const words = text.split(" ");
        return words.length
    }
    console.log(countWords())

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
                    <div
                        className={"flex items-center justify-center h-1/2 w-full bg-pink-300 text-3xl font-semibold"}>Words
                    </div>
                    <div
                        className={"flex items-center justify-center h-1/2 w-full bg-gray-600 text-3xl font-semibold"}>Facebook
                    </div>
                </div>
                <div className={"w-1/3 flex flex-col"}>
                    <div
                        className={"flex items-center justify-center h-1/2 w-full bg-blue-400 text-3xl font-semibold"}>Char
                    </div>
                    <div
                        className={"flex items-center justify-center h-1/2 w-full bg-lime-500 text-3xl font-semibold"}>X
                    </div>
                </div>
            </div>
        </>
    )
}