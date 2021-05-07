const employeeCard = ({ name, role, id, email, special }) => {
  return (
`
<div class="flex flex-col w-48 h-96">
  <div class="bg-blue-500 rounded-t-xl">
    <h2 class="p-3 text-xl">${name}</h2>
    <h3 class="p-3 pt-0 text-lg whitespace-nowrap">${'icon'} ${role}</h3>
  </div>
  <div class="bg-gray-100 rounded-b-xl">
    <div class="m-3 my-5 bg-white rounded-lg">
      <p class="p-2">ID: ${id}</p>
      <p class="p-2">Email: ${email}</p>
      <p class="p-2">${special}</p>
    </div>
  </div>
</div>
`
  )
}

module.exports = (employee) => {
  return (
`
<!DOCTYPE html>
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
  <main class="m-4 mt-12 flex-grow flex flex-col items-center">
    <!-- employee cards starts here -->
    ${employeeCard(employee)}
  </main>
  <footer>
    
  </footer>
</body>
</html>
`
  )
}