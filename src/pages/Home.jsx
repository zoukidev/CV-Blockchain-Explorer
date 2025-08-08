import { useEffect, useState } from 'react'
import { getChain } from '../services/block'
import Layout from '../components/parts/layout'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

export default function HomePage() {
  const [chain, setChain] = useState(null)

  useEffect(() => {
    getChain().then(setChain)
  }, [])

  return (
    <Layout>
      {chain?.map((block) => (
        <div key={block.id} className="border-b border-gray-300 py-2 mb-3 p-3 bg-white shadow rounded">
          <div className="flex justify-between items-start">
            <div className="">
              <Badge size="sm" className='!bg-green-300'>Hash: {block.hash}</Badge>
              <Badge size="sm" className='!w-auto ml-2 mb-2'>{block.miner}</Badge>
              {block.previousHash != 0 && (
                <Badge size="xs" className='!block mb-2 !w-auto'>Previous Hash: {block.previousHash}</Badge>
              )}
            </div>
            <Badge size="sm">{block.timestamp}</Badge>
          </div>

          {/* <h2 className="text-xl font-semibold">{block.title}</h2> */}
          <p className="text-gray-600">{block.cvData}</p>
          {/* <pre className='overflow-auto'>{JSON.stringify(block, null, 2)}</pre> */}
        </div>
      ))}
    </Layout>
  )
}