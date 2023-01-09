export const getApiData = async (url: string, session: any) => {

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
  }).then((res) => res.json());

  return res;

}