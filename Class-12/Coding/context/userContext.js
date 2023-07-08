import { createContext } from "react"


const userContext = createContext({
    user:{
        name: 'Dummyuser',
        email: "dummyEmail@gmail.com"
    }
})

export default userContext