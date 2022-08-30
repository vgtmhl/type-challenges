import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<typeof example['foo']['bar'], ['a']>>,
  Expect<Equal<typeof example['foo']['baz'], ['b'] | ['c']>>,
  Expect<Equal<typeof example['foo'], ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']>>,
]
