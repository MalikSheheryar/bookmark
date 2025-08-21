import Image from 'next/image'

const IconButton = ({ source, title, count }) => {
    return (
        <div className={`flex cursor-pointer items-center justify-center gap-[10px] h-[54px] ${title == 'Create' && " min-w-[130px]"} border border-[#D6D6DB] p-[12px] rounded-[12px]`} >
            {
                source &&
                <Image src={source} alt='Icon' className='h-auto w-auto' />
            }
            <span className='text-[20px] font-semibold' >{title}</span>
            {
                count &&
                <span className='w-[30px] h-[30px] flex items-center text-[20px] font-semibold text-white justify-center  rounded-full bg-btn' >{count}</span>
            }
        </div>
    )
}

export default IconButton