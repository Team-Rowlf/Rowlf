import React from 'react';
import Footer from './components/general/Footer.jsx';
import RoutesComponent from './components/routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<>
			<div id="main">
				<RoutesComponent />
				<ToastContainer pauseOnFocusLoss={false} style={{textAlign: 'center'}} />
			</div>
			<Footer />
		</>
	);
}

export default App;
