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
          {projects.map((project, index) => {
            let prev = null,
              next = null;

            if (index !== 0) prev = projects[index - 1].path;
            if (index !== projects.length - 1) next = projects[index + 1].path;

            return (
              <Route
                key={index}
                path={project.path}
                element={
                  <ProjectTemplate
                    {...{
                      project,
                      paths: {
                        prev,
                        next,
                      },
                    }}
                  />
                }
              />
            );
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
