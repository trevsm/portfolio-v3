import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import {projects} from '../projects';
import ProjectTemplate from '../pages/ProjectTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects">
          {projects.map((project, index) => (
            <Route
              key={index}
              path={project.path}
              element={<ProjectTemplate {...project} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
