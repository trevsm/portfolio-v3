import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from '../pages/Home';
import {projects} from '../projects';
import ProjectTemplate from '../pages/ProjectTemplate';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          {projects.map((project, index) => (
            <Route
              key={index}
              path={project.path}
              element={<ProjectTemplate {...project} />}
            />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
