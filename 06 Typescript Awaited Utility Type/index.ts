main();
async function main() {
  const single: Promise<string> = new Promise((res) => res('Junaid'));

  const triple: Promise<Promise<Promise<string>>> = new Promise<
    Promise<Promise<string>>
  >((res) =>
    res(
      new Promise<Promise<string>>((res) =>
        res(new Promise<string>((res) => res('Mohammad')))
      )
    )
  );
  const singleResult = await single;
  console.log(singleResult); //Junaid

  const tripleResult = await triple;
  console.log(tripleResult); // Mohammad
}
