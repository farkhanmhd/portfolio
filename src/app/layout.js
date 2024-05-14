import './globals.css';
import { Provider } from 'jotai';
import Header from './components/Header';
import MenuButton from './components/MenuButton';
import Firstload from './components/Firstload';
import Preload from './components/Preload';

export const metadata = {
  title: "Farkhan's Portfolio",
  description: 'Portfolio of Farkhan, a Frontend Web Developer',
  keywords:
    "Farkhan's Portfolio, Farkhan, Portfolio, Web Developer, Frontend Developer, Farkhan Muhammad, FarkhanMhd, Farkhan Muhammad Portfolio, Farkhan Portfolio, FarkhanMhd Portfolio, Farkhan Muhammad Frontend Web Developer, Farkhan Frontend Web Developer, FarkhanMhd Frontend Web Developer, Farkhan Frontend Web Developer Portfolio, FarkhanMhd Frontend Web Developer Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="hide-scroll overflow-x-hidden bg-white font-medium uppercase antialiased">
        <Provider>
          <Firstload />
          <Preload />
          <Header />
          <MenuButton />
          {children}
        </Provider>
      </body>
    </html>
  );
}
