// need a function to conditionally generate icons here
const iconPicker = (role) => {
  switch (role) {
    case 'Manager': // abacus
      // return an icon for manager 
      return (`
        <svg class='inline mb-1' style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M5,9V15H6.25V13H7A2,2 0 0,0 9,11A2,2 0 0,0 7,9H5M6.25,12V10H6.75A1,1 0 0,1 7.75,11A1,1 0 0,1 6.75,12H6.25M9.75,9V15H11V13H11.75L12.41,15H13.73L12.94,12.61C13.43,12.25 13.75,11.66 13.75,11A2,2 0 0,0 11.75,9H9.75M11,12V10H11.5A1,1 0 0,1 12.5,11A1,1 0 0,1 11.5,12H11M17,9C15.62,9 14.5,10.34 14.5,12C14.5,13.66 15.62,15 17,15C18.38,15 19.5,13.66 19.5,12C19.5,10.34 18.38,9 17,9M17,10.25C17.76,10.25 18.38,11.03 18.38,12C18.38,12.97 17.76,13.75 17,13.75C16.24,13.75 15.63,12.97 15.63,12C15.63,11.03 16.24,10.25 17,10.25Z" />
        </svg>`);
    case 'Engineer': // hexagon pro
      return(`
        <svg class='inline mb-1' style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 5H7V11H5V5M10 5H8V11H10V5M5 19H7V13H5V19M10 13H8V19H10V17H15V15H10V13M2 21H4V3H2V21M20 3V7H13V5H11V11H13V9H20V15H18V13H16V19H18V17H20V21H22V3H20Z" />
        </svg>`);
    case 'Intern': // baby buggy hehehe
      return(`
        <svg class='inline mb-1' style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17 20A2 2 0 0 1 15 22A2 2 0 0 1 13 20A2 2 0 0 1 15 18A2 2 0 0 1 17 20M7 20A2 2 0 0 1 5 22A2 2 0 0 1 3 20A2 2 0 0 1 5 18A2 2 0 0 1 7 20M17.61 3C16.95 3 16.44 3.2 16 3.5C15.32 3.91 14.88 4.59 14.47 5.07L5.71 15.35C5.16 16 5.62 17 6.47 17H14C15.11 17 16 16.1 16 15V6.38C16.58 5.7 16.93 5 17.61 5C18.38 5 19 5.66 19 6.5V7H21V6.5C21 4.56 19.5 3 17.61 3M8.86 3.09C7.04 3.16 5.23 3.76 3.68 4.9L8.44 9.66L12.32 5.1C12.59 4.78 12.91 4.38 13.3 4C12.14 3.45 10.9 3.15 9.65 3.09C9.39 3.08 9.12 3.08 8.86 3.09Z" />
        </svg>`)
  }
}

const specialSetter = (role, special) => {
  switch (role) {
    case 'Manager':
      return (`Office Number: ${special}`)
    case 'Engineer':
      return (`Github: <a class="underline" href="https://github.com/${special}">${special}</a>`);
    case 'Intern':
      return (`School: ${special}`)
  }
}

const employeeCard = ({ name, role, id, email, special }) => {
  // special needs
  return (
`    <div class="flex flex-col w-64 m-3 h-full rounded-xl shadow-lg">
      <div class="bg-blue-500 rounded-t-xl">
        <h2 class="p-3 text-xl">${name}</h2>
        <h3 class="p-3 pt-0 text-lg whitespace-nowrap">${iconPicker(role)} ${role}</h3>
      </div>
      <div class="bg-gray-100 rounded-b-xl">
        <div class="m-3 my-5 bg-white rounded-lg">
          <p class="p-2">ID: ${id}</p>
          <p class="p-2">
            Email: 
            <a class="underline" href="mailto:${email}?subject=This%20is%20a%20subject&body=this is a body :)">
              ${email}
            </a>
          </p>
          <p class="p-2">${specialSetter(role, special)}</p>
        </div>
      </div>
    </div>
`
  )
}

module.exports = (employees) => {
  // generate a card for each employee
  let employeeCards = employees.map((employee, index) => employeeCard(employee)).join("")
  return (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Team</title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="flex flex-col min-h-screen ">
  <header class="bg-red-500 h-24 flex items-center justify-center">
    <h1 class="text-2xl">My Team</h1>
  </header>
  <main class="m-4 mt-12 flex flex-row justify-center max-w-4xl flex-wrap self-center">
    <!-- employee cards starts here -->
${employeeCards}
  </main>
  <footer>
    
  </footer>
</body>
</html>
`
  )
}