import './globals.css';
import { Provider } from 'jotai';
import Header from './components/Header';
import MenuButton from './components/MenuButton';
import Firstload from './components/Firstload';
import Preload from './components/Preload';
import SidebarOverlay from './components/SidebarOverlay';
import Sidebar from './components/Sidebar';
import ScrollSmooth from './components/ScrollSmooth';
import Cursor from './components/Cursor';

export const metadata = {
  title: "Farkhan's Portfolio",
  description: 'Portfolio of Farkhan, a Frontend Web Developer',
  keywords:
    "Farkhan's Portfolio, Farkhan, Portfolio, Web Developer, Frontend Developer, Farkhan Muhammad, FarkhanMhd, Farkhan Muhammad Portfolio, Farkhan Portfolio, FarkhanMhd Portfolio, Farkhan Muhammad Frontend Web Developer, Farkhan Frontend Web Developer, FarkhanMhd Frontend Web Developer, Farkhan Frontend Web Developer Portfolio, FarkhanMhd Frontend Web Developer Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="hide-scrollbar cursor-none overflow-hidden bg-white font-medium uppercase antialiased">
        <Provider>
          <ScrollSmooth>
            <Cursor />
            {/* <Firstload />
            <Preload /> */}
            <Header />
            <MenuButton />
            <SidebarOverlay />
            <Sidebar />
            {children}
          </ScrollSmooth>
        </Provider>
      </body>
    </html>
  );
}
