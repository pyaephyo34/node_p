// setTimeout(()=>{
//     console.log('full time out')

// },2000)

// const names = ['andrew ','jen','jess']
// const shortname = names.filter((name)=> name.length <= 4)

// console.log(shortname)

const add = (x,y,callback)=>{
    setTimeout(() => {
        callback(x+y)
    }, 2000);
}

add(5,6,(sum)=>{
    console.log(sum)
})