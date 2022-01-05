export type CommonDBErrorCodes =
  | "PROTOCOL_CONNECTION_LOST"
  | "ER_CON_COUNT_ERROR"
  | "ECONNREFUSED"
  | "ER_ACCESS_DENIED_ERROR"
  | "ER_NO_SUCH_TABLE"
  | "ER_TOO_MANY_CONNECTIONS";
export const ErrCodeToMessageMap = {
  PROTOCOL_CONNECTION_LOST: "Database connection was closed.",
  ER_CON_COUNT_ERROR: "Database has too many connections.",
  ECONNREFUSED: "Database connection was refused.",
  ER_ACCESS_DENIED_ERROR: "Database connection was denied.",
  ER_NO_SUCH_TABLE: "Database table was not found.",
  ER_TOO_MANY_CONNECTIONS: "Database has too many connections."
};