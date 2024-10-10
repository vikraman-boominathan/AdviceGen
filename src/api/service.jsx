export const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()
  // console.log(data)
  return data
}