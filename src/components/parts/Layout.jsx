import Navbar from "../Navbar";

export default function Layout({ className = '', children }) {
    return (
        <>
            <Navbar />
            <div className={`${className}`}>{children}</div>
        </>
    )
}