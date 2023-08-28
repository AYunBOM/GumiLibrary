//data 316개가 최대

export function fetchCoins() {
  return fetch(
    "https://api.odcloud.kr/api/3068857/v1/uddi:86a3a3bc-1a47-4ec7-aff3-b2ac90653b14?page=1&perPage=10&serviceKey=71GOjSa4Zr%2B2a%2BjoTh8cbs3QFsn1vP%2BUKzKAc0FkPy8%2BmTO%2B%2BVzBRWh%2BKsbxjD6ibIrwN4gE7pscjqlbhvE0SA%3D%3D"
  ).then((response) => response.json());
}
