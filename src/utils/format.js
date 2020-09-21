export const formatMoney = (value) => {
  var newLimit = value + "";
  newLimit = newLimit.replace(/([0-9]{2})$/g, ",$1");
  if (newLimit.length > 6)
    newLimit = newLimit.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return "R$" + newLimit;
};
export const formatPhone = (phone) => {
  let number =
    `(${phone.substring(0, 2)}) ` +
    phone.substring(2, 7) +
    "-" +
    phone.substring(7, 11);

  return number;
};
