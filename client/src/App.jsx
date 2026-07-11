import AppRoutes from "./routes/AppRoutes";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <Toaster position="top-center" />
        <AppRoutes />
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;