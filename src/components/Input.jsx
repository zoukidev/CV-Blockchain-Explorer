export default function Input({ type, value, placeholder, onChange, className = '' }) {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={`px-2 py-1 m-1 rounded border shadow ${className}`} />
  )
}