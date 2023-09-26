import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginFrom from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginFrom />;
  return (
    <ChatEngine
      height="100vh"
      projectID="dc224d1a-5804-4e14-8e98-3c935bea6dec"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
