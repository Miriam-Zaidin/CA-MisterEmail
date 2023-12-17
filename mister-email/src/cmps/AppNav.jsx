import { Link, NavLink } from "react-router-dom";

export function AppNav() {
    return (
        <header className="app-header">
            <section className="container">
                <h1>Robots</h1>

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/robot">Robots</NavLink>
                </nav>
            </section>
        </header>
    )
}