<div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcset=""></a>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-header">
                <div class="d-flex align-items-center" style="justify-content: space-around">
                    <div class="avatar avatar-xl">
                        <img src="{{ asset('public/admin/images/faces/1.jpg') }}" alt="Face 1">
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center" style="justify-content: space-around">
                    <div class="ms-3 name">
                        <h5 class="font-bold">Trần Tiến Đạt</h5>
                        <h6 class="text-muted mb-0">@trdat15</h6>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebar-menu">
            <ul class="menu">
                <li class="sidebar-title">Trang chủ</li>
                <li class="sidebar-item {{ Request::is('admin') ? 'active' : '' }} ">
                    <a href="{{ url('admin') }}" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="sidebar-title">Quản lý</li>
                <li class="sidebar-item {{ Request::is('admin/quan-ly-tai-khoan') ? 'active' : '' }} ">
                    <a href="{{ url('admin/quan-ly-tai-khoan') }}" class='sidebar-link'>
                        <i class="bi bi-person-circle"></i>
                        <span>Tài khoản</span>
                    </a>
                </li>

                <li class="sidebar-item {{ Request::is('admin/lien-he-tu-van') ? 'active' : '' }}">
                    <a href="{{ url('admin/lien-he-tu-van') }}" class='sidebar-link'>
                        <i class="bi bi-phone"></i>
                        <span>Liên hệ tư vấn</span>
                    </a>
                </li>

                <li class="sidebar-item {{ Request::is('admin/don-dat-thue-xe') ? 'active' : '' }}">
                    <a href="{{ url('admin/don-dat-thue-xe') }}" class='sidebar-link'>
                        <i class="bi bi-kanban"></i>
                        <span>Đơn đặt thuê xe</span>
                    </a>
                </li>

                <li class="sidebar-item {{ Request::is('admin/quan-ly-loai-xe') ? 'active' : '' }}">
                    <a href="{{ url('admin/quan-ly-loai-xe') }}" class='sidebar-link'>
                        <i class="bi bi-truck"></i>
                        <span>Loại xe</span>
                    </a>
                </li>

                <li
                    class="sidebar-item has-sub {{ Request::is('admin/quan-ly-dich-vu') ? 'active' : '' }} {{ Request::is('admin/tao-moi-dich-vu') ? 'active' : '' }}">
                    <a href="javascript:void(0)" class='sidebar-link'>
                        <i class="bi bi-geo-alt"></i>
                        <span>Dịch vụ thuê xe</span>
                    </a>
                    <ul
                        class="submenu {{ Request::is('admin/quan-ly-dich-vu') ? 'active' : '' }} {{ Request::is('admin/tao-moi-dich-vu') ? 'active' : '' }}">
                        <li class="submenu-item {{ Request::is('admin/tao-moi-dich-vu') ? 'active' : '' }}">
                            <a href="{{ url('admin/tao-moi-dich-vu') }}">Tạo mới</a>
                        </li>
                        <li class="submenu-item {{ Request::is('admin/quan-ly-dich-vu') ? 'active' : '' }}">
                            <a href="{{ url('admin/quan-ly-dich-vu') }}">Danh sách</a>
                        </li>
                    </ul>
                </li>

                <li
                    class="sidebar-item has-sub {{ Request::is('admin/tao-moi-bai-viet') ? 'active' : '' }} {{ Request::is('admin/quan-ly-bai-viet') ? 'active' : '' }}">
                    <a href="javascript:void(0)" class='sidebar-link'>
                        <i class="bi bi-newspaper"></i>
                        <span>Bài viết</span>
                    </a>
                    <ul
                        class="submenu {{ Request::is('admin/tao-moi-bai-viet') ? 'active' : '' }} {{ Request::is('admin/quan-ly-bai-viet') ? 'active' : '' }}">
                        <li class="submenu-item {{ Request::is('admin/tao-moi-bai-viet') ? 'active' : '' }}">
                            <a href="{{ url('admin/tao-moi-bai-viet') }}">Tạo mới</a>
                        </li>
                        <li class="submenu-item {{ Request::is('admin/quan-ly-bai-viet') ? 'active' : '' }}">
                            <a href="{{ url('admin/quan-ly-bai-viet') }}">Danh sách</a>
                        </li>
                    </ul>
                </li>

                <hr>

                <li class="sidebar-item  ">
                    <a href="{{ url('dang-xuat') }}" class='sidebar-link'>
                        <i class="bi bi-box-arrow-in-right"></i>
                        <span>Đăng xuất</span>
                    </a>
                </li>
            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>
