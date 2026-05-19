import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import App from "../../App";
import fantasy from "../../assets/fantasy.json";
import AllTheBooks from "../../components/allTheBooks/AllTheBooks";
import CommentArea from "../../components/comment/CommentArea";

//TEST 1
test("Welcome component is rendered", () => {
    render(<App />);
    const welcome = screen.getByText(/Welcome/);
    expect(welcome).toBeInTheDocument();
});
//TEST 2
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
//TEST 3
test("CommentArea component is rendered", () => {
    render(<CommentArea />);
    const commentSection = screen.getByTestId("comment-area");
    expect(commentSection).toBeInTheDocument();
});
//TEST 4
test("filters books when typing in the navbar search", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/cerca un libro/i);
    await userEvent.type(input, "wish");
    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBeGreaterThan(0);
});
//TEST 5
test("clicking a book highlights it with a red border", async () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook={""} />
        </BrowserRouter>,
    );
    const user = userEvent.setup();
    const card = screen.getAllByTestId("book-card")[0];
    await user.click(card);
    expect(card).toHaveClass("selected-card");
});
//TEST 6
test("clicking a second book removes selection from the first one", async () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook="" />
        </BrowserRouter>,
    );
    const user = userEvent.setup();
    const cards = screen.getAllByTestId("book-card");
    const firstCard = cards[0];
    const secondCard = cards[1];
    await user.click(firstCard);
    expect(firstCard).toHaveClass("selected-card");
    await user.click(secondCard);
    expect(secondCard).toHaveClass("selected-card");
    expect(firstCard).not.toHaveClass("selected-card");
});
//TEST 7
test("no comments are shown at the beginning", () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook="" />
        </BrowserRouter>,
    );
    const comments = screen.queryAllByTestId("single-comment");
    expect(comments.length).toBe(0);
});
//TEST 8 => se il primo libro non ha commenti fallisce
test("comments are loaded after clicking a book", async () => {
    render(
        <BrowserRouter>
            <AllTheBooks searchBook="" />
        </BrowserRouter>,
    );
    const user = userEvent.setup();
    const cards = screen.getAllByTestId("book-card");
    await user.click(cards[0]);
    const comments = await screen.findAllByTestId("single-comment");
    expect(comments.length).toBeGreaterThan(0);
});
//TEST 9 => il test inserisce una recensione e poi testa se c'è
test("comments are loaded after clicking a book", async () => {
    globalThis.fetch = vi.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        _id: "6a0cb35474041f00150bfbb3",
                        comment: "Bel libro, adesso lo leggo",
                        rate: 3,
                        elementId: "0316438960",
                        author: "chiara.nardelli+epicode@outlook.com",
                        createdAt: "2026-05-19T19:00:36.05Z",
                        updatedAt: "2026-05-19T19:00:36.095Z",
                        __v: 0,
                    },
                ]),
        }),
    );
    render(
        <BrowserRouter>
            <AllTheBooks searchBook="" />
        </BrowserRouter>,
    );
    const user = userEvent.setup();
    const cards = screen.getAllByTestId("book-card");
    await user.click(cards[0]);
    const comments = await screen.findAllByTestId("single-comment");
    expect(comments.length).toBe(1);
    expect(comments[0]).toHaveTextContent("Bel libro");
    vi.restoreAllMocks();
});
