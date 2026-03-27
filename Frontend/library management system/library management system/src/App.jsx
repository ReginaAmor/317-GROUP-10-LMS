import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LibraryHomePage from "./components/LibraryHomePage";
import LibraryLoginPage from "./components/LibraryLoginPage";
import LibrarySignUpPage from "./components/LibrarySignUpPage";
import LibraryCategoriesPage from "./components/LibraryCategoriesPage";
import PlaceholderPage from "./components/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryHomePage />} />
        <Route path="/home" element={<LibraryHomePage />} />
        <Route path="/login" element={<LibraryLoginPage />} />
        <Route path="/signup" element={<LibrarySignUpPage />} />
        <Route path="/categories" element={<LibraryCategoriesPage />} />
        <Route
          path="/dashboard"
          element={<PlaceholderPage title="Dashboard Page" />}
        />
        <Route
          path="/my-books"
          element={<PlaceholderPage title="My Books Page" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}