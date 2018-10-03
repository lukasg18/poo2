
export interface genericInterface<T> {
    
  readAll(): Promise<T>;

  readOne(id): Promise<T>;

  Create(body): Promise<T>;

  Drop(body): Promise<T>;

  Update(body): Promise<T>;

}
