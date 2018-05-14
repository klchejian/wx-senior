module.exports = async (ctx) => {
  // ctx.state.data = {
  //   msg: 'HEllo Worldcj'
  // }

  // const { mysql } = require('../qcloud')
  // await mysql('cSessionInfo').select('*').then(res => {
  //   ctx.state.data = "nihao" + res
  // })

  const { mysql } = require('../qcloud')

  // var sqlres = {};

 

  // ctx.state.data = ctx.state.data + '3';

    await mysql('commant').select('*').then(res => {
      // sqlres = res;
      ctx.state.data = res;
      return;
      // ctx.state.data = res
    })
  
  

  // ctx.state.data = ctx.state.data + '2';

 
  
  return;

}


// module.exports = async (ctx, next) => {

//   const { mysql } = require('../qcloud')

//   await mysql('wumai').select('*').then(res => {

//     ctx.state.data = "nihao" + res

//   })

// }