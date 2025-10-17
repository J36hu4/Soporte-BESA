
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Notificacion
 * 
 */
export type Notificacion = $Result.DefaultSelection<Prisma.$NotificacionPayload>
/**
 * Model Tecnico
 * 
 */
export type Tecnico = $Result.DefaultSelection<Prisma.$TecnicoPayload>
/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Etiqueta
 * 
 */
export type Etiqueta = $Result.DefaultSelection<Prisma.$EtiquetaPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model HistorialTicket
 * 
 */
export type HistorialTicket = $Result.DefaultSelection<Prisma.$HistorialTicketPayload>
/**
 * Model Ticket_Imagen
 * 
 */
export type Ticket_Imagen = $Result.DefaultSelection<Prisma.$Ticket_ImagenPayload>
/**
 * Model Asignacion
 * 
 */
export type Asignacion = $Result.DefaultSelection<Prisma.$AsignacionPayload>
/**
 * Model Valoracion
 * 
 */
export type Valoracion = $Result.DefaultSelection<Prisma.$ValoracionPayload>
/**
 * Model Regla_Autotriage
 * ////////  Reglas autotriage  //////////
 */
export type Regla_Autotriage = $Result.DefaultSelection<Prisma.$Regla_AutotriagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  TEC: 'TEC',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Idioma: {
  es: 'es',
  en: 'en'
};

export type Idioma = (typeof Idioma)[keyof typeof Idioma]


export const TipoNotificacion: {
  asignacion: 'asignacion',
  cambio_estado: 'cambio_estado',
  observacion: 'observacion',
  inicio_sesion: 'inicio_sesion',
  exito: 'exito',
  error: 'error',
  advertencia: 'advertencia',
  info: 'info',
  nuevo: 'nuevo'
};

export type TipoNotificacion = (typeof TipoNotificacion)[keyof typeof TipoNotificacion]


export const MotivoDisponible: {
  disponible: 'disponible',
  almuerzo: 'almuerzo',
  descanso: 'descanso',
  ausente: 'ausente'
};

export type MotivoDisponible = (typeof MotivoDisponible)[keyof typeof MotivoDisponible]


export const Prioridad: {
  baja: 'baja',
  media: 'media',
  alta: 'alta'
};

export type Prioridad = (typeof Prioridad)[keyof typeof Prioridad]


export const EstadoTicket: {
  pendiente: 'pendiente',
  asignado: 'asignado',
  en_proceso: 'en_proceso',
  resuelto: 'resuelto',
  cerrado: 'cerrado'
};

export type EstadoTicket = (typeof EstadoTicket)[keyof typeof EstadoTicket]


export const MetodoAsignacion: {
  manual: 'manual',
  automatico: 'automatico'
};

export type MetodoAsignacion = (typeof MetodoAsignacion)[keyof typeof MetodoAsignacion]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Idioma = $Enums.Idioma

export const Idioma: typeof $Enums.Idioma

export type TipoNotificacion = $Enums.TipoNotificacion

export const TipoNotificacion: typeof $Enums.TipoNotificacion

export type MotivoDisponible = $Enums.MotivoDisponible

export const MotivoDisponible: typeof $Enums.MotivoDisponible

export type Prioridad = $Enums.Prioridad

export const Prioridad: typeof $Enums.Prioridad

export type EstadoTicket = $Enums.EstadoTicket

export const EstadoTicket: typeof $Enums.EstadoTicket

export type MetodoAsignacion = $Enums.MetodoAsignacion

