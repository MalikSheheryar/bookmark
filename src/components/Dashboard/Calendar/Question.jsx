import QuestionItem from './QuetionItem'

const Question = () => {
    return (
        <div className='my-[30px] min-w-[1336px]' >
            <div className='flex justify-between px-[10px] py-[12px] text-[#494949] dark:text-white font-semibold border-y-[1px] border-[#D9DEE4]' >
                <div className='w-[291px] mr-[35px]' >Title</div>
                <div className='w-[74px] mx-[25px] ' >Question</div>
                <div className='w-[147px] mx-[25px] ' >Type - Subtype</div>
                <div className='w-[74px] mx-[25px] ' >Difficulty</div>
                <div className='w-[120px] mx-[25px] ' >Tags</div>
                <div className='w-[74px] mx-[25px] ' >Timing</div>
                <div className='w-[100px] mx-[25px] ' >Date</div>
                <div className='w-[160px] mx-[25px] ' >Actions</div>
            </div>

            <div className='relative' >

                <div className=' !max-h-[496px] overflow-y-auto' >
                    <QuestionItem reading={false} status="Correct" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Missed" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                    <QuestionItem reading={true} status="Skipped" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"></div>
            </div>

        </div>
    )
}

export default Question