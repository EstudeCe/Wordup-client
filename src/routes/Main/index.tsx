import { Routes as RoutesDOM, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Listening from '../../pages/Listening';
import NotFound from '../../pages/NotFound';
import Gramar from '../../pages/Gramar';
import Dictionary from '../../pages/Dictionary';
import Pronunciation from '../../pages/Pronunciation';
import Sidebar from '../../components/Sidebar';
import { ContainerMain, ContentMain } from './styles';
import Header from '../../components/Header';

export default function Main() {
  return (
    <ContainerMain>
      <Sidebar />
      <ContentMain>
        <Header />
        <RoutesDOM>
          <Route path="/" element={<Home />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/gramar" element={<Gramar />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/pronunciation" element={<Pronunciation />} />
          <Route path="*" element={<NotFound />} />
        </RoutesDOM>
      </ContentMain>
    </ContainerMain>
  );
}
