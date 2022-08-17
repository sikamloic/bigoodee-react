import './App.css';
import { Routes, Route} from "react-router-dom";
import Accueil from './pages/cliente/accueil';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import ForgotPassword from './pages/forgot-password';
import InfosCoiffeuse from './pages/cliente/infos-coiffeuse';
import Resultats from './pages/cliente/resultats';
import Profil from './pages/cliente/profil';
import Historique from './pages/cliente/historique';
import Inviter from './pages/cliente/inviter';
import Reservation from './pages/cliente/reservation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NousContacter from './pages/cliente/nous-contacter';
import Parametres from './pages/cliente/parametres';
import Messages from './pages/cliente/messages';
import Discussions from './components/discussions';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3e79",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen">
        <Routes>
          <Route path="/"  element={<Accueil />} />
          <Route path="inscription"  element={<Inscription />} />
          <Route path="connexion"  element={<Connexion />} />
          <Route path="reinitialiser"  element={<ForgotPassword />} />
          <Route path="infos-coiffeuse"  element={<InfosCoiffeuse />} />
          <Route path="resultats"  element={<Resultats />} />
          <Route path="cliente/profil"  element={<Profil />} />
          <Route path="cliente/historique"  element={<Historique />} />
          <Route path="cliente/inviter-des-amis"  element={<Inviter />} />
          <Route path="cliente/nous-contacter"  element={<NousContacter />} />
          <Route path="cliente/parametres"  element={<Parametres />} />
          <Route path="cliente/reservation"  element={<Reservation />} />
          <Route path="cliente/messages"  element={<Messages />} />
          <Route path="discussions"  element={<Discussions />} />
        </Routes>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
