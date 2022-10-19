export const capitalize = (string) => {
	let arr = string.split(' ');
	arr = arr.map((itm) =>
		itm.length ? itm[0].toUpperCase() + itm.slice(1) : itm
	);
	string = arr.join(' ');
	return string;
};

export const formatPhoneNumber = (string) => {
	let newStr =
		string.slice(0, 3) + '-' + string.slice(3, 6) + '-' + string.slice(6);
	return newStr;
};

export const restrictions = [
	'all',
	'vegetarian',
	'vegan',
	'glutan-free',
	'nut-free',
	'lactose-free',
	'pescatarian',
];
export const cuisines = [
	'all',
	'american',
	'asian',
	'mexican',
	'pasta',
	'mediterranean',
	'salad',
	'soup',
	'fusion',
	'healthy',
	'other',
];
export const appliances = [
	'stovetop',
	'oven',
	'air fryer',
	'grill',
	'instant pot',
	'slow cooker',
];
export const cookTimes = ['all', '< 30 mins', '< 60 mins'];
