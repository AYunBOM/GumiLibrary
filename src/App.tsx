import { useQuery } from "react-query";
import { fetchCoins } from "./api";

function App() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  console.log(data);
  return null;
}

export default App;
