const compose =
	(...func) =>
	(comp) => {
		return func.reduceRight((prevResult, func) => {
			return func(prevResult);
		}, comp);
	};
export default compose;
