import { render } from "@testing-library/react"
import Header from "../pages/Header/Header"
import { Provider } from "react-redux"
import store from "../redux/store"
import { StaticRouter } from "react-router-dom/server"


test("logo should be render on rendering", () => {
    /* eslint-disable */
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )

    const logo = header.getAllByTestId("logo")
    console.log(logo)
    expect(logo[0].src).toBe("http://localhost/img/food_club_logo.jpg")
})