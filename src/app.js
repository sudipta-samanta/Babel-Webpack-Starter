let test = () => console.log('testing...1234');
test();

async function getPosts() {
	const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
	const getPoastsData = await getPosts.json();
	return getPoastsData;
}

getPosts().then((posts) => console.log(posts));
