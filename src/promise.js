
const user = { email: 'test', password: '123' }
const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == user.email && password == user.password) {
                resolve(Math.floor(Math.random() * 100))
            }
            else {
                reject('403 Forbidden')
            }
        }, 1000)
    })

}


const getUserProfile = (token) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
        }, 1000)
    })

}


const getUserOrders = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user.orders)
        }, 1000)
    })
}


login('test', '123').then((token) => {
    console.log("token recivido")
    return getUserProfile(token)
}).then((user) => {
    console.log("user recivido")
    return getUserOrders(user.id)
}).then((orders) => {
    console.log("orders recividos")
    console.log(orders)
}).catch((error) => {
    console.error(error)
})
