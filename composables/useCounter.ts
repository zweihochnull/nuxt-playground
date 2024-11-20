export const useCounter = () => {
  const count = ref(0)

  function increment() {
    count.value = count.value + 1
  }

  function decrement() {
    count.value = count.value - 1
  }

  return {
    count,
    increment,
    decrement
  }
}