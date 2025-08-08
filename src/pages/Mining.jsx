import { useEffect, useState } from 'react'
import { getChain, miningBlock } from '../services/block'
import Layout from '../components/parts/layout'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import Input from '../components/Input'

export default function MiningPage() {
  const [form, setForm] = useState({
    miner: '',
    data: '',
  })
  const [output, setOutput] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault()
    miningBlock(form)
      .then((data) => {
        setOutput(data)
      })
  }

  return (
    <Layout className='p-3 bg-white shadow rounded'>
      <div className="">
        <Input type="text" placeholder={'Miner name'} value={form.miner} onChange={(e) => setForm({ ...form, miner: e.target.value })} />
        <Input type="text" placeholder={'Data'} value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
        <button 
          onClick={onSubmit}
          className='px-8 py-1 m-1 rounded border shadow bg-green-400'>Mine!</button>
      </div>
      {output && (
        <div className="">
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </Layout>
  )
}