function giftedid(num = 4) {
  let result = "Gifted~OBYiCJgb#yFcLqufH39pJiHLzyVaIjbRCSzg_oATDBwY6dchclco";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 2; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
module.exports = {giftedid};
