import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Search from "../component/Search";

jest.mock("axios");

test("Success Fetching API", async () => {
  const stories = [
    { objectID: 1, title: "Hello" },
    { objectID: 2, title: "World" },
  ];
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

  render(<Search />);
  userEvent.click(screen.getByRole("button"));

  const items = await screen.findAllByRole("listitem");
  expect(items).toHaveLength(2);
});

test("Failed Fetching API", async () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
  render(<Search />);
  userEvent.click(screen.getByRole("button"));
  const message = await screen.findByText(/ada yang error .../i);
  expect(message).toBeInTheDocument();
});
