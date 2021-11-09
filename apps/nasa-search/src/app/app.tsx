import { Box } from '@nasa-search/orion';
import { HomeScreen } from '@nasa-search/feature-files';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Box
      bgImage="/assets/blobs-1.png"
      bgRepeat="no-repeat"
      bgPosition="left 20%"
    >
      <Box
        bgImage="/assets/blobs-2.png"
        bgRepeat="no-repeat"
        bgPosition="right top"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/files/:fileId" element={<div>FilesScreen</div>} />
        </Routes>
      </Box>
    </Box>
  );
}
