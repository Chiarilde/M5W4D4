import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav/MyNav";
import MyFooter from "./components/myFooter/MyFooter";
import Welcome from "./components/welcome/Welcome";
import AllTheBooks from "./components/allTheBooks/AllTheBooks";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import BookDetails from "./components/bookDetails/bookDetails";

const App = () => {
    const [searchBook, setSearchBook] = useState("");
    return (
        <BrowserRouter>
            <MyNav searchBook={searchBook} setSearchBook={setSearchBook} />
            <Container>
                <Welcome />
                <Routes>
                    <Route
                        path="/"
                        element={<AllTheBooks searchBook={searchBook} />}
                    />
                    <Route path="/details/:asin" element={<BookDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <MyFooter />
        </BrowserRouter>
    );
};

export default App;
