import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { About, Contact, HeroPage, PageNotFound, Projects } from './pages';
import { AppLayout } from './components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HeroPage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
