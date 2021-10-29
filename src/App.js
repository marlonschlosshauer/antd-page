import { Layout } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import 'antd/dist/antd.css';
import './App.css';

function App() {
	return (
		<div>
			<Layout className="App">
				<Header />
				<Layout>
					<div className="content">
						<Content/>
					</div>
				</Layout>
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
