const myarr = [1,2,3]
console.log(myarr)
myarr.push(4)
myarr[4] = 9
console.log(myarr)

const x = myarr.pop()
console.log(x)
console.log(myarr)
myarr.unshift(0)
console.log(myarr)


const user = {
    ram : "sita"
}
console.log(user.hasOwnProperty('ram'))
