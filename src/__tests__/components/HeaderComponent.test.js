import { render, screen } from "@testing-library/react";
import HeaderComponent from "../../components/common/HeaderComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
describe("Header component", () => {
  test("should load header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
  });
});
