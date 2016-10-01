export default function(server) {
  server.createList('book', 3);

  [1,2,3].forEach((i) => {
    server.createList('chapter', 2, {
      bookId: i
    });
  });

  [...Array(6).keys()].forEach((i) => {
    server.createList('section', 4, {
      chapterId: ++i
    });
  });
}
