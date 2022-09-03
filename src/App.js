import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './routers/home/home'

const Navigation = () => {
  return (
    <div>
      <div>
        <h2>I am a navigation bar block bitch</h2>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return <div>I am shop page</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
