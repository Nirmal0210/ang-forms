export const APP_BASE_URL = "flsadlfjlsa";

export const convertIntoHTML = (item) => {
  let obj = {};
  if (item.id === "singleline") {
    obj.element = <hr />;
  } else if (item.id === "textfield") {
    obj.element = <input type="text" />;
  } else if (item.id === "table") {
    obj.element = (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td> <td>Otto</td> <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  } else if (item.id === "section") {
    obj.element = <section></section>;
  } else if (item.id === "date") {
    obj.element = <input type="date"></input>;
  }
  return obj;
};
