<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('public/admin/css/bootstrap.css') }}">

    <link rel="stylesheet" href="{{ asset('public/admin/vendors/iconly/bold.css') }}">

    <link rel="stylesheet" href="{{ asset('public/admin/vendors/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('public/admin/vendors/bootstrap-icons/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('public/admin/css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('public/admin/images/favicon.svg') }}" type="image/x-icon">
</head>

<body>
    <div id="app">
        @include('admin.layouts.slidebar')
        @yield('admin-content')
    </div>
    <script src="{{ asset('public/admin/js/jquery-3.4.1.js') }}"></script>
    <script src="{{ asset('public/admin/vendors/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('public/admin/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('public/admin/vendors/apexcharts/apexcharts.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/dashboard.js') }}"></script>

    <script src="{{ asset('public/admin/js/main.js') }}"></script>
</body>

</html>
