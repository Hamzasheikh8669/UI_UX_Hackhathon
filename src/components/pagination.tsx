"use client"

export default function Pagination({ 
  currentPage = 1, 
  totalPages = 3,
  onPageChange = (page: number) => console.log(page)
}) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-sm text-sm font-medium transition-colors
            ${
              currentPage === page
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7] text-gray-600 hover:bg-[#B88E2F]/10"
            }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="h-10 rounded-sm bg-[#F9F1E7] px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-[#B88E2F]/10"
      >
        Next
      </button>
    </div>
  )
}