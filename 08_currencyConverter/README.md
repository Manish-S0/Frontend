# Currency Converter App

This is a simple currency converter app built using React. It allows users to convert between different currencies based on real-time exchange rates fetched from an API.

## Features

- Convert between different currencies
- Real-time exchange rates fetched from an API
- User-friendly interface
- Simple and intuitive design

## Installation

To install and run this app locally, follow these steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/Manish-S0/Frontend.git
```

2. Navigate to the project directory:

```
cd 08_currencyConverter
```

3. Install dependencies:

```
npm install 
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and visit `http://localhost:5173` to view the app.

## Usage

1. Select the currency you want to convert from in the "From" dropdown menu.
2. Enter the amount you want to convert.
3. Select the currency you want to convert to in the "To" dropdown menu.
4. Press the 'convert' button.
5. The converted amount will be displayed instantly.

## API Usage

This app utilizes the [Exchange Rates API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-04-01/v1/currencies/${currency}.json) to fetch real-time exchange rates. You can obtain an API key by signing up on their website and replace it in the `REACT_APP_API_KEY` variable in the `.env` file.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.


---

Feel free to reach out to the contributors for any questions or feedback!
