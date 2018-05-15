module.exports = async (ctx) => {

  const { mysql } = require('../qcloud')

  await mysql('cCountInfo').select('*').then(res => {
    res[0].page_count = res[0].page_count + 1;
    ctx.state.data = res;
    var count = res[0].page_count;
    // mysql('cCountInfo').where('open_id', '=', 1).increment('page_count', 1)
    return;
  })

  await mysql('cCountInfo').where('open_id', '=', 1).increment('page_count', 1)



  // ctx.state.data = ctx.state.data + '2';



  return;

}