import TableItem from './TableItem'

const Table = () => {
    return (
        <div className='my-[30px] min-w-[1200px] ' >
            {/* table headings  */}
            <div className='grid grid-cols-8 px-[10px]  py-[12px] text-[#494949] dark:text-white font-semibold border-y-[1px] border-[#D9DEE4]' >
                <div className='col-span-1' >Date</div>
                <div className='col-span-1' >Type</div>
                <div className='col-span-1' >Section</div>
                <div className='col-span-1' >Correct</div>
                <div className='col-span-1' >Accuracy</div>
                <div className='col-span-1' >Time</div>
                <div className='col-span-1' >Status</div>
                <div className='col-span-1' >Actions</div>
            </div>

            {/* Table items  */}
            <div className='relative' >

                <div className=' !max-h-[496px] overflow-y-auto' >
                    <TableItem reading={false} />
                    <TableItem reading={true} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                    <TableItem reading={false} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 dark:from-gray-900 to-transparent pointer-events-none"></div>
            </div>


        </div>
    )
}

export default Table