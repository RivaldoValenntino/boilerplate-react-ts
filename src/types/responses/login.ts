export type User = {
  id: number;
  nama: string;
  id_role: number;
  hak_akses: number | null | string;
  id_installasi: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type LoginPost = {
  username: string;
  password: string;
};
