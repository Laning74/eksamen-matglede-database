# Eksamen matglede

Til denne eksamen var oppgaven og lage en applikasjon som hentet data fra et API, vi fikk tre forskjellige API og velge mellom. Mitt valg falt på en oppskriftsdatabase basert på API fra fra TheMealDB.

## Program

- Visual Studio Code
- React
- GitHub

## Installation

Install my-project with npm

```bash
  react-router
  react-router-dom
  react-icons
  axios
```

## Run Locally

Open http://localhost:3000 to view it in your browser.

```bash
  npm run start
```

## Color Reference

Fargepalett til prosjektet ser du i App.css filen

## Videreutvikling

Jeg har flere planer om videreutvikling av produktet, en spennende oppgave som jeg har mange ideer for videre bruk.

- Jobbe videre med "legge til handlelisten funksjonen", da den ikke funker optimalt.
  Og jeg rakk ikke jobbe mere med den.
- Legge til ukeplanlegger over måltider.
- Enten legge til i denne databasen en portal der du må være innlogget for og legge til egne oppskrifter i en egen database.
  Eller eventuellt lage en tilsvarende løsning for egne oppskrifter.
- Jeg har sammen med flere andre plan for produksjon av en matbok der jeg har ansvaret for layout/grafisk produksjon. Da kan jeg også tenke videre med og lage en nettside til denne boken når den er ferdig, basert på løsninger fra denne oppgaven.

## API References

Fargepalett til prosjektet ser du i App.css filen

https://www.themealdb.com/api.php.

Jeg lagde et eget useContext component der jeg fetchet ut alle endepunktene jeg trengte for og lage min applikasjon.

#### For å søke etter alle måltider med navn

```http
  GET https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}
  (www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)
```

#### For å filtrere ut etter alle kategorier

```http
  GET https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickCategory}
  (www.themealdb.com/api/json/v1/1/filter.php?c=Seafood)
```

#### For å søke etter alle oppskrifter med ID

```http
  GET https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}
  (www.themealdb.com/api/json/v1/1/lookup.php?i=52772)
```

#### For å få et tilfeldig måltid/oppskrift

```http
  GET https://www.themealdb.com/api/json/v1/1/random.
```
