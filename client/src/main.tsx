import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
  <>
  <RecoilRoot>
    <App />
    <Toaster/>
  </RecoilRoot>
  </>

)
