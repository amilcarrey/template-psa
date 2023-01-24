export const Button = ({ className, type, children, ...buttonProps }: any) => {
   return (
      <button
         {...buttonProps}
         type={type}
         className={`${className} bg-base-100 text-primary hover:bg-primary group flex items-center justify-center border-transparent px-4 py-3 text-sm font-[500] uppercase outline-none transition-all duration-200 hover:text-white active:scale-95 ${className} disabled:text-base-200 disabled:pointer-events-none disabled:saturate-0`}
      >
         {children}
      </button>
   )
}
