import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterPreview from "./views/CounterPreview";
import Home from "./views/Home";
import UserPreview from "./views/UserPreview";
import OurTeam from "./views/OurTeam";

function App() {

	return (
		<>
			<Router>
				<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/counter-preview" element={<CounterPreview />} />
						<Route path="/user-preview" element={<UserPreview />} />
						<Route path="/teams" element={<OurTeam />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
