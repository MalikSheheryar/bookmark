
const QuestionButton = ({ title, text, bgColor, border }) => {
    return (
        <div className={`flex text-[11px] font-semibold items-center dark:text-[${text}] text-[${text}] gap-[5px] border-[${border}] w-fit px-[9] py-[4px] rounded-[5.2px] border bg-[${bgColor}]`} >
            {title}
        </div>
    )
}

export default QuestionButton