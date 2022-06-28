import type { NextPage } from 'next'
import HomePage from '../src/Home/HomePage'
import Panel from '../src/Common/Panel'

const Home: NextPage = () => {
  return (
    <div className="mx-auto p-5 bg-gray-100">
      <Panel />
      <HomePage />
    </div>
  )
}

export default Home
