import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { expect } from "vitest";

import { SignUpForm } from "./SignUpForm"

const user = userEvent.setup();

const NAME_INPUT_TEST_ID = "user-name-input";
const EMAIL_INPUT_TEST_ID = "user-email-input";
const PASSWORD_INPUT_TEST_ID = "user-password-input";
const PASSWORD_REPEAT_INPUT_TEST_ID = "user-password-repeat-input";
const TERMS_AND_CONDITIONS_INPUT_TEST_ID = "user-terms-and-conditions-input";
const TERMS_AND_CONDITIONS_LABEL_INPUT_TEST_ID = "user-terms-and-conditions-label-input";


const NAME_ERROR_MESSAGE_TEST_ID = "name-error-message";
const EMAIL_ERROR_MESSAGE_TEST_ID = "email-error-message";
const PASSWORD_ERROR_MESSAGE_TEST_ID = "password-error-message";
const PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID = "password-repeat-error-message";
const TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID = "terms-and-conditions-error-message";


const verifyNotExistsElementByTestId = (testId: string) => {
  const element = screen.queryByTestId(testId);
  expect(element).toBeNull();
}

const setup = () => {

  const getBtnRegisterElement = () => screen.getByRole("button");
  
  const getNameInputElement = () => screen.getByTestId(NAME_INPUT_TEST_ID);
  const getEmailInputElement = () => screen.getByTestId(EMAIL_INPUT_TEST_ID);
  const getPasswordInputElement = () => screen.getByTestId(PASSWORD_INPUT_TEST_ID);
  const getPasswordRepeatInputElement = () => screen.getByTestId(PASSWORD_REPEAT_INPUT_TEST_ID);
  const getTermsAndConditionsInputElement = () => screen.getByTestId(TERMS_AND_CONDITIONS_INPUT_TEST_ID);
  const getTermsAndConditionsLabelInputElement = () => screen.getByTestId(TERMS_AND_CONDITIONS_LABEL_INPUT_TEST_ID);

  const getNameErrorMessageElement = () => screen.getByTestId(NAME_ERROR_MESSAGE_TEST_ID);
  const getEmailErrorMessageElement = () => screen.getByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
  const getPasswordErrorMessageElement = () => screen.getByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
  const getPasswordRepeatErrorMessageElement = () => screen.getByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
  const getTermsAndConditionsErrorMessageElement = () => screen.getByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);

  const getAllErrorMessageElements = () => {
    return {
      nameErrorMessageElement: getNameErrorMessageElement(),
      emailErrorMessageElement: getEmailErrorMessageElement(),
      passwordErrorMessageElement: getPasswordErrorMessageElement(),
      passwordRepeatErrorMessageElement: getPasswordRepeatErrorMessageElement(),
      termsAndConditionsErrorMessageElement: getTermsAndConditionsErrorMessageElement()
    } 
  }

  return {
    getBtnRegisterElement,

    getNameInputElement,
    getEmailInputElement,
    getPasswordInputElement,
    getPasswordRepeatInputElement,
    getTermsAndConditionsInputElement,
    getTermsAndConditionsLabelInputElement,

    getNameErrorMessageElement,
    getEmailErrorMessageElement,
    getPasswordErrorMessageElement,
    getPasswordRepeatErrorMessageElement,
    getTermsAndConditionsErrorMessageElement,
    getAllErrorMessageElements
  }
}

