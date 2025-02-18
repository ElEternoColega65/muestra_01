import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm/LoginForm";

const user = userEvent.setup();

const mockLogin = vi.fn((user: {
  email: string;
  password: string;
}) => {
  return Promise.resolve(user);
})

describe("LoginForm component", () => {
  describe("Actions", () => {
    describe("Click login", () => {
      beforeEach(() => {
        mockLogin.mockClear();
      })

      it("With default values, them display errors", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        await user.click(btnRegister)
        
        const inputErrorMessageElements = await screen.getAllByTestId("input-error-message")

        expect(inputErrorMessageElements).toHaveLength(2);
        expect(inputErrorMessageElements[0].textContent).toEqual("El correo electrónico es requerido");
        expect(inputErrorMessageElements[1].textContent).toEqual("El campo es requerido");

        expect(mockLogin).not.toBeCalled()
      })

      it("With password valid equal to min length, them display only email error", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const passwordInputElement = formFieldElements[1].children.item(0) as Element;

        await user.type(passwordInputElement, "a")
        await user.click(btnRegister)
        
        const inputErrorMessageElements = await screen.getAllByTestId("input-error-message")

        expect(inputErrorMessageElements).toHaveLength(1);
        expect(inputErrorMessageElements[0].textContent).toEqual("El correo electrónico es requerido");

        expect(mockLogin).not.toBeCalled()
      })

      it("With email valid equal to min length, them display only password error", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const emailInputElement = formFieldElements[0].children.item(1) as Element;

        await user.type(emailInputElement, "a@me.co")

        await user.click(btnRegister)
        
        const inputErrorMessageElements = await screen.getAllByTestId("input-error-message")

        expect(inputErrorMessageElements).toHaveLength(1);
        expect(inputErrorMessageElements[0].textContent).toEqual("El campo es requerido");

        expect(mockLogin).not.toBeCalled()
      })

      it("With valid values, them not display errors", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const emailInputElement = formFieldElements[0].children.item(1) as Element;
        const passwordInputElement = formFieldElements[1].children.item(0) as Element;

        await user.type(emailInputElement, "a@me.co")
        await user.type(passwordInputElement, "a@me.co")

        await user.click(btnRegister)
        
        try {
          await screen.getAllByTestId("input-error-message")
        } catch (error) {
          expect(error).toBeDefined();
        }

        expect(mockLogin).toHaveBeenCalledTimes(1)
      })

    })

    describe("Click login with default values and revalidate onChange input values", () => {
      beforeEach(() => {
        mockLogin.mockClear();
      })

      it("Change email to valid value, them display email error", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const emailInputElement = formFieldElements[0].children.item(1) as Element;

        await user.click(btnRegister)
        
        await user.type(emailInputElement, "a@me.co")

        const inputErrorMessageElements = await screen.getAllByTestId("input-error-message")

        expect(inputErrorMessageElements).toHaveLength(1);
        expect(inputErrorMessageElements[0].textContent).toEqual("El campo es requerido");

        expect(mockLogin).not.toBeCalled()
      })

      it("Change password to valid value, them display password error", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const passwordInputElement = formFieldElements[1].children.item(0) as Element;

        await user.click(btnRegister)
        
        await user.type(passwordInputElement, "1")

        const inputErrorMessageElements = await screen.getAllByTestId("input-error-message")

        expect(inputErrorMessageElements).toHaveLength(1);
        expect(inputErrorMessageElements[0].textContent).toEqual("El correo electrónico es requerido");

        expect(mockLogin).not.toBeCalled()
      })

      it("Change all to valid value, them not display errors", async () => {
        render(<LoginForm handleLogin={mockLogin} />)
  
        const btnRegister = screen.getByRole("button");
        const formFieldElements = screen.getAllByTestId("form-field");
        const emailInputElement = formFieldElements[0].children.item(1) as Element;
        const passwordInputElement = formFieldElements[1].children.item(0) as Element;

        await user.click(btnRegister)
        await user.type(emailInputElement, "a@me.co")
        await user.type(passwordInputElement, "1")

        try {
          await screen.getAllByTestId("input-error-message")
        } catch (error) {
          expect(error).toBeDefined();
        }

        expect(mockLogin).not.toBeCalled();

        await user.click(btnRegister)
        expect(mockLogin).toHaveBeenCalledTimes(1);
      })
    })
  })
})