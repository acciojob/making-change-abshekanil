const makeChange = (c) => {
  // your name here
	const quarterValue = 25; 
	const dimeValue = 10;
	const nickelValue = 5;
	const pennyValue = 1;

	const q = Math.floor(c / quarterValue);

	const remainingAfterQuarter = c % quarterValue;

	const d = Math.floor(remainingAfterQuarter / dimeValue );

	const remainingAfterDime = remainingAfterQuarter % dimeValue;

	const n = Math.floor(remainingAfterDime / nickelValue);
	const remainingAfterNickel = remainingAfterDime % nickelValue;

	const p = Math.floor(remainingAfterNickel / pennyValue);
 
	return {q, d, n, p};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
