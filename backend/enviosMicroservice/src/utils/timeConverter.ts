/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const timeConverter: any = function () {
  const date = new Date()
  const formatDate = (date: any) => {
    const formatDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1).toString()).substr(-2)}-${('0' + (date.getDate()).toString()).substr(-2)}T${date.getHours()}:${('0' + (date.getMinutes() + 5).toString()).substr(-2)}:${('0' + (date.getSeconds()).toString()).substr(-2)}Z`
    return formatDate
  }
  return formatDate(date)
}

export default timeConverter
