import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Tasks from './Pages/Tasks';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='Projects' element={<Projects />} />
						<Route path='Tasks' element={<Tasks />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
