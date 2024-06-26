export default function Warning({warningText}){
    return (
        <>
            <h1 className={"text-red-500 font-semibold absolute top-[75%] right-[65%]"}>
                <span className={"uppercase"}>{warningText}</span>
            </h1>
        </>
    )
}