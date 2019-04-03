function some() {
  return Promise.resolve(100)
}

function some2() {
  return Promise.resolve ( 200)
}

function some3() {
  return Promise.resolve ( 300)
}



//want 1
//必须主动调用才能够使用接下来的promise
let m = Monday(some(), some2())

m.next().then(function (data) {
  //100
})

m.next().then(function (data) {
  //200
})

//want 2
//direct 直接全部运行所有的值，当调用的时候返回已经被保存的值
let m2 = Monday.direct(some(), some2())
m2.next().then(function () {
  //100
})

m2.next().then(function () {
  //200
})

//want 3
let m3 = Monday.direct(some(), some2())
//允许push
m3.push(some3())

m3.go(2).then(function (data) {
  //300
})


//want 4
let m4 = Monday(some(), some2(),some3())
m4.result[0] //null
m4.go(3).then((data)=>{
  //data = 300

  m4.result[0] // 100
  m4.result[1] //200
  m4.result[2] //300

})



