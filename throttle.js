function throttle(fn, wait) {
	let timer = null;
	return function(...args) {
		console.log(timer);
		if(timer) return;
		fn.apply(this, args);
		timer = setTimeout(() => {
			timer = null;
		}, wait);
	}
}