export const MetodoAsignacion: typeof $Enums.MetodoAsignacion

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **Notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.NotificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tecnico`: Exposes CRUD operations for the **Tecnico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnicos
    * const tecnicos = await prisma.tecnico.findMany()
    * ```
    */
  get tecnico(): Prisma.TecnicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **Etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etiquetas
    * const etiquetas = await prisma.etiqueta.findMany()
    * ```
    */
  get etiqueta(): Prisma.EtiquetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialTicket`: Exposes CRUD operations for the **HistorialTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialTickets
    * const historialTickets = await prisma.historialTicket.findMany()
    * ```
    */
  get historialTicket(): Prisma.HistorialTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket_Imagen`: Exposes CRUD operations for the **Ticket_Imagen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_Imagens
    * const ticket_Imagens = await prisma.ticket_Imagen.findMany()
    * ```
    */
  get ticket_Imagen(): Prisma.Ticket_ImagenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignacion`: Exposes CRUD operations for the **Asignacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asignacions
    * const asignacions = await prisma.asignacion.findMany()
    * ```
    */
  get asignacion(): Prisma.AsignacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valoracion`: Exposes CRUD operations for the **Valoracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Valoracions
    * const valoracions = await prisma.valoracion.findMany()
    * ```
    */
  get valoracion(): Prisma.ValoracionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regla_Autotriage`: Exposes CRUD operations for the **Regla_Autotriage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regla_Autotriages
    * const regla_Autotriages = await prisma.regla_Autotriage.findMany()
    * ```
    */
  get regla_Autotriage(): Prisma.Regla_AutotriageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Notificacion: 'Notificacion',
    Tecnico: 'Tecnico',
    Especialidad: 'Especialidad',
    Categoria: 'Categoria',
    Etiqueta: 'Etiqueta',
    Ticket: 'Ticket',
    HistorialTicket: 'HistorialTicket',
    Ticket_Imagen: 'Ticket_Imagen',
    Asignacion: 'Asignacion',
    Valoracion: 'Valoracion',
    Regla_Autotriage: 'Regla_Autotriage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "notificacion" | "tecnico" | "especialidad" | "categoria" | "etiqueta" | "ticket" | "historialTicket" | "ticket_Imagen" | "asignacion" | "valoracion" | "regla_Autotriage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Notificacion: {
        payload: Prisma.$NotificacionPayload<ExtArgs>
        fields: Prisma.NotificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findFirst: {
            args: Prisma.NotificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findMany: {
            args: Prisma.NotificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          create: {
            args: Prisma.NotificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          createMany: {
            args: Prisma.NotificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          update: {
            args: Prisma.NotificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          deleteMany: {
            args: Prisma.NotificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.NotificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      Tecnico: {
        payload: Prisma.$TecnicoPayload<ExtArgs>
        fields: Prisma.TecnicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TecnicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TecnicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findFirst: {
            args: Prisma.TecnicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TecnicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findMany: {
            args: Prisma.TecnicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          create: {
            args: Prisma.TecnicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          createMany: {
            args: Prisma.TecnicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TecnicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          update: {
            args: Prisma.TecnicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          deleteMany: {
            args: Prisma.TecnicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TecnicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TecnicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          aggregate: {
            args: Prisma.TecnicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnico>
          }
          groupBy: {
            args: Prisma.TecnicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TecnicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TecnicoCountArgs<ExtArgs>
            result: $Utils.Optional<TecnicoCountAggregateOutputType> | number
          }
        }
      }
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Etiqueta: {
        payload: Prisma.$EtiquetaPayload<ExtArgs>
        fields: Prisma.EtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findFirst: {
            args: Prisma.EtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findMany: {
            args: Prisma.EtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          create: {
            args: Prisma.EtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          createMany: {
            args: Prisma.EtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          update: {
            args: Prisma.EtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.EtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtiqueta>
          }
          groupBy: {
            args: Prisma.EtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      HistorialTicket: {
        payload: Prisma.$HistorialTicketPayload<ExtArgs>
        fields: Prisma.HistorialTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          findFirst: {
            args: Prisma.HistorialTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          findMany: {
            args: Prisma.HistorialTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>[]
          }
          create: {
            args: Prisma.HistorialTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          createMany: {
            args: Prisma.HistorialTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistorialTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          update: {
            args: Prisma.HistorialTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          deleteMany: {
            args: Prisma.HistorialTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistorialTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialTicketPayload>
          }
          aggregate: {
            args: Prisma.HistorialTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialTicket>
          }
          groupBy: {
            args: Prisma.HistorialTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialTicketCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialTicketCountAggregateOutputType> | number
          }
        }
      }
      Ticket_Imagen: {
        payload: Prisma.$Ticket_ImagenPayload<ExtArgs>
        fields: Prisma.Ticket_ImagenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ticket_ImagenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ticket_ImagenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          findFirst: {
            args: Prisma.Ticket_ImagenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ticket_ImagenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          findMany: {
            args: Prisma.Ticket_ImagenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>[]
          }
          create: {
            args: Prisma.Ticket_ImagenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          createMany: {
            args: Prisma.Ticket_ImagenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Ticket_ImagenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          update: {
            args: Prisma.Ticket_ImagenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          deleteMany: {
            args: Prisma.Ticket_ImagenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ticket_ImagenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Ticket_ImagenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ticket_ImagenPayload>
          }
          aggregate: {
            args: Prisma.Ticket_ImagenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_Imagen>
          }
          groupBy: {
            args: Prisma.Ticket_ImagenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_ImagenGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ticket_ImagenCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_ImagenCountAggregateOutputType> | number
          }
        }
      }
      Asignacion: {
        payload: Prisma.$AsignacionPayload<ExtArgs>
        fields: Prisma.AsignacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          findFirst: {
            args: Prisma.AsignacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          findMany: {
            args: Prisma.AsignacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>[]
          }
          create: {
            args: Prisma.AsignacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          createMany: {
            args: Prisma.AsignacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AsignacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          update: {
            args: Prisma.AsignacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          deleteMany: {
            args: Prisma.AsignacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsignacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionPayload>
          }
          aggregate: {
            args: Prisma.AsignacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignacion>
          }
          groupBy: {
            args: Prisma.AsignacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignacionCountArgs<ExtArgs>
            result: $Utils.Optional<AsignacionCountAggregateOutputType> | number
          }
        }
      }
      Valoracion: {
        payload: Prisma.$ValoracionPayload<ExtArgs>
        fields: Prisma.ValoracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValoracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValoracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          findFirst: {
            args: Prisma.ValoracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValoracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          findMany: {
            args: Prisma.ValoracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>[]
          }
          create: {
            args: Prisma.ValoracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          createMany: {
            args: Prisma.ValoracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ValoracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          update: {
            args: Prisma.ValoracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          deleteMany: {
            args: Prisma.ValoracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValoracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValoracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoracionPayload>
          }
          aggregate: {
            args: Prisma.ValoracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValoracion>
          }
          groupBy: {
            args: Prisma.ValoracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValoracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValoracionCountArgs<ExtArgs>
            result: $Utils.Optional<ValoracionCountAggregateOutputType> | number
          }
        }
      }
      Regla_Autotriage: {
        payload: Prisma.$Regla_AutotriagePayload<ExtArgs>
        fields: Prisma.Regla_AutotriageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Regla_AutotriageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Regla_AutotriageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          findFirst: {
            args: Prisma.Regla_AutotriageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Regla_AutotriageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          findMany: {
            args: Prisma.Regla_AutotriageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>[]
          }
          create: {
            args: Prisma.Regla_AutotriageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          createMany: {
            args: Prisma.Regla_AutotriageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Regla_AutotriageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          update: {
            args: Prisma.Regla_AutotriageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          deleteMany: {
            args: Prisma.Regla_AutotriageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Regla_AutotriageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Regla_AutotriageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regla_AutotriagePayload>
          }
          aggregate: {
            args: Prisma.Regla_AutotriageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegla_Autotriage>
          }
          groupBy: {
            args: Prisma.Regla_AutotriageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Regla_AutotriageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Regla_AutotriageCountArgs<ExtArgs>
            result: $Utils.Optional<Regla_AutotriageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    notificacion?: NotificacionOmit
    tecnico?: TecnicoOmit
    especialidad?: EspecialidadOmit
    categoria?: CategoriaOmit
    etiqueta?: EtiquetaOmit
    ticket?: TicketOmit
    historialTicket?: HistorialTicketOmit
    ticket_Imagen?: Ticket_ImagenOmit
    asignacion?: AsignacionOmit
    valoracion?: ValoracionOmit
    regla_Autotriage?: Regla_AutotriageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    tecnico: number
    ticket: number
    historialTicket: number
    valoracion: number
    notificacionesRemitente: number
    notificaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnico?: boolean | UsuarioCountOutputTypeCountTecnicoArgs
    ticket?: boolean | UsuarioCountOutputTypeCountTicketArgs
    historialTicket?: boolean | UsuarioCountOutputTypeCountHistorialTicketArgs
    valoracion?: boolean | UsuarioCountOutputTypeCountValoracionArgs
    notificacionesRemitente?: boolean | UsuarioCountOutputTypeCountNotificacionesRemitenteArgs
    notificaciones?: boolean | UsuarioCountOutputTypeCountNotificacionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorialTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialTicketWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountValoracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValoracionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacionesRemitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
  }


  /**
   * Count Type TecnicoCountOutputType
   */

  export type TecnicoCountOutputType = {
    especialidades: number
    Asignacion: number
  }

  export type TecnicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | TecnicoCountOutputTypeCountEspecialidadesArgs
    Asignacion?: boolean | TecnicoCountOutputTypeCountAsignacionArgs
  }

  // Custom InputTypes
  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TecnicoCountOutputType
     */
    select?: TecnicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
  }

  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeCountAsignacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionWhereInput
  }


  /**
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    tecnicos: number
    categorias: number
    reglas: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnicos?: boolean | EspecialidadCountOutputTypeCountTecnicosArgs
    categorias?: boolean | EspecialidadCountOutputTypeCountCategoriasArgs
    reglas?: boolean | EspecialidadCountOutputTypeCountReglasArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountTecnicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountReglasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Regla_AutotriageWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    especialidades: number
    etiquetas: number
    reglas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | CategoriaCountOutputTypeCountEspecialidadesArgs
    etiquetas?: boolean | CategoriaCountOutputTypeCountEtiquetasArgs
    reglas?: boolean | CategoriaCountOutputTypeCountReglasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountEtiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountReglasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Regla_AutotriageWhereInput
  }


  /**
   * Count Type EtiquetaCountOutputType
   */

  export type EtiquetaCountOutputType = {
    Ticket: number
    autoTriage: number
  }

  export type EtiquetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | EtiquetaCountOutputTypeCountTicketArgs
    autoTriage?: boolean | EtiquetaCountOutputTypeCountAutoTriageArgs
  }

  // Custom InputTypes
  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtiquetaCountOutputType
     */
    select?: EtiquetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountAutoTriageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Regla_AutotriageWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    historial: number
    imagenes: number
    asignaciones: number
    Valoracion: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial?: boolean | TicketCountOutputTypeCountHistorialArgs
    imagenes?: boolean | TicketCountOutputTypeCountImagenesArgs
    asignaciones?: boolean | TicketCountOutputTypeCountAsignacionesArgs
    Valoracion?: boolean | TicketCountOutputTypeCountValoracionArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialTicketWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountImagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ticket_ImagenWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountValoracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValoracionWhereInput
  }


  /**
   * Count Type Regla_AutotriageCountOutputType
   */

  export type Regla_AutotriageCountOutputType = {
    etiquetas: number
    especialidades: number
    asignaciones: number
  }

  export type Regla_AutotriageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etiquetas?: boolean | Regla_AutotriageCountOutputTypeCountEtiquetasArgs
    especialidades?: boolean | Regla_AutotriageCountOutputTypeCountEspecialidadesArgs
    asignaciones?: boolean | Regla_AutotriageCountOutputTypeCountAsignacionesArgs
  }

  // Custom InputTypes
  /**
   * Regla_AutotriageCountOutputType without action
   */
  export type Regla_AutotriageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_AutotriageCountOutputType
     */
    select?: Regla_AutotriageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Regla_AutotriageCountOutputType without action
   */
  export type Regla_AutotriageCountOutputTypeCountEtiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
  }

  /**
   * Regla_AutotriageCountOutputType without action
   */
  export type Regla_AutotriageCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
  }

  /**
   * Regla_AutotriageCountOutputType without action
   */
  export type Regla_AutotriageCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    imagen: string | null
    correo: string | null
    contrasenna: string | null
    role: $Enums.Role | null
    ultimaSesion: Date | null
    estado: boolean | null
    idioma: $Enums.Idioma | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    imagen: string | null
    correo: string | null
    contrasenna: string | null
    role: $Enums.Role | null
    ultimaSesion: Date | null
    estado: boolean | null
    idioma: $Enums.Idioma | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    imagen: number
    correo: number
    contrasenna: number
    role: number
    ultimaSesion: number
    estado: number
    idioma: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    imagen?: true
    correo?: true
    contrasenna?: true
    role?: true
    ultimaSesion?: true
    estado?: true
    idioma?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    imagen?: true
    correo?: true
    contrasenna?: true
    role?: true
    ultimaSesion?: true
    estado?: true
    idioma?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    imagen?: true
    correo?: true
    contrasenna?: true
    role?: true
    ultimaSesion?: true
    estado?: true
    idioma?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string | null
    imagen: string | null
    correo: string
    contrasenna: string
    role: $Enums.Role
    ultimaSesion: Date
    estado: boolean
    idioma: $Enums.Idioma
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    imagen?: boolean
    correo?: boolean
    contrasenna?: boolean
    role?: boolean
    ultimaSesion?: boolean
    estado?: boolean
    idioma?: boolean
    tecnico?: boolean | Usuario$tecnicoArgs<ExtArgs>
    ticket?: boolean | Usuario$ticketArgs<ExtArgs>
    historialTicket?: boolean | Usuario$historialTicketArgs<ExtArgs>
    valoracion?: boolean | Usuario$valoracionArgs<ExtArgs>
    notificacionesRemitente?: boolean | Usuario$notificacionesRemitenteArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    imagen?: boolean
    correo?: boolean
    contrasenna?: boolean
    role?: boolean
    ultimaSesion?: boolean
    estado?: boolean
    idioma?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "imagen" | "correo" | "contrasenna" | "role" | "ultimaSesion" | "estado" | "idioma", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnico?: boolean | Usuario$tecnicoArgs<ExtArgs>
    ticket?: boolean | Usuario$ticketArgs<ExtArgs>
    historialTicket?: boolean | Usuario$historialTicketArgs<ExtArgs>
    valoracion?: boolean | Usuario$valoracionArgs<ExtArgs>
    notificacionesRemitente?: boolean | Usuario$notificacionesRemitenteArgs<ExtArgs>
    notificaciones?: boolean | Usuario$notificacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      tecnico: Prisma.$TecnicoPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>[]
      historialTicket: Prisma.$HistorialTicketPayload<ExtArgs>[]
      valoracion: Prisma.$ValoracionPayload<ExtArgs>[]
      notificacionesRemitente: Prisma.$NotificacionPayload<ExtArgs>[]
      notificaciones: Prisma.$NotificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      imagen: string | null
      correo: string
      contrasenna: string
      role: $Enums.Role
      ultimaSesion: Date
      estado: boolean
      idioma: $Enums.Idioma
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tecnico<T extends Usuario$tecnicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tecnicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends Usuario$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historialTicket<T extends Usuario$historialTicketArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historialTicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    valoracion<T extends Usuario$valoracionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$valoracionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacionesRemitente<T extends Usuario$notificacionesRemitenteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacionesRemitenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones<T extends Usuario$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly imagen: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasenna: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly ultimaSesion: FieldRef<"Usuario", 'DateTime'>
    readonly estado: FieldRef<"Usuario", 'Boolean'>
    readonly idioma: FieldRef<"Usuario", 'Idioma'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.tecnico
   */
  export type Usuario$tecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    cursor?: TecnicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Usuario.ticket
   */
  export type Usuario$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Usuario.historialTicket
   */
  export type Usuario$historialTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    where?: HistorialTicketWhereInput
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    cursor?: HistorialTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialTicketScalarFieldEnum | HistorialTicketScalarFieldEnum[]
  }

  /**
   * Usuario.valoracion
   */
  export type Usuario$valoracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    where?: ValoracionWhereInput
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    cursor?: ValoracionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValoracionScalarFieldEnum | ValoracionScalarFieldEnum[]
  }

  /**
   * Usuario.notificacionesRemitente
   */
  export type Usuario$notificacionesRemitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Usuario.notificaciones
   */
  export type Usuario$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    cursor?: NotificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id: number | null
    idRemitente: number | null
    idDestinatario: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id: number | null
    idRemitente: number | null
    idDestinatario: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id: number | null
    idRemitente: number | null
    idDestinatario: number | null
    tipo: $Enums.TipoNotificacion | null
    leido: boolean | null
    mensaje: string | null
    fecha: Date | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id: number | null
    idRemitente: number | null
    idDestinatario: number | null
    tipo: $Enums.TipoNotificacion | null
    leido: boolean | null
    mensaje: string | null
    fecha: Date | null
  }

  export type NotificacionCountAggregateOutputType = {
    id: number
    idRemitente: number
    idDestinatario: number
    tipo: number
    leido: number
    mensaje: number
    fecha: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id?: true
    idRemitente?: true
    idDestinatario?: true
  }

  export type NotificacionSumAggregateInputType = {
    id?: true
    idRemitente?: true
    idDestinatario?: true
  }

  export type NotificacionMinAggregateInputType = {
    id?: true
    idRemitente?: true
    idDestinatario?: true
    tipo?: true
    leido?: true
    mensaje?: true
    fecha?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id?: true
    idRemitente?: true
    idDestinatario?: true
    tipo?: true
    leido?: true
    mensaje?: true
    fecha?: true
  }

  export type NotificacionCountAggregateInputType = {
    id?: true
    idRemitente?: true
    idDestinatario?: true
    tipo?: true
    leido?: true
    mensaje?: true
    fecha?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacion to aggregate.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type NotificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithAggregationInput | NotificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: NotificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id: number
    idRemitente: number | null
    idDestinatario: number
    tipo: $Enums.TipoNotificacion
    leido: boolean
    mensaje: string
    fecha: Date
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends NotificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type NotificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRemitente?: boolean
    idDestinatario?: boolean
    tipo?: boolean
    leido?: boolean
    mensaje?: boolean
    fecha?: boolean
    Remitente?: boolean | Notificacion$RemitenteArgs<ExtArgs>
    Destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>



  export type NotificacionSelectScalar = {
    id?: boolean
    idRemitente?: boolean
    idDestinatario?: boolean
    tipo?: boolean
    leido?: boolean
    mensaje?: boolean
    fecha?: boolean
  }

  export type NotificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRemitente" | "idDestinatario" | "tipo" | "leido" | "mensaje" | "fecha", ExtArgs["result"]["notificacion"]>
  export type NotificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Remitente?: boolean | Notificacion$RemitenteArgs<ExtArgs>
    Destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacion"
    objects: {
      Remitente: Prisma.$UsuarioPayload<ExtArgs> | null
      Destinatario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idRemitente: number | null
      idDestinatario: number
      tipo: $Enums.TipoNotificacion
      leido: boolean
      mensaje: string
      fecha: Date
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type NotificacionGetPayload<S extends boolean | null | undefined | NotificacionDefaultArgs> = $Result.GetResult<Prisma.$NotificacionPayload, S>

  type NotificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface NotificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacion'], meta: { name: 'Notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {NotificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacionFindUniqueArgs>(args: SelectSubset<T, NotificacionFindUniqueArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacionFindFirstArgs>(args?: SelectSubset<T, NotificacionFindFirstArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacionFindManyArgs>(args?: SelectSubset<T, NotificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacion.
     * @param {NotificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends NotificacionCreateArgs>(args: SelectSubset<T, NotificacionCreateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacions.
     * @param {NotificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacionCreateManyArgs>(args?: SelectSubset<T, NotificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacion.
     * @param {NotificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends NotificacionDeleteArgs>(args: SelectSubset<T, NotificacionDeleteArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacion.
     * @param {NotificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacionUpdateArgs>(args: SelectSubset<T, NotificacionUpdateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {NotificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacionDeleteManyArgs>(args?: SelectSubset<T, NotificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacionUpdateManyArgs>(args: SelectSubset<T, NotificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacion.
     * @param {NotificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends NotificacionUpsertArgs>(args: SelectSubset<T, NotificacionUpsertArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends NotificacionCountArgs>(
      args?: Subset<T, NotificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacionGroupByArgs['orderBy'] }
        : { orderBy?: NotificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacion model
   */
  readonly fields: NotificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Remitente<T extends Notificacion$RemitenteArgs<ExtArgs> = {}>(args?: Subset<T, Notificacion$RemitenteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Destinatario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacion model
   */
  interface NotificacionFieldRefs {
    readonly id: FieldRef<"Notificacion", 'Int'>
    readonly idRemitente: FieldRef<"Notificacion", 'Int'>
    readonly idDestinatario: FieldRef<"Notificacion", 'Int'>
    readonly tipo: FieldRef<"Notificacion", 'TipoNotificacion'>
    readonly leido: FieldRef<"Notificacion", 'Boolean'>
    readonly mensaje: FieldRef<"Notificacion", 'String'>
    readonly fecha: FieldRef<"Notificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacion findUnique
   */
  export type NotificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findUniqueOrThrow
   */
  export type NotificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findFirst
   */
  export type NotificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findFirstOrThrow
   */
  export type NotificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findMany
   */
  export type NotificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter, which Notificacions to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion create
   */
  export type NotificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacion.
     */
    data: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
  }

  /**
   * Notificacion createMany
   */
  export type NotificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacion update
   */
  export type NotificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacion.
     */
    data: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
    /**
     * Choose, which Notificacion to update.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion updateMany
   */
  export type NotificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to update.
     */
    limit?: number
  }

  /**
   * Notificacion upsert
   */
  export type NotificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacion to update in case it exists.
     */
    where: NotificacionWhereUniqueInput
    /**
     * In case the Notificacion found by the `where` argument doesn't exist, create a new Notificacion with this data.
     */
    create: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
    /**
     * In case the Notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
  }

  /**
   * Notificacion delete
   */
  export type NotificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
    /**
     * Filter which Notificacion to delete.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion deleteMany
   */
  export type NotificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacions to delete
     */
    where?: NotificacionWhereInput
    /**
     * Limit how many Notificacions to delete.
     */
    limit?: number
  }

  /**
   * Notificacion.Remitente
   */
  export type Notificacion$RemitenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Notificacion without action
   */
  export type NotificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacion
     */
    omit?: NotificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacionInclude<ExtArgs> | null
  }


  /**
   * Model Tecnico
   */

  export type AggregateTecnico = {
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  export type TecnicoAvgAggregateOutputType = {
    id: number | null
    carga: number | null
  }

  export type TecnicoSumAggregateOutputType = {
    id: number | null
    carga: number | null
  }

  export type TecnicoMinAggregateOutputType = {
    id: number | null
    disponible: boolean | null
    motivoDisponible: $Enums.MotivoDisponible | null
    fechaDisponible: Date | null
    carga: number | null
  }

  export type TecnicoMaxAggregateOutputType = {
    id: number | null
    disponible: boolean | null
    motivoDisponible: $Enums.MotivoDisponible | null
    fechaDisponible: Date | null
    carga: number | null
  }

  export type TecnicoCountAggregateOutputType = {
    id: number
    disponible: number
    motivoDisponible: number
    fechaDisponible: number
    carga: number
    _all: number
  }


  export type TecnicoAvgAggregateInputType = {
    id?: true
    carga?: true
  }

  export type TecnicoSumAggregateInputType = {
    id?: true
    carga?: true
  }

  export type TecnicoMinAggregateInputType = {
    id?: true
    disponible?: true
    motivoDisponible?: true
    fechaDisponible?: true
    carga?: true
  }

  export type TecnicoMaxAggregateInputType = {
    id?: true
    disponible?: true
    motivoDisponible?: true
    fechaDisponible?: true
    carga?: true
  }

  export type TecnicoCountAggregateInputType = {
    id?: true
    disponible?: true
    motivoDisponible?: true
    fechaDisponible?: true
    carga?: true
    _all?: true
  }

  export type TecnicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnico to aggregate.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tecnicos
    **/
    _count?: true | TecnicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TecnicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TecnicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnicoMaxAggregateInputType
  }

  export type GetTecnicoAggregateType<T extends TecnicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnico[P]>
      : GetScalarType<T[P], AggregateTecnico[P]>
  }




  export type TecnicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithAggregationInput | TecnicoOrderByWithAggregationInput[]
    by: TecnicoScalarFieldEnum[] | TecnicoScalarFieldEnum
    having?: TecnicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnicoCountAggregateInputType | true
    _avg?: TecnicoAvgAggregateInputType
    _sum?: TecnicoSumAggregateInputType
    _min?: TecnicoMinAggregateInputType
    _max?: TecnicoMaxAggregateInputType
  }

  export type TecnicoGroupByOutputType = {
    id: number
    disponible: boolean
    motivoDisponible: $Enums.MotivoDisponible
    fechaDisponible: Date | null
    carga: number
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  type GetTecnicoGroupByPayload<T extends TecnicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TecnicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
            : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
        }
      >
    >


  export type TecnicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disponible?: boolean
    motivoDisponible?: boolean
    fechaDisponible?: boolean
    carga?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidades?: boolean | Tecnico$especialidadesArgs<ExtArgs>
    Asignacion?: boolean | Tecnico$AsignacionArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>



  export type TecnicoSelectScalar = {
    id?: boolean
    disponible?: boolean
    motivoDisponible?: boolean
    fechaDisponible?: boolean
    carga?: boolean
  }

  export type TecnicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disponible" | "motivoDisponible" | "fechaDisponible" | "carga", ExtArgs["result"]["tecnico"]>
  export type TecnicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidades?: boolean | Tecnico$especialidadesArgs<ExtArgs>
    Asignacion?: boolean | Tecnico$AsignacionArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TecnicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tecnico"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      especialidades: Prisma.$EspecialidadPayload<ExtArgs>[]
      Asignacion: Prisma.$AsignacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      disponible: boolean
      motivoDisponible: $Enums.MotivoDisponible
      fechaDisponible: Date | null
      carga: number
    }, ExtArgs["result"]["tecnico"]>
    composites: {}
  }

  type TecnicoGetPayload<S extends boolean | null | undefined | TecnicoDefaultArgs> = $Result.GetResult<Prisma.$TecnicoPayload, S>

  type TecnicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TecnicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TecnicoCountAggregateInputType | true
    }

  export interface TecnicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tecnico'], meta: { name: 'Tecnico' } }
    /**
     * Find zero or one Tecnico that matches the filter.
     * @param {TecnicoFindUniqueArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TecnicoFindUniqueArgs>(args: SelectSubset<T, TecnicoFindUniqueArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TecnicoFindUniqueOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TecnicoFindUniqueOrThrowArgs>(args: SelectSubset<T, TecnicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TecnicoFindFirstArgs>(args?: SelectSubset<T, TecnicoFindFirstArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TecnicoFindFirstOrThrowArgs>(args?: SelectSubset<T, TecnicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnicos
     * const tecnicos = await prisma.tecnico.findMany()
     * 
     * // Get first 10 Tecnicos
     * const tecnicos = await prisma.tecnico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnicoWithIdOnly = await prisma.tecnico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TecnicoFindManyArgs>(args?: SelectSubset<T, TecnicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnico.
     * @param {TecnicoCreateArgs} args - Arguments to create a Tecnico.
     * @example
     * // Create one Tecnico
     * const Tecnico = await prisma.tecnico.create({
     *   data: {
     *     // ... data to create a Tecnico
     *   }
     * })
     * 
     */
    create<T extends TecnicoCreateArgs>(args: SelectSubset<T, TecnicoCreateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnicos.
     * @param {TecnicoCreateManyArgs} args - Arguments to create many Tecnicos.
     * @example
     * // Create many Tecnicos
     * const tecnico = await prisma.tecnico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TecnicoCreateManyArgs>(args?: SelectSubset<T, TecnicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tecnico.
     * @param {TecnicoDeleteArgs} args - Arguments to delete one Tecnico.
     * @example
     * // Delete one Tecnico
     * const Tecnico = await prisma.tecnico.delete({
     *   where: {
     *     // ... filter to delete one Tecnico
     *   }
     * })
     * 
     */
    delete<T extends TecnicoDeleteArgs>(args: SelectSubset<T, TecnicoDeleteArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnico.
     * @param {TecnicoUpdateArgs} args - Arguments to update one Tecnico.
     * @example
     * // Update one Tecnico
     * const tecnico = await prisma.tecnico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TecnicoUpdateArgs>(args: SelectSubset<T, TecnicoUpdateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnicos.
     * @param {TecnicoDeleteManyArgs} args - Arguments to filter Tecnicos to delete.
     * @example
     * // Delete a few Tecnicos
     * const { count } = await prisma.tecnico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TecnicoDeleteManyArgs>(args?: SelectSubset<T, TecnicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnicos
     * const tecnico = await prisma.tecnico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TecnicoUpdateManyArgs>(args: SelectSubset<T, TecnicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tecnico.
     * @param {TecnicoUpsertArgs} args - Arguments to update or create a Tecnico.
     * @example
     * // Update or create a Tecnico
     * const tecnico = await prisma.tecnico.upsert({
     *   create: {
     *     // ... data to create a Tecnico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnico we want to update
     *   }
     * })
     */
    upsert<T extends TecnicoUpsertArgs>(args: SelectSubset<T, TecnicoUpsertArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoCountArgs} args - Arguments to filter Tecnicos to count.
     * @example
     * // Count the number of Tecnicos
     * const count = await prisma.tecnico.count({
     *   where: {
     *     // ... the filter for the Tecnicos we want to count
     *   }
     * })
    **/
    count<T extends TecnicoCountArgs>(
      args?: Subset<T, TecnicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TecnicoAggregateArgs>(args: Subset<T, TecnicoAggregateArgs>): Prisma.PrismaPromise<GetTecnicoAggregateType<T>>

    /**
     * Group by Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TecnicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TecnicoGroupByArgs['orderBy'] }
        : { orderBy?: TecnicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TecnicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tecnico model
   */
  readonly fields: TecnicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tecnico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TecnicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especialidades<T extends Tecnico$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, Tecnico$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Asignacion<T extends Tecnico$AsignacionArgs<ExtArgs> = {}>(args?: Subset<T, Tecnico$AsignacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tecnico model
   */
  interface TecnicoFieldRefs {
    readonly id: FieldRef<"Tecnico", 'Int'>
    readonly disponible: FieldRef<"Tecnico", 'Boolean'>
    readonly motivoDisponible: FieldRef<"Tecnico", 'MotivoDisponible'>
    readonly fechaDisponible: FieldRef<"Tecnico", 'DateTime'>
    readonly carga: FieldRef<"Tecnico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tecnico findUnique
   */
  export type TecnicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findUniqueOrThrow
   */
  export type TecnicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findFirst
   */
  export type TecnicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findFirstOrThrow
   */
  export type TecnicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findMany
   */
  export type TecnicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnicos to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico create
   */
  export type TecnicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tecnico.
     */
    data: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
  }

  /**
   * Tecnico createMany
   */
  export type TecnicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tecnicos.
     */
    data: TecnicoCreateManyInput | TecnicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tecnico update
   */
  export type TecnicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tecnico.
     */
    data: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
    /**
     * Choose, which Tecnico to update.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico updateMany
   */
  export type TecnicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tecnicos.
     */
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyInput>
    /**
     * Filter which Tecnicos to update
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to update.
     */
    limit?: number
  }

  /**
   * Tecnico upsert
   */
  export type TecnicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tecnico to update in case it exists.
     */
    where: TecnicoWhereUniqueInput
    /**
     * In case the Tecnico found by the `where` argument doesn't exist, create a new Tecnico with this data.
     */
    create: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
    /**
     * In case the Tecnico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
  }

  /**
   * Tecnico delete
   */
  export type TecnicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter which Tecnico to delete.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico deleteMany
   */
  export type TecnicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnicos to delete
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to delete.
     */
    limit?: number
  }

  /**
   * Tecnico.especialidades
   */
  export type Tecnico$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    cursor?: EspecialidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Tecnico.Asignacion
   */
  export type Tecnico$AsignacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    where?: AsignacionWhereInput
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    cursor?: AsignacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Tecnico without action
   */
  export type TecnicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
  }


  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type EspecialidadAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _avg?: EspecialidadAvgAggregateInputType
    _sum?: EspecialidadSumAggregateInputType
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tecnicos?: boolean | Especialidad$tecnicosArgs<ExtArgs>
    categorias?: boolean | Especialidad$categoriasArgs<ExtArgs>
    reglas?: boolean | Especialidad$reglasArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>



  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["especialidad"]>
  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnicos?: boolean | Especialidad$tecnicosArgs<ExtArgs>
    categorias?: boolean | Especialidad$categoriasArgs<ExtArgs>
    reglas?: boolean | Especialidad$reglasArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      tecnicos: Prisma.$TecnicoPayload<ExtArgs>[]
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
      reglas: Prisma.$Regla_AutotriagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tecnicos<T extends Especialidad$tecnicosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$tecnicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends Especialidad$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reglas<T extends Especialidad$reglasArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$reglasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Especialidad model
   */
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'Int'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
    readonly descripcion: FieldRef<"Especialidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number
  }

  /**
   * Especialidad.tecnicos
   */
  export type Especialidad$tecnicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    cursor?: TecnicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Especialidad.categorias
   */
  export type Especialidad$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Especialidad.reglas
   */
  export type Especialidad$reglasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    where?: Regla_AutotriageWhereInput
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    cursor?: Regla_AutotriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    tiempoMaximoRespuesta: number | null
    tiempoMaximoSolucion: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    tiempoMaximoRespuesta: number | null
    tiempoMaximoSolucion: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    tiempoMaximoRespuesta: number | null
    tiempoMaximoSolucion: number | null
    prioridad: $Enums.Prioridad | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    tiempoMaximoRespuesta: number | null
    tiempoMaximoSolucion: number | null
    prioridad: $Enums.Prioridad | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    tiempoMaximoRespuesta?: true
    tiempoMaximoSolucion?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    tiempoMaximoRespuesta?: true
    tiempoMaximoSolucion?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tiempoMaximoRespuesta?: true
    tiempoMaximoSolucion?: true
    prioridad?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tiempoMaximoRespuesta?: true
    tiempoMaximoSolucion?: true
    prioridad?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tiempoMaximoRespuesta?: true
    tiempoMaximoSolucion?: true
    prioridad?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tiempoMaximoRespuesta?: boolean
    tiempoMaximoSolucion?: boolean
    prioridad?: boolean
    especialidades?: boolean | Categoria$especialidadesArgs<ExtArgs>
    etiquetas?: boolean | Categoria$etiquetasArgs<ExtArgs>
    reglas?: boolean | Categoria$reglasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tiempoMaximoRespuesta?: boolean
    tiempoMaximoSolucion?: boolean
    prioridad?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "tiempoMaximoRespuesta" | "tiempoMaximoSolucion" | "prioridad", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | Categoria$especialidadesArgs<ExtArgs>
    etiquetas?: boolean | Categoria$etiquetasArgs<ExtArgs>
    reglas?: boolean | Categoria$reglasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      especialidades: Prisma.$EspecialidadPayload<ExtArgs>[]
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[]
      reglas: Prisma.$Regla_AutotriagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      tiempoMaximoRespuesta: number
      tiempoMaximoSolucion: number
      prioridad: $Enums.Prioridad
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidades<T extends Categoria$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etiquetas<T extends Categoria$etiquetasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$etiquetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reglas<T extends Categoria$reglasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$reglasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
    readonly tiempoMaximoRespuesta: FieldRef<"Categoria", 'Float'>
    readonly tiempoMaximoSolucion: FieldRef<"Categoria", 'Float'>
    readonly prioridad: FieldRef<"Categoria", 'Prioridad'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.especialidades
   */
  export type Categoria$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    cursor?: EspecialidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Categoria.etiquetas
   */
  export type Categoria$etiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    cursor?: EtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Categoria.reglas
   */
  export type Categoria$reglasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    where?: Regla_AutotriageWhereInput
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    cursor?: Regla_AutotriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  export type EtiquetaAvgAggregateOutputType = {
    id: number | null
    idCategoria: number | null
  }

  export type EtiquetaSumAggregateOutputType = {
    id: number | null
    idCategoria: number | null
  }

  export type EtiquetaMinAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    nombre: string | null
  }

  export type EtiquetaMaxAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    nombre: string | null
  }

  export type EtiquetaCountAggregateOutputType = {
    id: number
    idCategoria: number
    nombre: number
    _all: number
  }


  export type EtiquetaAvgAggregateInputType = {
    id?: true
    idCategoria?: true
  }

  export type EtiquetaSumAggregateInputType = {
    id?: true
    idCategoria?: true
  }

  export type EtiquetaMinAggregateInputType = {
    id?: true
    idCategoria?: true
    nombre?: true
  }

  export type EtiquetaMaxAggregateInputType = {
    id?: true
    idCategoria?: true
    nombre?: true
  }

  export type EtiquetaCountAggregateInputType = {
    id?: true
    idCategoria?: true
    nombre?: true
    _all?: true
  }

  export type EtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiqueta to aggregate.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etiquetas
    **/
    _count?: true | EtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtiquetaMaxAggregateInputType
  }

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>
  }




  export type EtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithAggregationInput | EtiquetaOrderByWithAggregationInput[]
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum
    having?: EtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtiquetaCountAggregateInputType | true
    _avg?: EtiquetaAvgAggregateInputType
    _sum?: EtiquetaSumAggregateInputType
    _min?: EtiquetaMinAggregateInputType
    _max?: EtiquetaMaxAggregateInputType
  }

  export type EtiquetaGroupByOutputType = {
    id: number
    idCategoria: number
    nombre: string
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  type GetEtiquetaGroupByPayload<T extends EtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type EtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCategoria?: boolean
    nombre?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    Ticket?: boolean | Etiqueta$TicketArgs<ExtArgs>
    autoTriage?: boolean | Etiqueta$autoTriageArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>



  export type EtiquetaSelectScalar = {
    id?: boolean
    idCategoria?: boolean
    nombre?: boolean
  }

  export type EtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCategoria" | "nombre", ExtArgs["result"]["etiqueta"]>
  export type EtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    Ticket?: boolean | Etiqueta$TicketArgs<ExtArgs>
    autoTriage?: boolean | Etiqueta$autoTriageArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etiqueta"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      autoTriage: Prisma.$Regla_AutotriagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCategoria: number
      nombre: string
    }, ExtArgs["result"]["etiqueta"]>
    composites: {}
  }

  type EtiquetaGetPayload<S extends boolean | null | undefined | EtiquetaDefaultArgs> = $Result.GetResult<Prisma.$EtiquetaPayload, S>

  type EtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtiquetaCountAggregateInputType | true
    }

  export interface EtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etiqueta'], meta: { name: 'Etiqueta' } }
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {EtiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtiquetaFindUniqueArgs>(args: SelectSubset<T, EtiquetaFindUniqueArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtiquetaFindFirstArgs>(args?: SelectSubset<T, EtiquetaFindFirstArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     * 
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtiquetaFindManyArgs>(args?: SelectSubset<T, EtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etiqueta.
     * @param {EtiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     * 
     */
    create<T extends EtiquetaCreateArgs>(args: SelectSubset<T, EtiquetaCreateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etiquetas.
     * @param {EtiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtiquetaCreateManyArgs>(args?: SelectSubset<T, EtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etiqueta.
     * @param {EtiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     * 
     */
    delete<T extends EtiquetaDeleteArgs>(args: SelectSubset<T, EtiquetaDeleteArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etiqueta.
     * @param {EtiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtiquetaUpdateArgs>(args: SelectSubset<T, EtiquetaUpdateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etiquetas.
     * @param {EtiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtiquetaDeleteManyArgs>(args?: SelectSubset<T, EtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtiquetaUpdateManyArgs>(args: SelectSubset<T, EtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etiqueta.
     * @param {EtiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
     */
    upsert<T extends EtiquetaUpsertArgs>(args: SelectSubset<T, EtiquetaUpsertArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
    **/
    count<T extends EtiquetaCountArgs>(
      args?: Subset<T, EtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtiquetaAggregateArgs>(args: Subset<T, EtiquetaAggregateArgs>): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etiqueta model
   */
  readonly fields: EtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ticket<T extends Etiqueta$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Etiqueta$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    autoTriage<T extends Etiqueta$autoTriageArgs<ExtArgs> = {}>(args?: Subset<T, Etiqueta$autoTriageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etiqueta model
   */
  interface EtiquetaFieldRefs {
    readonly id: FieldRef<"Etiqueta", 'Int'>
    readonly idCategoria: FieldRef<"Etiqueta", 'Int'>
    readonly nombre: FieldRef<"Etiqueta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Etiqueta findUnique
   */
  export type EtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findUniqueOrThrow
   */
  export type EtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findFirst
   */
  export type EtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findFirstOrThrow
   */
  export type EtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findMany
   */
  export type EtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiquetas to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta create
   */
  export type EtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etiqueta.
     */
    data: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
  }

  /**
   * Etiqueta createMany
   */
  export type EtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etiqueta update
   */
  export type EtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etiqueta.
     */
    data: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
    /**
     * Choose, which Etiqueta to update.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta updateMany
   */
  export type EtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
  }

  /**
   * Etiqueta upsert
   */
  export type EtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etiqueta to update in case it exists.
     */
    where: EtiquetaWhereUniqueInput
    /**
     * In case the Etiqueta found by the `where` argument doesn't exist, create a new Etiqueta with this data.
     */
    create: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
    /**
     * In case the Etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
  }

  /**
   * Etiqueta delete
   */
  export type EtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter which Etiqueta to delete.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta deleteMany
   */
  export type EtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiquetas to delete
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to delete.
     */
    limit?: number
  }

  /**
   * Etiqueta.Ticket
   */
  export type Etiqueta$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Etiqueta.autoTriage
   */
  export type Etiqueta$autoTriageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    where?: Regla_AutotriageWhereInput
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    cursor?: Regla_AutotriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Etiqueta without action
   */
  export type EtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idEtiqueta: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idEtiqueta: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idEtiqueta: number | null
    titulo: string | null
    descripcion: string | null
    fechaCreacion: Date | null
    fechaCierre: Date | null
    slaRespusta: Date | null
    slaSolucion: Date | null
    estado: $Enums.EstadoTicket | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idEtiqueta: number | null
    titulo: string | null
    descripcion: string | null
    fechaCreacion: Date | null
    fechaCierre: Date | null
    slaRespusta: Date | null
    slaSolucion: Date | null
    estado: $Enums.EstadoTicket | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    idUsuario: number
    idEtiqueta: number
    titulo: number
    descripcion: number
    fechaCreacion: number
    fechaCierre: number
    slaRespusta: number
    slaSolucion: number
    estado: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    idUsuario?: true
    idEtiqueta?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    idUsuario?: true
    idEtiqueta?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    idUsuario?: true
    idEtiqueta?: true
    titulo?: true
    descripcion?: true
    fechaCreacion?: true
    fechaCierre?: true
    slaRespusta?: true
    slaSolucion?: true
    estado?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    idEtiqueta?: true
    titulo?: true
    descripcion?: true
    fechaCreacion?: true
    fechaCierre?: true
    slaRespusta?: true
    slaSolucion?: true
    estado?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    idUsuario?: true
    idEtiqueta?: true
    titulo?: true
    descripcion?: true
    fechaCreacion?: true
    fechaCierre?: true
    slaRespusta?: true
    slaSolucion?: true
    estado?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion: Date
    fechaCierre: Date | null
    slaRespusta: Date | null
    slaSolucion: Date | null
    estado: $Enums.EstadoTicket
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    idEtiqueta?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaCreacion?: boolean
    fechaCierre?: boolean
    slaRespusta?: boolean
    slaSolucion?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
    historial?: boolean | Ticket$historialArgs<ExtArgs>
    imagenes?: boolean | Ticket$imagenesArgs<ExtArgs>
    asignaciones?: boolean | Ticket$asignacionesArgs<ExtArgs>
    Valoracion?: boolean | Ticket$ValoracionArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    idEtiqueta?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaCreacion?: boolean
    fechaCierre?: boolean
    slaRespusta?: boolean
    slaSolucion?: boolean
    estado?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUsuario" | "idEtiqueta" | "titulo" | "descripcion" | "fechaCreacion" | "fechaCierre" | "slaRespusta" | "slaSolucion" | "estado", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
    historial?: boolean | Ticket$historialArgs<ExtArgs>
    imagenes?: boolean | Ticket$imagenesArgs<ExtArgs>
    asignaciones?: boolean | Ticket$asignacionesArgs<ExtArgs>
    Valoracion?: boolean | Ticket$ValoracionArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      etiqueta: Prisma.$EtiquetaPayload<ExtArgs>
      historial: Prisma.$HistorialTicketPayload<ExtArgs>[]
      imagenes: Prisma.$Ticket_ImagenPayload<ExtArgs>[]
      asignaciones: Prisma.$AsignacionPayload<ExtArgs>[]
      Valoracion: Prisma.$ValoracionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUsuario: number
      idEtiqueta: number
      titulo: string
      descripcion: string
      fechaCreacion: Date
      fechaCierre: Date | null
      slaRespusta: Date | null
      slaSolucion: Date | null
      estado: $Enums.EstadoTicket
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etiqueta<T extends EtiquetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtiquetaDefaultArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historial<T extends Ticket$historialArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagenes<T extends Ticket$imagenesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Ticket$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Valoracion<T extends Ticket$ValoracionArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ValoracionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly idUsuario: FieldRef<"Ticket", 'Int'>
    readonly idEtiqueta: FieldRef<"Ticket", 'Int'>
    readonly titulo: FieldRef<"Ticket", 'String'>
    readonly descripcion: FieldRef<"Ticket", 'String'>
    readonly fechaCreacion: FieldRef<"Ticket", 'DateTime'>
    readonly fechaCierre: FieldRef<"Ticket", 'DateTime'>
    readonly slaRespusta: FieldRef<"Ticket", 'DateTime'>
    readonly slaSolucion: FieldRef<"Ticket", 'DateTime'>
    readonly estado: FieldRef<"Ticket", 'EstadoTicket'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.historial
   */
  export type Ticket$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    where?: HistorialTicketWhereInput
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    cursor?: HistorialTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialTicketScalarFieldEnum | HistorialTicketScalarFieldEnum[]
  }

  /**
   * Ticket.imagenes
   */
  export type Ticket$imagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    where?: Ticket_ImagenWhereInput
    orderBy?: Ticket_ImagenOrderByWithRelationInput | Ticket_ImagenOrderByWithRelationInput[]
    cursor?: Ticket_ImagenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_ImagenScalarFieldEnum | Ticket_ImagenScalarFieldEnum[]
  }

  /**
   * Ticket.asignaciones
   */
  export type Ticket$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    where?: AsignacionWhereInput
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    cursor?: AsignacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Ticket.Valoracion
   */
  export type Ticket$ValoracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    where?: ValoracionWhereInput
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    cursor?: ValoracionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValoracionScalarFieldEnum | ValoracionScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model HistorialTicket
   */

  export type AggregateHistorialTicket = {
    _count: HistorialTicketCountAggregateOutputType | null
    _avg: HistorialTicketAvgAggregateOutputType | null
    _sum: HistorialTicketSumAggregateOutputType | null
    _min: HistorialTicketMinAggregateOutputType | null
    _max: HistorialTicketMaxAggregateOutputType | null
  }

  export type HistorialTicketAvgAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
  }

  export type HistorialTicketSumAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
  }

  export type HistorialTicketMinAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    estadoAnterior: $Enums.EstadoTicket | null
    estadoNuevo: $Enums.EstadoTicket | null
    fecha: Date | null
    observacion: string | null
  }

  export type HistorialTicketMaxAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    estadoAnterior: $Enums.EstadoTicket | null
    estadoNuevo: $Enums.EstadoTicket | null
    fecha: Date | null
    observacion: string | null
  }

  export type HistorialTicketCountAggregateOutputType = {
    id: number
    idTicket: number
    idUsuario: number
    estadoAnterior: number
    estadoNuevo: number
    fecha: number
    observacion: number
    _all: number
  }


  export type HistorialTicketAvgAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
  }

  export type HistorialTicketSumAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
  }

  export type HistorialTicketMinAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    estadoAnterior?: true
    estadoNuevo?: true
    fecha?: true
    observacion?: true
  }

  export type HistorialTicketMaxAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    estadoAnterior?: true
    estadoNuevo?: true
    fecha?: true
    observacion?: true
  }

  export type HistorialTicketCountAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    estadoAnterior?: true
    estadoNuevo?: true
    fecha?: true
    observacion?: true
    _all?: true
  }

  export type HistorialTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialTicket to aggregate.
     */
    where?: HistorialTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialTickets to fetch.
     */
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialTickets
    **/
    _count?: true | HistorialTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialTicketMaxAggregateInputType
  }

  export type GetHistorialTicketAggregateType<T extends HistorialTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialTicket[P]>
      : GetScalarType<T[P], AggregateHistorialTicket[P]>
  }




  export type HistorialTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialTicketWhereInput
    orderBy?: HistorialTicketOrderByWithAggregationInput | HistorialTicketOrderByWithAggregationInput[]
    by: HistorialTicketScalarFieldEnum[] | HistorialTicketScalarFieldEnum
    having?: HistorialTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialTicketCountAggregateInputType | true
    _avg?: HistorialTicketAvgAggregateInputType
    _sum?: HistorialTicketSumAggregateInputType
    _min?: HistorialTicketMinAggregateInputType
    _max?: HistorialTicketMaxAggregateInputType
  }

  export type HistorialTicketGroupByOutputType = {
    id: number
    idTicket: number
    idUsuario: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha: Date
    observacion: string | null
    _count: HistorialTicketCountAggregateOutputType | null
    _avg: HistorialTicketAvgAggregateOutputType | null
    _sum: HistorialTicketSumAggregateOutputType | null
    _min: HistorialTicketMinAggregateOutputType | null
    _max: HistorialTicketMaxAggregateOutputType | null
  }

  type GetHistorialTicketGroupByPayload<T extends HistorialTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialTicketGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialTicketGroupByOutputType[P]>
        }
      >
    >


  export type HistorialTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTicket?: boolean
    idUsuario?: boolean
    estadoAnterior?: boolean
    estadoNuevo?: boolean
    fecha?: boolean
    observacion?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialTicket$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historialTicket"]>



  export type HistorialTicketSelectScalar = {
    id?: boolean
    idTicket?: boolean
    idUsuario?: boolean
    estadoAnterior?: boolean
    estadoNuevo?: boolean
    fecha?: boolean
    observacion?: boolean
  }

  export type HistorialTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTicket" | "idUsuario" | "estadoAnterior" | "estadoNuevo" | "fecha" | "observacion", ExtArgs["result"]["historialTicket"]>
  export type HistorialTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialTicket$usuarioArgs<ExtArgs>
  }

  export type $HistorialTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialTicket"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTicket: number
      idUsuario: number
      estadoAnterior: $Enums.EstadoTicket
      estadoNuevo: $Enums.EstadoTicket
      fecha: Date
      observacion: string | null
    }, ExtArgs["result"]["historialTicket"]>
    composites: {}
  }

  type HistorialTicketGetPayload<S extends boolean | null | undefined | HistorialTicketDefaultArgs> = $Result.GetResult<Prisma.$HistorialTicketPayload, S>

  type HistorialTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialTicketCountAggregateInputType | true
    }

  export interface HistorialTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialTicket'], meta: { name: 'HistorialTicket' } }
    /**
     * Find zero or one HistorialTicket that matches the filter.
     * @param {HistorialTicketFindUniqueArgs} args - Arguments to find a HistorialTicket
     * @example
     * // Get one HistorialTicket
     * const historialTicket = await prisma.historialTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialTicketFindUniqueArgs>(args: SelectSubset<T, HistorialTicketFindUniqueArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialTicketFindUniqueOrThrowArgs} args - Arguments to find a HistorialTicket
     * @example
     * // Get one HistorialTicket
     * const historialTicket = await prisma.historialTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketFindFirstArgs} args - Arguments to find a HistorialTicket
     * @example
     * // Get one HistorialTicket
     * const historialTicket = await prisma.historialTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialTicketFindFirstArgs>(args?: SelectSubset<T, HistorialTicketFindFirstArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketFindFirstOrThrowArgs} args - Arguments to find a HistorialTicket
     * @example
     * // Get one HistorialTicket
     * const historialTicket = await prisma.historialTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialTickets
     * const historialTickets = await prisma.historialTicket.findMany()
     * 
     * // Get first 10 HistorialTickets
     * const historialTickets = await prisma.historialTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historialTicketWithIdOnly = await prisma.historialTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistorialTicketFindManyArgs>(args?: SelectSubset<T, HistorialTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialTicket.
     * @param {HistorialTicketCreateArgs} args - Arguments to create a HistorialTicket.
     * @example
     * // Create one HistorialTicket
     * const HistorialTicket = await prisma.historialTicket.create({
     *   data: {
     *     // ... data to create a HistorialTicket
     *   }
     * })
     * 
     */
    create<T extends HistorialTicketCreateArgs>(args: SelectSubset<T, HistorialTicketCreateArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialTickets.
     * @param {HistorialTicketCreateManyArgs} args - Arguments to create many HistorialTickets.
     * @example
     * // Create many HistorialTickets
     * const historialTicket = await prisma.historialTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialTicketCreateManyArgs>(args?: SelectSubset<T, HistorialTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistorialTicket.
     * @param {HistorialTicketDeleteArgs} args - Arguments to delete one HistorialTicket.
     * @example
     * // Delete one HistorialTicket
     * const HistorialTicket = await prisma.historialTicket.delete({
     *   where: {
     *     // ... filter to delete one HistorialTicket
     *   }
     * })
     * 
     */
    delete<T extends HistorialTicketDeleteArgs>(args: SelectSubset<T, HistorialTicketDeleteArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialTicket.
     * @param {HistorialTicketUpdateArgs} args - Arguments to update one HistorialTicket.
     * @example
     * // Update one HistorialTicket
     * const historialTicket = await prisma.historialTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialTicketUpdateArgs>(args: SelectSubset<T, HistorialTicketUpdateArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialTickets.
     * @param {HistorialTicketDeleteManyArgs} args - Arguments to filter HistorialTickets to delete.
     * @example
     * // Delete a few HistorialTickets
     * const { count } = await prisma.historialTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialTicketDeleteManyArgs>(args?: SelectSubset<T, HistorialTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialTickets
     * const historialTicket = await prisma.historialTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialTicketUpdateManyArgs>(args: SelectSubset<T, HistorialTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistorialTicket.
     * @param {HistorialTicketUpsertArgs} args - Arguments to update or create a HistorialTicket.
     * @example
     * // Update or create a HistorialTicket
     * const historialTicket = await prisma.historialTicket.upsert({
     *   create: {
     *     // ... data to create a HistorialTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialTicket we want to update
     *   }
     * })
     */
    upsert<T extends HistorialTicketUpsertArgs>(args: SelectSubset<T, HistorialTicketUpsertArgs<ExtArgs>>): Prisma__HistorialTicketClient<$Result.GetResult<Prisma.$HistorialTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketCountArgs} args - Arguments to filter HistorialTickets to count.
     * @example
     * // Count the number of HistorialTickets
     * const count = await prisma.historialTicket.count({
     *   where: {
     *     // ... the filter for the HistorialTickets we want to count
     *   }
     * })
    **/
    count<T extends HistorialTicketCountArgs>(
      args?: Subset<T, HistorialTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistorialTicketAggregateArgs>(args: Subset<T, HistorialTicketAggregateArgs>): Prisma.PrismaPromise<GetHistorialTicketAggregateType<T>>

    /**
     * Group by HistorialTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistorialTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialTicketGroupByArgs['orderBy'] }
        : { orderBy?: HistorialTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistorialTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialTicket model
   */
  readonly fields: HistorialTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends HistorialTicket$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, HistorialTicket$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistorialTicket model
   */
  interface HistorialTicketFieldRefs {
    readonly id: FieldRef<"HistorialTicket", 'Int'>
    readonly idTicket: FieldRef<"HistorialTicket", 'Int'>
    readonly idUsuario: FieldRef<"HistorialTicket", 'Int'>
    readonly estadoAnterior: FieldRef<"HistorialTicket", 'EstadoTicket'>
    readonly estadoNuevo: FieldRef<"HistorialTicket", 'EstadoTicket'>
    readonly fecha: FieldRef<"HistorialTicket", 'DateTime'>
    readonly observacion: FieldRef<"HistorialTicket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistorialTicket findUnique
   */
  export type HistorialTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistorialTicket to fetch.
     */
    where: HistorialTicketWhereUniqueInput
  }

  /**
   * HistorialTicket findUniqueOrThrow
   */
  export type HistorialTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistorialTicket to fetch.
     */
    where: HistorialTicketWhereUniqueInput
  }

  /**
   * HistorialTicket findFirst
   */
  export type HistorialTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistorialTicket to fetch.
     */
    where?: HistorialTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialTickets to fetch.
     */
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialTickets.
     */
    cursor?: HistorialTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialTickets.
     */
    distinct?: HistorialTicketScalarFieldEnum | HistorialTicketScalarFieldEnum[]
  }

  /**
   * HistorialTicket findFirstOrThrow
   */
  export type HistorialTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistorialTicket to fetch.
     */
    where?: HistorialTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialTickets to fetch.
     */
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialTickets.
     */
    cursor?: HistorialTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialTickets.
     */
    distinct?: HistorialTicketScalarFieldEnum | HistorialTicketScalarFieldEnum[]
  }

  /**
   * HistorialTicket findMany
   */
  export type HistorialTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistorialTickets to fetch.
     */
    where?: HistorialTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialTickets to fetch.
     */
    orderBy?: HistorialTicketOrderByWithRelationInput | HistorialTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialTickets.
     */
    cursor?: HistorialTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialTickets.
     */
    skip?: number
    distinct?: HistorialTicketScalarFieldEnum | HistorialTicketScalarFieldEnum[]
  }

  /**
   * HistorialTicket create
   */
  export type HistorialTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialTicket.
     */
    data: XOR<HistorialTicketCreateInput, HistorialTicketUncheckedCreateInput>
  }

  /**
   * HistorialTicket createMany
   */
  export type HistorialTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialTickets.
     */
    data: HistorialTicketCreateManyInput | HistorialTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialTicket update
   */
  export type HistorialTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialTicket.
     */
    data: XOR<HistorialTicketUpdateInput, HistorialTicketUncheckedUpdateInput>
    /**
     * Choose, which HistorialTicket to update.
     */
    where: HistorialTicketWhereUniqueInput
  }

  /**
   * HistorialTicket updateMany
   */
  export type HistorialTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialTickets.
     */
    data: XOR<HistorialTicketUpdateManyMutationInput, HistorialTicketUncheckedUpdateManyInput>
    /**
     * Filter which HistorialTickets to update
     */
    where?: HistorialTicketWhereInput
    /**
     * Limit how many HistorialTickets to update.
     */
    limit?: number
  }

  /**
   * HistorialTicket upsert
   */
  export type HistorialTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialTicket to update in case it exists.
     */
    where: HistorialTicketWhereUniqueInput
    /**
     * In case the HistorialTicket found by the `where` argument doesn't exist, create a new HistorialTicket with this data.
     */
    create: XOR<HistorialTicketCreateInput, HistorialTicketUncheckedCreateInput>
    /**
     * In case the HistorialTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialTicketUpdateInput, HistorialTicketUncheckedUpdateInput>
  }

  /**
   * HistorialTicket delete
   */
  export type HistorialTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
    /**
     * Filter which HistorialTicket to delete.
     */
    where: HistorialTicketWhereUniqueInput
  }

  /**
   * HistorialTicket deleteMany
   */
  export type HistorialTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialTickets to delete
     */
    where?: HistorialTicketWhereInput
    /**
     * Limit how many HistorialTickets to delete.
     */
    limit?: number
  }

  /**
   * HistorialTicket.usuario
   */
  export type HistorialTicket$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * HistorialTicket without action
   */
  export type HistorialTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialTicket
     */
    select?: HistorialTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialTicket
     */
    omit?: HistorialTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialTicketInclude<ExtArgs> | null
  }


  /**
   * Model Ticket_Imagen
   */

  export type AggregateTicket_Imagen = {
    _count: Ticket_ImagenCountAggregateOutputType | null
    _avg: Ticket_ImagenAvgAggregateOutputType | null
    _sum: Ticket_ImagenSumAggregateOutputType | null
    _min: Ticket_ImagenMinAggregateOutputType | null
    _max: Ticket_ImagenMaxAggregateOutputType | null
  }

  export type Ticket_ImagenAvgAggregateOutputType = {
    id: number | null
    idTicket: number | null
  }

  export type Ticket_ImagenSumAggregateOutputType = {
    id: number | null
    idTicket: number | null
  }

  export type Ticket_ImagenMinAggregateOutputType = {
    id: number | null
    idTicket: number | null
    imagen: Uint8Array | null
    url: string | null
  }

  export type Ticket_ImagenMaxAggregateOutputType = {
    id: number | null
    idTicket: number | null
    imagen: Uint8Array | null
    url: string | null
  }

  export type Ticket_ImagenCountAggregateOutputType = {
    id: number
    idTicket: number
    imagen: number
    url: number
    _all: number
  }


  export type Ticket_ImagenAvgAggregateInputType = {
    id?: true
    idTicket?: true
  }

  export type Ticket_ImagenSumAggregateInputType = {
    id?: true
    idTicket?: true
  }

  export type Ticket_ImagenMinAggregateInputType = {
    id?: true
    idTicket?: true
    imagen?: true
    url?: true
  }

  export type Ticket_ImagenMaxAggregateInputType = {
    id?: true
    idTicket?: true
    imagen?: true
    url?: true
  }

  export type Ticket_ImagenCountAggregateInputType = {
    id?: true
    idTicket?: true
    imagen?: true
    url?: true
    _all?: true
  }

  export type Ticket_ImagenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_Imagen to aggregate.
     */
    where?: Ticket_ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_Imagens to fetch.
     */
    orderBy?: Ticket_ImagenOrderByWithRelationInput | Ticket_ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ticket_ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ticket_Imagens
    **/
    _count?: true | Ticket_ImagenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_ImagenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_ImagenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_ImagenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_ImagenMaxAggregateInputType
  }

  export type GetTicket_ImagenAggregateType<T extends Ticket_ImagenAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_Imagen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_Imagen[P]>
      : GetScalarType<T[P], AggregateTicket_Imagen[P]>
  }




  export type Ticket_ImagenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ticket_ImagenWhereInput
    orderBy?: Ticket_ImagenOrderByWithAggregationInput | Ticket_ImagenOrderByWithAggregationInput[]
    by: Ticket_ImagenScalarFieldEnum[] | Ticket_ImagenScalarFieldEnum
    having?: Ticket_ImagenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_ImagenCountAggregateInputType | true
    _avg?: Ticket_ImagenAvgAggregateInputType
    _sum?: Ticket_ImagenSumAggregateInputType
    _min?: Ticket_ImagenMinAggregateInputType
    _max?: Ticket_ImagenMaxAggregateInputType
  }

  export type Ticket_ImagenGroupByOutputType = {
    id: number
    idTicket: number
    imagen: Uint8Array | null
    url: string | null
    _count: Ticket_ImagenCountAggregateOutputType | null
    _avg: Ticket_ImagenAvgAggregateOutputType | null
    _sum: Ticket_ImagenSumAggregateOutputType | null
    _min: Ticket_ImagenMinAggregateOutputType | null
    _max: Ticket_ImagenMaxAggregateOutputType | null
  }

  type GetTicket_ImagenGroupByPayload<T extends Ticket_ImagenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_ImagenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_ImagenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_ImagenGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_ImagenGroupByOutputType[P]>
        }
      >
    >


  export type Ticket_ImagenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTicket?: boolean
    imagen?: boolean
    url?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_Imagen"]>



  export type Ticket_ImagenSelectScalar = {
    id?: boolean
    idTicket?: boolean
    imagen?: boolean
    url?: boolean
  }

  export type Ticket_ImagenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTicket" | "imagen" | "url", ExtArgs["result"]["ticket_Imagen"]>
  export type Ticket_ImagenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $Ticket_ImagenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket_Imagen"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTicket: number
      imagen: Uint8Array | null
      url: string | null
    }, ExtArgs["result"]["ticket_Imagen"]>
    composites: {}
  }

  type Ticket_ImagenGetPayload<S extends boolean | null | undefined | Ticket_ImagenDefaultArgs> = $Result.GetResult<Prisma.$Ticket_ImagenPayload, S>

  type Ticket_ImagenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Ticket_ImagenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ticket_ImagenCountAggregateInputType | true
    }

  export interface Ticket_ImagenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket_Imagen'], meta: { name: 'Ticket_Imagen' } }
    /**
     * Find zero or one Ticket_Imagen that matches the filter.
     * @param {Ticket_ImagenFindUniqueArgs} args - Arguments to find a Ticket_Imagen
     * @example
     * // Get one Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ticket_ImagenFindUniqueArgs>(args: SelectSubset<T, Ticket_ImagenFindUniqueArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket_Imagen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Ticket_ImagenFindUniqueOrThrowArgs} args - Arguments to find a Ticket_Imagen
     * @example
     * // Get one Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ticket_ImagenFindUniqueOrThrowArgs>(args: SelectSubset<T, Ticket_ImagenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_Imagen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenFindFirstArgs} args - Arguments to find a Ticket_Imagen
     * @example
     * // Get one Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ticket_ImagenFindFirstArgs>(args?: SelectSubset<T, Ticket_ImagenFindFirstArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_Imagen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenFindFirstOrThrowArgs} args - Arguments to find a Ticket_Imagen
     * @example
     * // Get one Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ticket_ImagenFindFirstOrThrowArgs>(args?: SelectSubset<T, Ticket_ImagenFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticket_Imagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_Imagens
     * const ticket_Imagens = await prisma.ticket_Imagen.findMany()
     * 
     * // Get first 10 Ticket_Imagens
     * const ticket_Imagens = await prisma.ticket_Imagen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticket_ImagenWithIdOnly = await prisma.ticket_Imagen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Ticket_ImagenFindManyArgs>(args?: SelectSubset<T, Ticket_ImagenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket_Imagen.
     * @param {Ticket_ImagenCreateArgs} args - Arguments to create a Ticket_Imagen.
     * @example
     * // Create one Ticket_Imagen
     * const Ticket_Imagen = await prisma.ticket_Imagen.create({
     *   data: {
     *     // ... data to create a Ticket_Imagen
     *   }
     * })
     * 
     */
    create<T extends Ticket_ImagenCreateArgs>(args: SelectSubset<T, Ticket_ImagenCreateArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ticket_Imagens.
     * @param {Ticket_ImagenCreateManyArgs} args - Arguments to create many Ticket_Imagens.
     * @example
     * // Create many Ticket_Imagens
     * const ticket_Imagen = await prisma.ticket_Imagen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ticket_ImagenCreateManyArgs>(args?: SelectSubset<T, Ticket_ImagenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_Imagen.
     * @param {Ticket_ImagenDeleteArgs} args - Arguments to delete one Ticket_Imagen.
     * @example
     * // Delete one Ticket_Imagen
     * const Ticket_Imagen = await prisma.ticket_Imagen.delete({
     *   where: {
     *     // ... filter to delete one Ticket_Imagen
     *   }
     * })
     * 
     */
    delete<T extends Ticket_ImagenDeleteArgs>(args: SelectSubset<T, Ticket_ImagenDeleteArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket_Imagen.
     * @param {Ticket_ImagenUpdateArgs} args - Arguments to update one Ticket_Imagen.
     * @example
     * // Update one Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ticket_ImagenUpdateArgs>(args: SelectSubset<T, Ticket_ImagenUpdateArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ticket_Imagens.
     * @param {Ticket_ImagenDeleteManyArgs} args - Arguments to filter Ticket_Imagens to delete.
     * @example
     * // Delete a few Ticket_Imagens
     * const { count } = await prisma.ticket_Imagen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ticket_ImagenDeleteManyArgs>(args?: SelectSubset<T, Ticket_ImagenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_Imagens
     * const ticket_Imagen = await prisma.ticket_Imagen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ticket_ImagenUpdateManyArgs>(args: SelectSubset<T, Ticket_ImagenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_Imagen.
     * @param {Ticket_ImagenUpsertArgs} args - Arguments to update or create a Ticket_Imagen.
     * @example
     * // Update or create a Ticket_Imagen
     * const ticket_Imagen = await prisma.ticket_Imagen.upsert({
     *   create: {
     *     // ... data to create a Ticket_Imagen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_Imagen we want to update
     *   }
     * })
     */
    upsert<T extends Ticket_ImagenUpsertArgs>(args: SelectSubset<T, Ticket_ImagenUpsertArgs<ExtArgs>>): Prisma__Ticket_ImagenClient<$Result.GetResult<Prisma.$Ticket_ImagenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ticket_Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenCountArgs} args - Arguments to filter Ticket_Imagens to count.
     * @example
     * // Count the number of Ticket_Imagens
     * const count = await prisma.ticket_Imagen.count({
     *   where: {
     *     // ... the filter for the Ticket_Imagens we want to count
     *   }
     * })
    **/
    count<T extends Ticket_ImagenCountArgs>(
      args?: Subset<T, Ticket_ImagenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_ImagenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_ImagenAggregateArgs>(args: Subset<T, Ticket_ImagenAggregateArgs>): Prisma.PrismaPromise<GetTicket_ImagenAggregateType<T>>

    /**
     * Group by Ticket_Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_ImagenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ticket_ImagenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ticket_ImagenGroupByArgs['orderBy'] }
        : { orderBy?: Ticket_ImagenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ticket_ImagenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_ImagenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket_Imagen model
   */
  readonly fields: Ticket_ImagenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket_Imagen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ticket_ImagenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket_Imagen model
   */
  interface Ticket_ImagenFieldRefs {
    readonly id: FieldRef<"Ticket_Imagen", 'Int'>
    readonly idTicket: FieldRef<"Ticket_Imagen", 'Int'>
    readonly imagen: FieldRef<"Ticket_Imagen", 'Bytes'>
    readonly url: FieldRef<"Ticket_Imagen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket_Imagen findUnique
   */
  export type Ticket_ImagenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_Imagen to fetch.
     */
    where: Ticket_ImagenWhereUniqueInput
  }

  /**
   * Ticket_Imagen findUniqueOrThrow
   */
  export type Ticket_ImagenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_Imagen to fetch.
     */
    where: Ticket_ImagenWhereUniqueInput
  }

  /**
   * Ticket_Imagen findFirst
   */
  export type Ticket_ImagenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_Imagen to fetch.
     */
    where?: Ticket_ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_Imagens to fetch.
     */
    orderBy?: Ticket_ImagenOrderByWithRelationInput | Ticket_ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_Imagens.
     */
    cursor?: Ticket_ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_Imagens.
     */
    distinct?: Ticket_ImagenScalarFieldEnum | Ticket_ImagenScalarFieldEnum[]
  }

  /**
   * Ticket_Imagen findFirstOrThrow
   */
  export type Ticket_ImagenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_Imagen to fetch.
     */
    where?: Ticket_ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_Imagens to fetch.
     */
    orderBy?: Ticket_ImagenOrderByWithRelationInput | Ticket_ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ticket_Imagens.
     */
    cursor?: Ticket_ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ticket_Imagens.
     */
    distinct?: Ticket_ImagenScalarFieldEnum | Ticket_ImagenScalarFieldEnum[]
  }

  /**
   * Ticket_Imagen findMany
   */
  export type Ticket_ImagenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Ticket_Imagens to fetch.
     */
    where?: Ticket_ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ticket_Imagens to fetch.
     */
    orderBy?: Ticket_ImagenOrderByWithRelationInput | Ticket_ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ticket_Imagens.
     */
    cursor?: Ticket_ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ticket_Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ticket_Imagens.
     */
    skip?: number
    distinct?: Ticket_ImagenScalarFieldEnum | Ticket_ImagenScalarFieldEnum[]
  }

  /**
   * Ticket_Imagen create
   */
  export type Ticket_ImagenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket_Imagen.
     */
    data: XOR<Ticket_ImagenCreateInput, Ticket_ImagenUncheckedCreateInput>
  }

  /**
   * Ticket_Imagen createMany
   */
  export type Ticket_ImagenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ticket_Imagens.
     */
    data: Ticket_ImagenCreateManyInput | Ticket_ImagenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket_Imagen update
   */
  export type Ticket_ImagenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket_Imagen.
     */
    data: XOR<Ticket_ImagenUpdateInput, Ticket_ImagenUncheckedUpdateInput>
    /**
     * Choose, which Ticket_Imagen to update.
     */
    where: Ticket_ImagenWhereUniqueInput
  }

  /**
   * Ticket_Imagen updateMany
   */
  export type Ticket_ImagenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ticket_Imagens.
     */
    data: XOR<Ticket_ImagenUpdateManyMutationInput, Ticket_ImagenUncheckedUpdateManyInput>
    /**
     * Filter which Ticket_Imagens to update
     */
    where?: Ticket_ImagenWhereInput
    /**
     * Limit how many Ticket_Imagens to update.
     */
    limit?: number
  }

  /**
   * Ticket_Imagen upsert
   */
  export type Ticket_ImagenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket_Imagen to update in case it exists.
     */
    where: Ticket_ImagenWhereUniqueInput
    /**
     * In case the Ticket_Imagen found by the `where` argument doesn't exist, create a new Ticket_Imagen with this data.
     */
    create: XOR<Ticket_ImagenCreateInput, Ticket_ImagenUncheckedCreateInput>
    /**
     * In case the Ticket_Imagen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ticket_ImagenUpdateInput, Ticket_ImagenUncheckedUpdateInput>
  }

  /**
   * Ticket_Imagen delete
   */
  export type Ticket_ImagenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
    /**
     * Filter which Ticket_Imagen to delete.
     */
    where: Ticket_ImagenWhereUniqueInput
  }

  /**
   * Ticket_Imagen deleteMany
   */
  export type Ticket_ImagenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket_Imagens to delete
     */
    where?: Ticket_ImagenWhereInput
    /**
     * Limit how many Ticket_Imagens to delete.
     */
    limit?: number
  }

  /**
   * Ticket_Imagen without action
   */
  export type Ticket_ImagenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_Imagen
     */
    select?: Ticket_ImagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket_Imagen
     */
    omit?: Ticket_ImagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ticket_ImagenInclude<ExtArgs> | null
  }


  /**
   * Model Asignacion
   */

  export type AggregateAsignacion = {
    _count: AsignacionCountAggregateOutputType | null
    _avg: AsignacionAvgAggregateOutputType | null
    _sum: AsignacionSumAggregateOutputType | null
    _min: AsignacionMinAggregateOutputType | null
    _max: AsignacionMaxAggregateOutputType | null
  }

  export type AsignacionAvgAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idTecnico: number | null
    idRegla: number | null
    puntajePrioridad: number | null
  }

  export type AsignacionSumAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idTecnico: number | null
    idRegla: number | null
    puntajePrioridad: number | null
  }

  export type AsignacionMinAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idTecnico: number | null
    idRegla: number | null
    fecha: Date | null
    puntajePrioridad: number | null
    motivo: string | null
    activo: boolean | null
    metodo: $Enums.MetodoAsignacion | null
  }

  export type AsignacionMaxAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idTecnico: number | null
    idRegla: number | null
    fecha: Date | null
    puntajePrioridad: number | null
    motivo: string | null
    activo: boolean | null
    metodo: $Enums.MetodoAsignacion | null
  }

  export type AsignacionCountAggregateOutputType = {
    id: number
    idTicket: number
    idTecnico: number
    idRegla: number
    fecha: number
    puntajePrioridad: number
    motivo: number
    activo: number
    metodo: number
    _all: number
  }


  export type AsignacionAvgAggregateInputType = {
    id?: true
    idTicket?: true
    idTecnico?: true
    idRegla?: true
    puntajePrioridad?: true
  }

  export type AsignacionSumAggregateInputType = {
    id?: true
    idTicket?: true
    idTecnico?: true
    idRegla?: true
    puntajePrioridad?: true
  }

  export type AsignacionMinAggregateInputType = {
    id?: true
    idTicket?: true
    idTecnico?: true
    idRegla?: true
    fecha?: true
    puntajePrioridad?: true
    motivo?: true
    activo?: true
    metodo?: true
  }

  export type AsignacionMaxAggregateInputType = {
    id?: true
    idTicket?: true
    idTecnico?: true
    idRegla?: true
    fecha?: true
    puntajePrioridad?: true
    motivo?: true
    activo?: true
    metodo?: true
  }

  export type AsignacionCountAggregateInputType = {
    id?: true
    idTicket?: true
    idTecnico?: true
    idRegla?: true
    fecha?: true
    puntajePrioridad?: true
    motivo?: true
    activo?: true
    metodo?: true
    _all?: true
  }

  export type AsignacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asignacion to aggregate.
     */
    where?: AsignacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignacions to fetch.
     */
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asignacions
    **/
    _count?: true | AsignacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignacionMaxAggregateInputType
  }

  export type GetAsignacionAggregateType<T extends AsignacionAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignacion[P]>
      : GetScalarType<T[P], AggregateAsignacion[P]>
  }




  export type AsignacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionWhereInput
    orderBy?: AsignacionOrderByWithAggregationInput | AsignacionOrderByWithAggregationInput[]
    by: AsignacionScalarFieldEnum[] | AsignacionScalarFieldEnum
    having?: AsignacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignacionCountAggregateInputType | true
    _avg?: AsignacionAvgAggregateInputType
    _sum?: AsignacionSumAggregateInputType
    _min?: AsignacionMinAggregateInputType
    _max?: AsignacionMaxAggregateInputType
  }

  export type AsignacionGroupByOutputType = {
    id: number
    idTicket: number
    idTecnico: number
    idRegla: number | null
    fecha: Date
    puntajePrioridad: number
    motivo: string | null
    activo: boolean
    metodo: $Enums.MetodoAsignacion | null
    _count: AsignacionCountAggregateOutputType | null
    _avg: AsignacionAvgAggregateOutputType | null
    _sum: AsignacionSumAggregateOutputType | null
    _min: AsignacionMinAggregateOutputType | null
    _max: AsignacionMaxAggregateOutputType | null
  }

  type GetAsignacionGroupByPayload<T extends AsignacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignacionGroupByOutputType[P]>
            : GetScalarType<T[P], AsignacionGroupByOutputType[P]>
        }
      >
    >


  export type AsignacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTicket?: boolean
    idTecnico?: boolean
    idRegla?: boolean
    fecha?: boolean
    puntajePrioridad?: boolean
    motivo?: boolean
    activo?: boolean
    metodo?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
    regla?: boolean | Asignacion$reglaArgs<ExtArgs>
  }, ExtArgs["result"]["asignacion"]>



  export type AsignacionSelectScalar = {
    id?: boolean
    idTicket?: boolean
    idTecnico?: boolean
    idRegla?: boolean
    fecha?: boolean
    puntajePrioridad?: boolean
    motivo?: boolean
    activo?: boolean
    metodo?: boolean
  }

  export type AsignacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTicket" | "idTecnico" | "idRegla" | "fecha" | "puntajePrioridad" | "motivo" | "activo" | "metodo", ExtArgs["result"]["asignacion"]>
  export type AsignacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
    regla?: boolean | Asignacion$reglaArgs<ExtArgs>
  }

  export type $AsignacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asignacion"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      tecnico: Prisma.$TecnicoPayload<ExtArgs>
      regla: Prisma.$Regla_AutotriagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTicket: number
      idTecnico: number
      idRegla: number | null
      fecha: Date
      puntajePrioridad: number
      motivo: string | null
      activo: boolean
      metodo: $Enums.MetodoAsignacion | null
    }, ExtArgs["result"]["asignacion"]>
    composites: {}
  }

  type AsignacionGetPayload<S extends boolean | null | undefined | AsignacionDefaultArgs> = $Result.GetResult<Prisma.$AsignacionPayload, S>

  type AsignacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignacionCountAggregateInputType | true
    }

  export interface AsignacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asignacion'], meta: { name: 'Asignacion' } }
    /**
     * Find zero or one Asignacion that matches the filter.
     * @param {AsignacionFindUniqueArgs} args - Arguments to find a Asignacion
     * @example
     * // Get one Asignacion
     * const asignacion = await prisma.asignacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignacionFindUniqueArgs>(args: SelectSubset<T, AsignacionFindUniqueArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asignacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignacionFindUniqueOrThrowArgs} args - Arguments to find a Asignacion
     * @example
     * // Get one Asignacion
     * const asignacion = await prisma.asignacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignacionFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionFindFirstArgs} args - Arguments to find a Asignacion
     * @example
     * // Get one Asignacion
     * const asignacion = await prisma.asignacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignacionFindFirstArgs>(args?: SelectSubset<T, AsignacionFindFirstArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionFindFirstOrThrowArgs} args - Arguments to find a Asignacion
     * @example
     * // Get one Asignacion
     * const asignacion = await prisma.asignacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignacionFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asignacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asignacions
     * const asignacions = await prisma.asignacion.findMany()
     * 
     * // Get first 10 Asignacions
     * const asignacions = await prisma.asignacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asignacionWithIdOnly = await prisma.asignacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsignacionFindManyArgs>(args?: SelectSubset<T, AsignacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asignacion.
     * @param {AsignacionCreateArgs} args - Arguments to create a Asignacion.
     * @example
     * // Create one Asignacion
     * const Asignacion = await prisma.asignacion.create({
     *   data: {
     *     // ... data to create a Asignacion
     *   }
     * })
     * 
     */
    create<T extends AsignacionCreateArgs>(args: SelectSubset<T, AsignacionCreateArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asignacions.
     * @param {AsignacionCreateManyArgs} args - Arguments to create many Asignacions.
     * @example
     * // Create many Asignacions
     * const asignacion = await prisma.asignacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignacionCreateManyArgs>(args?: SelectSubset<T, AsignacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asignacion.
     * @param {AsignacionDeleteArgs} args - Arguments to delete one Asignacion.
     * @example
     * // Delete one Asignacion
     * const Asignacion = await prisma.asignacion.delete({
     *   where: {
     *     // ... filter to delete one Asignacion
     *   }
     * })
     * 
     */
    delete<T extends AsignacionDeleteArgs>(args: SelectSubset<T, AsignacionDeleteArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asignacion.
     * @param {AsignacionUpdateArgs} args - Arguments to update one Asignacion.
     * @example
     * // Update one Asignacion
     * const asignacion = await prisma.asignacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignacionUpdateArgs>(args: SelectSubset<T, AsignacionUpdateArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asignacions.
     * @param {AsignacionDeleteManyArgs} args - Arguments to filter Asignacions to delete.
     * @example
     * // Delete a few Asignacions
     * const { count } = await prisma.asignacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignacionDeleteManyArgs>(args?: SelectSubset<T, AsignacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asignacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asignacions
     * const asignacion = await prisma.asignacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignacionUpdateManyArgs>(args: SelectSubset<T, AsignacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asignacion.
     * @param {AsignacionUpsertArgs} args - Arguments to update or create a Asignacion.
     * @example
     * // Update or create a Asignacion
     * const asignacion = await prisma.asignacion.upsert({
     *   create: {
     *     // ... data to create a Asignacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asignacion we want to update
     *   }
     * })
     */
    upsert<T extends AsignacionUpsertArgs>(args: SelectSubset<T, AsignacionUpsertArgs<ExtArgs>>): Prisma__AsignacionClient<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asignacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionCountArgs} args - Arguments to filter Asignacions to count.
     * @example
     * // Count the number of Asignacions
     * const count = await prisma.asignacion.count({
     *   where: {
     *     // ... the filter for the Asignacions we want to count
     *   }
     * })
    **/
    count<T extends AsignacionCountArgs>(
      args?: Subset<T, AsignacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asignacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsignacionAggregateArgs>(args: Subset<T, AsignacionAggregateArgs>): Prisma.PrismaPromise<GetAsignacionAggregateType<T>>

    /**
     * Group by Asignacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsignacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignacionGroupByArgs['orderBy'] }
        : { orderBy?: AsignacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsignacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asignacion model
   */
  readonly fields: AsignacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asignacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends TecnicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TecnicoDefaultArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    regla<T extends Asignacion$reglaArgs<ExtArgs> = {}>(args?: Subset<T, Asignacion$reglaArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asignacion model
   */
  interface AsignacionFieldRefs {
    readonly id: FieldRef<"Asignacion", 'Int'>
    readonly idTicket: FieldRef<"Asignacion", 'Int'>
    readonly idTecnico: FieldRef<"Asignacion", 'Int'>
    readonly idRegla: FieldRef<"Asignacion", 'Int'>
    readonly fecha: FieldRef<"Asignacion", 'DateTime'>
    readonly puntajePrioridad: FieldRef<"Asignacion", 'Int'>
    readonly motivo: FieldRef<"Asignacion", 'String'>
    readonly activo: FieldRef<"Asignacion", 'Boolean'>
    readonly metodo: FieldRef<"Asignacion", 'MetodoAsignacion'>
  }
    

  // Custom InputTypes
  /**
   * Asignacion findUnique
   */
  export type AsignacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter, which Asignacion to fetch.
     */
    where: AsignacionWhereUniqueInput
  }

  /**
   * Asignacion findUniqueOrThrow
   */
  export type AsignacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter, which Asignacion to fetch.
     */
    where: AsignacionWhereUniqueInput
  }

  /**
   * Asignacion findFirst
   */
  export type AsignacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter, which Asignacion to fetch.
     */
    where?: AsignacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignacions to fetch.
     */
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asignacions.
     */
    cursor?: AsignacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asignacions.
     */
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Asignacion findFirstOrThrow
   */
  export type AsignacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter, which Asignacion to fetch.
     */
    where?: AsignacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignacions to fetch.
     */
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asignacions.
     */
    cursor?: AsignacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asignacions.
     */
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Asignacion findMany
   */
  export type AsignacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter, which Asignacions to fetch.
     */
    where?: AsignacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asignacions to fetch.
     */
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asignacions.
     */
    cursor?: AsignacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asignacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asignacions.
     */
    skip?: number
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Asignacion create
   */
  export type AsignacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Asignacion.
     */
    data: XOR<AsignacionCreateInput, AsignacionUncheckedCreateInput>
  }

  /**
   * Asignacion createMany
   */
  export type AsignacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asignacions.
     */
    data: AsignacionCreateManyInput | AsignacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asignacion update
   */
  export type AsignacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Asignacion.
     */
    data: XOR<AsignacionUpdateInput, AsignacionUncheckedUpdateInput>
    /**
     * Choose, which Asignacion to update.
     */
    where: AsignacionWhereUniqueInput
  }

  /**
   * Asignacion updateMany
   */
  export type AsignacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asignacions.
     */
    data: XOR<AsignacionUpdateManyMutationInput, AsignacionUncheckedUpdateManyInput>
    /**
     * Filter which Asignacions to update
     */
    where?: AsignacionWhereInput
    /**
     * Limit how many Asignacions to update.
     */
    limit?: number
  }

  /**
   * Asignacion upsert
   */
  export type AsignacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Asignacion to update in case it exists.
     */
    where: AsignacionWhereUniqueInput
    /**
     * In case the Asignacion found by the `where` argument doesn't exist, create a new Asignacion with this data.
     */
    create: XOR<AsignacionCreateInput, AsignacionUncheckedCreateInput>
    /**
     * In case the Asignacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignacionUpdateInput, AsignacionUncheckedUpdateInput>
  }

  /**
   * Asignacion delete
   */
  export type AsignacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    /**
     * Filter which Asignacion to delete.
     */
    where: AsignacionWhereUniqueInput
  }

  /**
   * Asignacion deleteMany
   */
  export type AsignacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asignacions to delete
     */
    where?: AsignacionWhereInput
    /**
     * Limit how many Asignacions to delete.
     */
    limit?: number
  }

  /**
   * Asignacion.regla
   */
  export type Asignacion$reglaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    where?: Regla_AutotriageWhereInput
  }

  /**
   * Asignacion without action
   */
  export type AsignacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
  }


  /**
   * Model Valoracion
   */

  export type AggregateValoracion = {
    _count: ValoracionCountAggregateOutputType | null
    _avg: ValoracionAvgAggregateOutputType | null
    _sum: ValoracionSumAggregateOutputType | null
    _min: ValoracionMinAggregateOutputType | null
    _max: ValoracionMaxAggregateOutputType | null
  }

  export type ValoracionAvgAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    puntaje: number | null
  }

  export type ValoracionSumAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    puntaje: number | null
  }

  export type ValoracionMinAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    puntaje: number | null
    comentario: string | null
    fecha: Date | null
  }

  export type ValoracionMaxAggregateOutputType = {
    id: number | null
    idTicket: number | null
    idUsuario: number | null
    puntaje: number | null
    comentario: string | null
    fecha: Date | null
  }

  export type ValoracionCountAggregateOutputType = {
    id: number
    idTicket: number
    idUsuario: number
    puntaje: number
    comentario: number
    fecha: number
    _all: number
  }


  export type ValoracionAvgAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    puntaje?: true
  }

  export type ValoracionSumAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    puntaje?: true
  }

  export type ValoracionMinAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    puntaje?: true
    comentario?: true
    fecha?: true
  }

  export type ValoracionMaxAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    puntaje?: true
    comentario?: true
    fecha?: true
  }

  export type ValoracionCountAggregateInputType = {
    id?: true
    idTicket?: true
    idUsuario?: true
    puntaje?: true
    comentario?: true
    fecha?: true
    _all?: true
  }

  export type ValoracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valoracion to aggregate.
     */
    where?: ValoracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valoracions to fetch.
     */
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValoracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valoracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valoracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Valoracions
    **/
    _count?: true | ValoracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValoracionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValoracionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValoracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValoracionMaxAggregateInputType
  }

  export type GetValoracionAggregateType<T extends ValoracionAggregateArgs> = {
        [P in keyof T & keyof AggregateValoracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValoracion[P]>
      : GetScalarType<T[P], AggregateValoracion[P]>
  }




  export type ValoracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValoracionWhereInput
    orderBy?: ValoracionOrderByWithAggregationInput | ValoracionOrderByWithAggregationInput[]
    by: ValoracionScalarFieldEnum[] | ValoracionScalarFieldEnum
    having?: ValoracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValoracionCountAggregateInputType | true
    _avg?: ValoracionAvgAggregateInputType
    _sum?: ValoracionSumAggregateInputType
    _min?: ValoracionMinAggregateInputType
    _max?: ValoracionMaxAggregateInputType
  }

  export type ValoracionGroupByOutputType = {
    id: number
    idTicket: number
    idUsuario: number
    puntaje: number
    comentario: string | null
    fecha: Date
    _count: ValoracionCountAggregateOutputType | null
    _avg: ValoracionAvgAggregateOutputType | null
    _sum: ValoracionSumAggregateOutputType | null
    _min: ValoracionMinAggregateOutputType | null
    _max: ValoracionMaxAggregateOutputType | null
  }

  type GetValoracionGroupByPayload<T extends ValoracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValoracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValoracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValoracionGroupByOutputType[P]>
            : GetScalarType<T[P], ValoracionGroupByOutputType[P]>
        }
      >
    >


  export type ValoracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTicket?: boolean
    idUsuario?: boolean
    puntaje?: boolean
    comentario?: boolean
    fecha?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valoracion"]>



  export type ValoracionSelectScalar = {
    id?: boolean
    idTicket?: boolean
    idUsuario?: boolean
    puntaje?: boolean
    comentario?: boolean
    fecha?: boolean
  }

  export type ValoracionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTicket" | "idUsuario" | "puntaje" | "comentario" | "fecha", ExtArgs["result"]["valoracion"]>
  export type ValoracionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ValoracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Valoracion"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTicket: number
      idUsuario: number
      puntaje: number
      comentario: string | null
      fecha: Date
    }, ExtArgs["result"]["valoracion"]>
    composites: {}
  }

  type ValoracionGetPayload<S extends boolean | null | undefined | ValoracionDefaultArgs> = $Result.GetResult<Prisma.$ValoracionPayload, S>

  type ValoracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValoracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValoracionCountAggregateInputType | true
    }

  export interface ValoracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Valoracion'], meta: { name: 'Valoracion' } }
    /**
     * Find zero or one Valoracion that matches the filter.
     * @param {ValoracionFindUniqueArgs} args - Arguments to find a Valoracion
     * @example
     * // Get one Valoracion
     * const valoracion = await prisma.valoracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValoracionFindUniqueArgs>(args: SelectSubset<T, ValoracionFindUniqueArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Valoracion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValoracionFindUniqueOrThrowArgs} args - Arguments to find a Valoracion
     * @example
     * // Get one Valoracion
     * const valoracion = await prisma.valoracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValoracionFindUniqueOrThrowArgs>(args: SelectSubset<T, ValoracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valoracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionFindFirstArgs} args - Arguments to find a Valoracion
     * @example
     * // Get one Valoracion
     * const valoracion = await prisma.valoracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValoracionFindFirstArgs>(args?: SelectSubset<T, ValoracionFindFirstArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valoracion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionFindFirstOrThrowArgs} args - Arguments to find a Valoracion
     * @example
     * // Get one Valoracion
     * const valoracion = await prisma.valoracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValoracionFindFirstOrThrowArgs>(args?: SelectSubset<T, ValoracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Valoracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Valoracions
     * const valoracions = await prisma.valoracion.findMany()
     * 
     * // Get first 10 Valoracions
     * const valoracions = await prisma.valoracion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valoracionWithIdOnly = await prisma.valoracion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValoracionFindManyArgs>(args?: SelectSubset<T, ValoracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Valoracion.
     * @param {ValoracionCreateArgs} args - Arguments to create a Valoracion.
     * @example
     * // Create one Valoracion
     * const Valoracion = await prisma.valoracion.create({
     *   data: {
     *     // ... data to create a Valoracion
     *   }
     * })
     * 
     */
    create<T extends ValoracionCreateArgs>(args: SelectSubset<T, ValoracionCreateArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Valoracions.
     * @param {ValoracionCreateManyArgs} args - Arguments to create many Valoracions.
     * @example
     * // Create many Valoracions
     * const valoracion = await prisma.valoracion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValoracionCreateManyArgs>(args?: SelectSubset<T, ValoracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Valoracion.
     * @param {ValoracionDeleteArgs} args - Arguments to delete one Valoracion.
     * @example
     * // Delete one Valoracion
     * const Valoracion = await prisma.valoracion.delete({
     *   where: {
     *     // ... filter to delete one Valoracion
     *   }
     * })
     * 
     */
    delete<T extends ValoracionDeleteArgs>(args: SelectSubset<T, ValoracionDeleteArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Valoracion.
     * @param {ValoracionUpdateArgs} args - Arguments to update one Valoracion.
     * @example
     * // Update one Valoracion
     * const valoracion = await prisma.valoracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValoracionUpdateArgs>(args: SelectSubset<T, ValoracionUpdateArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Valoracions.
     * @param {ValoracionDeleteManyArgs} args - Arguments to filter Valoracions to delete.
     * @example
     * // Delete a few Valoracions
     * const { count } = await prisma.valoracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValoracionDeleteManyArgs>(args?: SelectSubset<T, ValoracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valoracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Valoracions
     * const valoracion = await prisma.valoracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValoracionUpdateManyArgs>(args: SelectSubset<T, ValoracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Valoracion.
     * @param {ValoracionUpsertArgs} args - Arguments to update or create a Valoracion.
     * @example
     * // Update or create a Valoracion
     * const valoracion = await prisma.valoracion.upsert({
     *   create: {
     *     // ... data to create a Valoracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Valoracion we want to update
     *   }
     * })
     */
    upsert<T extends ValoracionUpsertArgs>(args: SelectSubset<T, ValoracionUpsertArgs<ExtArgs>>): Prisma__ValoracionClient<$Result.GetResult<Prisma.$ValoracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Valoracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionCountArgs} args - Arguments to filter Valoracions to count.
     * @example
     * // Count the number of Valoracions
     * const count = await prisma.valoracion.count({
     *   where: {
     *     // ... the filter for the Valoracions we want to count
     *   }
     * })
    **/
    count<T extends ValoracionCountArgs>(
      args?: Subset<T, ValoracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValoracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Valoracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValoracionAggregateArgs>(args: Subset<T, ValoracionAggregateArgs>): Prisma.PrismaPromise<GetValoracionAggregateType<T>>

    /**
     * Group by Valoracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValoracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValoracionGroupByArgs['orderBy'] }
        : { orderBy?: ValoracionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValoracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValoracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Valoracion model
   */
  readonly fields: ValoracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Valoracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValoracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Valoracion model
   */
  interface ValoracionFieldRefs {
    readonly id: FieldRef<"Valoracion", 'Int'>
    readonly idTicket: FieldRef<"Valoracion", 'Int'>
    readonly idUsuario: FieldRef<"Valoracion", 'Int'>
    readonly puntaje: FieldRef<"Valoracion", 'Int'>
    readonly comentario: FieldRef<"Valoracion", 'String'>
    readonly fecha: FieldRef<"Valoracion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Valoracion findUnique
   */
  export type ValoracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter, which Valoracion to fetch.
     */
    where: ValoracionWhereUniqueInput
  }

  /**
   * Valoracion findUniqueOrThrow
   */
  export type ValoracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter, which Valoracion to fetch.
     */
    where: ValoracionWhereUniqueInput
  }

  /**
   * Valoracion findFirst
   */
  export type ValoracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter, which Valoracion to fetch.
     */
    where?: ValoracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valoracions to fetch.
     */
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valoracions.
     */
    cursor?: ValoracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valoracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valoracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valoracions.
     */
    distinct?: ValoracionScalarFieldEnum | ValoracionScalarFieldEnum[]
  }

  /**
   * Valoracion findFirstOrThrow
   */
  export type ValoracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter, which Valoracion to fetch.
     */
    where?: ValoracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valoracions to fetch.
     */
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valoracions.
     */
    cursor?: ValoracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valoracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valoracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valoracions.
     */
    distinct?: ValoracionScalarFieldEnum | ValoracionScalarFieldEnum[]
  }

  /**
   * Valoracion findMany
   */
  export type ValoracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter, which Valoracions to fetch.
     */
    where?: ValoracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valoracions to fetch.
     */
    orderBy?: ValoracionOrderByWithRelationInput | ValoracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Valoracions.
     */
    cursor?: ValoracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valoracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valoracions.
     */
    skip?: number
    distinct?: ValoracionScalarFieldEnum | ValoracionScalarFieldEnum[]
  }

  /**
   * Valoracion create
   */
  export type ValoracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * The data needed to create a Valoracion.
     */
    data: XOR<ValoracionCreateInput, ValoracionUncheckedCreateInput>
  }

  /**
   * Valoracion createMany
   */
  export type ValoracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Valoracions.
     */
    data: ValoracionCreateManyInput | ValoracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Valoracion update
   */
  export type ValoracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * The data needed to update a Valoracion.
     */
    data: XOR<ValoracionUpdateInput, ValoracionUncheckedUpdateInput>
    /**
     * Choose, which Valoracion to update.
     */
    where: ValoracionWhereUniqueInput
  }

  /**
   * Valoracion updateMany
   */
  export type ValoracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Valoracions.
     */
    data: XOR<ValoracionUpdateManyMutationInput, ValoracionUncheckedUpdateManyInput>
    /**
     * Filter which Valoracions to update
     */
    where?: ValoracionWhereInput
    /**
     * Limit how many Valoracions to update.
     */
    limit?: number
  }

  /**
   * Valoracion upsert
   */
  export type ValoracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * The filter to search for the Valoracion to update in case it exists.
     */
    where: ValoracionWhereUniqueInput
    /**
     * In case the Valoracion found by the `where` argument doesn't exist, create a new Valoracion with this data.
     */
    create: XOR<ValoracionCreateInput, ValoracionUncheckedCreateInput>
    /**
     * In case the Valoracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValoracionUpdateInput, ValoracionUncheckedUpdateInput>
  }

  /**
   * Valoracion delete
   */
  export type ValoracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
    /**
     * Filter which Valoracion to delete.
     */
    where: ValoracionWhereUniqueInput
  }

  /**
   * Valoracion deleteMany
   */
  export type ValoracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valoracions to delete
     */
    where?: ValoracionWhereInput
    /**
     * Limit how many Valoracions to delete.
     */
    limit?: number
  }

  /**
   * Valoracion without action
   */
  export type ValoracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valoracion
     */
    select?: ValoracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valoracion
     */
    omit?: ValoracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValoracionInclude<ExtArgs> | null
  }


  /**
   * Model Regla_Autotriage
   */

  export type AggregateRegla_Autotriage = {
    _count: Regla_AutotriageCountAggregateOutputType | null
    _avg: Regla_AutotriageAvgAggregateOutputType | null
    _sum: Regla_AutotriageSumAggregateOutputType | null
    _min: Regla_AutotriageMinAggregateOutputType | null
    _max: Regla_AutotriageMaxAggregateOutputType | null
  }

  export type Regla_AutotriageAvgAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    prioridad: number | null
    carga: number | null
  }

  export type Regla_AutotriageSumAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    prioridad: number | null
    carga: number | null
  }

  export type Regla_AutotriageMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    idCategoria: number | null
    prioridad: number | null
    carga: number | null
    activa: boolean | null
  }

  export type Regla_AutotriageMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    idCategoria: number | null
    prioridad: number | null
    carga: number | null
    activa: boolean | null
  }

  export type Regla_AutotriageCountAggregateOutputType = {
    id: number
    nombre: number
    idCategoria: number
    prioridad: number
    carga: number
    activa: number
    _all: number
  }


  export type Regla_AutotriageAvgAggregateInputType = {
    id?: true
    idCategoria?: true
    prioridad?: true
    carga?: true
  }

  export type Regla_AutotriageSumAggregateInputType = {
    id?: true
    idCategoria?: true
    prioridad?: true
    carga?: true
  }

  export type Regla_AutotriageMinAggregateInputType = {
    id?: true
    nombre?: true
    idCategoria?: true
    prioridad?: true
    carga?: true
    activa?: true
  }

  export type Regla_AutotriageMaxAggregateInputType = {
    id?: true
    nombre?: true
    idCategoria?: true
    prioridad?: true
    carga?: true
    activa?: true
  }

  export type Regla_AutotriageCountAggregateInputType = {
    id?: true
    nombre?: true
    idCategoria?: true
    prioridad?: true
    carga?: true
    activa?: true
    _all?: true
  }

  export type Regla_AutotriageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regla_Autotriage to aggregate.
     */
    where?: Regla_AutotriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regla_Autotriages to fetch.
     */
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Regla_AutotriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regla_Autotriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regla_Autotriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regla_Autotriages
    **/
    _count?: true | Regla_AutotriageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Regla_AutotriageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Regla_AutotriageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Regla_AutotriageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Regla_AutotriageMaxAggregateInputType
  }

  export type GetRegla_AutotriageAggregateType<T extends Regla_AutotriageAggregateArgs> = {
        [P in keyof T & keyof AggregateRegla_Autotriage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegla_Autotriage[P]>
      : GetScalarType<T[P], AggregateRegla_Autotriage[P]>
  }




  export type Regla_AutotriageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Regla_AutotriageWhereInput
    orderBy?: Regla_AutotriageOrderByWithAggregationInput | Regla_AutotriageOrderByWithAggregationInput[]
    by: Regla_AutotriageScalarFieldEnum[] | Regla_AutotriageScalarFieldEnum
    having?: Regla_AutotriageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Regla_AutotriageCountAggregateInputType | true
    _avg?: Regla_AutotriageAvgAggregateInputType
    _sum?: Regla_AutotriageSumAggregateInputType
    _min?: Regla_AutotriageMinAggregateInputType
    _max?: Regla_AutotriageMaxAggregateInputType
  }

  export type Regla_AutotriageGroupByOutputType = {
    id: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa: boolean
    _count: Regla_AutotriageCountAggregateOutputType | null
    _avg: Regla_AutotriageAvgAggregateOutputType | null
    _sum: Regla_AutotriageSumAggregateOutputType | null
    _min: Regla_AutotriageMinAggregateOutputType | null
    _max: Regla_AutotriageMaxAggregateOutputType | null
  }

  type GetRegla_AutotriageGroupByPayload<T extends Regla_AutotriageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Regla_AutotriageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Regla_AutotriageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Regla_AutotriageGroupByOutputType[P]>
            : GetScalarType<T[P], Regla_AutotriageGroupByOutputType[P]>
        }
      >
    >


  export type Regla_AutotriageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idCategoria?: boolean
    prioridad?: boolean
    carga?: boolean
    activa?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    etiquetas?: boolean | Regla_Autotriage$etiquetasArgs<ExtArgs>
    especialidades?: boolean | Regla_Autotriage$especialidadesArgs<ExtArgs>
    asignaciones?: boolean | Regla_Autotriage$asignacionesArgs<ExtArgs>
    _count?: boolean | Regla_AutotriageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regla_Autotriage"]>



  export type Regla_AutotriageSelectScalar = {
    id?: boolean
    nombre?: boolean
    idCategoria?: boolean
    prioridad?: boolean
    carga?: boolean
    activa?: boolean
  }

  export type Regla_AutotriageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "idCategoria" | "prioridad" | "carga" | "activa", ExtArgs["result"]["regla_Autotriage"]>
  export type Regla_AutotriageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    etiquetas?: boolean | Regla_Autotriage$etiquetasArgs<ExtArgs>
    especialidades?: boolean | Regla_Autotriage$especialidadesArgs<ExtArgs>
    asignaciones?: boolean | Regla_Autotriage$asignacionesArgs<ExtArgs>
    _count?: boolean | Regla_AutotriageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Regla_AutotriagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regla_Autotriage"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[]
      especialidades: Prisma.$EspecialidadPayload<ExtArgs>[]
      asignaciones: Prisma.$AsignacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      idCategoria: number
      prioridad: number
      carga: number
      activa: boolean
    }, ExtArgs["result"]["regla_Autotriage"]>
    composites: {}
  }

  type Regla_AutotriageGetPayload<S extends boolean | null | undefined | Regla_AutotriageDefaultArgs> = $Result.GetResult<Prisma.$Regla_AutotriagePayload, S>

  type Regla_AutotriageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Regla_AutotriageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Regla_AutotriageCountAggregateInputType | true
    }

  export interface Regla_AutotriageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regla_Autotriage'], meta: { name: 'Regla_Autotriage' } }
    /**
     * Find zero or one Regla_Autotriage that matches the filter.
     * @param {Regla_AutotriageFindUniqueArgs} args - Arguments to find a Regla_Autotriage
     * @example
     * // Get one Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Regla_AutotriageFindUniqueArgs>(args: SelectSubset<T, Regla_AutotriageFindUniqueArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regla_Autotriage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Regla_AutotriageFindUniqueOrThrowArgs} args - Arguments to find a Regla_Autotriage
     * @example
     * // Get one Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Regla_AutotriageFindUniqueOrThrowArgs>(args: SelectSubset<T, Regla_AutotriageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regla_Autotriage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageFindFirstArgs} args - Arguments to find a Regla_Autotriage
     * @example
     * // Get one Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Regla_AutotriageFindFirstArgs>(args?: SelectSubset<T, Regla_AutotriageFindFirstArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regla_Autotriage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageFindFirstOrThrowArgs} args - Arguments to find a Regla_Autotriage
     * @example
     * // Get one Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Regla_AutotriageFindFirstOrThrowArgs>(args?: SelectSubset<T, Regla_AutotriageFindFirstOrThrowArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regla_Autotriages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regla_Autotriages
     * const regla_Autotriages = await prisma.regla_Autotriage.findMany()
     * 
     * // Get first 10 Regla_Autotriages
     * const regla_Autotriages = await prisma.regla_Autotriage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regla_AutotriageWithIdOnly = await prisma.regla_Autotriage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Regla_AutotriageFindManyArgs>(args?: SelectSubset<T, Regla_AutotriageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regla_Autotriage.
     * @param {Regla_AutotriageCreateArgs} args - Arguments to create a Regla_Autotriage.
     * @example
     * // Create one Regla_Autotriage
     * const Regla_Autotriage = await prisma.regla_Autotriage.create({
     *   data: {
     *     // ... data to create a Regla_Autotriage
     *   }
     * })
     * 
     */
    create<T extends Regla_AutotriageCreateArgs>(args: SelectSubset<T, Regla_AutotriageCreateArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regla_Autotriages.
     * @param {Regla_AutotriageCreateManyArgs} args - Arguments to create many Regla_Autotriages.
     * @example
     * // Create many Regla_Autotriages
     * const regla_Autotriage = await prisma.regla_Autotriage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Regla_AutotriageCreateManyArgs>(args?: SelectSubset<T, Regla_AutotriageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regla_Autotriage.
     * @param {Regla_AutotriageDeleteArgs} args - Arguments to delete one Regla_Autotriage.
     * @example
     * // Delete one Regla_Autotriage
     * const Regla_Autotriage = await prisma.regla_Autotriage.delete({
     *   where: {
     *     // ... filter to delete one Regla_Autotriage
     *   }
     * })
     * 
     */
    delete<T extends Regla_AutotriageDeleteArgs>(args: SelectSubset<T, Regla_AutotriageDeleteArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regla_Autotriage.
     * @param {Regla_AutotriageUpdateArgs} args - Arguments to update one Regla_Autotriage.
     * @example
     * // Update one Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Regla_AutotriageUpdateArgs>(args: SelectSubset<T, Regla_AutotriageUpdateArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regla_Autotriages.
     * @param {Regla_AutotriageDeleteManyArgs} args - Arguments to filter Regla_Autotriages to delete.
     * @example
     * // Delete a few Regla_Autotriages
     * const { count } = await prisma.regla_Autotriage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Regla_AutotriageDeleteManyArgs>(args?: SelectSubset<T, Regla_AutotriageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regla_Autotriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regla_Autotriages
     * const regla_Autotriage = await prisma.regla_Autotriage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Regla_AutotriageUpdateManyArgs>(args: SelectSubset<T, Regla_AutotriageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regla_Autotriage.
     * @param {Regla_AutotriageUpsertArgs} args - Arguments to update or create a Regla_Autotriage.
     * @example
     * // Update or create a Regla_Autotriage
     * const regla_Autotriage = await prisma.regla_Autotriage.upsert({
     *   create: {
     *     // ... data to create a Regla_Autotriage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regla_Autotriage we want to update
     *   }
     * })
     */
    upsert<T extends Regla_AutotriageUpsertArgs>(args: SelectSubset<T, Regla_AutotriageUpsertArgs<ExtArgs>>): Prisma__Regla_AutotriageClient<$Result.GetResult<Prisma.$Regla_AutotriagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regla_Autotriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageCountArgs} args - Arguments to filter Regla_Autotriages to count.
     * @example
     * // Count the number of Regla_Autotriages
     * const count = await prisma.regla_Autotriage.count({
     *   where: {
     *     // ... the filter for the Regla_Autotriages we want to count
     *   }
     * })
    **/
    count<T extends Regla_AutotriageCountArgs>(
      args?: Subset<T, Regla_AutotriageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Regla_AutotriageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regla_Autotriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Regla_AutotriageAggregateArgs>(args: Subset<T, Regla_AutotriageAggregateArgs>): Prisma.PrismaPromise<GetRegla_AutotriageAggregateType<T>>

    /**
     * Group by Regla_Autotriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regla_AutotriageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Regla_AutotriageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Regla_AutotriageGroupByArgs['orderBy'] }
        : { orderBy?: Regla_AutotriageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Regla_AutotriageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegla_AutotriageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regla_Autotriage model
   */
  readonly fields: Regla_AutotriageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regla_Autotriage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Regla_AutotriageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etiquetas<T extends Regla_Autotriage$etiquetasArgs<ExtArgs> = {}>(args?: Subset<T, Regla_Autotriage$etiquetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    especialidades<T extends Regla_Autotriage$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, Regla_Autotriage$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Regla_Autotriage$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Regla_Autotriage$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Regla_Autotriage model
   */
  interface Regla_AutotriageFieldRefs {
    readonly id: FieldRef<"Regla_Autotriage", 'Int'>
    readonly nombre: FieldRef<"Regla_Autotriage", 'String'>
    readonly idCategoria: FieldRef<"Regla_Autotriage", 'Int'>
    readonly prioridad: FieldRef<"Regla_Autotriage", 'Int'>
    readonly carga: FieldRef<"Regla_Autotriage", 'Int'>
    readonly activa: FieldRef<"Regla_Autotriage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Regla_Autotriage findUnique
   */
  export type Regla_AutotriageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter, which Regla_Autotriage to fetch.
     */
    where: Regla_AutotriageWhereUniqueInput
  }

  /**
   * Regla_Autotriage findUniqueOrThrow
   */
  export type Regla_AutotriageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter, which Regla_Autotriage to fetch.
     */
    where: Regla_AutotriageWhereUniqueInput
  }

  /**
   * Regla_Autotriage findFirst
   */
  export type Regla_AutotriageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter, which Regla_Autotriage to fetch.
     */
    where?: Regla_AutotriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regla_Autotriages to fetch.
     */
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regla_Autotriages.
     */
    cursor?: Regla_AutotriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regla_Autotriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regla_Autotriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regla_Autotriages.
     */
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage findFirstOrThrow
   */
  export type Regla_AutotriageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter, which Regla_Autotriage to fetch.
     */
    where?: Regla_AutotriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regla_Autotriages to fetch.
     */
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regla_Autotriages.
     */
    cursor?: Regla_AutotriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regla_Autotriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regla_Autotriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regla_Autotriages.
     */
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage findMany
   */
  export type Regla_AutotriageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter, which Regla_Autotriages to fetch.
     */
    where?: Regla_AutotriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regla_Autotriages to fetch.
     */
    orderBy?: Regla_AutotriageOrderByWithRelationInput | Regla_AutotriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regla_Autotriages.
     */
    cursor?: Regla_AutotriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regla_Autotriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regla_Autotriages.
     */
    skip?: number
    distinct?: Regla_AutotriageScalarFieldEnum | Regla_AutotriageScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage create
   */
  export type Regla_AutotriageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * The data needed to create a Regla_Autotriage.
     */
    data: XOR<Regla_AutotriageCreateInput, Regla_AutotriageUncheckedCreateInput>
  }

  /**
   * Regla_Autotriage createMany
   */
  export type Regla_AutotriageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regla_Autotriages.
     */
    data: Regla_AutotriageCreateManyInput | Regla_AutotriageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regla_Autotriage update
   */
  export type Regla_AutotriageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * The data needed to update a Regla_Autotriage.
     */
    data: XOR<Regla_AutotriageUpdateInput, Regla_AutotriageUncheckedUpdateInput>
    /**
     * Choose, which Regla_Autotriage to update.
     */
    where: Regla_AutotriageWhereUniqueInput
  }

  /**
   * Regla_Autotriage updateMany
   */
  export type Regla_AutotriageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regla_Autotriages.
     */
    data: XOR<Regla_AutotriageUpdateManyMutationInput, Regla_AutotriageUncheckedUpdateManyInput>
    /**
     * Filter which Regla_Autotriages to update
     */
    where?: Regla_AutotriageWhereInput
    /**
     * Limit how many Regla_Autotriages to update.
     */
    limit?: number
  }

  /**
   * Regla_Autotriage upsert
   */
  export type Regla_AutotriageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * The filter to search for the Regla_Autotriage to update in case it exists.
     */
    where: Regla_AutotriageWhereUniqueInput
    /**
     * In case the Regla_Autotriage found by the `where` argument doesn't exist, create a new Regla_Autotriage with this data.
     */
    create: XOR<Regla_AutotriageCreateInput, Regla_AutotriageUncheckedCreateInput>
    /**
     * In case the Regla_Autotriage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Regla_AutotriageUpdateInput, Regla_AutotriageUncheckedUpdateInput>
  }

  /**
   * Regla_Autotriage delete
   */
  export type Regla_AutotriageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
    /**
     * Filter which Regla_Autotriage to delete.
     */
    where: Regla_AutotriageWhereUniqueInput
  }

  /**
   * Regla_Autotriage deleteMany
   */
  export type Regla_AutotriageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regla_Autotriages to delete
     */
    where?: Regla_AutotriageWhereInput
    /**
     * Limit how many Regla_Autotriages to delete.
     */
    limit?: number
  }

  /**
   * Regla_Autotriage.etiquetas
   */
  export type Regla_Autotriage$etiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    cursor?: EtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage.especialidades
   */
  export type Regla_Autotriage$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    cursor?: EspecialidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage.asignaciones
   */
  export type Regla_Autotriage$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asignacion
     */
    select?: AsignacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asignacion
     */
    omit?: AsignacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionInclude<ExtArgs> | null
    where?: AsignacionWhereInput
    orderBy?: AsignacionOrderByWithRelationInput | AsignacionOrderByWithRelationInput[]
    cursor?: AsignacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionScalarFieldEnum | AsignacionScalarFieldEnum[]
  }

  /**
   * Regla_Autotriage without action
   */
  export type Regla_AutotriageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regla_Autotriage
     */
    select?: Regla_AutotriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regla_Autotriage
     */
    omit?: Regla_AutotriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regla_AutotriageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    imagen: 'imagen',
    correo: 'correo',
    contrasenna: 'contrasenna',
    role: 'role',
    ultimaSesion: 'ultimaSesion',
    estado: 'estado',
    idioma: 'idioma'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id: 'id',
    idRemitente: 'idRemitente',
    idDestinatario: 'idDestinatario',
    tipo: 'tipo',
    leido: 'leido',
    mensaje: 'mensaje',
    fecha: 'fecha'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const TecnicoScalarFieldEnum: {
    id: 'id',
    disponible: 'disponible',
    motivoDisponible: 'motivoDisponible',
    fechaDisponible: 'fechaDisponible',
    carga: 'carga'
  };

  export type TecnicoScalarFieldEnum = (typeof TecnicoScalarFieldEnum)[keyof typeof TecnicoScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    tiempoMaximoRespuesta: 'tiempoMaximoRespuesta',
    tiempoMaximoSolucion: 'tiempoMaximoSolucion',
    prioridad: 'prioridad'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EtiquetaScalarFieldEnum: {
    id: 'id',
    idCategoria: 'idCategoria',
    nombre: 'nombre'
  };

  export type EtiquetaScalarFieldEnum = (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    idEtiqueta: 'idEtiqueta',
    titulo: 'titulo',
    descripcion: 'descripcion',
    fechaCreacion: 'fechaCreacion',
    fechaCierre: 'fechaCierre',
    slaRespusta: 'slaRespusta',
    slaSolucion: 'slaSolucion',
    estado: 'estado'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const HistorialTicketScalarFieldEnum: {
    id: 'id',
    idTicket: 'idTicket',
    idUsuario: 'idUsuario',
    estadoAnterior: 'estadoAnterior',
    estadoNuevo: 'estadoNuevo',
    fecha: 'fecha',
    observacion: 'observacion'
  };

  export type HistorialTicketScalarFieldEnum = (typeof HistorialTicketScalarFieldEnum)[keyof typeof HistorialTicketScalarFieldEnum]


  export const Ticket_ImagenScalarFieldEnum: {
    id: 'id',
    idTicket: 'idTicket',
    imagen: 'imagen',
    url: 'url'
  };

  export type Ticket_ImagenScalarFieldEnum = (typeof Ticket_ImagenScalarFieldEnum)[keyof typeof Ticket_ImagenScalarFieldEnum]


  export const AsignacionScalarFieldEnum: {
    id: 'id',
    idTicket: 'idTicket',
    idTecnico: 'idTecnico',
    idRegla: 'idRegla',
    fecha: 'fecha',
    puntajePrioridad: 'puntajePrioridad',
    motivo: 'motivo',
    activo: 'activo',
    metodo: 'metodo'
  };

  export type AsignacionScalarFieldEnum = (typeof AsignacionScalarFieldEnum)[keyof typeof AsignacionScalarFieldEnum]


  export const ValoracionScalarFieldEnum: {
    id: 'id',
    idTicket: 'idTicket',
    idUsuario: 'idUsuario',
    puntaje: 'puntaje',
    comentario: 'comentario',
    fecha: 'fecha'
  };

  export type ValoracionScalarFieldEnum = (typeof ValoracionScalarFieldEnum)[keyof typeof ValoracionScalarFieldEnum]


  export const Regla_AutotriageScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    idCategoria: 'idCategoria',
    prioridad: 'prioridad',
    carga: 'carga',
    activa: 'activa'
  };

  export type Regla_AutotriageScalarFieldEnum = (typeof Regla_AutotriageScalarFieldEnum)[keyof typeof Regla_AutotriageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    imagen: 'imagen',
    correo: 'correo',
    contrasenna: 'contrasenna'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NotificacionOrderByRelevanceFieldEnum: {
    mensaje: 'mensaje'
  };

  export type NotificacionOrderByRelevanceFieldEnum = (typeof NotificacionOrderByRelevanceFieldEnum)[keyof typeof NotificacionOrderByRelevanceFieldEnum]


  export const EspecialidadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type EspecialidadOrderByRelevanceFieldEnum = (typeof EspecialidadOrderByRelevanceFieldEnum)[keyof typeof EspecialidadOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const EtiquetaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type EtiquetaOrderByRelevanceFieldEnum = (typeof EtiquetaOrderByRelevanceFieldEnum)[keyof typeof EtiquetaOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descripcion: 'descripcion'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const HistorialTicketOrderByRelevanceFieldEnum: {
    observacion: 'observacion'
  };

  export type HistorialTicketOrderByRelevanceFieldEnum = (typeof HistorialTicketOrderByRelevanceFieldEnum)[keyof typeof HistorialTicketOrderByRelevanceFieldEnum]


  export const Ticket_ImagenOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type Ticket_ImagenOrderByRelevanceFieldEnum = (typeof Ticket_ImagenOrderByRelevanceFieldEnum)[keyof typeof Ticket_ImagenOrderByRelevanceFieldEnum]


  export const AsignacionOrderByRelevanceFieldEnum: {
    motivo: 'motivo'
  };

  export type AsignacionOrderByRelevanceFieldEnum = (typeof AsignacionOrderByRelevanceFieldEnum)[keyof typeof AsignacionOrderByRelevanceFieldEnum]


  export const ValoracionOrderByRelevanceFieldEnum: {
    comentario: 'comentario'
  };

  export type ValoracionOrderByRelevanceFieldEnum = (typeof ValoracionOrderByRelevanceFieldEnum)[keyof typeof ValoracionOrderByRelevanceFieldEnum]


  export const Regla_AutotriageOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type Regla_AutotriageOrderByRelevanceFieldEnum = (typeof Regla_AutotriageOrderByRelevanceFieldEnum)[keyof typeof Regla_AutotriageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Idioma'
   */
  export type EnumIdiomaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Idioma'>
    


  /**
   * Reference to a field of type 'TipoNotificacion'
   */
  export type EnumTipoNotificacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacion'>
    


  /**
   * Reference to a field of type 'MotivoDisponible'
   */
  export type EnumMotivoDisponibleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotivoDisponible'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Prioridad'
   */
  export type EnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad'>
    


  /**
   * Reference to a field of type 'EstadoTicket'
   */
  export type EnumEstadoTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTicket'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'MetodoAsignacion'
   */
  export type EnumMetodoAsignacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoAsignacion'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringNullableFilter<"Usuario"> | string | null
    imagen?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    contrasenna?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    ultimaSesion?: DateTimeFilter<"Usuario"> | Date | string
    estado?: BoolFilter<"Usuario"> | boolean
    idioma?: EnumIdiomaFilter<"Usuario"> | $Enums.Idioma
    tecnico?: TecnicoListRelationFilter
    ticket?: TicketListRelationFilter
    historialTicket?: HistorialTicketListRelationFilter
    valoracion?: ValoracionListRelationFilter
    notificacionesRemitente?: NotificacionListRelationFilter
    notificaciones?: NotificacionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasenna?: SortOrder
    role?: SortOrder
    ultimaSesion?: SortOrder
    estado?: SortOrder
    idioma?: SortOrder
    tecnico?: TecnicoOrderByRelationAggregateInput
    ticket?: TicketOrderByRelationAggregateInput
    historialTicket?: HistorialTicketOrderByRelationAggregateInput
    valoracion?: ValoracionOrderByRelationAggregateInput
    notificacionesRemitente?: NotificacionOrderByRelationAggregateInput
    notificaciones?: NotificacionOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringNullableFilter<"Usuario"> | string | null
    imagen?: StringNullableFilter<"Usuario"> | string | null
    contrasenna?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    ultimaSesion?: DateTimeFilter<"Usuario"> | Date | string
    estado?: BoolFilter<"Usuario"> | boolean
    idioma?: EnumIdiomaFilter<"Usuario"> | $Enums.Idioma
    tecnico?: TecnicoListRelationFilter
    ticket?: TicketListRelationFilter
    historialTicket?: HistorialTicketListRelationFilter
    valoracion?: ValoracionListRelationFilter
    notificacionesRemitente?: NotificacionListRelationFilter
    notificaciones?: NotificacionListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasenna?: SortOrder
    role?: SortOrder
    ultimaSesion?: SortOrder
    estado?: SortOrder
    idioma?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasenna?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    ultimaSesion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    estado?: BoolWithAggregatesFilter<"Usuario"> | boolean
    idioma?: EnumIdiomaWithAggregatesFilter<"Usuario"> | $Enums.Idioma
  }

  export type NotificacionWhereInput = {
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    id?: IntFilter<"Notificacion"> | number
    idRemitente?: IntNullableFilter<"Notificacion"> | number | null
    idDestinatario?: IntFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    leido?: BoolFilter<"Notificacion"> | boolean
    mensaje?: StringFilter<"Notificacion"> | string
    fecha?: DateTimeFilter<"Notificacion"> | Date | string
    Remitente?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    Destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacionOrderByWithRelationInput = {
    id?: SortOrder
    idRemitente?: SortOrderInput | SortOrder
    idDestinatario?: SortOrder
    tipo?: SortOrder
    leido?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
    Remitente?: UsuarioOrderByWithRelationInput
    Destinatario?: UsuarioOrderByWithRelationInput
    _relevance?: NotificacionOrderByRelevanceInput
  }

  export type NotificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    idRemitente?: IntNullableFilter<"Notificacion"> | number | null
    idDestinatario?: IntFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    leido?: BoolFilter<"Notificacion"> | boolean
    mensaje?: StringFilter<"Notificacion"> | string
    fecha?: DateTimeFilter<"Notificacion"> | Date | string
    Remitente?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    Destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacionOrderByWithAggregationInput = {
    id?: SortOrder
    idRemitente?: SortOrderInput | SortOrder
    idDestinatario?: SortOrder
    tipo?: SortOrder
    leido?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
    _count?: NotificacionCountOrderByAggregateInput
    _avg?: NotificacionAvgOrderByAggregateInput
    _max?: NotificacionMaxOrderByAggregateInput
    _min?: NotificacionMinOrderByAggregateInput
    _sum?: NotificacionSumOrderByAggregateInput
  }

  export type NotificacionScalarWhereWithAggregatesInput = {
    AND?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    OR?: NotificacionScalarWhereWithAggregatesInput[]
    NOT?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacion"> | number
    idRemitente?: IntNullableWithAggregatesFilter<"Notificacion"> | number | null
    idDestinatario?: IntWithAggregatesFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionWithAggregatesFilter<"Notificacion"> | $Enums.TipoNotificacion
    leido?: BoolWithAggregatesFilter<"Notificacion"> | boolean
    mensaje?: StringWithAggregatesFilter<"Notificacion"> | string
    fecha?: DateTimeWithAggregatesFilter<"Notificacion"> | Date | string
  }

  export type TecnicoWhereInput = {
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    id?: IntFilter<"Tecnico"> | number
    disponible?: BoolFilter<"Tecnico"> | boolean
    motivoDisponible?: EnumMotivoDisponibleFilter<"Tecnico"> | $Enums.MotivoDisponible
    fechaDisponible?: DateTimeNullableFilter<"Tecnico"> | Date | string | null
    carga?: IntFilter<"Tecnico"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidades?: EspecialidadListRelationFilter
    Asignacion?: AsignacionListRelationFilter
  }

  export type TecnicoOrderByWithRelationInput = {
    id?: SortOrder
    disponible?: SortOrder
    motivoDisponible?: SortOrder
    fechaDisponible?: SortOrderInput | SortOrder
    carga?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    especialidades?: EspecialidadOrderByRelationAggregateInput
    Asignacion?: AsignacionOrderByRelationAggregateInput
  }

  export type TecnicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    disponible?: BoolFilter<"Tecnico"> | boolean
    motivoDisponible?: EnumMotivoDisponibleFilter<"Tecnico"> | $Enums.MotivoDisponible
    fechaDisponible?: DateTimeNullableFilter<"Tecnico"> | Date | string | null
    carga?: IntFilter<"Tecnico"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidades?: EspecialidadListRelationFilter
    Asignacion?: AsignacionListRelationFilter
  }, "id">

  export type TecnicoOrderByWithAggregationInput = {
    id?: SortOrder
    disponible?: SortOrder
    motivoDisponible?: SortOrder
    fechaDisponible?: SortOrderInput | SortOrder
    carga?: SortOrder
    _count?: TecnicoCountOrderByAggregateInput
    _avg?: TecnicoAvgOrderByAggregateInput
    _max?: TecnicoMaxOrderByAggregateInput
    _min?: TecnicoMinOrderByAggregateInput
    _sum?: TecnicoSumOrderByAggregateInput
  }

  export type TecnicoScalarWhereWithAggregatesInput = {
    AND?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    OR?: TecnicoScalarWhereWithAggregatesInput[]
    NOT?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tecnico"> | number
    disponible?: BoolWithAggregatesFilter<"Tecnico"> | boolean
    motivoDisponible?: EnumMotivoDisponibleWithAggregatesFilter<"Tecnico"> | $Enums.MotivoDisponible
    fechaDisponible?: DateTimeNullableWithAggregatesFilter<"Tecnico"> | Date | string | null
    carga?: IntWithAggregatesFilter<"Tecnico"> | number
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    descripcion?: StringFilter<"Especialidad"> | string
    tecnicos?: TecnicoListRelationFilter
    categorias?: CategoriaListRelationFilter
    reglas?: Regla_AutotriageListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tecnicos?: TecnicoOrderByRelationAggregateInput
    categorias?: CategoriaOrderByRelationAggregateInput
    reglas?: Regla_AutotriageOrderByRelationAggregateInput
    _relevance?: EspecialidadOrderByRelevanceInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    nombre?: StringFilter<"Especialidad"> | string
    descripcion?: StringFilter<"Especialidad"> | string
    tecnicos?: TecnicoListRelationFilter
    categorias?: CategoriaListRelationFilter
    reglas?: Regla_AutotriageListRelationFilter
  }, "id">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _avg?: EspecialidadAvgOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
    _sum?: EspecialidadSumOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidad"> | number
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
    descripcion?: StringWithAggregatesFilter<"Especialidad"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringFilter<"Categoria"> | string
    tiempoMaximoRespuesta?: FloatFilter<"Categoria"> | number
    tiempoMaximoSolucion?: FloatFilter<"Categoria"> | number
    prioridad?: EnumPrioridadFilter<"Categoria"> | $Enums.Prioridad
    especialidades?: EspecialidadListRelationFilter
    etiquetas?: EtiquetaListRelationFilter
    reglas?: Regla_AutotriageListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
    prioridad?: SortOrder
    especialidades?: EspecialidadOrderByRelationAggregateInput
    etiquetas?: EtiquetaOrderByRelationAggregateInput
    reglas?: Regla_AutotriageOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringFilter<"Categoria"> | string
    tiempoMaximoRespuesta?: FloatFilter<"Categoria"> | number
    tiempoMaximoSolucion?: FloatFilter<"Categoria"> | number
    prioridad?: EnumPrioridadFilter<"Categoria"> | $Enums.Prioridad
    especialidades?: EspecialidadListRelationFilter
    etiquetas?: EtiquetaListRelationFilter
    reglas?: Regla_AutotriageListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
    prioridad?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringWithAggregatesFilter<"Categoria"> | string
    tiempoMaximoRespuesta?: FloatWithAggregatesFilter<"Categoria"> | number
    tiempoMaximoSolucion?: FloatWithAggregatesFilter<"Categoria"> | number
    prioridad?: EnumPrioridadWithAggregatesFilter<"Categoria"> | $Enums.Prioridad
  }

  export type EtiquetaWhereInput = {
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    idCategoria?: IntFilter<"Etiqueta"> | number
    nombre?: StringFilter<"Etiqueta"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    Ticket?: TicketListRelationFilter
    autoTriage?: Regla_AutotriageListRelationFilter
  }

  export type EtiquetaOrderByWithRelationInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    Ticket?: TicketOrderByRelationAggregateInput
    autoTriage?: Regla_AutotriageOrderByRelationAggregateInput
    _relevance?: EtiquetaOrderByRelevanceInput
  }

  export type EtiquetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    idCategoria?: IntFilter<"Etiqueta"> | number
    nombre?: StringFilter<"Etiqueta"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    Ticket?: TicketListRelationFilter
    autoTriage?: Regla_AutotriageListRelationFilter
  }, "id">

  export type EtiquetaOrderByWithAggregationInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
    _count?: EtiquetaCountOrderByAggregateInput
    _avg?: EtiquetaAvgOrderByAggregateInput
    _max?: EtiquetaMaxOrderByAggregateInput
    _min?: EtiquetaMinOrderByAggregateInput
    _sum?: EtiquetaSumOrderByAggregateInput
  }

  export type EtiquetaScalarWhereWithAggregatesInput = {
    AND?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    OR?: EtiquetaScalarWhereWithAggregatesInput[]
    NOT?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etiqueta"> | number
    idCategoria?: IntWithAggregatesFilter<"Etiqueta"> | number
    nombre?: StringWithAggregatesFilter<"Etiqueta"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    idUsuario?: IntFilter<"Ticket"> | number
    idEtiqueta?: IntFilter<"Ticket"> | number
    titulo?: StringFilter<"Ticket"> | string
    descripcion?: StringFilter<"Ticket"> | string
    fechaCreacion?: DateTimeFilter<"Ticket"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaRespusta?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaSolucion?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    estado?: EnumEstadoTicketFilter<"Ticket"> | $Enums.EstadoTicket
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
    historial?: HistorialTicketListRelationFilter
    imagenes?: Ticket_ImagenListRelationFilter
    asignaciones?: AsignacionListRelationFilter
    Valoracion?: ValoracionListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaCierre?: SortOrderInput | SortOrder
    slaRespusta?: SortOrderInput | SortOrder
    slaSolucion?: SortOrderInput | SortOrder
    estado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    etiqueta?: EtiquetaOrderByWithRelationInput
    historial?: HistorialTicketOrderByRelationAggregateInput
    imagenes?: Ticket_ImagenOrderByRelationAggregateInput
    asignaciones?: AsignacionOrderByRelationAggregateInput
    Valoracion?: ValoracionOrderByRelationAggregateInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    idUsuario?: IntFilter<"Ticket"> | number
    idEtiqueta?: IntFilter<"Ticket"> | number
    titulo?: StringFilter<"Ticket"> | string
    descripcion?: StringFilter<"Ticket"> | string
    fechaCreacion?: DateTimeFilter<"Ticket"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaRespusta?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaSolucion?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    estado?: EnumEstadoTicketFilter<"Ticket"> | $Enums.EstadoTicket
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
    historial?: HistorialTicketListRelationFilter
    imagenes?: Ticket_ImagenListRelationFilter
    asignaciones?: AsignacionListRelationFilter
    Valoracion?: ValoracionListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaCierre?: SortOrderInput | SortOrder
    slaRespusta?: SortOrderInput | SortOrder
    slaSolucion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    idUsuario?: IntWithAggregatesFilter<"Ticket"> | number
    idEtiqueta?: IntWithAggregatesFilter<"Ticket"> | number
    titulo?: StringWithAggregatesFilter<"Ticket"> | string
    descripcion?: StringWithAggregatesFilter<"Ticket"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    fechaCierre?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    slaRespusta?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    slaSolucion?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    estado?: EnumEstadoTicketWithAggregatesFilter<"Ticket"> | $Enums.EstadoTicket
  }

  export type HistorialTicketWhereInput = {
    AND?: HistorialTicketWhereInput | HistorialTicketWhereInput[]
    OR?: HistorialTicketWhereInput[]
    NOT?: HistorialTicketWhereInput | HistorialTicketWhereInput[]
    id?: IntFilter<"HistorialTicket"> | number
    idTicket?: IntFilter<"HistorialTicket"> | number
    idUsuario?: IntFilter<"HistorialTicket"> | number
    estadoAnterior?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    fecha?: DateTimeFilter<"HistorialTicket"> | Date | string
    observacion?: StringNullableFilter<"HistorialTicket"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type HistorialTicketOrderByWithRelationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    fecha?: SortOrder
    observacion?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: HistorialTicketOrderByRelevanceInput
  }

  export type HistorialTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistorialTicketWhereInput | HistorialTicketWhereInput[]
    OR?: HistorialTicketWhereInput[]
    NOT?: HistorialTicketWhereInput | HistorialTicketWhereInput[]
    idTicket?: IntFilter<"HistorialTicket"> | number
    idUsuario?: IntFilter<"HistorialTicket"> | number
    estadoAnterior?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    fecha?: DateTimeFilter<"HistorialTicket"> | Date | string
    observacion?: StringNullableFilter<"HistorialTicket"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type HistorialTicketOrderByWithAggregationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    fecha?: SortOrder
    observacion?: SortOrderInput | SortOrder
    _count?: HistorialTicketCountOrderByAggregateInput
    _avg?: HistorialTicketAvgOrderByAggregateInput
    _max?: HistorialTicketMaxOrderByAggregateInput
    _min?: HistorialTicketMinOrderByAggregateInput
    _sum?: HistorialTicketSumOrderByAggregateInput
  }

  export type HistorialTicketScalarWhereWithAggregatesInput = {
    AND?: HistorialTicketScalarWhereWithAggregatesInput | HistorialTicketScalarWhereWithAggregatesInput[]
    OR?: HistorialTicketScalarWhereWithAggregatesInput[]
    NOT?: HistorialTicketScalarWhereWithAggregatesInput | HistorialTicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistorialTicket"> | number
    idTicket?: IntWithAggregatesFilter<"HistorialTicket"> | number
    idUsuario?: IntWithAggregatesFilter<"HistorialTicket"> | number
    estadoAnterior?: EnumEstadoTicketWithAggregatesFilter<"HistorialTicket"> | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketWithAggregatesFilter<"HistorialTicket"> | $Enums.EstadoTicket
    fecha?: DateTimeWithAggregatesFilter<"HistorialTicket"> | Date | string
    observacion?: StringNullableWithAggregatesFilter<"HistorialTicket"> | string | null
  }

  export type Ticket_ImagenWhereInput = {
    AND?: Ticket_ImagenWhereInput | Ticket_ImagenWhereInput[]
    OR?: Ticket_ImagenWhereInput[]
    NOT?: Ticket_ImagenWhereInput | Ticket_ImagenWhereInput[]
    id?: IntFilter<"Ticket_Imagen"> | number
    idTicket?: IntFilter<"Ticket_Imagen"> | number
    imagen?: BytesNullableFilter<"Ticket_Imagen"> | Uint8Array | null
    url?: StringNullableFilter<"Ticket_Imagen"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type Ticket_ImagenOrderByWithRelationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    imagen?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
    _relevance?: Ticket_ImagenOrderByRelevanceInput
  }

  export type Ticket_ImagenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Ticket_ImagenWhereInput | Ticket_ImagenWhereInput[]
    OR?: Ticket_ImagenWhereInput[]
    NOT?: Ticket_ImagenWhereInput | Ticket_ImagenWhereInput[]
    idTicket?: IntFilter<"Ticket_Imagen"> | number
    imagen?: BytesNullableFilter<"Ticket_Imagen"> | Uint8Array | null
    url?: StringNullableFilter<"Ticket_Imagen"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type Ticket_ImagenOrderByWithAggregationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    imagen?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: Ticket_ImagenCountOrderByAggregateInput
    _avg?: Ticket_ImagenAvgOrderByAggregateInput
    _max?: Ticket_ImagenMaxOrderByAggregateInput
    _min?: Ticket_ImagenMinOrderByAggregateInput
    _sum?: Ticket_ImagenSumOrderByAggregateInput
  }

  export type Ticket_ImagenScalarWhereWithAggregatesInput = {
    AND?: Ticket_ImagenScalarWhereWithAggregatesInput | Ticket_ImagenScalarWhereWithAggregatesInput[]
    OR?: Ticket_ImagenScalarWhereWithAggregatesInput[]
    NOT?: Ticket_ImagenScalarWhereWithAggregatesInput | Ticket_ImagenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket_Imagen"> | number
    idTicket?: IntWithAggregatesFilter<"Ticket_Imagen"> | number
    imagen?: BytesNullableWithAggregatesFilter<"Ticket_Imagen"> | Uint8Array | null
    url?: StringNullableWithAggregatesFilter<"Ticket_Imagen"> | string | null
  }

  export type AsignacionWhereInput = {
    AND?: AsignacionWhereInput | AsignacionWhereInput[]
    OR?: AsignacionWhereInput[]
    NOT?: AsignacionWhereInput | AsignacionWhereInput[]
    id?: IntFilter<"Asignacion"> | number
    idTicket?: IntFilter<"Asignacion"> | number
    idTecnico?: IntFilter<"Asignacion"> | number
    idRegla?: IntNullableFilter<"Asignacion"> | number | null
    fecha?: DateTimeFilter<"Asignacion"> | Date | string
    puntajePrioridad?: IntFilter<"Asignacion"> | number
    motivo?: StringNullableFilter<"Asignacion"> | string | null
    activo?: BoolFilter<"Asignacion"> | boolean
    metodo?: EnumMetodoAsignacionNullableFilter<"Asignacion"> | $Enums.MetodoAsignacion | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
    regla?: XOR<Regla_AutotriageNullableScalarRelationFilter, Regla_AutotriageWhereInput> | null
  }

  export type AsignacionOrderByWithRelationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrderInput | SortOrder
    fecha?: SortOrder
    puntajePrioridad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    activo?: SortOrder
    metodo?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
    tecnico?: TecnicoOrderByWithRelationInput
    regla?: Regla_AutotriageOrderByWithRelationInput
    _relevance?: AsignacionOrderByRelevanceInput
  }

  export type AsignacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsignacionWhereInput | AsignacionWhereInput[]
    OR?: AsignacionWhereInput[]
    NOT?: AsignacionWhereInput | AsignacionWhereInput[]
    idTicket?: IntFilter<"Asignacion"> | number
    idTecnico?: IntFilter<"Asignacion"> | number
    idRegla?: IntNullableFilter<"Asignacion"> | number | null
    fecha?: DateTimeFilter<"Asignacion"> | Date | string
    puntajePrioridad?: IntFilter<"Asignacion"> | number
    motivo?: StringNullableFilter<"Asignacion"> | string | null
    activo?: BoolFilter<"Asignacion"> | boolean
    metodo?: EnumMetodoAsignacionNullableFilter<"Asignacion"> | $Enums.MetodoAsignacion | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
    regla?: XOR<Regla_AutotriageNullableScalarRelationFilter, Regla_AutotriageWhereInput> | null
  }, "id">

  export type AsignacionOrderByWithAggregationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrderInput | SortOrder
    fecha?: SortOrder
    puntajePrioridad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    activo?: SortOrder
    metodo?: SortOrderInput | SortOrder
    _count?: AsignacionCountOrderByAggregateInput
    _avg?: AsignacionAvgOrderByAggregateInput
    _max?: AsignacionMaxOrderByAggregateInput
    _min?: AsignacionMinOrderByAggregateInput
    _sum?: AsignacionSumOrderByAggregateInput
  }

  export type AsignacionScalarWhereWithAggregatesInput = {
    AND?: AsignacionScalarWhereWithAggregatesInput | AsignacionScalarWhereWithAggregatesInput[]
    OR?: AsignacionScalarWhereWithAggregatesInput[]
    NOT?: AsignacionScalarWhereWithAggregatesInput | AsignacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asignacion"> | number
    idTicket?: IntWithAggregatesFilter<"Asignacion"> | number
    idTecnico?: IntWithAggregatesFilter<"Asignacion"> | number
    idRegla?: IntNullableWithAggregatesFilter<"Asignacion"> | number | null
    fecha?: DateTimeWithAggregatesFilter<"Asignacion"> | Date | string
    puntajePrioridad?: IntWithAggregatesFilter<"Asignacion"> | number
    motivo?: StringNullableWithAggregatesFilter<"Asignacion"> | string | null
    activo?: BoolWithAggregatesFilter<"Asignacion"> | boolean
    metodo?: EnumMetodoAsignacionNullableWithAggregatesFilter<"Asignacion"> | $Enums.MetodoAsignacion | null
  }

  export type ValoracionWhereInput = {
    AND?: ValoracionWhereInput | ValoracionWhereInput[]
    OR?: ValoracionWhereInput[]
    NOT?: ValoracionWhereInput | ValoracionWhereInput[]
    id?: IntFilter<"Valoracion"> | number
    idTicket?: IntFilter<"Valoracion"> | number
    idUsuario?: IntFilter<"Valoracion"> | number
    puntaje?: IntFilter<"Valoracion"> | number
    comentario?: StringNullableFilter<"Valoracion"> | string | null
    fecha?: DateTimeFilter<"Valoracion"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ValoracionOrderByWithRelationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: ValoracionOrderByRelevanceInput
  }

  export type ValoracionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValoracionWhereInput | ValoracionWhereInput[]
    OR?: ValoracionWhereInput[]
    NOT?: ValoracionWhereInput | ValoracionWhereInput[]
    idTicket?: IntFilter<"Valoracion"> | number
    idUsuario?: IntFilter<"Valoracion"> | number
    puntaje?: IntFilter<"Valoracion"> | number
    comentario?: StringNullableFilter<"Valoracion"> | string | null
    fecha?: DateTimeFilter<"Valoracion"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ValoracionOrderByWithAggregationInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha?: SortOrder
    _count?: ValoracionCountOrderByAggregateInput
    _avg?: ValoracionAvgOrderByAggregateInput
    _max?: ValoracionMaxOrderByAggregateInput
    _min?: ValoracionMinOrderByAggregateInput
    _sum?: ValoracionSumOrderByAggregateInput
  }

  export type ValoracionScalarWhereWithAggregatesInput = {
    AND?: ValoracionScalarWhereWithAggregatesInput | ValoracionScalarWhereWithAggregatesInput[]
    OR?: ValoracionScalarWhereWithAggregatesInput[]
    NOT?: ValoracionScalarWhereWithAggregatesInput | ValoracionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Valoracion"> | number
    idTicket?: IntWithAggregatesFilter<"Valoracion"> | number
    idUsuario?: IntWithAggregatesFilter<"Valoracion"> | number
    puntaje?: IntWithAggregatesFilter<"Valoracion"> | number
    comentario?: StringNullableWithAggregatesFilter<"Valoracion"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Valoracion"> | Date | string
  }

  export type Regla_AutotriageWhereInput = {
    AND?: Regla_AutotriageWhereInput | Regla_AutotriageWhereInput[]
    OR?: Regla_AutotriageWhereInput[]
    NOT?: Regla_AutotriageWhereInput | Regla_AutotriageWhereInput[]
    id?: IntFilter<"Regla_Autotriage"> | number
    nombre?: StringFilter<"Regla_Autotriage"> | string
    idCategoria?: IntFilter<"Regla_Autotriage"> | number
    prioridad?: IntFilter<"Regla_Autotriage"> | number
    carga?: IntFilter<"Regla_Autotriage"> | number
    activa?: BoolFilter<"Regla_Autotriage"> | boolean
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    etiquetas?: EtiquetaListRelationFilter
    especialidades?: EspecialidadListRelationFilter
    asignaciones?: AsignacionListRelationFilter
  }

  export type Regla_AutotriageOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
    activa?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    etiquetas?: EtiquetaOrderByRelationAggregateInput
    especialidades?: EspecialidadOrderByRelationAggregateInput
    asignaciones?: AsignacionOrderByRelationAggregateInput
    _relevance?: Regla_AutotriageOrderByRelevanceInput
  }

  export type Regla_AutotriageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Regla_AutotriageWhereInput | Regla_AutotriageWhereInput[]
    OR?: Regla_AutotriageWhereInput[]
    NOT?: Regla_AutotriageWhereInput | Regla_AutotriageWhereInput[]
    nombre?: StringFilter<"Regla_Autotriage"> | string
    idCategoria?: IntFilter<"Regla_Autotriage"> | number
    prioridad?: IntFilter<"Regla_Autotriage"> | number
    carga?: IntFilter<"Regla_Autotriage"> | number
    activa?: BoolFilter<"Regla_Autotriage"> | boolean
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    etiquetas?: EtiquetaListRelationFilter
    especialidades?: EspecialidadListRelationFilter
    asignaciones?: AsignacionListRelationFilter
  }, "id">

  export type Regla_AutotriageOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
    activa?: SortOrder
    _count?: Regla_AutotriageCountOrderByAggregateInput
    _avg?: Regla_AutotriageAvgOrderByAggregateInput
    _max?: Regla_AutotriageMaxOrderByAggregateInput
    _min?: Regla_AutotriageMinOrderByAggregateInput
    _sum?: Regla_AutotriageSumOrderByAggregateInput
  }

  export type Regla_AutotriageScalarWhereWithAggregatesInput = {
    AND?: Regla_AutotriageScalarWhereWithAggregatesInput | Regla_AutotriageScalarWhereWithAggregatesInput[]
    OR?: Regla_AutotriageScalarWhereWithAggregatesInput[]
    NOT?: Regla_AutotriageScalarWhereWithAggregatesInput | Regla_AutotriageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Regla_Autotriage"> | number
    nombre?: StringWithAggregatesFilter<"Regla_Autotriage"> | string
    idCategoria?: IntWithAggregatesFilter<"Regla_Autotriage"> | number
    prioridad?: IntWithAggregatesFilter<"Regla_Autotriage"> | number
    carga?: IntWithAggregatesFilter<"Regla_Autotriage"> | number
    activa?: BoolWithAggregatesFilter<"Regla_Autotriage"> | boolean
  }

  export type UsuarioCreateInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
  }

  export type NotificacionCreateInput = {
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
    Remitente?: UsuarioCreateNestedOneWithoutNotificacionesRemitenteInput
    Destinatario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateInput = {
    id?: number
    idRemitente?: number | null
    idDestinatario: number
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type NotificacionUpdateInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Remitente?: UsuarioUpdateOneWithoutNotificacionesRemitenteNestedInput
    Destinatario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRemitente?: NullableIntFieldUpdateOperationsInput | number | null
    idDestinatario?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionCreateManyInput = {
    id?: number
    idRemitente?: number | null
    idDestinatario: number
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type NotificacionUpdateManyMutationInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRemitente?: NullableIntFieldUpdateOperationsInput | number | null
    idDestinatario?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TecnicoCreateInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    usuario: UsuarioCreateNestedOneWithoutTecnicoInput
    especialidades?: EspecialidadCreateNestedManyWithoutTecnicosInput
    Asignacion?: AsignacionCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateInput = {
    id: number
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutTecnicosInput
    Asignacion?: AsignacionUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUpdateInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutTecnicoNestedInput
    especialidades?: EspecialidadUpdateManyWithoutTecnicosNestedInput
    Asignacion?: AsignacionUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    especialidades?: EspecialidadUncheckedUpdateManyWithoutTecnicosNestedInput
    Asignacion?: AsignacionUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoCreateManyInput = {
    id: number
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
  }

  export type TecnicoUpdateManyMutationInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
  }

  export type TecnicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
  }

  export type EspecialidadCreateInput = {
    nombre: string
    descripcion: string
    tecnicos?: TecnicoCreateNestedManyWithoutEspecialidadesInput
    categorias?: CategoriaCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutEspecialidadesInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUpdateManyWithoutEspecialidadesNestedInput
    categorias?: CategoriaUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUncheckedUpdateManyWithoutEspecialidadesNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
  }

  export type EspecialidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadCreateNestedManyWithoutCategoriasInput
    etiquetas?: EtiquetaCreateNestedManyWithoutCategoriaInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutCategoriasInput
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCategoriaInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUpdateManyWithoutCategoriasNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutCategoriaNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUncheckedUpdateManyWithoutCategoriasNestedInput
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCategoriaNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
  }

  export type EtiquetaCreateInput = {
    nombre: string
    categoria: CategoriaCreateNestedOneWithoutEtiquetasInput
    Ticket?: TicketCreateNestedManyWithoutEtiquetaInput
    autoTriage?: Regla_AutotriageCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaUncheckedCreateInput = {
    id?: number
    idCategoria: number
    nombre: string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEtiquetaInput
    autoTriage?: Regla_AutotriageUncheckedCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutEtiquetasNestedInput
    Ticket?: TicketUpdateManyWithoutEtiquetaNestedInput
    autoTriage?: Regla_AutotriageUpdateManyWithoutEtiquetasNestedInput
  }

  export type EtiquetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUncheckedUpdateManyWithoutEtiquetaNestedInput
    autoTriage?: Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasNestedInput
  }

  export type EtiquetaCreateManyInput = {
    id?: number
    idCategoria: number
    nombre: string
  }

  export type EtiquetaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EtiquetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
  }

  export type TicketUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
  }

  export type HistorialTicketCreateInput = {
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
    ticket: TicketCreateNestedOneWithoutHistorialInput
    usuario?: UsuarioCreateNestedOneWithoutHistorialTicketInput
  }

  export type HistorialTicketUncheckedCreateInput = {
    id?: number
    idTicket: number
    idUsuario: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type HistorialTicketUpdateInput = {
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutHistorialNestedInput
    usuario?: UsuarioUpdateOneWithoutHistorialTicketNestedInput
  }

  export type HistorialTicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistorialTicketCreateManyInput = {
    id?: number
    idTicket: number
    idUsuario: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type HistorialTicketUpdateManyMutationInput = {
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistorialTicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenCreateInput = {
    imagen?: Uint8Array | null
    url?: string | null
    ticket: TicketCreateNestedOneWithoutImagenesInput
  }

  export type Ticket_ImagenUncheckedCreateInput = {
    id?: number
    idTicket: number
    imagen?: Uint8Array | null
    url?: string | null
  }

  export type Ticket_ImagenUpdateInput = {
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutImagenesNestedInput
  }

  export type Ticket_ImagenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenCreateManyInput = {
    id?: number
    idTicket: number
    imagen?: Uint8Array | null
    url?: string | null
  }

  export type Ticket_ImagenUpdateManyMutationInput = {
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsignacionCreateInput = {
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
    ticket: TicketCreateNestedOneWithoutAsignacionesInput
    tecnico: TecnicoCreateNestedOneWithoutAsignacionInput
    regla?: Regla_AutotriageCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionUncheckedCreateInput = {
    id?: number
    idTicket: number
    idTecnico: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type AsignacionUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
    ticket?: TicketUpdateOneRequiredWithoutAsignacionesNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutAsignacionNestedInput
    regla?: Regla_AutotriageUpdateOneWithoutAsignacionesNestedInput
  }

  export type AsignacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type AsignacionCreateManyInput = {
    id?: number
    idTicket: number
    idTecnico: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type AsignacionUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type AsignacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type ValoracionCreateInput = {
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
    ticket: TicketCreateNestedOneWithoutValoracionInput
    usuario: UsuarioCreateNestedOneWithoutValoracionInput
  }

  export type ValoracionUncheckedCreateInput = {
    id?: number
    idTicket: number
    idUsuario: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type ValoracionUpdateInput = {
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutValoracionNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutValoracionNestedInput
  }

  export type ValoracionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoracionCreateManyInput = {
    id?: number
    idTicket: number
    idUsuario: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type ValoracionUpdateManyMutationInput = {
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoracionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Regla_AutotriageCreateInput = {
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    categoria: CategoriaCreateNestedOneWithoutReglasInput
    etiquetas?: EtiquetaCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageUncheckedCreateInput = {
    id?: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa?: boolean
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutReglasNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUncheckedUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageCreateManyInput = {
    id?: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa?: boolean
  }

  export type Regla_AutotriageUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Regla_AutotriageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumIdiomaFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaFilter<$PrismaModel> | $Enums.Idioma
  }

  export type TecnicoListRelationFilter = {
    every?: TecnicoWhereInput
    some?: TecnicoWhereInput
    none?: TecnicoWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type HistorialTicketListRelationFilter = {
    every?: HistorialTicketWhereInput
    some?: HistorialTicketWhereInput
    none?: HistorialTicketWhereInput
  }

  export type ValoracionListRelationFilter = {
    every?: ValoracionWhereInput
    some?: ValoracionWhereInput
    none?: ValoracionWhereInput
  }

  export type NotificacionListRelationFilter = {
    every?: NotificacionWhereInput
    some?: NotificacionWhereInput
    none?: NotificacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TecnicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistorialTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValoracionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    imagen?: SortOrder
    correo?: SortOrder
    contrasenna?: SortOrder
    role?: SortOrder
    ultimaSesion?: SortOrder
    estado?: SortOrder
    idioma?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    imagen?: SortOrder
    correo?: SortOrder
    contrasenna?: SortOrder
    role?: SortOrder
    ultimaSesion?: SortOrder
    estado?: SortOrder
    idioma?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    imagen?: SortOrder
    correo?: SortOrder
    contrasenna?: SortOrder
    role?: SortOrder
    ultimaSesion?: SortOrder
    estado?: SortOrder
    idioma?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumIdiomaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaWithAggregatesFilter<$PrismaModel> | $Enums.Idioma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdiomaFilter<$PrismaModel>
    _max?: NestedEnumIdiomaFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTipoNotificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[]
    notIn?: $Enums.TipoNotificacion[]
    not?: NestedEnumTipoNotificacionFilter<$PrismaModel> | $Enums.TipoNotificacion
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type NotificacionOrderByRelevanceInput = {
    fields: NotificacionOrderByRelevanceFieldEnum | NotificacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificacionCountOrderByAggregateInput = {
    id?: SortOrder
    idRemitente?: SortOrder
    idDestinatario?: SortOrder
    tipo?: SortOrder
    leido?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type NotificacionAvgOrderByAggregateInput = {
    id?: SortOrder
    idRemitente?: SortOrder
    idDestinatario?: SortOrder
  }

  export type NotificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    idRemitente?: SortOrder
    idDestinatario?: SortOrder
    tipo?: SortOrder
    leido?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type NotificacionMinOrderByAggregateInput = {
    id?: SortOrder
    idRemitente?: SortOrder
    idDestinatario?: SortOrder
    tipo?: SortOrder
    leido?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type NotificacionSumOrderByAggregateInput = {
    id?: SortOrder
    idRemitente?: SortOrder
    idDestinatario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTipoNotificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[]
    notIn?: $Enums.TipoNotificacion[]
    not?: NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacionFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacionFilter<$PrismaModel>
  }

  export type EnumMotivoDisponibleFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoDisponible | EnumMotivoDisponibleFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoDisponible[]
    notIn?: $Enums.MotivoDisponible[]
    not?: NestedEnumMotivoDisponibleFilter<$PrismaModel> | $Enums.MotivoDisponible
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EspecialidadListRelationFilter = {
    every?: EspecialidadWhereInput
    some?: EspecialidadWhereInput
    none?: EspecialidadWhereInput
  }

  export type AsignacionListRelationFilter = {
    every?: AsignacionWhereInput
    some?: AsignacionWhereInput
    none?: AsignacionWhereInput
  }

  export type EspecialidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsignacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TecnicoCountOrderByAggregateInput = {
    id?: SortOrder
    disponible?: SortOrder
    motivoDisponible?: SortOrder
    fechaDisponible?: SortOrder
    carga?: SortOrder
  }

  export type TecnicoAvgOrderByAggregateInput = {
    id?: SortOrder
    carga?: SortOrder
  }

  export type TecnicoMaxOrderByAggregateInput = {
    id?: SortOrder
    disponible?: SortOrder
    motivoDisponible?: SortOrder
    fechaDisponible?: SortOrder
    carga?: SortOrder
  }

  export type TecnicoMinOrderByAggregateInput = {
    id?: SortOrder
    disponible?: SortOrder
    motivoDisponible?: SortOrder
    fechaDisponible?: SortOrder
    carga?: SortOrder
  }

  export type TecnicoSumOrderByAggregateInput = {
    id?: SortOrder
    carga?: SortOrder
  }

  export type EnumMotivoDisponibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoDisponible | EnumMotivoDisponibleFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoDisponible[]
    notIn?: $Enums.MotivoDisponible[]
    not?: NestedEnumMotivoDisponibleWithAggregatesFilter<$PrismaModel> | $Enums.MotivoDisponible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotivoDisponibleFilter<$PrismaModel>
    _max?: NestedEnumMotivoDisponibleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type Regla_AutotriageListRelationFilter = {
    every?: Regla_AutotriageWhereInput
    some?: Regla_AutotriageWhereInput
    none?: Regla_AutotriageWhereInput
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Regla_AutotriageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadOrderByRelevanceInput = {
    fields: EspecialidadOrderByRelevanceFieldEnum | EspecialidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EspecialidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[]
    notIn?: $Enums.Prioridad[]
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type EtiquetaListRelationFilter = {
    every?: EtiquetaWhereInput
    some?: EtiquetaWhereInput
    none?: EtiquetaWhereInput
  }

  export type EtiquetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
    prioridad?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
    prioridad?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
    prioridad?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    tiempoMaximoRespuesta?: SortOrder
    tiempoMaximoSolucion?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[]
    notIn?: $Enums.Prioridad[]
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type EtiquetaOrderByRelevanceInput = {
    fields: EtiquetaOrderByRelevanceFieldEnum | EtiquetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EtiquetaCountOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
  }

  export type EtiquetaAvgOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
  }

  export type EtiquetaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
  }

  export type EtiquetaMinOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    nombre?: SortOrder
  }

  export type EtiquetaSumOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
  }

  export type EnumEstadoTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTicket | EnumEstadoTicketFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTicket[]
    notIn?: $Enums.EstadoTicket[]
    not?: NestedEnumEstadoTicketFilter<$PrismaModel> | $Enums.EstadoTicket
  }

  export type EtiquetaScalarRelationFilter = {
    is?: EtiquetaWhereInput
    isNot?: EtiquetaWhereInput
  }

  export type Ticket_ImagenListRelationFilter = {
    every?: Ticket_ImagenWhereInput
    some?: Ticket_ImagenWhereInput
    none?: Ticket_ImagenWhereInput
  }

  export type Ticket_ImagenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaCierre?: SortOrder
    slaRespusta?: SortOrder
    slaSolucion?: SortOrder
    estado?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaCierre?: SortOrder
    slaRespusta?: SortOrder
    slaSolucion?: SortOrder
    estado?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaCierre?: SortOrder
    slaRespusta?: SortOrder
    slaSolucion?: SortOrder
    estado?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idEtiqueta?: SortOrder
  }

  export type EnumEstadoTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTicket | EnumEstadoTicketFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTicket[]
    notIn?: $Enums.EstadoTicket[]
    not?: NestedEnumEstadoTicketWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTicketFilter<$PrismaModel>
    _max?: NestedEnumEstadoTicketFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type HistorialTicketOrderByRelevanceInput = {
    fields: HistorialTicketOrderByRelevanceFieldEnum | HistorialTicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistorialTicketCountOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    fecha?: SortOrder
    observacion?: SortOrder
  }

  export type HistorialTicketAvgOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
  }

  export type HistorialTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    fecha?: SortOrder
    observacion?: SortOrder
  }

  export type HistorialTicketMinOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    fecha?: SortOrder
    observacion?: SortOrder
  }

  export type HistorialTicketSumOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type Ticket_ImagenOrderByRelevanceInput = {
    fields: Ticket_ImagenOrderByRelevanceFieldEnum | Ticket_ImagenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Ticket_ImagenCountOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    imagen?: SortOrder
    url?: SortOrder
  }

  export type Ticket_ImagenAvgOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
  }

  export type Ticket_ImagenMaxOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    imagen?: SortOrder
    url?: SortOrder
  }

  export type Ticket_ImagenMinOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    imagen?: SortOrder
    url?: SortOrder
  }

  export type Ticket_ImagenSumOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type EnumMetodoAsignacionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoAsignacion | EnumMetodoAsignacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoAsignacion[] | null
    notIn?: $Enums.MetodoAsignacion[] | null
    not?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel> | $Enums.MetodoAsignacion | null
  }

  export type TecnicoScalarRelationFilter = {
    is?: TecnicoWhereInput
    isNot?: TecnicoWhereInput
  }

  export type Regla_AutotriageNullableScalarRelationFilter = {
    is?: Regla_AutotriageWhereInput | null
    isNot?: Regla_AutotriageWhereInput | null
  }

  export type AsignacionOrderByRelevanceInput = {
    fields: AsignacionOrderByRelevanceFieldEnum | AsignacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AsignacionCountOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrder
    fecha?: SortOrder
    puntajePrioridad?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    metodo?: SortOrder
  }

  export type AsignacionAvgOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrder
    puntajePrioridad?: SortOrder
  }

  export type AsignacionMaxOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrder
    fecha?: SortOrder
    puntajePrioridad?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    metodo?: SortOrder
  }

  export type AsignacionMinOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrder
    fecha?: SortOrder
    puntajePrioridad?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    metodo?: SortOrder
  }

  export type AsignacionSumOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idTecnico?: SortOrder
    idRegla?: SortOrder
    puntajePrioridad?: SortOrder
  }

  export type EnumMetodoAsignacionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoAsignacion | EnumMetodoAsignacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoAsignacion[] | null
    notIn?: $Enums.MetodoAsignacion[] | null
    not?: NestedEnumMetodoAsignacionNullableWithAggregatesFilter<$PrismaModel> | $Enums.MetodoAsignacion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel>
    _max?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel>
  }

  export type ValoracionOrderByRelevanceInput = {
    fields: ValoracionOrderByRelevanceFieldEnum | ValoracionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ValoracionCountOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
  }

  export type ValoracionAvgOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
  }

  export type ValoracionMaxOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
  }

  export type ValoracionMinOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
  }

  export type ValoracionSumOrderByAggregateInput = {
    id?: SortOrder
    idTicket?: SortOrder
    idUsuario?: SortOrder
    puntaje?: SortOrder
  }

  export type Regla_AutotriageOrderByRelevanceInput = {
    fields: Regla_AutotriageOrderByRelevanceFieldEnum | Regla_AutotriageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Regla_AutotriageCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
    activa?: SortOrder
  }

  export type Regla_AutotriageAvgOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
  }

  export type Regla_AutotriageMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
    activa?: SortOrder
  }

  export type Regla_AutotriageMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
    activa?: SortOrder
  }

  export type Regla_AutotriageSumOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    prioridad?: SortOrder
    carga?: SortOrder
  }

  export type TecnicoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput> | TecnicoCreateWithoutUsuarioInput[] | TecnicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput | TecnicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: TecnicoCreateManyUsuarioInputEnvelope
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput> | TicketCreateWithoutUsuarioInput[] | TicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsuarioInput | TicketCreateOrConnectWithoutUsuarioInput[]
    createMany?: TicketCreateManyUsuarioInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type HistorialTicketCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput> | HistorialTicketCreateWithoutUsuarioInput[] | HistorialTicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutUsuarioInput | HistorialTicketCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialTicketCreateManyUsuarioInputEnvelope
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
  }

  export type ValoracionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput> | ValoracionCreateWithoutUsuarioInput[] | ValoracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutUsuarioInput | ValoracionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ValoracionCreateManyUsuarioInputEnvelope
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput> | NotificacionCreateWithoutRemitenteInput[] | NotificacionUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutRemitenteInput | NotificacionCreateOrConnectWithoutRemitenteInput[]
    createMany?: NotificacionCreateManyRemitenteInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type NotificacionCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput> | NotificacionCreateWithoutDestinatarioInput[] | NotificacionUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutDestinatarioInput | NotificacionCreateOrConnectWithoutDestinatarioInput[]
    createMany?: NotificacionCreateManyDestinatarioInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type TecnicoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput> | TecnicoCreateWithoutUsuarioInput[] | TecnicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput | TecnicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: TecnicoCreateManyUsuarioInputEnvelope
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput> | TicketCreateWithoutUsuarioInput[] | TicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsuarioInput | TicketCreateOrConnectWithoutUsuarioInput[]
    createMany?: TicketCreateManyUsuarioInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput> | HistorialTicketCreateWithoutUsuarioInput[] | HistorialTicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutUsuarioInput | HistorialTicketCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialTicketCreateManyUsuarioInputEnvelope
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
  }

  export type ValoracionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput> | ValoracionCreateWithoutUsuarioInput[] | ValoracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutUsuarioInput | ValoracionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ValoracionCreateManyUsuarioInputEnvelope
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput> | NotificacionCreateWithoutRemitenteInput[] | NotificacionUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutRemitenteInput | NotificacionCreateOrConnectWithoutRemitenteInput[]
    createMany?: NotificacionCreateManyRemitenteInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput> | NotificacionCreateWithoutDestinatarioInput[] | NotificacionUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutDestinatarioInput | NotificacionCreateOrConnectWithoutDestinatarioInput[]
    createMany?: NotificacionCreateManyDestinatarioInputEnvelope
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumIdiomaFieldUpdateOperationsInput = {
    set?: $Enums.Idioma
  }

  export type TecnicoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput> | TecnicoCreateWithoutUsuarioInput[] | TecnicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput | TecnicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutUsuarioInput | TecnicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TecnicoCreateManyUsuarioInputEnvelope
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutUsuarioInput | TecnicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutUsuarioInput | TecnicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput> | TicketCreateWithoutUsuarioInput[] | TicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsuarioInput | TicketCreateOrConnectWithoutUsuarioInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUsuarioInput | TicketUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TicketCreateManyUsuarioInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUsuarioInput | TicketUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUsuarioInput | TicketUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type HistorialTicketUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput> | HistorialTicketCreateWithoutUsuarioInput[] | HistorialTicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutUsuarioInput | HistorialTicketCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialTicketUpsertWithWhereUniqueWithoutUsuarioInput | HistorialTicketUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialTicketCreateManyUsuarioInputEnvelope
    set?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    disconnect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    delete?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    update?: HistorialTicketUpdateWithWhereUniqueWithoutUsuarioInput | HistorialTicketUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialTicketUpdateManyWithWhereWithoutUsuarioInput | HistorialTicketUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
  }

  export type ValoracionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput> | ValoracionCreateWithoutUsuarioInput[] | ValoracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutUsuarioInput | ValoracionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ValoracionUpsertWithWhereUniqueWithoutUsuarioInput | ValoracionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ValoracionCreateManyUsuarioInputEnvelope
    set?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    disconnect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    delete?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    update?: ValoracionUpdateWithWhereUniqueWithoutUsuarioInput | ValoracionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ValoracionUpdateManyWithWhereWithoutUsuarioInput | ValoracionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput> | NotificacionCreateWithoutRemitenteInput[] | NotificacionUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutRemitenteInput | NotificacionCreateOrConnectWithoutRemitenteInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutRemitenteInput | NotificacionUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: NotificacionCreateManyRemitenteInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutRemitenteInput | NotificacionUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutRemitenteInput | NotificacionUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type NotificacionUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput> | NotificacionCreateWithoutDestinatarioInput[] | NotificacionUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutDestinatarioInput | NotificacionCreateOrConnectWithoutDestinatarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutDestinatarioInput | NotificacionUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: NotificacionCreateManyDestinatarioInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutDestinatarioInput | NotificacionUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutDestinatarioInput | NotificacionUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput> | TecnicoCreateWithoutUsuarioInput[] | TecnicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput | TecnicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutUsuarioInput | TecnicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TecnicoCreateManyUsuarioInputEnvelope
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutUsuarioInput | TecnicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutUsuarioInput | TecnicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput> | TicketCreateWithoutUsuarioInput[] | TicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUsuarioInput | TicketCreateOrConnectWithoutUsuarioInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUsuarioInput | TicketUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TicketCreateManyUsuarioInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUsuarioInput | TicketUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUsuarioInput | TicketUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput> | HistorialTicketCreateWithoutUsuarioInput[] | HistorialTicketUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutUsuarioInput | HistorialTicketCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialTicketUpsertWithWhereUniqueWithoutUsuarioInput | HistorialTicketUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialTicketCreateManyUsuarioInputEnvelope
    set?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    disconnect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    delete?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    update?: HistorialTicketUpdateWithWhereUniqueWithoutUsuarioInput | HistorialTicketUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialTicketUpdateManyWithWhereWithoutUsuarioInput | HistorialTicketUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
  }

  export type ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput> | ValoracionCreateWithoutUsuarioInput[] | ValoracionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutUsuarioInput | ValoracionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ValoracionUpsertWithWhereUniqueWithoutUsuarioInput | ValoracionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ValoracionCreateManyUsuarioInputEnvelope
    set?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    disconnect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    delete?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    update?: ValoracionUpdateWithWhereUniqueWithoutUsuarioInput | ValoracionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ValoracionUpdateManyWithWhereWithoutUsuarioInput | ValoracionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput> | NotificacionCreateWithoutRemitenteInput[] | NotificacionUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutRemitenteInput | NotificacionCreateOrConnectWithoutRemitenteInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutRemitenteInput | NotificacionUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: NotificacionCreateManyRemitenteInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutRemitenteInput | NotificacionUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutRemitenteInput | NotificacionUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput> | NotificacionCreateWithoutDestinatarioInput[] | NotificacionUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacionCreateOrConnectWithoutDestinatarioInput | NotificacionCreateOrConnectWithoutDestinatarioInput[]
    upsert?: NotificacionUpsertWithWhereUniqueWithoutDestinatarioInput | NotificacionUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: NotificacionCreateManyDestinatarioInputEnvelope
    set?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    disconnect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    delete?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    connect?: NotificacionWhereUniqueInput | NotificacionWhereUniqueInput[]
    update?: NotificacionUpdateWithWhereUniqueWithoutDestinatarioInput | NotificacionUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: NotificacionUpdateManyWithWhereWithoutDestinatarioInput | NotificacionUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutNotificacionesRemitenteInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesRemitenteInput, UsuarioUncheckedCreateWithoutNotificacionesRemitenteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesRemitenteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoNotificacionFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacion
  }

  export type UsuarioUpdateOneWithoutNotificacionesRemitenteNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesRemitenteInput, UsuarioUncheckedCreateWithoutNotificacionesRemitenteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesRemitenteInput
    upsert?: UsuarioUpsertWithoutNotificacionesRemitenteInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacionesRemitenteInput, UsuarioUpdateWithoutNotificacionesRemitenteInput>, UsuarioUncheckedUpdateWithoutNotificacionesRemitenteInput>
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacionesInput
    upsert?: UsuarioUpsertWithoutNotificacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacionesInput, UsuarioUpdateWithoutNotificacionesInput>, UsuarioUncheckedUpdateWithoutNotificacionesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutTecnicoInput = {
    create?: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTecnicoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EspecialidadCreateNestedManyWithoutTecnicosInput = {
    create?: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput> | EspecialidadCreateWithoutTecnicosInput[] | EspecialidadUncheckedCreateWithoutTecnicosInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutTecnicosInput | EspecialidadCreateOrConnectWithoutTecnicosInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type AsignacionCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput> | AsignacionCreateWithoutTecnicoInput[] | AsignacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTecnicoInput | AsignacionCreateOrConnectWithoutTecnicoInput[]
    createMany?: AsignacionCreateManyTecnicoInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type EspecialidadUncheckedCreateNestedManyWithoutTecnicosInput = {
    create?: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput> | EspecialidadCreateWithoutTecnicosInput[] | EspecialidadUncheckedCreateWithoutTecnicosInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutTecnicosInput | EspecialidadCreateOrConnectWithoutTecnicosInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type AsignacionUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput> | AsignacionCreateWithoutTecnicoInput[] | AsignacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTecnicoInput | AsignacionCreateOrConnectWithoutTecnicoInput[]
    createMany?: AsignacionCreateManyTecnicoInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type EnumMotivoDisponibleFieldUpdateOperationsInput = {
    set?: $Enums.MotivoDisponible
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutTecnicoNestedInput = {
    create?: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTecnicoInput
    upsert?: UsuarioUpsertWithoutTecnicoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTecnicoInput, UsuarioUpdateWithoutTecnicoInput>, UsuarioUncheckedUpdateWithoutTecnicoInput>
  }

  export type EspecialidadUpdateManyWithoutTecnicosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput> | EspecialidadCreateWithoutTecnicosInput[] | EspecialidadUncheckedCreateWithoutTecnicosInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutTecnicosInput | EspecialidadCreateOrConnectWithoutTecnicosInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutTecnicosInput | EspecialidadUpsertWithWhereUniqueWithoutTecnicosInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutTecnicosInput | EspecialidadUpdateWithWhereUniqueWithoutTecnicosInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutTecnicosInput | EspecialidadUpdateManyWithWhereWithoutTecnicosInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type AsignacionUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput> | AsignacionCreateWithoutTecnicoInput[] | AsignacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTecnicoInput | AsignacionCreateOrConnectWithoutTecnicoInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutTecnicoInput | AsignacionUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: AsignacionCreateManyTecnicoInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutTecnicoInput | AsignacionUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutTecnicoInput | AsignacionUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type EspecialidadUncheckedUpdateManyWithoutTecnicosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput> | EspecialidadCreateWithoutTecnicosInput[] | EspecialidadUncheckedCreateWithoutTecnicosInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutTecnicosInput | EspecialidadCreateOrConnectWithoutTecnicosInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutTecnicosInput | EspecialidadUpsertWithWhereUniqueWithoutTecnicosInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutTecnicosInput | EspecialidadUpdateWithWhereUniqueWithoutTecnicosInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutTecnicosInput | EspecialidadUpdateManyWithWhereWithoutTecnicosInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type AsignacionUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput> | AsignacionCreateWithoutTecnicoInput[] | AsignacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTecnicoInput | AsignacionCreateOrConnectWithoutTecnicoInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutTecnicoInput | AsignacionUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: AsignacionCreateManyTecnicoInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutTecnicoInput | AsignacionUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutTecnicoInput | AsignacionUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type TecnicoCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput> | TecnicoCreateWithoutEspecialidadesInput[] | TecnicoUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutEspecialidadesInput | TecnicoCreateOrConnectWithoutEspecialidadesInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput> | CategoriaCreateWithoutEspecialidadesInput[] | CategoriaUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutEspecialidadesInput | CategoriaCreateOrConnectWithoutEspecialidadesInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type Regla_AutotriageCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput> | Regla_AutotriageCreateWithoutEspecialidadesInput[] | Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput | Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type TecnicoUncheckedCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput> | TecnicoCreateWithoutEspecialidadesInput[] | TecnicoUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutEspecialidadesInput | TecnicoCreateOrConnectWithoutEspecialidadesInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput> | CategoriaCreateWithoutEspecialidadesInput[] | CategoriaUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutEspecialidadesInput | CategoriaCreateOrConnectWithoutEspecialidadesInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type Regla_AutotriageUncheckedCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput> | Regla_AutotriageCreateWithoutEspecialidadesInput[] | Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput | Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type TecnicoUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput> | TecnicoCreateWithoutEspecialidadesInput[] | TecnicoUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutEspecialidadesInput | TecnicoCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutEspecialidadesInput | TecnicoUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutEspecialidadesInput | TecnicoUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutEspecialidadesInput | TecnicoUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput> | CategoriaCreateWithoutEspecialidadesInput[] | CategoriaUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutEspecialidadesInput | CategoriaCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutEspecialidadesInput | CategoriaUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutEspecialidadesInput | CategoriaUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutEspecialidadesInput | CategoriaUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type Regla_AutotriageUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput> | Regla_AutotriageCreateWithoutEspecialidadesInput[] | Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput | Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutEspecialidadesInput | Regla_AutotriageUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutEspecialidadesInput | Regla_AutotriageUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutEspecialidadesInput | Regla_AutotriageUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type TecnicoUncheckedUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput> | TecnicoCreateWithoutEspecialidadesInput[] | TecnicoUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutEspecialidadesInput | TecnicoCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutEspecialidadesInput | TecnicoUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutEspecialidadesInput | TecnicoUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutEspecialidadesInput | TecnicoUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput> | CategoriaCreateWithoutEspecialidadesInput[] | CategoriaUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutEspecialidadesInput | CategoriaCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutEspecialidadesInput | CategoriaUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutEspecialidadesInput | CategoriaUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutEspecialidadesInput | CategoriaUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput> | Regla_AutotriageCreateWithoutEspecialidadesInput[] | Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput | Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutEspecialidadesInput | Regla_AutotriageUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutEspecialidadesInput | Regla_AutotriageUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutEspecialidadesInput | Regla_AutotriageUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type EspecialidadCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput> | EspecialidadCreateWithoutCategoriasInput[] | EspecialidadUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutCategoriasInput | EspecialidadCreateOrConnectWithoutCategoriasInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type EtiquetaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput> | EtiquetaCreateWithoutCategoriaInput[] | EtiquetaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutCategoriaInput | EtiquetaCreateOrConnectWithoutCategoriaInput[]
    createMany?: EtiquetaCreateManyCategoriaInputEnvelope
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type Regla_AutotriageCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput> | Regla_AutotriageCreateWithoutCategoriaInput[] | Regla_AutotriageUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutCategoriaInput | Regla_AutotriageCreateOrConnectWithoutCategoriaInput[]
    createMany?: Regla_AutotriageCreateManyCategoriaInputEnvelope
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type EspecialidadUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput> | EspecialidadCreateWithoutCategoriasInput[] | EspecialidadUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutCategoriasInput | EspecialidadCreateOrConnectWithoutCategoriasInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type EtiquetaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput> | EtiquetaCreateWithoutCategoriaInput[] | EtiquetaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutCategoriaInput | EtiquetaCreateOrConnectWithoutCategoriaInput[]
    createMany?: EtiquetaCreateManyCategoriaInputEnvelope
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type Regla_AutotriageUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput> | Regla_AutotriageCreateWithoutCategoriaInput[] | Regla_AutotriageUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutCategoriaInput | Regla_AutotriageCreateOrConnectWithoutCategoriaInput[]
    createMany?: Regla_AutotriageCreateManyCategoriaInputEnvelope
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPrioridadFieldUpdateOperationsInput = {
    set?: $Enums.Prioridad
  }

  export type EspecialidadUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput> | EspecialidadCreateWithoutCategoriasInput[] | EspecialidadUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutCategoriasInput | EspecialidadCreateOrConnectWithoutCategoriasInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutCategoriasInput | EspecialidadUpsertWithWhereUniqueWithoutCategoriasInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutCategoriasInput | EspecialidadUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutCategoriasInput | EspecialidadUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type EtiquetaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput> | EtiquetaCreateWithoutCategoriaInput[] | EtiquetaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutCategoriaInput | EtiquetaCreateOrConnectWithoutCategoriaInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutCategoriaInput | EtiquetaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: EtiquetaCreateManyCategoriaInputEnvelope
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutCategoriaInput | EtiquetaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutCategoriaInput | EtiquetaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type Regla_AutotriageUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput> | Regla_AutotriageCreateWithoutCategoriaInput[] | Regla_AutotriageUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutCategoriaInput | Regla_AutotriageCreateOrConnectWithoutCategoriaInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutCategoriaInput | Regla_AutotriageUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: Regla_AutotriageCreateManyCategoriaInputEnvelope
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutCategoriaInput | Regla_AutotriageUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutCategoriaInput | Regla_AutotriageUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type EspecialidadUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput> | EspecialidadCreateWithoutCategoriasInput[] | EspecialidadUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutCategoriasInput | EspecialidadCreateOrConnectWithoutCategoriasInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutCategoriasInput | EspecialidadUpsertWithWhereUniqueWithoutCategoriasInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutCategoriasInput | EspecialidadUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutCategoriasInput | EspecialidadUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type EtiquetaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput> | EtiquetaCreateWithoutCategoriaInput[] | EtiquetaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutCategoriaInput | EtiquetaCreateOrConnectWithoutCategoriaInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutCategoriaInput | EtiquetaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: EtiquetaCreateManyCategoriaInputEnvelope
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutCategoriaInput | EtiquetaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutCategoriaInput | EtiquetaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput> | Regla_AutotriageCreateWithoutCategoriaInput[] | Regla_AutotriageUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutCategoriaInput | Regla_AutotriageCreateOrConnectWithoutCategoriaInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutCategoriaInput | Regla_AutotriageUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: Regla_AutotriageCreateManyCategoriaInputEnvelope
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutCategoriaInput | Regla_AutotriageUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutCategoriaInput | Regla_AutotriageUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutEtiquetasInput = {
    create?: XOR<CategoriaCreateWithoutEtiquetasInput, CategoriaUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutEtiquetasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput> | TicketCreateWithoutEtiquetaInput[] | TicketUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEtiquetaInput | TicketCreateOrConnectWithoutEtiquetaInput[]
    createMany?: TicketCreateManyEtiquetaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Regla_AutotriageCreateNestedManyWithoutEtiquetasInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput> | Regla_AutotriageCreateWithoutEtiquetasInput[] | Regla_AutotriageUncheckedCreateWithoutEtiquetasInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEtiquetasInput | Regla_AutotriageCreateOrConnectWithoutEtiquetasInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput> | TicketCreateWithoutEtiquetaInput[] | TicketUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEtiquetaInput | TicketCreateOrConnectWithoutEtiquetaInput[]
    createMany?: TicketCreateManyEtiquetaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Regla_AutotriageUncheckedCreateNestedManyWithoutEtiquetasInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput> | Regla_AutotriageCreateWithoutEtiquetasInput[] | Regla_AutotriageUncheckedCreateWithoutEtiquetasInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEtiquetasInput | Regla_AutotriageCreateOrConnectWithoutEtiquetasInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutEtiquetasNestedInput = {
    create?: XOR<CategoriaCreateWithoutEtiquetasInput, CategoriaUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutEtiquetasInput
    upsert?: CategoriaUpsertWithoutEtiquetasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutEtiquetasInput, CategoriaUpdateWithoutEtiquetasInput>, CategoriaUncheckedUpdateWithoutEtiquetasInput>
  }

  export type TicketUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput> | TicketCreateWithoutEtiquetaInput[] | TicketUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEtiquetaInput | TicketCreateOrConnectWithoutEtiquetaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEtiquetaInput | TicketUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: TicketCreateManyEtiquetaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEtiquetaInput | TicketUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEtiquetaInput | TicketUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Regla_AutotriageUpdateManyWithoutEtiquetasNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput> | Regla_AutotriageCreateWithoutEtiquetasInput[] | Regla_AutotriageUncheckedCreateWithoutEtiquetasInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEtiquetasInput | Regla_AutotriageCreateOrConnectWithoutEtiquetasInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutEtiquetasInput | Regla_AutotriageUpsertWithWhereUniqueWithoutEtiquetasInput[]
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutEtiquetasInput | Regla_AutotriageUpdateWithWhereUniqueWithoutEtiquetasInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutEtiquetasInput | Regla_AutotriageUpdateManyWithWhereWithoutEtiquetasInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput> | TicketCreateWithoutEtiquetaInput[] | TicketUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEtiquetaInput | TicketCreateOrConnectWithoutEtiquetaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEtiquetaInput | TicketUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: TicketCreateManyEtiquetaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEtiquetaInput | TicketUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEtiquetaInput | TicketUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput> | Regla_AutotriageCreateWithoutEtiquetasInput[] | Regla_AutotriageUncheckedCreateWithoutEtiquetasInput[]
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutEtiquetasInput | Regla_AutotriageCreateOrConnectWithoutEtiquetasInput[]
    upsert?: Regla_AutotriageUpsertWithWhereUniqueWithoutEtiquetasInput | Regla_AutotriageUpsertWithWhereUniqueWithoutEtiquetasInput[]
    set?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    disconnect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    delete?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    connect?: Regla_AutotriageWhereUniqueInput | Regla_AutotriageWhereUniqueInput[]
    update?: Regla_AutotriageUpdateWithWhereUniqueWithoutEtiquetasInput | Regla_AutotriageUpdateWithWhereUniqueWithoutEtiquetasInput[]
    updateMany?: Regla_AutotriageUpdateManyWithWhereWithoutEtiquetasInput | Regla_AutotriageUpdateManyWithWhereWithoutEtiquetasInput[]
    deleteMany?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTicketInput = {
    create?: XOR<UsuarioCreateWithoutTicketInput, UsuarioUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EtiquetaCreateNestedOneWithoutTicketInput = {
    create?: XOR<EtiquetaCreateWithoutTicketInput, EtiquetaUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutTicketInput
    connect?: EtiquetaWhereUniqueInput
  }

  export type HistorialTicketCreateNestedManyWithoutTicketInput = {
    create?: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput> | HistorialTicketCreateWithoutTicketInput[] | HistorialTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutTicketInput | HistorialTicketCreateOrConnectWithoutTicketInput[]
    createMany?: HistorialTicketCreateManyTicketInputEnvelope
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
  }

  export type Ticket_ImagenCreateNestedManyWithoutTicketInput = {
    create?: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput> | Ticket_ImagenCreateWithoutTicketInput[] | Ticket_ImagenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Ticket_ImagenCreateOrConnectWithoutTicketInput | Ticket_ImagenCreateOrConnectWithoutTicketInput[]
    createMany?: Ticket_ImagenCreateManyTicketInputEnvelope
    connect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
  }

  export type AsignacionCreateNestedManyWithoutTicketInput = {
    create?: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput> | AsignacionCreateWithoutTicketInput[] | AsignacionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTicketInput | AsignacionCreateOrConnectWithoutTicketInput[]
    createMany?: AsignacionCreateManyTicketInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type ValoracionCreateNestedManyWithoutTicketInput = {
    create?: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput> | ValoracionCreateWithoutTicketInput[] | ValoracionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutTicketInput | ValoracionCreateOrConnectWithoutTicketInput[]
    createMany?: ValoracionCreateManyTicketInputEnvelope
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
  }

  export type HistorialTicketUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput> | HistorialTicketCreateWithoutTicketInput[] | HistorialTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutTicketInput | HistorialTicketCreateOrConnectWithoutTicketInput[]
    createMany?: HistorialTicketCreateManyTicketInputEnvelope
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
  }

  export type Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput> | Ticket_ImagenCreateWithoutTicketInput[] | Ticket_ImagenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Ticket_ImagenCreateOrConnectWithoutTicketInput | Ticket_ImagenCreateOrConnectWithoutTicketInput[]
    createMany?: Ticket_ImagenCreateManyTicketInputEnvelope
    connect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
  }

  export type AsignacionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput> | AsignacionCreateWithoutTicketInput[] | AsignacionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTicketInput | AsignacionCreateOrConnectWithoutTicketInput[]
    createMany?: AsignacionCreateManyTicketInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type ValoracionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput> | ValoracionCreateWithoutTicketInput[] | ValoracionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutTicketInput | ValoracionCreateOrConnectWithoutTicketInput[]
    createMany?: ValoracionCreateManyTicketInputEnvelope
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
  }

  export type EnumEstadoTicketFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTicket
  }

  export type UsuarioUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<UsuarioCreateWithoutTicketInput, UsuarioUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTicketInput
    upsert?: UsuarioUpsertWithoutTicketInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTicketInput, UsuarioUpdateWithoutTicketInput>, UsuarioUncheckedUpdateWithoutTicketInput>
  }

  export type EtiquetaUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<EtiquetaCreateWithoutTicketInput, EtiquetaUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutTicketInput
    upsert?: EtiquetaUpsertWithoutTicketInput
    connect?: EtiquetaWhereUniqueInput
    update?: XOR<XOR<EtiquetaUpdateToOneWithWhereWithoutTicketInput, EtiquetaUpdateWithoutTicketInput>, EtiquetaUncheckedUpdateWithoutTicketInput>
  }

  export type HistorialTicketUpdateManyWithoutTicketNestedInput = {
    create?: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput> | HistorialTicketCreateWithoutTicketInput[] | HistorialTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutTicketInput | HistorialTicketCreateOrConnectWithoutTicketInput[]
    upsert?: HistorialTicketUpsertWithWhereUniqueWithoutTicketInput | HistorialTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: HistorialTicketCreateManyTicketInputEnvelope
    set?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    disconnect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    delete?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    update?: HistorialTicketUpdateWithWhereUniqueWithoutTicketInput | HistorialTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: HistorialTicketUpdateManyWithWhereWithoutTicketInput | HistorialTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
  }

  export type Ticket_ImagenUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput> | Ticket_ImagenCreateWithoutTicketInput[] | Ticket_ImagenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Ticket_ImagenCreateOrConnectWithoutTicketInput | Ticket_ImagenCreateOrConnectWithoutTicketInput[]
    upsert?: Ticket_ImagenUpsertWithWhereUniqueWithoutTicketInput | Ticket_ImagenUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Ticket_ImagenCreateManyTicketInputEnvelope
    set?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    disconnect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    delete?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    connect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    update?: Ticket_ImagenUpdateWithWhereUniqueWithoutTicketInput | Ticket_ImagenUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Ticket_ImagenUpdateManyWithWhereWithoutTicketInput | Ticket_ImagenUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Ticket_ImagenScalarWhereInput | Ticket_ImagenScalarWhereInput[]
  }

  export type AsignacionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput> | AsignacionCreateWithoutTicketInput[] | AsignacionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTicketInput | AsignacionCreateOrConnectWithoutTicketInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutTicketInput | AsignacionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: AsignacionCreateManyTicketInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutTicketInput | AsignacionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutTicketInput | AsignacionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type ValoracionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput> | ValoracionCreateWithoutTicketInput[] | ValoracionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutTicketInput | ValoracionCreateOrConnectWithoutTicketInput[]
    upsert?: ValoracionUpsertWithWhereUniqueWithoutTicketInput | ValoracionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ValoracionCreateManyTicketInputEnvelope
    set?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    disconnect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    delete?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    update?: ValoracionUpdateWithWhereUniqueWithoutTicketInput | ValoracionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ValoracionUpdateManyWithWhereWithoutTicketInput | ValoracionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
  }

  export type HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput> | HistorialTicketCreateWithoutTicketInput[] | HistorialTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistorialTicketCreateOrConnectWithoutTicketInput | HistorialTicketCreateOrConnectWithoutTicketInput[]
    upsert?: HistorialTicketUpsertWithWhereUniqueWithoutTicketInput | HistorialTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: HistorialTicketCreateManyTicketInputEnvelope
    set?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    disconnect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    delete?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    connect?: HistorialTicketWhereUniqueInput | HistorialTicketWhereUniqueInput[]
    update?: HistorialTicketUpdateWithWhereUniqueWithoutTicketInput | HistorialTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: HistorialTicketUpdateManyWithWhereWithoutTicketInput | HistorialTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
  }

  export type Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput> | Ticket_ImagenCreateWithoutTicketInput[] | Ticket_ImagenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Ticket_ImagenCreateOrConnectWithoutTicketInput | Ticket_ImagenCreateOrConnectWithoutTicketInput[]
    upsert?: Ticket_ImagenUpsertWithWhereUniqueWithoutTicketInput | Ticket_ImagenUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Ticket_ImagenCreateManyTicketInputEnvelope
    set?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    disconnect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    delete?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    connect?: Ticket_ImagenWhereUniqueInput | Ticket_ImagenWhereUniqueInput[]
    update?: Ticket_ImagenUpdateWithWhereUniqueWithoutTicketInput | Ticket_ImagenUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Ticket_ImagenUpdateManyWithWhereWithoutTicketInput | Ticket_ImagenUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Ticket_ImagenScalarWhereInput | Ticket_ImagenScalarWhereInput[]
  }

  export type AsignacionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput> | AsignacionCreateWithoutTicketInput[] | AsignacionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutTicketInput | AsignacionCreateOrConnectWithoutTicketInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutTicketInput | AsignacionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: AsignacionCreateManyTicketInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutTicketInput | AsignacionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutTicketInput | AsignacionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type ValoracionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput> | ValoracionCreateWithoutTicketInput[] | ValoracionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ValoracionCreateOrConnectWithoutTicketInput | ValoracionCreateOrConnectWithoutTicketInput[]
    upsert?: ValoracionUpsertWithWhereUniqueWithoutTicketInput | ValoracionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ValoracionCreateManyTicketInputEnvelope
    set?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    disconnect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    delete?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    connect?: ValoracionWhereUniqueInput | ValoracionWhereUniqueInput[]
    update?: ValoracionUpdateWithWhereUniqueWithoutTicketInput | ValoracionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ValoracionUpdateManyWithWhereWithoutTicketInput | ValoracionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutHistorialInput = {
    create?: XOR<TicketCreateWithoutHistorialInput, TicketUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistorialInput
    connect?: TicketWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHistorialTicketInput = {
    create?: XOR<UsuarioCreateWithoutHistorialTicketInput, UsuarioUncheckedCreateWithoutHistorialTicketInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialTicketInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<TicketCreateWithoutHistorialInput, TicketUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistorialInput
    upsert?: TicketUpsertWithoutHistorialInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutHistorialInput, TicketUpdateWithoutHistorialInput>, TicketUncheckedUpdateWithoutHistorialInput>
  }

  export type UsuarioUpdateOneWithoutHistorialTicketNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistorialTicketInput, UsuarioUncheckedCreateWithoutHistorialTicketInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialTicketInput
    upsert?: UsuarioUpsertWithoutHistorialTicketInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistorialTicketInput, UsuarioUpdateWithoutHistorialTicketInput>, UsuarioUncheckedUpdateWithoutHistorialTicketInput>
  }

  export type TicketCreateNestedOneWithoutImagenesInput = {
    create?: XOR<TicketCreateWithoutImagenesInput, TicketUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutImagenesInput
    connect?: TicketWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type TicketUpdateOneRequiredWithoutImagenesNestedInput = {
    create?: XOR<TicketCreateWithoutImagenesInput, TicketUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutImagenesInput
    upsert?: TicketUpsertWithoutImagenesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutImagenesInput, TicketUpdateWithoutImagenesInput>, TicketUncheckedUpdateWithoutImagenesInput>
  }

  export type TicketCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<TicketCreateWithoutAsignacionesInput, TicketUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAsignacionesInput
    connect?: TicketWhereUniqueInput
  }

  export type TecnicoCreateNestedOneWithoutAsignacionInput = {
    create?: XOR<TecnicoCreateWithoutAsignacionInput, TecnicoUncheckedCreateWithoutAsignacionInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutAsignacionInput
    connect?: TecnicoWhereUniqueInput
  }

  export type Regla_AutotriageCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<Regla_AutotriageCreateWithoutAsignacionesInput, Regla_AutotriageUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutAsignacionesInput
    connect?: Regla_AutotriageWhereUniqueInput
  }

  export type NullableEnumMetodoAsignacionFieldUpdateOperationsInput = {
    set?: $Enums.MetodoAsignacion | null
  }

  export type TicketUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<TicketCreateWithoutAsignacionesInput, TicketUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAsignacionesInput
    upsert?: TicketUpsertWithoutAsignacionesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAsignacionesInput, TicketUpdateWithoutAsignacionesInput>, TicketUncheckedUpdateWithoutAsignacionesInput>
  }

  export type TecnicoUpdateOneRequiredWithoutAsignacionNestedInput = {
    create?: XOR<TecnicoCreateWithoutAsignacionInput, TecnicoUncheckedCreateWithoutAsignacionInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutAsignacionInput
    upsert?: TecnicoUpsertWithoutAsignacionInput
    connect?: TecnicoWhereUniqueInput
    update?: XOR<XOR<TecnicoUpdateToOneWithWhereWithoutAsignacionInput, TecnicoUpdateWithoutAsignacionInput>, TecnicoUncheckedUpdateWithoutAsignacionInput>
  }

  export type Regla_AutotriageUpdateOneWithoutAsignacionesNestedInput = {
    create?: XOR<Regla_AutotriageCreateWithoutAsignacionesInput, Regla_AutotriageUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: Regla_AutotriageCreateOrConnectWithoutAsignacionesInput
    upsert?: Regla_AutotriageUpsertWithoutAsignacionesInput
    disconnect?: Regla_AutotriageWhereInput | boolean
    delete?: Regla_AutotriageWhereInput | boolean
    connect?: Regla_AutotriageWhereUniqueInput
    update?: XOR<XOR<Regla_AutotriageUpdateToOneWithWhereWithoutAsignacionesInput, Regla_AutotriageUpdateWithoutAsignacionesInput>, Regla_AutotriageUncheckedUpdateWithoutAsignacionesInput>
  }

  export type TicketCreateNestedOneWithoutValoracionInput = {
    create?: XOR<TicketCreateWithoutValoracionInput, TicketUncheckedCreateWithoutValoracionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutValoracionInput
    connect?: TicketWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutValoracionInput = {
    create?: XOR<UsuarioCreateWithoutValoracionInput, UsuarioUncheckedCreateWithoutValoracionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutValoracionInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutValoracionNestedInput = {
    create?: XOR<TicketCreateWithoutValoracionInput, TicketUncheckedCreateWithoutValoracionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutValoracionInput
    upsert?: TicketUpsertWithoutValoracionInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutValoracionInput, TicketUpdateWithoutValoracionInput>, TicketUncheckedUpdateWithoutValoracionInput>
  }

  export type UsuarioUpdateOneRequiredWithoutValoracionNestedInput = {
    create?: XOR<UsuarioCreateWithoutValoracionInput, UsuarioUncheckedCreateWithoutValoracionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutValoracionInput
    upsert?: UsuarioUpsertWithoutValoracionInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutValoracionInput, UsuarioUpdateWithoutValoracionInput>, UsuarioUncheckedUpdateWithoutValoracionInput>
  }

  export type CategoriaCreateNestedOneWithoutReglasInput = {
    create?: XOR<CategoriaCreateWithoutReglasInput, CategoriaUncheckedCreateWithoutReglasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReglasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type EtiquetaCreateNestedManyWithoutAutoTriageInput = {
    create?: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput> | EtiquetaCreateWithoutAutoTriageInput[] | EtiquetaUncheckedCreateWithoutAutoTriageInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutAutoTriageInput | EtiquetaCreateOrConnectWithoutAutoTriageInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type EspecialidadCreateNestedManyWithoutReglasInput = {
    create?: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput> | EspecialidadCreateWithoutReglasInput[] | EspecialidadUncheckedCreateWithoutReglasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutReglasInput | EspecialidadCreateOrConnectWithoutReglasInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type AsignacionCreateNestedManyWithoutReglaInput = {
    create?: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput> | AsignacionCreateWithoutReglaInput[] | AsignacionUncheckedCreateWithoutReglaInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutReglaInput | AsignacionCreateOrConnectWithoutReglaInput[]
    createMany?: AsignacionCreateManyReglaInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type EtiquetaUncheckedCreateNestedManyWithoutAutoTriageInput = {
    create?: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput> | EtiquetaCreateWithoutAutoTriageInput[] | EtiquetaUncheckedCreateWithoutAutoTriageInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutAutoTriageInput | EtiquetaCreateOrConnectWithoutAutoTriageInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type EspecialidadUncheckedCreateNestedManyWithoutReglasInput = {
    create?: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput> | EspecialidadCreateWithoutReglasInput[] | EspecialidadUncheckedCreateWithoutReglasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutReglasInput | EspecialidadCreateOrConnectWithoutReglasInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
  }

  export type AsignacionUncheckedCreateNestedManyWithoutReglaInput = {
    create?: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput> | AsignacionCreateWithoutReglaInput[] | AsignacionUncheckedCreateWithoutReglaInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutReglaInput | AsignacionCreateOrConnectWithoutReglaInput[]
    createMany?: AsignacionCreateManyReglaInputEnvelope
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutReglasNestedInput = {
    create?: XOR<CategoriaCreateWithoutReglasInput, CategoriaUncheckedCreateWithoutReglasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReglasInput
    upsert?: CategoriaUpsertWithoutReglasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutReglasInput, CategoriaUpdateWithoutReglasInput>, CategoriaUncheckedUpdateWithoutReglasInput>
  }

  export type EtiquetaUpdateManyWithoutAutoTriageNestedInput = {
    create?: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput> | EtiquetaCreateWithoutAutoTriageInput[] | EtiquetaUncheckedCreateWithoutAutoTriageInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutAutoTriageInput | EtiquetaCreateOrConnectWithoutAutoTriageInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutAutoTriageInput | EtiquetaUpsertWithWhereUniqueWithoutAutoTriageInput[]
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutAutoTriageInput | EtiquetaUpdateWithWhereUniqueWithoutAutoTriageInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutAutoTriageInput | EtiquetaUpdateManyWithWhereWithoutAutoTriageInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type EspecialidadUpdateManyWithoutReglasNestedInput = {
    create?: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput> | EspecialidadCreateWithoutReglasInput[] | EspecialidadUncheckedCreateWithoutReglasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutReglasInput | EspecialidadCreateOrConnectWithoutReglasInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutReglasInput | EspecialidadUpsertWithWhereUniqueWithoutReglasInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutReglasInput | EspecialidadUpdateWithWhereUniqueWithoutReglasInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutReglasInput | EspecialidadUpdateManyWithWhereWithoutReglasInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type AsignacionUpdateManyWithoutReglaNestedInput = {
    create?: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput> | AsignacionCreateWithoutReglaInput[] | AsignacionUncheckedCreateWithoutReglaInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutReglaInput | AsignacionCreateOrConnectWithoutReglaInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutReglaInput | AsignacionUpsertWithWhereUniqueWithoutReglaInput[]
    createMany?: AsignacionCreateManyReglaInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutReglaInput | AsignacionUpdateWithWhereUniqueWithoutReglaInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutReglaInput | AsignacionUpdateManyWithWhereWithoutReglaInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type EtiquetaUncheckedUpdateManyWithoutAutoTriageNestedInput = {
    create?: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput> | EtiquetaCreateWithoutAutoTriageInput[] | EtiquetaUncheckedCreateWithoutAutoTriageInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutAutoTriageInput | EtiquetaCreateOrConnectWithoutAutoTriageInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutAutoTriageInput | EtiquetaUpsertWithWhereUniqueWithoutAutoTriageInput[]
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutAutoTriageInput | EtiquetaUpdateWithWhereUniqueWithoutAutoTriageInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutAutoTriageInput | EtiquetaUpdateManyWithWhereWithoutAutoTriageInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type EspecialidadUncheckedUpdateManyWithoutReglasNestedInput = {
    create?: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput> | EspecialidadCreateWithoutReglasInput[] | EspecialidadUncheckedCreateWithoutReglasInput[]
    connectOrCreate?: EspecialidadCreateOrConnectWithoutReglasInput | EspecialidadCreateOrConnectWithoutReglasInput[]
    upsert?: EspecialidadUpsertWithWhereUniqueWithoutReglasInput | EspecialidadUpsertWithWhereUniqueWithoutReglasInput[]
    set?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    disconnect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    delete?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    connect?: EspecialidadWhereUniqueInput | EspecialidadWhereUniqueInput[]
    update?: EspecialidadUpdateWithWhereUniqueWithoutReglasInput | EspecialidadUpdateWithWhereUniqueWithoutReglasInput[]
    updateMany?: EspecialidadUpdateManyWithWhereWithoutReglasInput | EspecialidadUpdateManyWithWhereWithoutReglasInput[]
    deleteMany?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
  }

  export type AsignacionUncheckedUpdateManyWithoutReglaNestedInput = {
    create?: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput> | AsignacionCreateWithoutReglaInput[] | AsignacionUncheckedCreateWithoutReglaInput[]
    connectOrCreate?: AsignacionCreateOrConnectWithoutReglaInput | AsignacionCreateOrConnectWithoutReglaInput[]
    upsert?: AsignacionUpsertWithWhereUniqueWithoutReglaInput | AsignacionUpsertWithWhereUniqueWithoutReglaInput[]
    createMany?: AsignacionCreateManyReglaInputEnvelope
    set?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    disconnect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    delete?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    connect?: AsignacionWhereUniqueInput | AsignacionWhereUniqueInput[]
    update?: AsignacionUpdateWithWhereUniqueWithoutReglaInput | AsignacionUpdateWithWhereUniqueWithoutReglaInput[]
    updateMany?: AsignacionUpdateManyWithWhereWithoutReglaInput | AsignacionUpdateManyWithWhereWithoutReglaInput[]
    deleteMany?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumIdiomaFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaFilter<$PrismaModel> | $Enums.Idioma
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumIdiomaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaWithAggregatesFilter<$PrismaModel> | $Enums.Idioma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdiomaFilter<$PrismaModel>
    _max?: NestedEnumIdiomaFilter<$PrismaModel>
  }

  export type NestedEnumTipoNotificacionFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[]
    notIn?: $Enums.TipoNotificacion[]
    not?: NestedEnumTipoNotificacionFilter<$PrismaModel> | $Enums.TipoNotificacion
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacion | EnumTipoNotificacionFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacion[]
    notIn?: $Enums.TipoNotificacion[]
    not?: NestedEnumTipoNotificacionWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacionFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacionFilter<$PrismaModel>
  }

  export type NestedEnumMotivoDisponibleFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoDisponible | EnumMotivoDisponibleFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoDisponible[]
    notIn?: $Enums.MotivoDisponible[]
    not?: NestedEnumMotivoDisponibleFilter<$PrismaModel> | $Enums.MotivoDisponible
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMotivoDisponibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoDisponible | EnumMotivoDisponibleFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoDisponible[]
    notIn?: $Enums.MotivoDisponible[]
    not?: NestedEnumMotivoDisponibleWithAggregatesFilter<$PrismaModel> | $Enums.MotivoDisponible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotivoDisponibleFilter<$PrismaModel>
    _max?: NestedEnumMotivoDisponibleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[]
    notIn?: $Enums.Prioridad[]
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[]
    notIn?: $Enums.Prioridad[]
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type NestedEnumEstadoTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTicket | EnumEstadoTicketFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTicket[]
    notIn?: $Enums.EstadoTicket[]
    not?: NestedEnumEstadoTicketFilter<$PrismaModel> | $Enums.EstadoTicket
  }

  export type NestedEnumEstadoTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTicket | EnumEstadoTicketFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTicket[]
    notIn?: $Enums.EstadoTicket[]
    not?: NestedEnumEstadoTicketWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTicketFilter<$PrismaModel>
    _max?: NestedEnumEstadoTicketFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumMetodoAsignacionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoAsignacion | EnumMetodoAsignacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoAsignacion[] | null
    notIn?: $Enums.MetodoAsignacion[] | null
    not?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel> | $Enums.MetodoAsignacion | null
  }

  export type NestedEnumMetodoAsignacionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoAsignacion | EnumMetodoAsignacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoAsignacion[] | null
    notIn?: $Enums.MetodoAsignacion[] | null
    not?: NestedEnumMetodoAsignacionNullableWithAggregatesFilter<$PrismaModel> | $Enums.MetodoAsignacion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel>
    _max?: NestedEnumMetodoAsignacionNullableFilter<$PrismaModel>
  }

  export type TecnicoCreateWithoutUsuarioInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    especialidades?: EspecialidadCreateNestedManyWithoutTecnicosInput
    Asignacion?: AsignacionCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateWithoutUsuarioInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutTecnicosInput
    Asignacion?: AsignacionUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoCreateOrConnectWithoutUsuarioInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
  }

  export type TecnicoCreateManyUsuarioInputEnvelope = {
    data: TecnicoCreateManyUsuarioInput | TecnicoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUsuarioInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUsuarioInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput>
  }

  export type TicketCreateManyUsuarioInputEnvelope = {
    data: TicketCreateManyUsuarioInput | TicketCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type HistorialTicketCreateWithoutUsuarioInput = {
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
    ticket: TicketCreateNestedOneWithoutHistorialInput
  }

  export type HistorialTicketUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idTicket: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type HistorialTicketCreateOrConnectWithoutUsuarioInput = {
    where: HistorialTicketWhereUniqueInput
    create: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialTicketCreateManyUsuarioInputEnvelope = {
    data: HistorialTicketCreateManyUsuarioInput | HistorialTicketCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ValoracionCreateWithoutUsuarioInput = {
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
    ticket: TicketCreateNestedOneWithoutValoracionInput
  }

  export type ValoracionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idTicket: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type ValoracionCreateOrConnectWithoutUsuarioInput = {
    where: ValoracionWhereUniqueInput
    create: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput>
  }

  export type ValoracionCreateManyUsuarioInputEnvelope = {
    data: ValoracionCreateManyUsuarioInput | ValoracionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutRemitenteInput = {
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
    Destinatario: UsuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificacionUncheckedCreateWithoutRemitenteInput = {
    id?: number
    idDestinatario: number
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type NotificacionCreateOrConnectWithoutRemitenteInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput>
  }

  export type NotificacionCreateManyRemitenteInputEnvelope = {
    data: NotificacionCreateManyRemitenteInput | NotificacionCreateManyRemitenteInput[]
    skipDuplicates?: boolean
  }

  export type NotificacionCreateWithoutDestinatarioInput = {
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
    Remitente?: UsuarioCreateNestedOneWithoutNotificacionesRemitenteInput
  }

  export type NotificacionUncheckedCreateWithoutDestinatarioInput = {
    id?: number
    idRemitente?: number | null
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type NotificacionCreateOrConnectWithoutDestinatarioInput = {
    where: NotificacionWhereUniqueInput
    create: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput>
  }

  export type NotificacionCreateManyDestinatarioInputEnvelope = {
    data: NotificacionCreateManyDestinatarioInput | NotificacionCreateManyDestinatarioInput[]
    skipDuplicates?: boolean
  }

  export type TecnicoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TecnicoWhereUniqueInput
    update: XOR<TecnicoUpdateWithoutUsuarioInput, TecnicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
  }

  export type TecnicoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TecnicoWhereUniqueInput
    data: XOR<TecnicoUpdateWithoutUsuarioInput, TecnicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type TecnicoUpdateManyWithWhereWithoutUsuarioInput = {
    where: TecnicoScalarWhereInput
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TecnicoScalarWhereInput = {
    AND?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
    OR?: TecnicoScalarWhereInput[]
    NOT?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
    id?: IntFilter<"Tecnico"> | number
    disponible?: BoolFilter<"Tecnico"> | boolean
    motivoDisponible?: EnumMotivoDisponibleFilter<"Tecnico"> | $Enums.MotivoDisponible
    fechaDisponible?: DateTimeNullableFilter<"Tecnico"> | Date | string | null
    carga?: IntFilter<"Tecnico"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUsuarioInput, TicketUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TicketCreateWithoutUsuarioInput, TicketUncheckedCreateWithoutUsuarioInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUsuarioInput, TicketUncheckedUpdateWithoutUsuarioInput>
  }

  export type TicketUpdateManyWithWhereWithoutUsuarioInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    idUsuario?: IntFilter<"Ticket"> | number
    idEtiqueta?: IntFilter<"Ticket"> | number
    titulo?: StringFilter<"Ticket"> | string
    descripcion?: StringFilter<"Ticket"> | string
    fechaCreacion?: DateTimeFilter<"Ticket"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaRespusta?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaSolucion?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    estado?: EnumEstadoTicketFilter<"Ticket"> | $Enums.EstadoTicket
  }

  export type HistorialTicketUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialTicketWhereUniqueInput
    update: XOR<HistorialTicketUpdateWithoutUsuarioInput, HistorialTicketUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistorialTicketCreateWithoutUsuarioInput, HistorialTicketUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialTicketUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialTicketWhereUniqueInput
    data: XOR<HistorialTicketUpdateWithoutUsuarioInput, HistorialTicketUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistorialTicketUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistorialTicketScalarWhereInput
    data: XOR<HistorialTicketUpdateManyMutationInput, HistorialTicketUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistorialTicketScalarWhereInput = {
    AND?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
    OR?: HistorialTicketScalarWhereInput[]
    NOT?: HistorialTicketScalarWhereInput | HistorialTicketScalarWhereInput[]
    id?: IntFilter<"HistorialTicket"> | number
    idTicket?: IntFilter<"HistorialTicket"> | number
    idUsuario?: IntFilter<"HistorialTicket"> | number
    estadoAnterior?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFilter<"HistorialTicket"> | $Enums.EstadoTicket
    fecha?: DateTimeFilter<"HistorialTicket"> | Date | string
    observacion?: StringNullableFilter<"HistorialTicket"> | string | null
  }

  export type ValoracionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ValoracionWhereUniqueInput
    update: XOR<ValoracionUpdateWithoutUsuarioInput, ValoracionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ValoracionCreateWithoutUsuarioInput, ValoracionUncheckedCreateWithoutUsuarioInput>
  }

  export type ValoracionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ValoracionWhereUniqueInput
    data: XOR<ValoracionUpdateWithoutUsuarioInput, ValoracionUncheckedUpdateWithoutUsuarioInput>
  }

  export type ValoracionUpdateManyWithWhereWithoutUsuarioInput = {
    where: ValoracionScalarWhereInput
    data: XOR<ValoracionUpdateManyMutationInput, ValoracionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ValoracionScalarWhereInput = {
    AND?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
    OR?: ValoracionScalarWhereInput[]
    NOT?: ValoracionScalarWhereInput | ValoracionScalarWhereInput[]
    id?: IntFilter<"Valoracion"> | number
    idTicket?: IntFilter<"Valoracion"> | number
    idUsuario?: IntFilter<"Valoracion"> | number
    puntaje?: IntFilter<"Valoracion"> | number
    comentario?: StringNullableFilter<"Valoracion"> | string | null
    fecha?: DateTimeFilter<"Valoracion"> | Date | string
  }

  export type NotificacionUpsertWithWhereUniqueWithoutRemitenteInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutRemitenteInput, NotificacionUncheckedUpdateWithoutRemitenteInput>
    create: XOR<NotificacionCreateWithoutRemitenteInput, NotificacionUncheckedCreateWithoutRemitenteInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutRemitenteInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutRemitenteInput, NotificacionUncheckedUpdateWithoutRemitenteInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutRemitenteInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutRemitenteInput>
  }

  export type NotificacionScalarWhereInput = {
    AND?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    OR?: NotificacionScalarWhereInput[]
    NOT?: NotificacionScalarWhereInput | NotificacionScalarWhereInput[]
    id?: IntFilter<"Notificacion"> | number
    idRemitente?: IntNullableFilter<"Notificacion"> | number | null
    idDestinatario?: IntFilter<"Notificacion"> | number
    tipo?: EnumTipoNotificacionFilter<"Notificacion"> | $Enums.TipoNotificacion
    leido?: BoolFilter<"Notificacion"> | boolean
    mensaje?: StringFilter<"Notificacion"> | string
    fecha?: DateTimeFilter<"Notificacion"> | Date | string
  }

  export type NotificacionUpsertWithWhereUniqueWithoutDestinatarioInput = {
    where: NotificacionWhereUniqueInput
    update: XOR<NotificacionUpdateWithoutDestinatarioInput, NotificacionUncheckedUpdateWithoutDestinatarioInput>
    create: XOR<NotificacionCreateWithoutDestinatarioInput, NotificacionUncheckedCreateWithoutDestinatarioInput>
  }

  export type NotificacionUpdateWithWhereUniqueWithoutDestinatarioInput = {
    where: NotificacionWhereUniqueInput
    data: XOR<NotificacionUpdateWithoutDestinatarioInput, NotificacionUncheckedUpdateWithoutDestinatarioInput>
  }

  export type NotificacionUpdateManyWithWhereWithoutDestinatarioInput = {
    where: NotificacionScalarWhereInput
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyWithoutDestinatarioInput>
  }

  export type UsuarioCreateWithoutNotificacionesRemitenteInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacionesRemitenteInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacionesRemitenteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacionesRemitenteInput, UsuarioUncheckedCreateWithoutNotificacionesRemitenteInput>
  }

  export type UsuarioCreateWithoutNotificacionesInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacionesInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
  }

  export type UsuarioUpsertWithoutNotificacionesRemitenteInput = {
    update: XOR<UsuarioUpdateWithoutNotificacionesRemitenteInput, UsuarioUncheckedUpdateWithoutNotificacionesRemitenteInput>
    create: XOR<UsuarioCreateWithoutNotificacionesRemitenteInput, UsuarioUncheckedCreateWithoutNotificacionesRemitenteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacionesRemitenteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacionesRemitenteInput, UsuarioUncheckedUpdateWithoutNotificacionesRemitenteInput>
  }

  export type UsuarioUpdateWithoutNotificacionesRemitenteInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacionesRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUpsertWithoutNotificacionesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacionesInput, UsuarioUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<UsuarioCreateWithoutNotificacionesInput, UsuarioUncheckedCreateWithoutNotificacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacionesInput, UsuarioUncheckedUpdateWithoutNotificacionesInput>
  }

  export type UsuarioUpdateWithoutNotificacionesInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
  }

  export type UsuarioCreateWithoutTecnicoInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutTecnicoInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutTecnicoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
  }

  export type EspecialidadCreateWithoutTecnicosInput = {
    nombre: string
    descripcion: string
    categorias?: CategoriaCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadUncheckedCreateWithoutTecnicosInput = {
    id?: number
    nombre: string
    descripcion: string
    categorias?: CategoriaUncheckedCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadCreateOrConnectWithoutTecnicosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput>
  }

  export type AsignacionCreateWithoutTecnicoInput = {
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
    ticket: TicketCreateNestedOneWithoutAsignacionesInput
    regla?: Regla_AutotriageCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionUncheckedCreateWithoutTecnicoInput = {
    id?: number
    idTicket: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type AsignacionCreateOrConnectWithoutTecnicoInput = {
    where: AsignacionWhereUniqueInput
    create: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput>
  }

  export type AsignacionCreateManyTecnicoInputEnvelope = {
    data: AsignacionCreateManyTecnicoInput | AsignacionCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutTecnicoInput = {
    update: XOR<UsuarioUpdateWithoutTecnicoInput, UsuarioUncheckedUpdateWithoutTecnicoInput>
    create: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTecnicoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTecnicoInput, UsuarioUncheckedUpdateWithoutTecnicoInput>
  }

  export type UsuarioUpdateWithoutTecnicoInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type EspecialidadUpsertWithWhereUniqueWithoutTecnicosInput = {
    where: EspecialidadWhereUniqueInput
    update: XOR<EspecialidadUpdateWithoutTecnicosInput, EspecialidadUncheckedUpdateWithoutTecnicosInput>
    create: XOR<EspecialidadCreateWithoutTecnicosInput, EspecialidadUncheckedCreateWithoutTecnicosInput>
  }

  export type EspecialidadUpdateWithWhereUniqueWithoutTecnicosInput = {
    where: EspecialidadWhereUniqueInput
    data: XOR<EspecialidadUpdateWithoutTecnicosInput, EspecialidadUncheckedUpdateWithoutTecnicosInput>
  }

  export type EspecialidadUpdateManyWithWhereWithoutTecnicosInput = {
    where: EspecialidadScalarWhereInput
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyWithoutTecnicosInput>
  }

  export type EspecialidadScalarWhereInput = {
    AND?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
    OR?: EspecialidadScalarWhereInput[]
    NOT?: EspecialidadScalarWhereInput | EspecialidadScalarWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    descripcion?: StringFilter<"Especialidad"> | string
  }

  export type AsignacionUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: AsignacionWhereUniqueInput
    update: XOR<AsignacionUpdateWithoutTecnicoInput, AsignacionUncheckedUpdateWithoutTecnicoInput>
    create: XOR<AsignacionCreateWithoutTecnicoInput, AsignacionUncheckedCreateWithoutTecnicoInput>
  }

  export type AsignacionUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: AsignacionWhereUniqueInput
    data: XOR<AsignacionUpdateWithoutTecnicoInput, AsignacionUncheckedUpdateWithoutTecnicoInput>
  }

  export type AsignacionUpdateManyWithWhereWithoutTecnicoInput = {
    where: AsignacionScalarWhereInput
    data: XOR<AsignacionUpdateManyMutationInput, AsignacionUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type AsignacionScalarWhereInput = {
    AND?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
    OR?: AsignacionScalarWhereInput[]
    NOT?: AsignacionScalarWhereInput | AsignacionScalarWhereInput[]
    id?: IntFilter<"Asignacion"> | number
    idTicket?: IntFilter<"Asignacion"> | number
    idTecnico?: IntFilter<"Asignacion"> | number
    idRegla?: IntNullableFilter<"Asignacion"> | number | null
    fecha?: DateTimeFilter<"Asignacion"> | Date | string
    puntajePrioridad?: IntFilter<"Asignacion"> | number
    motivo?: StringNullableFilter<"Asignacion"> | string | null
    activo?: BoolFilter<"Asignacion"> | boolean
    metodo?: EnumMetodoAsignacionNullableFilter<"Asignacion"> | $Enums.MetodoAsignacion | null
  }

  export type TecnicoCreateWithoutEspecialidadesInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    usuario: UsuarioCreateNestedOneWithoutTecnicoInput
    Asignacion?: AsignacionCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateWithoutEspecialidadesInput = {
    id: number
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    Asignacion?: AsignacionUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoCreateOrConnectWithoutEspecialidadesInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput>
  }

  export type CategoriaCreateWithoutEspecialidadesInput = {
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    etiquetas?: EtiquetaCreateNestedManyWithoutCategoriaInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutEspecialidadesInput = {
    id?: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCategoriaInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutEspecialidadesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput>
  }

  export type Regla_AutotriageCreateWithoutEspecialidadesInput = {
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    categoria: CategoriaCreateNestedOneWithoutReglasInput
    etiquetas?: EtiquetaCreateNestedManyWithoutAutoTriageInput
    asignaciones?: AsignacionCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput = {
    id?: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa?: boolean
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutAutoTriageInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageCreateOrConnectWithoutEspecialidadesInput = {
    where: Regla_AutotriageWhereUniqueInput
    create: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput>
  }

  export type TecnicoUpsertWithWhereUniqueWithoutEspecialidadesInput = {
    where: TecnicoWhereUniqueInput
    update: XOR<TecnicoUpdateWithoutEspecialidadesInput, TecnicoUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<TecnicoCreateWithoutEspecialidadesInput, TecnicoUncheckedCreateWithoutEspecialidadesInput>
  }

  export type TecnicoUpdateWithWhereUniqueWithoutEspecialidadesInput = {
    where: TecnicoWhereUniqueInput
    data: XOR<TecnicoUpdateWithoutEspecialidadesInput, TecnicoUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type TecnicoUpdateManyWithWhereWithoutEspecialidadesInput = {
    where: TecnicoScalarWhereInput
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyWithoutEspecialidadesInput>
  }

  export type CategoriaUpsertWithWhereUniqueWithoutEspecialidadesInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutEspecialidadesInput, CategoriaUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<CategoriaCreateWithoutEspecialidadesInput, CategoriaUncheckedCreateWithoutEspecialidadesInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutEspecialidadesInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutEspecialidadesInput, CategoriaUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutEspecialidadesInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutEspecialidadesInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringFilter<"Categoria"> | string
    tiempoMaximoRespuesta?: FloatFilter<"Categoria"> | number
    tiempoMaximoSolucion?: FloatFilter<"Categoria"> | number
    prioridad?: EnumPrioridadFilter<"Categoria"> | $Enums.Prioridad
  }

  export type Regla_AutotriageUpsertWithWhereUniqueWithoutEspecialidadesInput = {
    where: Regla_AutotriageWhereUniqueInput
    update: XOR<Regla_AutotriageUpdateWithoutEspecialidadesInput, Regla_AutotriageUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<Regla_AutotriageCreateWithoutEspecialidadesInput, Regla_AutotriageUncheckedCreateWithoutEspecialidadesInput>
  }

  export type Regla_AutotriageUpdateWithWhereUniqueWithoutEspecialidadesInput = {
    where: Regla_AutotriageWhereUniqueInput
    data: XOR<Regla_AutotriageUpdateWithoutEspecialidadesInput, Regla_AutotriageUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type Regla_AutotriageUpdateManyWithWhereWithoutEspecialidadesInput = {
    where: Regla_AutotriageScalarWhereInput
    data: XOR<Regla_AutotriageUpdateManyMutationInput, Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesInput>
  }

  export type Regla_AutotriageScalarWhereInput = {
    AND?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
    OR?: Regla_AutotriageScalarWhereInput[]
    NOT?: Regla_AutotriageScalarWhereInput | Regla_AutotriageScalarWhereInput[]
    id?: IntFilter<"Regla_Autotriage"> | number
    nombre?: StringFilter<"Regla_Autotriage"> | string
    idCategoria?: IntFilter<"Regla_Autotriage"> | number
    prioridad?: IntFilter<"Regla_Autotriage"> | number
    carga?: IntFilter<"Regla_Autotriage"> | number
    activa?: BoolFilter<"Regla_Autotriage"> | boolean
  }

  export type EspecialidadCreateWithoutCategoriasInput = {
    nombre: string
    descripcion: string
    tecnicos?: TecnicoCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nombre: string
    descripcion: string
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutEspecialidadesInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadCreateOrConnectWithoutCategoriasInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput>
  }

  export type EtiquetaCreateWithoutCategoriaInput = {
    nombre: string
    Ticket?: TicketCreateNestedManyWithoutEtiquetaInput
    autoTriage?: Regla_AutotriageCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEtiquetaInput
    autoTriage?: Regla_AutotriageUncheckedCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaCreateOrConnectWithoutCategoriaInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput>
  }

  export type EtiquetaCreateManyCategoriaInputEnvelope = {
    data: EtiquetaCreateManyCategoriaInput | EtiquetaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type Regla_AutotriageCreateWithoutCategoriaInput = {
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    etiquetas?: EtiquetaCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageCreateOrConnectWithoutCategoriaInput = {
    where: Regla_AutotriageWhereUniqueInput
    create: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput>
  }

  export type Regla_AutotriageCreateManyCategoriaInputEnvelope = {
    data: Regla_AutotriageCreateManyCategoriaInput | Regla_AutotriageCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type EspecialidadUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: EspecialidadWhereUniqueInput
    update: XOR<EspecialidadUpdateWithoutCategoriasInput, EspecialidadUncheckedUpdateWithoutCategoriasInput>
    create: XOR<EspecialidadCreateWithoutCategoriasInput, EspecialidadUncheckedCreateWithoutCategoriasInput>
  }

  export type EspecialidadUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: EspecialidadWhereUniqueInput
    data: XOR<EspecialidadUpdateWithoutCategoriasInput, EspecialidadUncheckedUpdateWithoutCategoriasInput>
  }

  export type EspecialidadUpdateManyWithWhereWithoutCategoriasInput = {
    where: EspecialidadScalarWhereInput
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type EtiquetaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: EtiquetaWhereUniqueInput
    update: XOR<EtiquetaUpdateWithoutCategoriaInput, EtiquetaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<EtiquetaCreateWithoutCategoriaInput, EtiquetaUncheckedCreateWithoutCategoriaInput>
  }

  export type EtiquetaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: EtiquetaWhereUniqueInput
    data: XOR<EtiquetaUpdateWithoutCategoriaInput, EtiquetaUncheckedUpdateWithoutCategoriaInput>
  }

  export type EtiquetaUpdateManyWithWhereWithoutCategoriaInput = {
    where: EtiquetaScalarWhereInput
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type EtiquetaScalarWhereInput = {
    AND?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
    OR?: EtiquetaScalarWhereInput[]
    NOT?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    idCategoria?: IntFilter<"Etiqueta"> | number
    nombre?: StringFilter<"Etiqueta"> | string
  }

  export type Regla_AutotriageUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Regla_AutotriageWhereUniqueInput
    update: XOR<Regla_AutotriageUpdateWithoutCategoriaInput, Regla_AutotriageUncheckedUpdateWithoutCategoriaInput>
    create: XOR<Regla_AutotriageCreateWithoutCategoriaInput, Regla_AutotriageUncheckedCreateWithoutCategoriaInput>
  }

  export type Regla_AutotriageUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Regla_AutotriageWhereUniqueInput
    data: XOR<Regla_AutotriageUpdateWithoutCategoriaInput, Regla_AutotriageUncheckedUpdateWithoutCategoriaInput>
  }

  export type Regla_AutotriageUpdateManyWithWhereWithoutCategoriaInput = {
    where: Regla_AutotriageScalarWhereInput
    data: XOR<Regla_AutotriageUpdateManyMutationInput, Regla_AutotriageUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type CategoriaCreateWithoutEtiquetasInput = {
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadCreateNestedManyWithoutCategoriasInput
    reglas?: Regla_AutotriageCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutEtiquetasInput = {
    id?: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutCategoriasInput
    reglas?: Regla_AutotriageUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutEtiquetasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutEtiquetasInput, CategoriaUncheckedCreateWithoutEtiquetasInput>
  }

  export type TicketCreateWithoutEtiquetaInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEtiquetaInput = {
    id?: number
    idUsuario: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEtiquetaInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput>
  }

  export type TicketCreateManyEtiquetaInputEnvelope = {
    data: TicketCreateManyEtiquetaInput | TicketCreateManyEtiquetaInput[]
    skipDuplicates?: boolean
  }

  export type Regla_AutotriageCreateWithoutEtiquetasInput = {
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    categoria: CategoriaCreateNestedOneWithoutReglasInput
    especialidades?: EspecialidadCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageUncheckedCreateWithoutEtiquetasInput = {
    id?: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa?: boolean
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutReglasInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutReglaInput
  }

  export type Regla_AutotriageCreateOrConnectWithoutEtiquetasInput = {
    where: Regla_AutotriageWhereUniqueInput
    create: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput>
  }

  export type CategoriaUpsertWithoutEtiquetasInput = {
    update: XOR<CategoriaUpdateWithoutEtiquetasInput, CategoriaUncheckedUpdateWithoutEtiquetasInput>
    create: XOR<CategoriaCreateWithoutEtiquetasInput, CategoriaUncheckedCreateWithoutEtiquetasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutEtiquetasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutEtiquetasInput, CategoriaUncheckedUpdateWithoutEtiquetasInput>
  }

  export type CategoriaUpdateWithoutEtiquetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUpdateManyWithoutCategoriasNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUncheckedUpdateManyWithoutCategoriasNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutEtiquetaInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEtiquetaInput, TicketUncheckedUpdateWithoutEtiquetaInput>
    create: XOR<TicketCreateWithoutEtiquetaInput, TicketUncheckedCreateWithoutEtiquetaInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEtiquetaInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEtiquetaInput, TicketUncheckedUpdateWithoutEtiquetaInput>
  }

  export type TicketUpdateManyWithWhereWithoutEtiquetaInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEtiquetaInput>
  }

  export type Regla_AutotriageUpsertWithWhereUniqueWithoutEtiquetasInput = {
    where: Regla_AutotriageWhereUniqueInput
    update: XOR<Regla_AutotriageUpdateWithoutEtiquetasInput, Regla_AutotriageUncheckedUpdateWithoutEtiquetasInput>
    create: XOR<Regla_AutotriageCreateWithoutEtiquetasInput, Regla_AutotriageUncheckedCreateWithoutEtiquetasInput>
  }

  export type Regla_AutotriageUpdateWithWhereUniqueWithoutEtiquetasInput = {
    where: Regla_AutotriageWhereUniqueInput
    data: XOR<Regla_AutotriageUpdateWithoutEtiquetasInput, Regla_AutotriageUncheckedUpdateWithoutEtiquetasInput>
  }

  export type Regla_AutotriageUpdateManyWithWhereWithoutEtiquetasInput = {
    where: Regla_AutotriageScalarWhereInput
    data: XOR<Regla_AutotriageUpdateManyMutationInput, Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasInput>
  }

  export type UsuarioCreateWithoutTicketInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutTicketInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutTicketInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTicketInput, UsuarioUncheckedCreateWithoutTicketInput>
  }

  export type EtiquetaCreateWithoutTicketInput = {
    nombre: string
    categoria: CategoriaCreateNestedOneWithoutEtiquetasInput
    autoTriage?: Regla_AutotriageCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaUncheckedCreateWithoutTicketInput = {
    id?: number
    idCategoria: number
    nombre: string
    autoTriage?: Regla_AutotriageUncheckedCreateNestedManyWithoutEtiquetasInput
  }

  export type EtiquetaCreateOrConnectWithoutTicketInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutTicketInput, EtiquetaUncheckedCreateWithoutTicketInput>
  }

  export type HistorialTicketCreateWithoutTicketInput = {
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
    usuario?: UsuarioCreateNestedOneWithoutHistorialTicketInput
  }

  export type HistorialTicketUncheckedCreateWithoutTicketInput = {
    id?: number
    idUsuario: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type HistorialTicketCreateOrConnectWithoutTicketInput = {
    where: HistorialTicketWhereUniqueInput
    create: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput>
  }

  export type HistorialTicketCreateManyTicketInputEnvelope = {
    data: HistorialTicketCreateManyTicketInput | HistorialTicketCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type Ticket_ImagenCreateWithoutTicketInput = {
    imagen?: Uint8Array | null
    url?: string | null
  }

  export type Ticket_ImagenUncheckedCreateWithoutTicketInput = {
    id?: number
    imagen?: Uint8Array | null
    url?: string | null
  }

  export type Ticket_ImagenCreateOrConnectWithoutTicketInput = {
    where: Ticket_ImagenWhereUniqueInput
    create: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput>
  }

  export type Ticket_ImagenCreateManyTicketInputEnvelope = {
    data: Ticket_ImagenCreateManyTicketInput | Ticket_ImagenCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type AsignacionCreateWithoutTicketInput = {
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
    tecnico: TecnicoCreateNestedOneWithoutAsignacionInput
    regla?: Regla_AutotriageCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionUncheckedCreateWithoutTicketInput = {
    id?: number
    idTecnico: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type AsignacionCreateOrConnectWithoutTicketInput = {
    where: AsignacionWhereUniqueInput
    create: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput>
  }

  export type AsignacionCreateManyTicketInputEnvelope = {
    data: AsignacionCreateManyTicketInput | AsignacionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ValoracionCreateWithoutTicketInput = {
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
    usuario: UsuarioCreateNestedOneWithoutValoracionInput
  }

  export type ValoracionUncheckedCreateWithoutTicketInput = {
    id?: number
    idUsuario: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type ValoracionCreateOrConnectWithoutTicketInput = {
    where: ValoracionWhereUniqueInput
    create: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput>
  }

  export type ValoracionCreateManyTicketInputEnvelope = {
    data: ValoracionCreateManyTicketInput | ValoracionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutTicketInput = {
    update: XOR<UsuarioUpdateWithoutTicketInput, UsuarioUncheckedUpdateWithoutTicketInput>
    create: XOR<UsuarioCreateWithoutTicketInput, UsuarioUncheckedCreateWithoutTicketInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTicketInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTicketInput, UsuarioUncheckedUpdateWithoutTicketInput>
  }

  export type UsuarioUpdateWithoutTicketInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type EtiquetaUpsertWithoutTicketInput = {
    update: XOR<EtiquetaUpdateWithoutTicketInput, EtiquetaUncheckedUpdateWithoutTicketInput>
    create: XOR<EtiquetaCreateWithoutTicketInput, EtiquetaUncheckedCreateWithoutTicketInput>
    where?: EtiquetaWhereInput
  }

  export type EtiquetaUpdateToOneWithWhereWithoutTicketInput = {
    where?: EtiquetaWhereInput
    data: XOR<EtiquetaUpdateWithoutTicketInput, EtiquetaUncheckedUpdateWithoutTicketInput>
  }

  export type EtiquetaUpdateWithoutTicketInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutEtiquetasNestedInput
    autoTriage?: Regla_AutotriageUpdateManyWithoutEtiquetasNestedInput
  }

  export type EtiquetaUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    autoTriage?: Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasNestedInput
  }

  export type HistorialTicketUpsertWithWhereUniqueWithoutTicketInput = {
    where: HistorialTicketWhereUniqueInput
    update: XOR<HistorialTicketUpdateWithoutTicketInput, HistorialTicketUncheckedUpdateWithoutTicketInput>
    create: XOR<HistorialTicketCreateWithoutTicketInput, HistorialTicketUncheckedCreateWithoutTicketInput>
  }

  export type HistorialTicketUpdateWithWhereUniqueWithoutTicketInput = {
    where: HistorialTicketWhereUniqueInput
    data: XOR<HistorialTicketUpdateWithoutTicketInput, HistorialTicketUncheckedUpdateWithoutTicketInput>
  }

  export type HistorialTicketUpdateManyWithWhereWithoutTicketInput = {
    where: HistorialTicketScalarWhereInput
    data: XOR<HistorialTicketUpdateManyMutationInput, HistorialTicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type Ticket_ImagenUpsertWithWhereUniqueWithoutTicketInput = {
    where: Ticket_ImagenWhereUniqueInput
    update: XOR<Ticket_ImagenUpdateWithoutTicketInput, Ticket_ImagenUncheckedUpdateWithoutTicketInput>
    create: XOR<Ticket_ImagenCreateWithoutTicketInput, Ticket_ImagenUncheckedCreateWithoutTicketInput>
  }

  export type Ticket_ImagenUpdateWithWhereUniqueWithoutTicketInput = {
    where: Ticket_ImagenWhereUniqueInput
    data: XOR<Ticket_ImagenUpdateWithoutTicketInput, Ticket_ImagenUncheckedUpdateWithoutTicketInput>
  }

  export type Ticket_ImagenUpdateManyWithWhereWithoutTicketInput = {
    where: Ticket_ImagenScalarWhereInput
    data: XOR<Ticket_ImagenUpdateManyMutationInput, Ticket_ImagenUncheckedUpdateManyWithoutTicketInput>
  }

  export type Ticket_ImagenScalarWhereInput = {
    AND?: Ticket_ImagenScalarWhereInput | Ticket_ImagenScalarWhereInput[]
    OR?: Ticket_ImagenScalarWhereInput[]
    NOT?: Ticket_ImagenScalarWhereInput | Ticket_ImagenScalarWhereInput[]
    id?: IntFilter<"Ticket_Imagen"> | number
    idTicket?: IntFilter<"Ticket_Imagen"> | number
    imagen?: BytesNullableFilter<"Ticket_Imagen"> | Uint8Array | null
    url?: StringNullableFilter<"Ticket_Imagen"> | string | null
  }

  export type AsignacionUpsertWithWhereUniqueWithoutTicketInput = {
    where: AsignacionWhereUniqueInput
    update: XOR<AsignacionUpdateWithoutTicketInput, AsignacionUncheckedUpdateWithoutTicketInput>
    create: XOR<AsignacionCreateWithoutTicketInput, AsignacionUncheckedCreateWithoutTicketInput>
  }

  export type AsignacionUpdateWithWhereUniqueWithoutTicketInput = {
    where: AsignacionWhereUniqueInput
    data: XOR<AsignacionUpdateWithoutTicketInput, AsignacionUncheckedUpdateWithoutTicketInput>
  }

  export type AsignacionUpdateManyWithWhereWithoutTicketInput = {
    where: AsignacionScalarWhereInput
    data: XOR<AsignacionUpdateManyMutationInput, AsignacionUncheckedUpdateManyWithoutTicketInput>
  }

  export type ValoracionUpsertWithWhereUniqueWithoutTicketInput = {
    where: ValoracionWhereUniqueInput
    update: XOR<ValoracionUpdateWithoutTicketInput, ValoracionUncheckedUpdateWithoutTicketInput>
    create: XOR<ValoracionCreateWithoutTicketInput, ValoracionUncheckedCreateWithoutTicketInput>
  }

  export type ValoracionUpdateWithWhereUniqueWithoutTicketInput = {
    where: ValoracionWhereUniqueInput
    data: XOR<ValoracionUpdateWithoutTicketInput, ValoracionUncheckedUpdateWithoutTicketInput>
  }

  export type ValoracionUpdateManyWithWhereWithoutTicketInput = {
    where: ValoracionScalarWhereInput
    data: XOR<ValoracionUpdateManyMutationInput, ValoracionUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutHistorialInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutHistorialInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutHistorialInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutHistorialInput, TicketUncheckedCreateWithoutHistorialInput>
  }

  export type UsuarioCreateWithoutHistorialTicketInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutHistorialTicketInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    valoracion?: ValoracionUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistorialTicketInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistorialTicketInput, UsuarioUncheckedCreateWithoutHistorialTicketInput>
  }

  export type TicketUpsertWithoutHistorialInput = {
    update: XOR<TicketUpdateWithoutHistorialInput, TicketUncheckedUpdateWithoutHistorialInput>
    create: XOR<TicketCreateWithoutHistorialInput, TicketUncheckedCreateWithoutHistorialInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutHistorialInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutHistorialInput, TicketUncheckedUpdateWithoutHistorialInput>
  }

  export type TicketUpdateWithoutHistorialInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UsuarioUpsertWithoutHistorialTicketInput = {
    update: XOR<UsuarioUpdateWithoutHistorialTicketInput, UsuarioUncheckedUpdateWithoutHistorialTicketInput>
    create: XOR<UsuarioCreateWithoutHistorialTicketInput, UsuarioUncheckedCreateWithoutHistorialTicketInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistorialTicketInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistorialTicketInput, UsuarioUncheckedUpdateWithoutHistorialTicketInput>
  }

  export type UsuarioUpdateWithoutHistorialTicketInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistorialTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    valoracion?: ValoracionUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type TicketCreateWithoutImagenesInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutImagenesInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutImagenesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutImagenesInput, TicketUncheckedCreateWithoutImagenesInput>
  }

  export type TicketUpsertWithoutImagenesInput = {
    update: XOR<TicketUpdateWithoutImagenesInput, TicketUncheckedUpdateWithoutImagenesInput>
    create: XOR<TicketCreateWithoutImagenesInput, TicketUncheckedCreateWithoutImagenesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutImagenesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutImagenesInput, TicketUncheckedUpdateWithoutImagenesInput>
  }

  export type TicketUpdateWithoutImagenesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutImagenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateWithoutAsignacionesInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAsignacionesInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    Valoracion?: ValoracionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAsignacionesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAsignacionesInput, TicketUncheckedCreateWithoutAsignacionesInput>
  }

  export type TecnicoCreateWithoutAsignacionInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    usuario: UsuarioCreateNestedOneWithoutTecnicoInput
    especialidades?: EspecialidadCreateNestedManyWithoutTecnicosInput
  }

  export type TecnicoUncheckedCreateWithoutAsignacionInput = {
    id: number
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutTecnicosInput
  }

  export type TecnicoCreateOrConnectWithoutAsignacionInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutAsignacionInput, TecnicoUncheckedCreateWithoutAsignacionInput>
  }

  export type Regla_AutotriageCreateWithoutAsignacionesInput = {
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
    categoria: CategoriaCreateNestedOneWithoutReglasInput
    etiquetas?: EtiquetaCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadCreateNestedManyWithoutReglasInput
  }

  export type Regla_AutotriageUncheckedCreateWithoutAsignacionesInput = {
    id?: number
    nombre: string
    idCategoria: number
    prioridad: number
    carga: number
    activa?: boolean
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutAutoTriageInput
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutReglasInput
  }

  export type Regla_AutotriageCreateOrConnectWithoutAsignacionesInput = {
    where: Regla_AutotriageWhereUniqueInput
    create: XOR<Regla_AutotriageCreateWithoutAsignacionesInput, Regla_AutotriageUncheckedCreateWithoutAsignacionesInput>
  }

  export type TicketUpsertWithoutAsignacionesInput = {
    update: XOR<TicketUpdateWithoutAsignacionesInput, TicketUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<TicketCreateWithoutAsignacionesInput, TicketUncheckedCreateWithoutAsignacionesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAsignacionesInput, TicketUncheckedUpdateWithoutAsignacionesInput>
  }

  export type TicketUpdateWithoutAsignacionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAsignacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TecnicoUpsertWithoutAsignacionInput = {
    update: XOR<TecnicoUpdateWithoutAsignacionInput, TecnicoUncheckedUpdateWithoutAsignacionInput>
    create: XOR<TecnicoCreateWithoutAsignacionInput, TecnicoUncheckedCreateWithoutAsignacionInput>
    where?: TecnicoWhereInput
  }

  export type TecnicoUpdateToOneWithWhereWithoutAsignacionInput = {
    where?: TecnicoWhereInput
    data: XOR<TecnicoUpdateWithoutAsignacionInput, TecnicoUncheckedUpdateWithoutAsignacionInput>
  }

  export type TecnicoUpdateWithoutAsignacionInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutTecnicoNestedInput
    especialidades?: EspecialidadUpdateManyWithoutTecnicosNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutAsignacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    especialidades?: EspecialidadUncheckedUpdateManyWithoutTecnicosNestedInput
  }

  export type Regla_AutotriageUpsertWithoutAsignacionesInput = {
    update: XOR<Regla_AutotriageUpdateWithoutAsignacionesInput, Regla_AutotriageUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<Regla_AutotriageCreateWithoutAsignacionesInput, Regla_AutotriageUncheckedCreateWithoutAsignacionesInput>
    where?: Regla_AutotriageWhereInput
  }

  export type Regla_AutotriageUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: Regla_AutotriageWhereInput
    data: XOR<Regla_AutotriageUpdateWithoutAsignacionesInput, Regla_AutotriageUncheckedUpdateWithoutAsignacionesInput>
  }

  export type Regla_AutotriageUpdateWithoutAsignacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutReglasNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUpdateManyWithoutReglasNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateWithoutAsignacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUncheckedUpdateManyWithoutReglasNestedInput
  }

  export type TicketCreateWithoutValoracionInput = {
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    usuario: UsuarioCreateNestedOneWithoutTicketInput
    etiqueta: EtiquetaCreateNestedOneWithoutTicketInput
    historial?: HistorialTicketCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutValoracionInput = {
    id?: number
    idUsuario: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedCreateNestedManyWithoutTicketInput
    imagenes?: Ticket_ImagenUncheckedCreateNestedManyWithoutTicketInput
    asignaciones?: AsignacionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutValoracionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutValoracionInput, TicketUncheckedCreateWithoutValoracionInput>
  }

  export type UsuarioCreateWithoutValoracionInput = {
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoCreateNestedManyWithoutUsuarioInput
    ticket?: TicketCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutValoracionInput = {
    id?: number
    nombre?: string | null
    imagen?: string | null
    correo: string
    contrasenna: string
    role?: $Enums.Role
    ultimaSesion?: Date | string
    estado?: boolean
    idioma?: $Enums.Idioma
    tecnico?: TecnicoUncheckedCreateNestedManyWithoutUsuarioInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUsuarioInput
    historialTicket?: HistorialTicketUncheckedCreateNestedManyWithoutUsuarioInput
    notificacionesRemitente?: NotificacionUncheckedCreateNestedManyWithoutRemitenteInput
    notificaciones?: NotificacionUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutValoracionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutValoracionInput, UsuarioUncheckedCreateWithoutValoracionInput>
  }

  export type TicketUpsertWithoutValoracionInput = {
    update: XOR<TicketUpdateWithoutValoracionInput, TicketUncheckedUpdateWithoutValoracionInput>
    create: XOR<TicketCreateWithoutValoracionInput, TicketUncheckedCreateWithoutValoracionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutValoracionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutValoracionInput, TicketUncheckedUpdateWithoutValoracionInput>
  }

  export type TicketUpdateWithoutValoracionInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutValoracionInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UsuarioUpsertWithoutValoracionInput = {
    update: XOR<UsuarioUpdateWithoutValoracionInput, UsuarioUncheckedUpdateWithoutValoracionInput>
    create: XOR<UsuarioCreateWithoutValoracionInput, UsuarioUncheckedCreateWithoutValoracionInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutValoracionInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutValoracionInput, UsuarioUncheckedUpdateWithoutValoracionInput>
  }

  export type UsuarioUpdateWithoutValoracionInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutValoracionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasenna?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ultimaSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    tecnico?: TecnicoUncheckedUpdateManyWithoutUsuarioNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUsuarioNestedInput
    historialTicket?: HistorialTicketUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacionesRemitente?: NotificacionUncheckedUpdateManyWithoutRemitenteNestedInput
    notificaciones?: NotificacionUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type CategoriaCreateWithoutReglasInput = {
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadCreateNestedManyWithoutCategoriasInput
    etiquetas?: EtiquetaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutReglasInput = {
    id?: number
    nombre: string
    descripcion: string
    tiempoMaximoRespuesta: number
    tiempoMaximoSolucion: number
    prioridad: $Enums.Prioridad
    especialidades?: EspecialidadUncheckedCreateNestedManyWithoutCategoriasInput
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutReglasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutReglasInput, CategoriaUncheckedCreateWithoutReglasInput>
  }

  export type EtiquetaCreateWithoutAutoTriageInput = {
    nombre: string
    categoria: CategoriaCreateNestedOneWithoutEtiquetasInput
    Ticket?: TicketCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaUncheckedCreateWithoutAutoTriageInput = {
    id?: number
    idCategoria: number
    nombre: string
    Ticket?: TicketUncheckedCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaCreateOrConnectWithoutAutoTriageInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput>
  }

  export type EspecialidadCreateWithoutReglasInput = {
    nombre: string
    descripcion: string
    tecnicos?: TecnicoCreateNestedManyWithoutEspecialidadesInput
    categorias?: CategoriaCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadUncheckedCreateWithoutReglasInput = {
    id?: number
    nombre: string
    descripcion: string
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutEspecialidadesInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type EspecialidadCreateOrConnectWithoutReglasInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput>
  }

  export type AsignacionCreateWithoutReglaInput = {
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
    ticket: TicketCreateNestedOneWithoutAsignacionesInput
    tecnico: TecnicoCreateNestedOneWithoutAsignacionInput
  }

  export type AsignacionUncheckedCreateWithoutReglaInput = {
    id?: number
    idTicket: number
    idTecnico: number
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type AsignacionCreateOrConnectWithoutReglaInput = {
    where: AsignacionWhereUniqueInput
    create: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput>
  }

  export type AsignacionCreateManyReglaInputEnvelope = {
    data: AsignacionCreateManyReglaInput | AsignacionCreateManyReglaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutReglasInput = {
    update: XOR<CategoriaUpdateWithoutReglasInput, CategoriaUncheckedUpdateWithoutReglasInput>
    create: XOR<CategoriaCreateWithoutReglasInput, CategoriaUncheckedCreateWithoutReglasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutReglasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutReglasInput, CategoriaUncheckedUpdateWithoutReglasInput>
  }

  export type CategoriaUpdateWithoutReglasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUpdateManyWithoutCategoriasNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutReglasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    especialidades?: EspecialidadUncheckedUpdateManyWithoutCategoriasNestedInput
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type EtiquetaUpsertWithWhereUniqueWithoutAutoTriageInput = {
    where: EtiquetaWhereUniqueInput
    update: XOR<EtiquetaUpdateWithoutAutoTriageInput, EtiquetaUncheckedUpdateWithoutAutoTriageInput>
    create: XOR<EtiquetaCreateWithoutAutoTriageInput, EtiquetaUncheckedCreateWithoutAutoTriageInput>
  }

  export type EtiquetaUpdateWithWhereUniqueWithoutAutoTriageInput = {
    where: EtiquetaWhereUniqueInput
    data: XOR<EtiquetaUpdateWithoutAutoTriageInput, EtiquetaUncheckedUpdateWithoutAutoTriageInput>
  }

  export type EtiquetaUpdateManyWithWhereWithoutAutoTriageInput = {
    where: EtiquetaScalarWhereInput
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyWithoutAutoTriageInput>
  }

  export type EspecialidadUpsertWithWhereUniqueWithoutReglasInput = {
    where: EspecialidadWhereUniqueInput
    update: XOR<EspecialidadUpdateWithoutReglasInput, EspecialidadUncheckedUpdateWithoutReglasInput>
    create: XOR<EspecialidadCreateWithoutReglasInput, EspecialidadUncheckedCreateWithoutReglasInput>
  }

  export type EspecialidadUpdateWithWhereUniqueWithoutReglasInput = {
    where: EspecialidadWhereUniqueInput
    data: XOR<EspecialidadUpdateWithoutReglasInput, EspecialidadUncheckedUpdateWithoutReglasInput>
  }

  export type EspecialidadUpdateManyWithWhereWithoutReglasInput = {
    where: EspecialidadScalarWhereInput
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyWithoutReglasInput>
  }

  export type AsignacionUpsertWithWhereUniqueWithoutReglaInput = {
    where: AsignacionWhereUniqueInput
    update: XOR<AsignacionUpdateWithoutReglaInput, AsignacionUncheckedUpdateWithoutReglaInput>
    create: XOR<AsignacionCreateWithoutReglaInput, AsignacionUncheckedCreateWithoutReglaInput>
  }

  export type AsignacionUpdateWithWhereUniqueWithoutReglaInput = {
    where: AsignacionWhereUniqueInput
    data: XOR<AsignacionUpdateWithoutReglaInput, AsignacionUncheckedUpdateWithoutReglaInput>
  }

  export type AsignacionUpdateManyWithWhereWithoutReglaInput = {
    where: AsignacionScalarWhereInput
    data: XOR<AsignacionUpdateManyMutationInput, AsignacionUncheckedUpdateManyWithoutReglaInput>
  }

  export type TecnicoCreateManyUsuarioInput = {
    disponible?: boolean
    motivoDisponible?: $Enums.MotivoDisponible
    fechaDisponible?: Date | string | null
    carga?: number
  }

  export type TicketCreateManyUsuarioInput = {
    id?: number
    idEtiqueta: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
  }

  export type HistorialTicketCreateManyUsuarioInput = {
    id?: number
    idTicket: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type ValoracionCreateManyUsuarioInput = {
    id?: number
    idTicket: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type NotificacionCreateManyRemitenteInput = {
    id?: number
    idDestinatario: number
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type NotificacionCreateManyDestinatarioInput = {
    id?: number
    idRemitente?: number | null
    tipo: $Enums.TipoNotificacion
    leido?: boolean
    mensaje: string
    fecha?: Date | string
  }

  export type TecnicoUpdateWithoutUsuarioInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    especialidades?: EspecialidadUpdateManyWithoutTecnicosNestedInput
    Asignacion?: AsignacionUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutUsuarioInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    especialidades?: EspecialidadUncheckedUpdateManyWithoutTecnicosNestedInput
    Asignacion?: AsignacionUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateManyWithoutUsuarioInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    etiqueta?: EtiquetaUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEtiqueta?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
  }

  export type HistorialTicketUpdateWithoutUsuarioInput = {
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialTicketUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistorialTicketUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValoracionUpdateWithoutUsuarioInput = {
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutValoracionNestedInput
  }

  export type ValoracionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoracionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUpdateWithoutRemitenteInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Destinatario?: UsuarioUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDestinatario?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDestinatario?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUpdateWithoutDestinatarioInput = {
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Remitente?: UsuarioUpdateOneWithoutNotificacionesRemitenteNestedInput
  }

  export type NotificacionUncheckedUpdateWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRemitente?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacionUncheckedUpdateManyWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRemitente?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoNotificacionFieldUpdateOperationsInput | $Enums.TipoNotificacion
    leido?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionCreateManyTecnicoInput = {
    id?: number
    idTicket: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type EspecialidadUpdateWithoutTecnicosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categorias?: CategoriaUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateWithoutTecnicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categorias?: CategoriaUncheckedUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateManyWithoutTecnicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionUpdateWithoutTecnicoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
    ticket?: TicketUpdateOneRequiredWithoutAsignacionesNestedInput
    regla?: Regla_AutotriageUpdateOneWithoutAsignacionesNestedInput
  }

  export type AsignacionUncheckedUpdateWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type AsignacionUncheckedUpdateManyWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type TecnicoUpdateWithoutEspecialidadesInput = {
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutTecnicoNestedInput
    Asignacion?: AsignacionUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
    Asignacion?: AsignacionUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateManyWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    motivoDisponible?: EnumMotivoDisponibleFieldUpdateOperationsInput | $Enums.MotivoDisponible
    fechaDisponible?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carga?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaUpdateWithoutEspecialidadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    etiquetas?: EtiquetaUpdateManyWithoutCategoriaNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCategoriaNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tiempoMaximoRespuesta?: FloatFieldUpdateOperationsInput | number
    tiempoMaximoSolucion?: FloatFieldUpdateOperationsInput | number
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
  }

  export type Regla_AutotriageUpdateWithoutEspecialidadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutReglasNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutAutoTriageNestedInput
    asignaciones?: AsignacionUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutAutoTriageNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EtiquetaCreateManyCategoriaInput = {
    id?: number
    nombre: string
  }

  export type Regla_AutotriageCreateManyCategoriaInput = {
    id?: number
    nombre: string
    prioridad: number
    carga: number
    activa?: boolean
  }

  export type EspecialidadUpdateWithoutCategoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUncheckedUpdateManyWithoutEspecialidadesNestedInput
    reglas?: Regla_AutotriageUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type EtiquetaUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUpdateManyWithoutEtiquetaNestedInput
    autoTriage?: Regla_AutotriageUpdateManyWithoutEtiquetasNestedInput
  }

  export type EtiquetaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUncheckedUpdateManyWithoutEtiquetaNestedInput
    autoTriage?: Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasNestedInput
  }

  export type EtiquetaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type Regla_AutotriageUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    etiquetas?: EtiquetaUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutAutoTriageNestedInput
    especialidades?: EspecialidadUncheckedUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketCreateManyEtiquetaInput = {
    id?: number
    idUsuario: number
    titulo: string
    descripcion: string
    fechaCreacion?: Date | string
    fechaCierre?: Date | string | null
    slaRespusta?: Date | string | null
    slaSolucion?: Date | string | null
    estado?: $Enums.EstadoTicket
  }

  export type TicketUpdateWithoutEtiquetaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    usuario?: UsuarioUpdateOneRequiredWithoutTicketNestedInput
    historial?: HistorialTicketUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEtiquetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    historial?: HistorialTicketUncheckedUpdateManyWithoutTicketNestedInput
    imagenes?: Ticket_ImagenUncheckedUpdateManyWithoutTicketNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutTicketNestedInput
    Valoracion?: ValoracionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEtiquetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaRespusta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaSolucion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
  }

  export type Regla_AutotriageUpdateWithoutEtiquetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    categoria?: CategoriaUpdateOneRequiredWithoutReglasNestedInput
    especialidades?: EspecialidadUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    especialidades?: EspecialidadUncheckedUpdateManyWithoutReglasNestedInput
    asignaciones?: AsignacionUncheckedUpdateManyWithoutReglaNestedInput
  }

  export type Regla_AutotriageUncheckedUpdateManyWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    prioridad?: IntFieldUpdateOperationsInput | number
    carga?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistorialTicketCreateManyTicketInput = {
    id?: number
    idUsuario: number
    estadoAnterior: $Enums.EstadoTicket
    estadoNuevo: $Enums.EstadoTicket
    fecha?: Date | string
    observacion?: string | null
  }

  export type Ticket_ImagenCreateManyTicketInput = {
    id?: number
    imagen?: Uint8Array | null
    url?: string | null
  }

  export type AsignacionCreateManyTicketInput = {
    id?: number
    idTecnico: number
    idRegla?: number | null
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type ValoracionCreateManyTicketInput = {
    id?: number
    idUsuario: number
    puntaje: number
    comentario?: string | null
    fecha?: Date | string
  }

  export type HistorialTicketUpdateWithoutTicketInput = {
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutHistorialTicketNestedInput
  }

  export type HistorialTicketUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistorialTicketUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    estadoNuevo?: EnumEstadoTicketFieldUpdateOperationsInput | $Enums.EstadoTicket
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenUpdateWithoutTicketInput = {
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ticket_ImagenUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsignacionUpdateWithoutTicketInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
    tecnico?: TecnicoUpdateOneRequiredWithoutAsignacionNestedInput
    regla?: Regla_AutotriageUpdateOneWithoutAsignacionesNestedInput
  }

  export type AsignacionUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type AsignacionUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    idRegla?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type ValoracionUpdateWithoutTicketInput = {
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutValoracionNestedInput
  }

  export type ValoracionUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoracionUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    puntaje?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionCreateManyReglaInput = {
    id?: number
    idTicket: number
    idTecnico: number
    fecha?: Date | string
    puntajePrioridad: number
    motivo?: string | null
    activo?: boolean
    metodo?: $Enums.MetodoAsignacion | null
  }

  export type EtiquetaUpdateWithoutAutoTriageInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutEtiquetasNestedInput
    Ticket?: TicketUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaUncheckedUpdateWithoutAutoTriageInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUncheckedUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaUncheckedUpdateManyWithoutAutoTriageInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUpdateWithoutReglasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUpdateManyWithoutEspecialidadesNestedInput
    categorias?: CategoriaUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateWithoutReglasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnicos?: TecnicoUncheckedUpdateManyWithoutEspecialidadesNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type EspecialidadUncheckedUpdateManyWithoutReglasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionUpdateWithoutReglaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
    ticket?: TicketUpdateOneRequiredWithoutAsignacionesNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutAsignacionNestedInput
  }

  export type AsignacionUncheckedUpdateWithoutReglaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }

  export type AsignacionUncheckedUpdateManyWithoutReglaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTicket?: IntFieldUpdateOperationsInput | number
    idTecnico?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntajePrioridad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    metodo?: NullableEnumMetodoAsignacionFieldUpdateOperationsInput | $Enums.MetodoAsignacion | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}