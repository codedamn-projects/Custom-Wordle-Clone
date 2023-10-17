import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type UsedWords = {
    uniqueId: string;
    useDate: string;
    wordId: string;
};
export type Word = {
    uniqueId: string;
    word: string;
};
export type DB = {
    UsedWords: UsedWords;
    Word: Word;
};