describe("SignUpForm", () => {
  const mockLogin = vi.fn((user: {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
  }) => {
    return Promise.resolve(user);
  })

  beforeEach(() => {
    mockLogin.mockClear();
  })

  describe("Actions", () => {

    describe("Simulate click create account", () => {

      beforeEach(() => {
        mockLogin.mockClear();
      })

      it("With default values, them display errors", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameErrorMessageElement, getEmailErrorMessageElement,
          getPasswordErrorMessageElement, getTermsAndConditionsErrorMessageElement } 
        = setup();

        await user.click(getBtnRegisterElement());

        // El password repeat al clickear en el boton de registro no genera error porque por defecto el password
        // y el password repeat son iguales, una cadena vacia
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido");
        expect(getEmailErrorMessageElement().textContent).toEqual("El correo electrónico es requerido");
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");
        expect(mockLogin).not.toBeCalled()
      });

      it("With all valid values, them verify mocklogin called one time with correcly data", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { 
          getBtnRegisterElement, getNameInputElement, getEmailInputElement, getPasswordInputElement, getPasswordRepeatInputElement, getTermsAndConditionsInputElement,
        } = setup();

        await user.type(getNameInputElement(), "1");
        await user.type(getEmailInputElement(), "example@msn.com");
        await user.type(getPasswordInputElement(), "abcDef#789lo");
        await user.type(getPasswordRepeatInputElement(), "abcDef#789lo");
        await user.click(getTermsAndConditionsInputElement());
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).toHaveBeenCalledTimes(1);
        expect(mockLogin.mock.calls[0][0]).toEqual({
          name: "1",
          email: "example@msn.com",
          password: "abcDef#789lo",
          passwordRepeat: "abcDef#789lo",
          termsAndConditions: true
        })
      })
      // START NAME TESTS

      it("With name value smaller length to min, them display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        
        const { getBtnRegisterElement, getNameInputElement, getNameErrorMessageElement } = setup();

        // I used clear and not type data inside input by the user event type not working with cero length characters.
        await user.clear(getNameInputElement());
        await user.click(getBtnRegisterElement());

        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido")
        expect(mockLogin).not.toBeCalled();
      })

      it("With name value bigger length to max, them display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        
        const { getBtnRegisterElement, getNameInputElement, getNameErrorMessageElement } = setup();
        const name = "qwertyuiopaqwertyuiopaqwertyuiopaqwertyui"

        await user.type(getNameInputElement(), name);
        await user.click(getBtnRegisterElement());

        expect(getNameErrorMessageElement().textContent).toEqual("El nombre maximo es de 40 caracteres");
        expect(mockLogin).not.toBeCalled();
      })

      it("With name value length equal to min, them not display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameInputElement } = setup();
        const name = "B"

        await user.type(getNameInputElement(), name);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With name value length equal to max, them not display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameInputElement } = setup();
        const name = "qwertyuiopaqwertyuiopaqwertyuiopaqwertyu"

        await user.type(getNameInputElement(), name);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With name value length in range min max, them not display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameInputElement } = setup();
        const name = "qwertyuiop1234567890qwe0"

        await user.type(getNameInputElement(), name);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With name value equal to two spaces, them display name error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameInputElement, getNameErrorMessageElement } = setup();
        const name = "  "

        await user.type(getNameInputElement(), name);
        await user.click(getBtnRegisterElement());

        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido")
        expect(mockLogin).not.toBeCalled();
      })
      // END NAME TESTS

     //  START EMAIL TESTS
      it("With default email value is required, them display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement, getEmailErrorMessageElement } = setup();

        await user.clear(getEmailInputElement());
        await user.click(getBtnRegisterElement());

        expect(getEmailErrorMessageElement().textContent).toEqual("El correo electrónico es requerido")
        expect(mockLogin).not.toBeCalled();
      })


      it("With email value invalid space, them display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement, getEmailErrorMessageElement } = setup();
        const emailValue = "w ertyuiop1234567890qrtayuiop1234567890rqwertyui6789kuioop12343567890@msn.com"

        await user.type(getEmailInputElement(), emailValue);
        await user.click(getBtnRegisterElement());

        expect(getEmailErrorMessageElement().textContent).toEqual("Introduce una dirección de correo válida")
        expect(mockLogin).not.toBeCalled();
      })

      it("With email invalid value with length equal to min, them display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement, getEmailErrorMessageElement } = setup();
        const emailValue = "1";

        await user.type(getEmailInputElement(), emailValue);
        await user.click(getBtnRegisterElement());

        expect(getEmailErrorMessageElement().textContent).toEqual("Introduce una dirección de correo válida")
        expect(mockLogin).not.toBeCalled();
      })

      it("With email value valid and length more 400, them not display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement } = setup();
        const emailValue = "qwertyuiop1234567890qwertyui90rqi90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1wertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790@msn.com";

        await user.type(getEmailInputElement(), emailValue);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With email value length in range min max, them not display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement } = setup();
        const emailValue = "qwertyuiop1234567890qwertyuiop1234567890rqwertyui66789kioop1234356790@msn.com"

        await user.type(getEmailInputElement(), emailValue);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With email value length in range min max, them not display email error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement } = setup();
        const emailValue = "qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790@msn.com"

        await user.type(getEmailInputElement(), emailValue);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      });

      // EMAIL EMAIL TESTS

      
      // START PASSWORD TESTS
      //  password value requisites oneLowerCase oneUpperCase oneNumber oneSymbol minLength 12 maxLength 60
      //  true => equal requisite complete.

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password all requisites completed length equal to minlength, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "1234asdf@A90";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password all requisites completed length equal to maxlength, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "abc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkia";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: false, minLength: true, maxLength: true}
        */
        it("With password requisites except symbol , them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "1234asdfA90h";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: false, symbol: true, minLength: true, maxLength: true}
        */
        it("With password requisites except digit, them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "abcABC@·#jkl";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: false, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password requisites except uppercase, them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "abcd@3tyuiop";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: false, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password requisites except lowercase, them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "ABCDFG@56789";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: false, maxLength: true}
        */
        it("With password requisites except minLength, them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "abc@345Hjki";

          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());

          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

      /* 
        value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: false}
      */
        it("With password requisites except maxLength, them display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
          const passwordValue = "abc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345HjkiaO";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
    
          expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
          it("With password equal before test not symbol, now added symbol completed all requisites, them not display password error", async () => {
            render(<SignUpForm handleRegister={mockLogin} />)

            const { getBtnRegisterElement, getPasswordInputElement } = setup();
            const passwordValue = "1234asdfA90h$";
      
            await user.type(getPasswordInputElement(), passwordValue);
            await user.click(getBtnRegisterElement());
            
            verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
            expect(mockLogin).not.toBeCalled();
          })
      
        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password equal before test not digit, now added digit completed all requisites, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "abcABC@·#jkl1";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
          
          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })
    
        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password equal before test not upperCase, now added upperCase completed all requisites, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "abcd@3tyuiopM";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
    
          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })
    
        /* 
          value { lowerCase: false, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password equal before test not lowerCase, now added lowerCase completed all requisites, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "ABCDFG@56789a";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
    
          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password equal before test not minLength, now added minLength completed all requisites, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "abc@345Hjkio";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
    
          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })

        /* 
          value { lowerCase: true, upperCase: true, digit: true, symbol: true, minLength: true, maxLength: true}
        */
        it("With password equal before test not maxLength, now added maxLength completed all requisites, them not display password error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement, getPasswordInputElement } = setup();
          const passwordValue = "abc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkia";
    
          await user.type(getPasswordInputElement(), passwordValue);
          await user.click(getBtnRegisterElement());
    
          verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
        })

      // End PASSWORD TESTS


      // START PASSWORD REPEAT TESTS
    
      it ("With password repeat and password with defaul value, them not display password repeat error", async () => {
          render(<SignUpForm handleRegister={mockLogin} />)

          const { getBtnRegisterElement } = setup();
    
          await user.click(getBtnRegisterElement());
    
          verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
          expect(mockLogin).not.toBeCalled();
      })


      it ("With password repeat update before click, them display password repeat error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getPasswordRepeatInputElement, getPasswordRepeatErrorMessageElement } = setup();
        const passwordRepeatValue = "1";
  
        await user.type(getPasswordRepeatInputElement(), passwordRepeatValue);
        await user.click(getBtnRegisterElement());
  
        expect(getPasswordRepeatErrorMessageElement().textContent).toEqual("Las contraseñas deben ser iguales");
        expect(mockLogin).not.toBeCalled();
      })

      it ("With password update before click, them display password repeat error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getPasswordInputElement, getPasswordRepeatErrorMessageElement } = setup();
        const passwordValue = "1";
  
        await user.type(getPasswordInputElement(), passwordValue);
        await user.click(getBtnRegisterElement());
  
        expect(getPasswordRepeatErrorMessageElement().textContent).toEqual("Las contraseñas deben ser iguales");
        expect(mockLogin).not.toBeCalled();
      })

      it ("With password and password repeat equal update before click, them not display password repeat error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getPasswordInputElement, getPasswordRepeatInputElement } = setup();
        const passwordValue = "1";
  
        await user.type(getPasswordInputElement(), passwordValue);
        await user.type(getPasswordRepeatInputElement(), passwordValue);
        await user.click(getBtnRegisterElement());
  
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it ("With password and password repeat not equal update before click, them display password repeat error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getPasswordInputElement, getPasswordRepeatInputElement, getPasswordRepeatErrorMessageElement } = setup();
        const passwordValue = "1";
        const passwordRepeatValue = "2";
  
        await user.type(getPasswordInputElement(), passwordValue);
        await user.type(getPasswordRepeatInputElement(), passwordRepeatValue);
        await user.click(getBtnRegisterElement());
  
        expect(getPasswordRepeatErrorMessageElement().textContent).toEqual("Las contraseñas deben ser iguales");
        expect(mockLogin).not.toBeCalled();
      })

      // END PASSWORD REPEAT TESTS

      // START TERMS AND CONDITIONS TESTS

      it("With terms and conditions by default, them display terms and conditions error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        
        const { getBtnRegisterElement, getTermsAndConditionsErrorMessageElement } = setup();

        await user.click(getBtnRegisterElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");
        expect(mockLogin).not.toBeCalled();
      })

      it("With click input checkbox to set to true value, them not display error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        
        const { getBtnRegisterElement, getTermsAndConditionsInputElement } = setup();

        await user.click(getTermsAndConditionsInputElement());
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("With click label checkbox to set to true value, them not display error", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getTermsAndConditionsLabelInputElement } = setup();
        const elementToClick = getTermsAndConditionsLabelInputElement().children.item(1) as Element;

        await user.click(elementToClick);
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("Click register, them verifies the onchange revalidate doing click input checkbox to set to true value and not display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getTermsAndConditionsInputElement, getTermsAndConditionsErrorMessageElement } = setup();

        await user.click(getBtnRegisterElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");

        await user.click(getTermsAndConditionsInputElement());

        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })


      it("Click register, them verifies the onchange revalidate doing click label checkbox to set to true value and not display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getTermsAndConditionsLabelInputElement, getTermsAndConditionsErrorMessageElement } = setup();
        const elementToClick = getTermsAndConditionsLabelInputElement().children.item(1) as Element;

        await user.click(getBtnRegisterElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");

        await user.click(elementToClick);

        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      })

      it("Click register, them verifies the onchange revalidate doing double click input checkbox to set to false value and display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getTermsAndConditionsInputElement, getTermsAndConditionsErrorMessageElement } = setup();

        await user.click(getBtnRegisterElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");

        await user.dblClick(getTermsAndConditionsInputElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");
        expect(mockLogin).not.toBeCalled();
      })


      it("Click register, them verifies the onchange revalidate doing double click label checkbox to set to false value and display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getTermsAndConditionsLabelInputElement, getTermsAndConditionsErrorMessageElement } = setup();
        const elementToClick = getTermsAndConditionsLabelInputElement().children.item(1) as Element;

        await user.click(getBtnRegisterElement());

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");

        await user.dblClick(elementToClick);

        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");
        expect(mockLogin).not.toBeCalled();
      })

      // // END TERMS AND CONDITIONS TESTS



    });

    describe("Click register with default values, them revalidate onchange fields", () => {
      
      it("Added all valid values and verify mocklogin is called one time with correcly data", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { 
          getBtnRegisterElement, getNameInputElement, getEmailInputElement, getPasswordInputElement, getPasswordRepeatInputElement, getTermsAndConditionsInputElement,
          getNameErrorMessageElement, getEmailErrorMessageElement, getPasswordErrorMessageElement, getTermsAndConditionsErrorMessageElement
        } = setup();

        await user.click(getBtnRegisterElement());

        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido");
        expect(getEmailErrorMessageElement().textContent).toEqual("El correo electrónico es requerido");
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");
        expect(getTermsAndConditionsErrorMessageElement().textContent).toEqual("Debes aceptar la política de privacidad");

        await user.type(getNameInputElement(), "1");
        await user.type(getEmailInputElement(), "example@msn.com");
        await user.type(getPasswordInputElement(), "abcDef#789lo");
        await user.type(getPasswordRepeatInputElement(), "abcDef#789lo");
        await user.click(getTermsAndConditionsInputElement());
        await user.click(getBtnRegisterElement());

        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
        verifyNotExistsElementByTestId(TERMS_AND_CONDITIONS_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).toHaveBeenCalledTimes(1);
        expect(mockLogin.mock.calls[0][0]).toEqual({
          name: "1",
          email: "example@msn.com",
          password: "abcDef#789lo",
          passwordRepeat: "abcDef#789lo",
          termsAndConditions: true
        })
      });

      it("Name field verify each case the errors display or not display", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getNameInputElement, getNameErrorMessageElement } = setup();
        const btnRegisterElement = getBtnRegisterElement();
        const nameInputElement = getNameInputElement();

        await user.click(btnRegisterElement);

        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido");

        // Equal to min length, them verify not display error to this field.
        await user.type(nameInputElement, "1");
        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);

        // Equal to max length, them verify not display error to this field.
        await user.clear(nameInputElement);
        await user.type(nameInputElement, "qwertyuiop1234567890qwertyuiop1234567890");
        verifyNotExistsElementByTestId(NAME_ERROR_MESSAGE_TEST_ID);

        // Bigger to max length, them verify display error to this field.
        // El user.type escribe texto directamente al final de input por eso solo añado
        // 1 caracter.
        await user.type(nameInputElement, "a");
        expect(getNameErrorMessageElement().textContent).toEqual("El nombre maximo es de 40 caracteres");
        
        // Smaller to min length, them verify display error to this field.
        await user.clear(nameInputElement);
        expect(getNameErrorMessageElement().textContent).toEqual("El nombre es requerido");


        //Bigger to max length, them verify display error to this field.
        // Aqui uso el clear para poner el valor anterior y añadirle el caracter (a) directo al input.
        await user.clear(nameInputElement);
        await user.type(nameInputElement, "qwertyuiop1234567890qwertyuiop1234567890a");
        expect(getNameErrorMessageElement().textContent).toEqual("El nombre maximo es de 40 caracteres");

        expect(mockLogin).not.toBeCalled();
      });

      it("Email field verify each case the errors display or not display", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getEmailInputElement, getEmailErrorMessageElement } = setup();
        const emailInputElement = getEmailInputElement();

        await user.click(getBtnRegisterElement());

        expect(getEmailErrorMessageElement().textContent).toEqual("El correo electrónico es requerido");

        // Bigger to min length, them verify not display error to this field.
        await user.type(emailInputElement, "s@ms.co");
        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);

        // Smaller to min length, them verify display error to this field
        await user.clear(emailInputElement);
        expect(getEmailErrorMessageElement().textContent).toEqual("El correo electrónico es requerido");

        // Invalid space, them verify display error to this field
        await user.clear(emailInputElement);
        await user.type(emailInputElement, "w ertyuiop1234567890qrtayuiop1234567890rqwertyui6789kuioop12343567890@msn.com");
        expect(getEmailErrorMessageElement().textContent).toEqual("Introduce una dirección de correo válida");

        // Length more 500 characters, them verify not display error to this field
        await user.clear(emailInputElement);
        await user.type(emailInputElement, "qwertyuiop1234567890qwertyui904356t6547u54uhytjuki876ythuyrgbehrqi90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1wertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790qwertyuiop1234567890qwertyui90rqwertyui66789kioop1234356790@msn.com");
        verifyNotExistsElementByTestId(EMAIL_ERROR_MESSAGE_TEST_ID);

        expect(mockLogin).not.toBeCalled();
      });

      it("Password field verify each case the errors display or not display", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)

        const { getBtnRegisterElement, getPasswordInputElement, getPasswordErrorMessageElement } = setup();
        const passwordInputElement = getPasswordInputElement();

        const passwordRequisitesCompletedEqualToMinLength = "1234asdf@A90";
        const passwordRequisitesCompletedEqualToMaxLength = "abc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkia";
        const passwordSmallerToMinLength = "1234asdf@A9";
        const passwordNotSymboldRequisite = "1234asdfA90h";
        const passwordNotNumberDigitdRequisite = "abcABC@·#jkl";
        const passwordNotUppercasedRequisite = "abcd@3tyuiop"
        const passwordNotLowercasedRequisite = "ABCDFG@56789"
        // const passwordNotMinLengthdRequisite = "abc@345Hjki"
        // const passwordNotMaxLengthdRequisite = "abc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345Hjkiaabc@345HjkiaO"

        await user.click(getBtnRegisterElement());

        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // All requisites completed equal to min length, them not display error to this field.
        await user.type(passwordInputElement, passwordRequisitesCompletedEqualToMinLength);
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        // All requisites completed equal to max length, them not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordRequisitesCompletedEqualToMaxLength);
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        // Smaller to the min length, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordSmallerToMinLength);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Bigger to the max length, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordRequisitesCompletedEqualToMaxLength + "A");
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Symbol requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotSymboldRequisite);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Number|Digit requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotNumberDigitdRequisite);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Uppercase requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotUppercasedRequisite);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Lowercase requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotLowercasedRequisite);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Minlength requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordSmallerToMinLength);
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");

        // Maxlength requisite not completed, them verify display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement,  passwordRequisitesCompletedEqualToMaxLength + "9");
        expect(getPasswordErrorMessageElement().textContent).toEqual("La contraseña no cumple con los requisitos");


        // Value equal before test not symbol, now added, them verify not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotSymboldRequisite + "ñ");
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);


        // Value equal before test not number|digit, now added, them verify not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotNumberDigitdRequisite + "9");
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        // Value equal before test not uppercase, now added, them verify not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotUppercasedRequisite + "Y");
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        // Value equal before test not lowercase, now added, them verify not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordNotLowercasedRequisite + "l");
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        // Value equal before test not min lenght, now added, them verify not display error to this field.
        await user.clear(passwordInputElement);
        await user.type(passwordInputElement, passwordSmallerToMinLength + "l");
        verifyNotExistsElementByTestId(PASSWORD_ERROR_MESSAGE_TEST_ID);

        expect(mockLogin).not.toBeCalled();
      });

      it ("Password repeat field, change password value, them not display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        const { getBtnRegisterElement, getPasswordInputElement} = setup();

        await user.click(getBtnRegisterElement());
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);

        await user.type(getPasswordInputElement(), "1");
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);

        expect(mockLogin).not.toBeCalled();
      });

      it ("Password repeat field, change password repeat value, them display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        const { getBtnRegisterElement, getPasswordRepeatInputElement, getPasswordRepeatErrorMessageElement} = setup();

        await user.click(getBtnRegisterElement());
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);

        await user.type(getPasswordRepeatInputElement(), "1");

        expect(getPasswordRepeatErrorMessageElement().textContent).toEqual("Las contraseñas deben ser iguales");
        expect(mockLogin).not.toBeCalled();
      });

      it ("Password repeat field, change password repeat value and password value in this order, them display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        const { getBtnRegisterElement, getPasswordInputElement, getPasswordRepeatInputElement, getPasswordRepeatErrorMessageElement} = setup();

        await user.click(getBtnRegisterElement());
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);

        await user.type(getPasswordRepeatInputElement(), "1");
        await user.type(getPasswordInputElement(), "1");

        expect(getPasswordRepeatErrorMessageElement().textContent).toEqual("Las contraseñas deben ser iguales");
        expect(mockLogin).not.toBeCalled();
      });

      it ("Password repeat field, change password value and password repeat value in this order, them not display error to this field", async () => {
        render(<SignUpForm handleRegister={mockLogin} />)
        const { getBtnRegisterElement, getPasswordInputElement, getPasswordRepeatInputElement} = setup();

        await user.click(getBtnRegisterElement());
        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);

        await user.type(getPasswordInputElement(), "1");
        await user.type(getPasswordRepeatInputElement(), "1");

        verifyNotExistsElementByTestId(PASSWORD_REPEAT_ERROR_MESSAGE_TEST_ID);
        expect(mockLogin).not.toBeCalled();
      });


    });
  });

});