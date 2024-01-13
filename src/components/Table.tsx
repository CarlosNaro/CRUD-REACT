export default function Table() {
  return (
    <div>
      <table className="table-auto   ">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido </th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Años de labor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dany</td>
            <td>Falcon</td>
            <td>21</td>
            <td>Desarrollador</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
