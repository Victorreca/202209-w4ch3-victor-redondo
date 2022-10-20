import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it's rendered wit a text '1'", () => {
    test("Then it should show a button with '1' inside", () => {
      const keyProps = {
        text: "1",
        className: "",
      };

      render(
        <Key
          className={keyProps.className}
          text={keyProps.text}
          action={() => {}}
        />
      );

      const expectedTextButton = screen.queryByRole("button", {
        name: keyProps.text,
      });

      expect(expectedTextButton).toBeInTheDocument();
    });
  });
});
