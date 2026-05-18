import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import { Context } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNav from "./components/myNav/MyNav";
import MyFooter from "./components/myFooter/MyFooter";
import Welcome from "./components/welcome/Welcome";
import AllTheBooks from "./components/allTheBooks/AllTheBooks";
import NotFound from "./components/notFound/NotFound";
import BookDetails from "./components/bookDetails/bookDetails";
import ContextProvider from "./context/ContextProvider";

const AppContent = () => {
    const [searchBook, setSearchBook] = useState("");
    const { theme } = useContext(Context);

    return (
        <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
            <BrowserRouter>
                <MyNav searchBook={searchBook} setSearchBook={setSearchBook} />

                <Container>
                    <Welcome />

                    <Routes>
                        <Route
                            path="/"
                            element={<AllTheBooks searchBook={searchBook} />}
                        />
                        <Route
                            path="/details/:asin"
                            element={<BookDetails />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>

                <MyFooter />
            </BrowserRouter>
        </div>
    );
};

const App = () => {
    return (
        <ContextProvider>
            <AppContent />
        </ContextProvider>
    );
};

export default App;
