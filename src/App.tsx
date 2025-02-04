import Header from './components/header/header.tsx'
import logob from './assets/spencer-horn-logo-black.png'
import Nav from './components/nav/nav.tsx'
import Experiences from './components/Examples/examples.tsx'
import './App.css'

export default function App() {
  return (
    <>
      <main>
      <Header image={{ src: logob, alt: 'Spencer Horn logo' }} />
      <Nav />   
        <Experiences />
      </main>
    </>
  )
}
