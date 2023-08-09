import { fireEvent, render, waitFor } from "@testing-library/react"
import Home from "../components/Home"
import { Provider } from "react-redux"
import store from "../redux/store"
import { StaticRouter } from "react-router-dom/server"


test("body should be there", () => {
    /* eslint-disable */
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </StaticRouter>
    )
    console.log(body)
})

// search-btn
// data-list

test("data -list should be there", () => {
    /* eslint-disable */
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </StaticRouter>
    )
    // console.log(body)
    waitFor(() => expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId("data-list");
    expect(resList.children.length).toBe(1);

})

// input-data
test("data -list should be there", () => {
    /* eslint-disable */
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </StaticRouter>
    )
    // console.log(body)
    waitFor(() => expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("input-data");
    fireEvent.change(input, {
        target: {
            value: "food",
        },
    })
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)

    const resList = body.getByTestId("data-list");

    expect(resList.children.length).toBe(1);

})