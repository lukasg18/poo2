export interface genericInterface<T> {
  
  readAll();

  readOne(id);

  Create(body);

  Drop(body);

  Update(body);

}
