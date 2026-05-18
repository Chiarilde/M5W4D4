import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "../../App";
import AllTheBooks from "../../components/allTheBooks/AllTheBooks";
import fantasy from "../../assets/fantasy.json";
import { BrowserRouter } from "react-router-dom";
import CommentArea from "../../components/comment/CommentArea";

test("Welcome component is rendered", () => {
    render(<App />);
    const welcome = screen.getByText(/Welcome/);
    expect(welcome).toBeInTheDocument();
});

test("Cards as many as books", () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook={""} />
        </BrowserRouter>,
    );
    const cards = screen.getAllByTestId("book-card");
    console.log(cards);
    expect(cards.length).toBe(fantasy.length);
});

test("CommentArea is rendered", () => {
    render(<CommentArea />);
    const commentSection = screen.getByTestId("comment-area");
    expect(commentSection).toBeInTheDocument();
});

test("filters books when typing in navbar search", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/cerca un libro/i);
    await userEvent.type(input, "wish");
    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBeGreaterThan(0);
});

test("clicking a book highlights it with red border", async () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook={""} />
        </BrowserRouter>,
    );

    const user = userEvent.setup();

    const card = screen.getAllByTestId("book-card")[0];

    await user.click(card);

    expect(card).toHaveStyle({
        border: "2px solid #fa1f02",
    });
});
