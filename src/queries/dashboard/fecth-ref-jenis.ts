import { queryOptions } from "@tanstack/react-query";
import { api } from "../../libs/api";
import { useAuthStore } from "../../store/auth";
import type { RefJenisResponse } from "../../types/responses/ref-jenis-trans";

export const getRefJenisTrans = async (): Promise<RefJenisResponse> => {
  const token = useAuthStore.getState().token;
  const response = await api.get<RefJenisResponse>("/mobile/fetch-ref-jenis", {
    headers: {
      token: `${token}`,
    },
  });
  console.log(response);
  return response.data;
};

export const fetchRefJenisQuery = () =>
  queryOptions({
    queryKey: ["fetchRefJenisQuery"],
    queryFn: () => getRefJenisTrans(),
    retry: false,
  });
