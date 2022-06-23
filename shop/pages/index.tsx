import type { NextPage } from 'next'
import HomePage from '../src/Home/HomePage'
import Panel from '../src/Common/Panel'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-5">
      <Panel />
      <HomePage />
    </div>
  )
}

export default Home
