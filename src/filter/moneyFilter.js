// 过滤器，来处理金钱格式
export function toMoney(money = 0){
  let newMoney = money;
  if (newMoney) {
    newMoney = newMoney.toFixed(2);
  }else{
    newMoney = 0;
    newMoney = newMoney.toFixed(2);
  }
  return money.toFixed(2);
}