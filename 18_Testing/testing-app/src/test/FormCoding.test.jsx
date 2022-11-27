import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "../component/FormCoding";

describe("FormCodePage", () => {
  test("Renders FormPage labels", () => {
    render(<NameForm />);

    const nameLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");
    const noPhoneLabel = screen.getByLabelText("No Handphone:");

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(noPhoneLabel).toBeInTheDocument();
  });

  test("Success input nama", () => {
    render(<NameForm />);
    const inputElements = screen.getByTestId("nama");

    fireEvent.change(screen.getByLabelText("Nama Lengkap:"), { target: { value: "Rio Rasyid" } });

    expect(inputElements.value).toBe("Rio Rasyid");
  });

  test("Error input nama", () => {
    render(<NameForm />);
    const inputElements = screen.getByTestId("nama");
    fireEvent.change(inputElements, { target: { value: "Rio23" } });
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
  });

  test("Success Handle test", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Rio Rasyid" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "riorasyid23@gmail.com" },
    });

    fireEvent.click(screen.getByText("Submit"));

    const namaLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");

    expect(namaLabel).toHaveValue("");
    expect(emailLabel).toHaveValue("");
  });

  test("Error Handle test", async () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByText("Submit"));

    const namaLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");

    expect(namaLabel).toHaveValue("");
    expect(emailLabel).toHaveValue("");
  });
});
