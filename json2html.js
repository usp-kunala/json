// json2html.js
export default function json2html(data) {
    // Start building the HTML table
    let html = '<table data-user="uspkunala2@gmail.com">';
    html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    html += '<tbody>';

    // Iterate over each object in the data array
    data.forEach(item => {
        html += '<tr>';
        html += <td>${item.Name || ''}</td>;
        html += <td>${item.Age || ''}</td>;
        html += <td>${item.Gender || ''}</td>;
        html += '</tr>';
    });

    html += '</tbody></table>';
    
    return html;
}