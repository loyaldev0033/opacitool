import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageinationControls = ({ name, table }: any) => {
    return (
        <div className='flex flex-col md:flex-row justify-between mt-4 space-x-2 items-center'>
            <div className='flex items-center'>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={`text-sm px-3 py-1 border rounded-md ${
                        !table.getCanPreviousPage()
                            ? 'text-gray-400 border-gray-600'
                            : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'
                    }`}
                >
                    <ChevronLeft size={18} />
                </button>
                <span className='mx-2 text-sm font-medium text-gray-100'>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={`text-sm px-3 py-1 border rounded-md ${
                        !table.getCanNextPage()
                            ? 'text-gray-400 border-gray-600'
                            : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'
                    }`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <div className='text-sm font-medium text-gray-300 tracking-wider mt-5 md:mt-0'>
                Total {name}: {table.getRowCount()}
            </div>
        </div>
    );
};

export default PageinationControls;
