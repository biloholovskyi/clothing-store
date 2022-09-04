import { Route, Routes } from 'react-router-dom'

import Home from './routers/home/home'
import Navigation from './routers/navigation/navigation.component'

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
