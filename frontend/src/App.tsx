// import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import CreateUser from './components/CreateUser';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function NotFound() {
  return (
    <div>
      <p>Sorry - that page doesn't exist, try these:</p> 
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export function App() {
  
  return ( 
    <Router>
      <h1>MyFace</h1> 
      <Routes> 
        <Route path="/posts" 
          element={<PostsPage/>}>
        </Route> 
        <Route path="/users" 
          element={<UsersPage/>}>
        </Route> 
        <Route path="/users/create" 
          element={<CreateUser/>}>
        </Route>  
        <Route path="*" 
          element={<NotFound/>}>
        </Route>
      </Routes>
    </Router > 
      );
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
