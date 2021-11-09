import { HomeScreen } from '@nasa-search/feature-files';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/files/:fileId" element={<div>FilesScreen</div>} />
    </Routes>
  );
}
