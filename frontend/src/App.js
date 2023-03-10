import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './components/ProductScreen';
function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Al Mayas</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">
              Al-Mayas Copyright 2022.  All rights reserved
            </footer>
        </div>
    </BrowserRouter>        
  );
}

export default App;
