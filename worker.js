//   let isActive = true;
//   document.addEventListener('visibilitychange', function(event) {
//       console.log(document.hidden, document.visibilityState)
//       isActive =!document.hidden;
//   })

//   const worker = new Worker('worker.js')
//   worker.postMessage(data)
//   worker.onmessage = function (ext) {
//     data = ext.data
//     step += 1
//     chart.update()
//   }


onmessage = function (evt) {
  let data = evt.data
  setInterval(() => {
    data = data.slice(1)
    data.push({
      id: `${data[data.length - 1].id.substr(0, 5)}${data[data.length - 1].id.substr(5) + 1}`,
      MTTR: Math.random() * 20 + 10,
      MTTA: Math.random() * 20 + 10
    })
    postMessage(data)
  }, 1000)
}
