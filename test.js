const searchQuery = "%my%post%";

const query = `
SELECT id, content FROM post
WHERE title LIKE '${searchQuery}'
`;

function post(request) {
	const { title, content } = request;
	const EXAMPLE = "hei);SELECT * FROM  users;";
	const insertQuery = `
    INSERT INTO post(title, content)
    VALUES( ${title}, ${content});
    `;
}
