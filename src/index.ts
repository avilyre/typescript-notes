// Mapped type - Used to generate a readonly type to prevente re-assign objects typed
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

type UserType = {
  username: string;
  age: number;
}

type UserReadonlyType = ReadonlyType<UserType>;

const user1: UserType = {
  username: "AvilySilva",
  age: 26
}

user1.username = "Avily123" // You can re-assign const values

const user2: UserReadonlyType = {
  username: "AvilySilva",
  age: 26
}

user2.username = "Avily123" // Typed with readonly type to prevent re-assign