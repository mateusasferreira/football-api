export interface IRead<T> {
  find(item: Partial<T>): Promise<T[]>;
  findOne(item: string | Partial<T>): Promise<T | null>;
}