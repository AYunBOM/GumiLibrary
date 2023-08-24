export function fetchCoins() {
  return fetch(
    "https://api.odcloud.kr/api/15060300/v1/uddi:34068259-829f-4853-90ce-c880deeeae87?page=1&perPage=100&serviceKey=71GOjSa4Zr%2B2a%2BjoTh8cbs3QFsn1vP%2BUKzKAc0FkPy8%2BmTO%2B%2BVzBRWh%2BKsbxjD6ibIrwN4gE7pscjqlbhvE0SA%3D%3D"
  ).then((response) => response.json());
}
