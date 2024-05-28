
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/GlxTrvlProject/Containers/ScrollToTop';
import Home from './Components/GlxTrvlProject/Pages/Home/Home'
import Pricing from './Components/GlxTrvlProject/Pages/Pricing/Pricing'
import Training from './Components/GlxTrvlProject/Pages/Training/Training'
import ContactInformation from './Components/GlxTrvlProject/Pages/Contact/ContactInformation'

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop>
      <Routes>
         <Route path='/' exact element={<Home />} />
            <Route path='/glxtrvl/pricing' exact element={<Pricing />} />
            <Route path='/glxtrvl/training' exact element={<Training />} />
            <Route path='/glxtrvl/contact' exact element={<ContactInformation />} />
      </Routes>
      </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
