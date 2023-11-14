
import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Appointments from './pages/Appointments';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐹 La mejor veterinaria del Peru 🐹'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Edu Teruya'
  };

  return (
    <>
      <Header company={company} />
      <main>
      <Appointments />
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;
