<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>GreenCafe - Reservasi Cafe</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @else
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f8f8f5;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .container {
                    text-align: center;
                    padding: 2rem;
                    max-width: 800px;
                }
                h1 {
                    color: #627a4c;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                p {
                    color: #666;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                .btn {
                    display: inline-block;
                    background-color: #627a4c;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.375rem;
                    text-decoration: none;
                    font-weight: 500;
                    transition: background-color 0.3s;
                }
                .btn:hover {
                    background-color: #4e6039;
                }
            </style>
        @endif
    </head>
    <body>
        @if (file_exists(public_path('build/manifest.json')))
            <div id="app"></div>
        @else
            <div class="container">
                <h1>GreenCafe - Reservasi Cafe</h1>
                <p>Aplikasi sedang dalam mode pengembangan. Silakan jalankan perintah build untuk melihat aplikasi.</p>
                <p>Jalankan perintah berikut di terminal:</p>
                <pre>npm run build</pre>
            </div>
        @endif
    </body>
</html>
