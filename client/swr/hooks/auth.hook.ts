import useSWR from "swr"
import fetcher from "../fetcher"

export default function useAuth() {
    const { data, error } = useSWR('https://server.jinhy.uk/auth/token', fetcher({
      config: {
        withCredentials: true,
      }
    }));

    return {
      data,
      isLoading: !error && !data,
      error,
    };
}