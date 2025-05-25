// Start: types from kysely
type Generated<S> = ColumnType<S, S | undefined, S>;
type ColumnType<
  SelectType,
  InsertType = SelectType,
  UpdateType = SelectType
> = {
  readonly __select__: SelectType;
  readonly __insert__: InsertType;
  readonly __update__: UpdateType;
};
type DrainOuterGeneric<T> = [T] extends [unknown] ? T : never;
type IfNotNever<T, K> = T extends never ? never : K;
type SelectType<T> = T extends ColumnType<infer S, any, any> ? S : T;
type NonNeverSelectKeys<R> = {
  [K in keyof R]: IfNotNever<SelectType<R[K]>, K>;
}[keyof R];
type Selectable<R> = DrainOuterGeneric<{
  [K in NonNeverSelectKeys<R>]: SelectType<R[K]>;
}>;
// End: types from kysely

interface BookTable {
  id: Generated<number>;
  isbn: string;
  next_book_in_series_id: number | null;
  previous_book_in_series_id: number | null;
}

export type BookMapper = Selectable<BookTable>;
