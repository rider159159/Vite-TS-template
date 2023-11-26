export function voteRate (valid,total) {
  return (valid / total).toFixed(4) * 100 
}

// 計算千分位
export function numberWithCommas(value) {
  const stringValue = typeof value === 'number' ? value.toString() : value
  return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}