import { Link } from "react-router";

const classBtn = 'px-3 py-2 hover:bg-gray-700 shadow rounded';

export default function Navbar({}) {
    return (
        <nav className="w-full p-2 bg-gray-800 rounded shadow mb-5 text-white flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <Link to='/'><h1 className="mr-2">CV-Blockchain</h1></Link>
                <Link to='/' className={classBtn}>Explorer</Link>
                <Link to='/mining' className={classBtn}>Mining (PoW)</Link>
            </div>
            <Link to='/about' className={classBtn}>About</Link>
        </nav>
    )
}