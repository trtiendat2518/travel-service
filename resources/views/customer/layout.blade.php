<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Enter your description here" />
    <!-- font -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <!-- bootstrap -->
    <link rel="stylesheet" href="{{ asset('public/user/css/bootstrap.min.css') }}" />
    <!-- font awesome -->
    <link rel="stylesheet" href="{{ asset('public/user/css/all.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/brands.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/regular.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/solid.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/v5-font-face.css') }}" />
    <!-- jquery -->
    <link rel="stylesheet" type="text/css" href="{{ asset('public/user/css/daterangepicker.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/jquery-ui.css') }}">
    <link rel="stylesheet" href="{{ asset('public/user/css/jquery-ui.theme.css') }}">
    <link rel="stylesheet" href="{{ asset('public/user/css/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/owl.theme.default.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/owl.carousel.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('public/user/css/slick-theme.css') }}">
    <!-- file css -->
    <link rel="stylesheet" href="{{ asset('public/user/css/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/shortcodes.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/responsive.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/frontend.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/image-text-alignment-block.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/booking-form.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/user/css/numbered-steps-row.css') }}" />
    <!-- SEO website -->
    <meta name="keywords" content="website, mobile app, dichvudulich, dulichmiennam, thuexedulichmiennam">
    <meta name="description" content="{{$meta_desc}}">
    <meta name="author" content="thuexemiennam.com">
    @if (Session::get('id') && Session::get('role') == 1)
    <meta name="cus-id" content="{{ Session::get('id') }}">
    @endif
    <link rel="canonical" href="{{$url_canonical}}">
    <link rel="icon" href="{{asset('public/images/logo.ico')}}">

    <title>{{$meta_title}}</title>
</head>

<body>
    {{-- @include('customer.plugin.gtm') --}}
    @include('customer.plugin.zalo')
    @include('customer.plugin.facebook')

    <div id="app">
        @include('customer.layouts.header')

        @yield('user-content')

        @include('customer.layouts.footer')
    </div>

    <!-- script -->
    <script src="{{ asset('public/user/js/jquery-3.4.1.js') }}">
    </script>
    <script type="text/javascript" src="{{ asset('public/user/js/moment.min.js') }}"></script>
    <script src="{{ asset('public/user/js/popper.min.js') }}"></script>
    <script src="{{ asset('public/user/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('public/user/js/daterangepicker.min.js') }}"></script>
    <script src="{{ asset('public/user/js/jquery-ui.js') }}"></script>
    <script src="{{ asset('public/user/js/owl.carousel.js') }}"></script>
    <script src="{{ asset('public/user/js/slick.js') }}"></script>
    <script src="{{ asset('public/user/js/main.js') }}"></script>
    <script src="{{ asset('public/user/js/slide.js') }}"></script>
    <script src="{{ asset('public/js/app.js') }}"></script>
    <script src="{{ asset('public/user/js/zalo.js') }}"></script>

</body>

</html>
