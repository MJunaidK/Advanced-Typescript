type WrappedInDeep = Promise<Promise<Promise<Promise<Promise<string>>>>>;

type awaitedResult = Awaited<WrappedInDeep>;

async function example<T>(input: T) {
  const output: Awaited<T> = await input;
}
