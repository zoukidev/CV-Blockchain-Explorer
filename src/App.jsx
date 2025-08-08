import { useEffect, useState } from 'react'
import { getChain } from './services/block'

export function Badge({ children, size = 'sm', className = '' }) {
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

function App() {
  const [chain, setChain] = useState(null)

  useEffect(() => {
    getChain().then(setChain)
  }, [])

  return (
    <>
      <h1>CV-Blockchain Explorer</h1>
      <div className="">
        {chain?.map((block) => (
          <div key={block.id} className="border-b border-gray-300 py-2 mb-5">
            <div className="flex justify-between items-start">
              <div className="">
                <Badge size="sm" className='!bg-green-300'>{block.hash}</Badge>
                <Badge size="sm" className='!bg-green-300 !w-auto ml-2 mb-2'>Nonce: {block.nonce}</Badge>
                <Badge size="sm" className='!w-auto ml-2 mb-2'>{block.miner}</Badge>
                {block.previousHash != 0 && (
                  <Badge size="xs" className='!block mb-2'>{block.previousHash}</Badge>
                )}
              </div>
              <Badge size="sm">{block.timestamp}</Badge>
            </div>

            {/* <h2 className="text-xl font-semibold">{block.title}</h2> */}
            <p className="text-gray-600">{block.cvData}</p>
            {/* <pre className='overflow-auto'>{JSON.stringify(block, null, 2)}</pre> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
