import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { EmailIndex } from './pages/EmailIndex';
import { EmailContent } from './pages/EmailContent';
import { AppNav } from './cmps/AppNav';

export function App() {

    return (
        <Router>
            <section className='main-app'>
                <AppHeader />
                <main className='container'>
                    <AppNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/email" element={<EmailIndex />} />
                        <Route path="/email/:emailId" element={<EmailContent />} />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router >


    )
}
