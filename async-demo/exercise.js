// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });;

async function notifyCustomer() {
  const customer = await getCustomerAsync(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = await getTopMoviesAsync();
    console.log('Top movies: ', movies);
    await sendEmailAsync(customer.email, movies);
    console.log('Email sent...');
  }
}
notifyCustomer();

function getCustomerAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      });
    }, 4000);
  });
}

// function getCustomer(id, callback) {
//   setTimeout(() => {
//     callback({
//       id: 1,
//       name: 'Mosh Hamedani',
//       isGold: true,
//       email: 'email'
//     });
//   }, 4000);
// }

function getTopMoviesAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

// function getTopMovies(callback) {
//   setTimeout(() => {
//     callback(['movie1', 'movie2']);
//   }, 4000);
// }

function sendEmailAsync(email, movies) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

// function sendEmail(email, movies, callback) {
//   setTimeout(() => {
//     callback();
//   }, 4000);
// }