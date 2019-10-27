# html setup for Weather Dashboard 
# Creates template/layout from Bootstrap 
# Gathers data from Weather API 
# local storage for cities list and cities view (#cities-list & cities-view)

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles.css">


</head>

<body>
    <form>
        <h1> Weather Dashboard</h1>
        <div class="container">
            <!-- Our columns function in rows. -->

            <label for="city-input">Search for a city</label><br>
            <div class="row">
                <div class="col-md-3">
                    <form id="city-form">
                        <input id="text" placeholder="Search.." name="search2">
                        <button id="submit"><i class="fa fa-search"></i></button>
                </div>

                <div class="col-md-9">
                    <div id="cities-view"></div>
                </div>
            </div>
            <div id="cities-list"></div>
            <br>

            <!-- <div class="col-md-9 bg-light"> -->
            <h5>5-Day Forecast:</h5>
            <div class="forecast-box"></div>
            <div class="col-md-9">

            </div>

        </div>

    </form>
