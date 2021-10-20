
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/login';
import Logout from './components/logout';
import Theme from './components/theme'
 

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  
  
  return (
	  
	<div className="navbar">
		<header className="navbar-header">
		
		  <Logout 
		  />
		</header>
		
		<ChatEngine
			height='100vh'
			userName='Phoebe'
			userSecret='123123'
			projectID='84b0d44a-2bc2-4b04-af76-ebe54c275829'
		/>
		    <Theme></Theme>
		</div>
  
	);
}


export default App;