module.exports = async (ctx,next) => {

  const { mysql } = require('../qcloud')

  ctx.state.data = ctx.req
  // var data = ctx.URL.search.split('?')[1].split('&')
  // var paramesdata = {};
  // for (var i = 0; i < data.length; i++){
  //   var tmpdata = data[i].split('=');
  //   var setdata = {tmpdata[0]:tmpdata[1]}

  // }
  var url = decodeURIComponent(ctx.URL.search);

  url = url.split('?')[1];
  var group = url.split('&');
  var res = {}
  for (var i = 0; i < group.length; i++) {
    start = group[i].indexOf('=');
    if (start != -1) {
      name = group[i].slice(0, start)
      value = group[i].slice(start + 1, group[i].length)
      res[name] = value;
    } else {
      res[group[i]] = undefined;
    }
  }

  await mysql('commant').insert([{ userid: 1, username: res.nickname, nickname: res.nickname, usermoto: 4, commant: res.commant, ding: 6, cai: 7, userurl: res.userurl, usertmp2: 9 }])

  // knex('coords').insert([{ x: 20 }, { y: 30 }, { x: 10, y: 20 }])
  // Outputs:
  // insert into `coords`(`x`, `y`) values (20, DEFAULT), (DEFAULT, 30), (10, 20)

}


