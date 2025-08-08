export default function Badge({ children, size = 'sm', className = '' }) {
  const sizes = {
    'xs': 'text-xs py-1 px-2',
    'sm': 'text-sm py-1.5 px-3',
    'md': 'text-md py-2 px-4',
    'lg': 'text-lg py-2.5 px-5',
  }
  return (
    <span className={`bg-gray-200 inline-block rounded ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}