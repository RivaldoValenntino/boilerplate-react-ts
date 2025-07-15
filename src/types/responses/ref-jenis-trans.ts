export interface RefJenisResponse {
  code: number;
  message: string;
  data: RefJenis[];
}

export interface RefJenis {
  kode: string;
  nama: string;
}
