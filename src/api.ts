//일반자료 316개가 최대
//어린이자료 2627개가 최대
//참고자료 147개가 최대

export function fetchAdult() {
  return fetch(
    "https://api.odcloud.kr/api/3068857/v1/uddi:86a3a3bc-1a47-4ec7-aff3-b2ac90653b14?page=1&perPage=316&serviceKey=71GOjSa4Zr%2B2a%2BjoTh8cbs3QFsn1vP%2BUKzKAc0FkPy8%2BmTO%2B%2BVzBRWh%2BKsbxjD6ibIrwN4gE7pscjqlbhvE0SA%3D%3D"
  ).then((response) => response.json());
}

export function fetchChild() {
  return fetch(
    "https://api.odcloud.kr/api/3068857/v1/uddi:f7dc4041-8c9f-4f6b-b0b0-c85acbc983d7?page=1&perPage=2627&serviceKey=71GOjSa4Zr%2B2a%2BjoTh8cbs3QFsn1vP%2BUKzKAc0FkPy8%2BmTO%2B%2BVzBRWh%2BKsbxjD6ibIrwN4gE7pscjqlbhvE0SA%3D%3D"
  ).then((response) => response.json());
}

export function fetchReference() {
  return fetch(
    "https://api.odcloud.kr/api/3068857/v1/uddi:23f91717-9ba7-47f5-bae9-dc4a0382424e?page=1&perPage=147&serviceKey=71GOjSa4Zr%2B2a%2BjoTh8cbs3QFsn1vP%2BUKzKAc0FkPy8%2BmTO%2B%2BVzBRWh%2BKsbxjD6ibIrwN4gE7pscjqlbhvE0SA%3D%3D"
  ).then((response) => response.json());
}
