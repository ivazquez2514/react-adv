import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
              <div className="main-layout">
                  <nav>
                      <img src={ logo } alt="React Logo" />
                      <ul>
                        {
                          routes.map(({path, to, name}) =>
                            <li key={path}>
                              <NavLink to={to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                            </li>
                          )
                        }
                      </ul>
                  </nav>


                  <Routes>
                    {
                      routes.map(({path, Component}) => <Route key="" path={path} element={ <Component /> } />)
                    }
                      
                    <Route path="/*" element={ <Navigate to="/lazy-1" replace /> } />
                  </Routes>

              </div>
          </BrowserRouter>
        </Suspense>
    )
}
