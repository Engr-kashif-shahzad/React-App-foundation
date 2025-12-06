import './App.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {  ConfigProvider } from 'antd'
import Routes from './pages/Routes'
import ScreenLodder from './components/Misc/ScreenLodder'
import { useAuth } from './context/Auth'
function App() {
const {isAppLoading} = useAuth()
  return (
    <>
    <ConfigProvider theme={{token:{colorPrimary:"#1d3557"},components:{Button: { controlOutlineWidth:0}}}}>
    {!isAppLoading
    ?<Routes />
    :<ScreenLodder />
    }
    
    </ConfigProvider>
    </>
  )
}

export default App
