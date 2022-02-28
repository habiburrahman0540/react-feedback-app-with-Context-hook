
import Header from './component/Header'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from "./component/FeedbackForm"
import About from './pages/About';
import {FeedbackProvider} from './Context/FeedbackContext';
function App(){
    return <FeedbackProvider>
                    <Router>
                        <Header />
                        <div className="container">
                            <Routes>
                                <Route path='/' element={<>
                                    <FeedbackForm/>
                                    <FeedbackStats/>
                                    <FeedbackList />
                                </>}/>
                                <Route path='/about' element={<About/>}/>
                            
                            </Routes>
                        </div>
                    </Router>
             </FeedbackProvider>
    
}
export default App;