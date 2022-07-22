/*=========================================================================================
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function (window, document, $) {
  'use strict';

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + "px");
  
  $.app = $.app || {};

  var $body = $('body');
  var $window = $(window);
  var menuWrapper_el = `<div class="navbar-header">
  <ul class="nav navbar-nav flex-row">
      <li class="nav-item mr-auto"><a class="navbar-brand" href="../../../html/ltr/horizontal-menu-template/index.html">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">Vuexy</h2>
          </a></li>
      <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
  </ul>
</div>
<!-- Horizontal menu content-->
<div class="navbar-container main-menu-content" data-menu="menu-container">
  <!-- include ../../../includes/mixins-->
  <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="index.html" data-toggle="dropdown"><i class="feather icon-home"></i><span data-i18n="Dashboard">Dashboard</span></a>
          <ul class="dropdown-menu">
              <li data-menu=""><a class="dropdown-item" href="dashboard-analytics.html" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-activity"></i>Analytics</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="dashboard-ecommerce.html" data-toggle="dropdown" data-i18n="eCommerce"><i class="feather icon-shopping-cart"></i>eCommerce</a>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-package"></i><span data-i18n="Apps">Apps</span></a>
          <ul class="dropdown-menu">
              <li data-menu=""><a class="dropdown-item" href="app-email.html" data-toggle="dropdown" data-i18n="Email"><i class="feather icon-mail"></i>Email</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="app-chat.html" data-toggle="dropdown" data-i18n="Chat"><i class="feather icon-message-square"></i>Chat</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="app-todo.html" data-toggle="dropdown" data-i18n="Todo"><i class="feather icon-check-square"></i>Todo</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="app-calender.html" data-toggle="dropdown" data-i18n="Calender"><i class="feather icon-calendar"></i>Calender</a>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Ecommerce"><i class="feather icon-shopping-cart"></i>Ecommerce</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="app-ecommerce-shop.html" data-toggle="dropdown" data-i18n="Shop"><i class="feather icon-circle"></i>Shop</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="app-ecommerce-details.html" data-toggle="dropdown" data-i18n="Details"><i class="feather icon-circle"></i>Details</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="app-ecommerce-wishlist.html" data-toggle="dropdown" data-i18n="Wish List"><i class="feather icon-circle"></i>Wish List</a>
                      </li>
                      <li class="active" data-menu=""><a class="dropdown-item" href="app-ecommerce-checkout.html" data-toggle="dropdown" data-i18n="Checkout"><i class="feather icon-circle"></i>Checkout</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="User"><i class="feather icon-user"></i>User</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="app-user-list.html" data-toggle="dropdown" data-i18n="List"><i class="feather icon-circle"></i>List</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="app-user-view.html" data-toggle="dropdown" data-i18n="View"><i class="feather icon-circle"></i>View</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="app-user-edit.html" data-toggle="dropdown" data-i18n="Edit"><i class="feather icon-circle"></i>Edit</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-layers"></i><span data-i18n="UI Elements">UI Elements</span></a>
          <ul class="dropdown-menu">
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Data List"><i class="feather icon-list"></i>Data List</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="data-list-view.html" data-toggle="dropdown" data-i18n="List View"><i class="feather icon-circle"></i>List View</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="data-thumb-view.html" data-toggle="dropdown" data-i18n="Thumb View"><i class="feather icon-circle"></i>Thumb View</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Content"><i class="feather icon-layout"></i>Content</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="content-grid.html" data-toggle="dropdown" data-i18n="Grid"><i class="feather icon-circle"></i>Grid</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="content-typography.html" data-toggle="dropdown" data-i18n="Typography"><i class="feather icon-circle"></i>Typography</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="content-text-utilities.html" data-toggle="dropdown" data-i18n="Text Utilities"><i class="feather icon-circle"></i>Text Utilities</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="content-syntax-highlighter.html" data-toggle="dropdown" data-i18n="Syntax Highlighter"><i class="feather icon-circle"></i>Syntax Highlighter</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="content-helper-classes.html" data-toggle="dropdown" data-i18n="Helper Classes"><i class="feather icon-circle"></i>Helper Classes</a>
                      </li>
                  </ul>
              </li>
              <li data-menu=""><a class="dropdown-item" href="colors.html" data-toggle="dropdown" data-i18n="Colors"><i class="feather icon-droplet"></i>Colors</a>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Cards"><i class="feather icon-credit-card"></i>Cards</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="card-basic.html" data-toggle="dropdown" data-i18n="Basic"><i class="feather icon-circle"></i>Basic</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="card-advance.html" data-toggle="dropdown" data-i18n="Advance"><i class="feather icon-circle"></i>Advance</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="card-statistics.html" data-toggle="dropdown" data-i18n="Statistics"><i class="feather icon-circle"></i>Statistics</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="card-analytics.html" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-circle"></i>Analytics</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="card-actions.html" data-toggle="dropdown" data-i18n="Card Actions"><i class="feather icon-circle"></i>Card Actions</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Icons"><i class="feather icon-eye"></i>Icons</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="icons-feather.html" data-toggle="dropdown" data-i18n="Feather"><i class="feather icon-circle"></i>Feather</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="icons-font-awesome.html" data-toggle="dropdown" data-i18n="Font Awesome"><i class="feather icon-circle"></i>Font Awesome</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Components"><i class="feather icon-briefcase"></i>Components</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="component-alerts.html" data-toggle="dropdown" data-i18n="Alerts"><i class="feather icon-circle"></i>Alerts</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-buttons-basic.html" data-toggle="dropdown" data-i18n="Buttons"><i class="feather icon-circle"></i>Buttons</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-breadcrumbs.html" data-toggle="dropdown" data-i18n="Breadcrumbs"><i class="feather icon-circle"></i>Breadcrumbs</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-carousel.html" data-toggle="dropdown" data-i18n="Carousel"><i class="feather icon-circle"></i>Carousel</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-collapse.html" data-toggle="dropdown" data-i18n="Collapse"><i class="feather icon-circle"></i>Collapse</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-dropdowns.html" data-toggle="dropdown" data-i18n="Dropdowns"><i class="feather icon-circle"></i>Dropdowns</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-list-group.html" data-toggle="dropdown" data-i18n="List Group"><i class="feather icon-circle"></i>List Group</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-modals.html" data-toggle="dropdown" data-i18n="Modals"><i class="feather icon-circle"></i>Modals</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-pagination.html" data-toggle="dropdown" data-i18n="Pagination"><i class="feather icon-circle"></i>Pagination</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-navs-component.html" data-toggle="dropdown" data-i18n="Navs Component"><i class="feather icon-circle"></i>Navs Component</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-navbar.html" data-toggle="dropdown" data-i18n="Navbar"><i class="feather icon-circle"></i>Navbar</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-tabs-component.html" data-toggle="dropdown" data-i18n="Tabs Component"><i class="feather icon-circle"></i>Tabs Component</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-pills-component.html" data-toggle="dropdown" data-i18n="Pills Component"><i class="feather icon-circle"></i>Pills Component</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-tooltips.html" data-toggle="dropdown" data-i18n="Tooltips"><i class="feather icon-circle"></i>Tooltips</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-popovers.html" data-toggle="dropdown" data-i18n="Popovers"><i class="feather icon-circle"></i>Popovers</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-badges.html" data-toggle="dropdown" data-i18n="Badges"><i class="feather icon-circle"></i>Badges</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-pill-badges.html" data-toggle="dropdown" data-i18n="Pill Badges"><i class="feather icon-circle"></i>Pill Badges</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-progress.html" data-toggle="dropdown" data-i18n="Progress"><i class="feather icon-circle"></i>Progress</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-media-objects.html" data-toggle="dropdown" data-i18n=""><i class="feather icon-circle"></i>Media Objects</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-spinner.html" data-toggle="dropdown" data-i18n="Spinner"><i class="feather icon-circle"></i>Spinner</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="component-bs-toast.html" data-toggle="dropdown" data-i18n="Toasts"><i class="feather icon-circle"></i>Toasts</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Extra Components"><i class="feather icon-box"></i>Extra Components</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="ex-component-avatar.html" data-toggle="dropdown" data-i18n="Avatar"><i class="feather icon-circle"></i>Avatar</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ex-component-chips.html" data-toggle="dropdown" data-i18n="Chips"><i class="feather icon-circle"></i>Chips</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ex-component-divider.html" data-toggle="dropdown" data-i18n="Divider"><i class="feather icon-circle"></i>Divider</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Extensions"><i class="feather icon-box"></i>Extensions</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="ext-component-sweet-alerts.html" data-toggle="dropdown" data-i18n="Sweet Alert"><i class="feather icon-circle"></i>Sweet Alert</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-toastr.html" data-toggle="dropdown" data-i18n="Toastr"><i class="feather icon-circle"></i>Toastr</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-noui-slider.html" data-toggle="dropdown" data-i18n="NoUi Slider"><i class="feather icon-circle"></i>NoUi Slider</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-file-uploader.html" data-toggle="dropdown" data-i18n="File Uploader"><i class="feather icon-circle"></i>File Uploader</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-quill-editor.html" data-toggle="dropdown" data-i18n="Quill Editor"><i class="feather icon-circle"></i>Quill Editor</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-drag-drop.html" data-toggle="dropdown" data-i18n="Drag &amp; Drop"><i class="feather icon-circle"></i>Drag &amp; Drop</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-tour.html" data-toggle="dropdown" data-i18n="Tour"><i class="feather icon-circle"></i>Tour</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-clipboard.html" data-toggle="dropdown" data-i18n="Clipboard"><i class="feather icon-circle"></i>Clipboard</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-plyr.html" data-toggle="dropdown" data-i18n="Media Player"><i class="feather icon-circle"></i>Media Player</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-context-menu.html" data-toggle="dropdown" data-i18n="Context Menu"><i class="feather icon-circle"></i>Context Menu</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-swiper.html" data-toggle="dropdown" data-i18n="swiper"><i class="feather icon-smartphone"></i>swiper</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="ext-component-i18n.html" data-toggle="dropdown" data-i18n="l18n"><i class="feather icon-circle"></i>l18n</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-edit-2"></i><span data-i18n="Forms &amp; Tables">Forms &amp; Tables</span></a>
          <ul class="dropdown-menu">
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Form Elements"><i class="feather icon-copy"></i>Form Elements</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="form-select.html" data-toggle="dropdown" data-i18n="Select"><i class="feather icon-circle"></i>Select</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-switch.html" data-toggle="dropdown" data-i18n="Switch"><i class="feather icon-circle"></i>Switch</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-checkbox.html" data-toggle="dropdown" data-i18n="Checkbox"><i class="feather icon-circle"></i>Checkbox</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-radio.html" data-toggle="dropdown" data-i18n="Radio"><i class="feather icon-circle"></i>Radio</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-inputs.html" data-toggle="dropdown" data-i18n="Input"><i class="feather icon-circle"></i>Input</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-input-groups.html" data-toggle="dropdown" data-i18n="Input Groups"><i class="feather icon-circle"></i>Input Groups</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-number-input.html" data-toggle="dropdown" data-i18n="Number Input"><i class="feather icon-circle"></i>Number Input</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-textarea.html" data-toggle="dropdown" data-i18n="Textarea"><i class="feather icon-circle"></i>Textarea</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="form-date-time-picker.html" data-toggle="dropdown" data-i18n="Date &amp; Time Picker"><i class="feather icon-circle"></i>Date &amp; Time Picker</a>
                      </li>
                  </ul>
              </li>
              <li data-menu=""><a class="dropdown-item" href="form-layout.html" data-toggle="dropdown" data-i18n="Form Layout"><i class="feather icon-box"></i>Form Layout</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="form-wizard.html" data-toggle="dropdown" data-i18n="Form Wizard"><i class="feather icon-package"></i>Form Wizard</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="form-validation.html" data-toggle="dropdown" data-i18n="Form Validation"><i class="feather icon-check-circle"></i>Form Validation</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="table.html" data-toggle="dropdown" data-i18n="Table"><i class="feather icon-server"></i>Table</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="table-datatable.html" data-toggle="dropdown" data-i18n="Datatable"><i class="feather icon-grid"></i>Datatable</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="table-ag-grid.html" data-toggle="dropdown" data-i18n="agGrid Table"><i class="feather icon-grid"></i>agGrid Table</a>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-file"></i><span data-i18n="Pages">Pages</span></a>
          <ul class="dropdown-menu">
              <li data-menu=""><a class="dropdown-item" href="page-user-profile.html" data-toggle="dropdown" data-i18n="Profile"><i class="feather icon-user"></i>Profile</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="page-account-settings.html" data-toggle="dropdown" data-i18n="Account Settings"><i class="feather icon-settings"></i>Account Settings</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="page-faq.html" data-toggle="dropdown" data-i18n="FAQ"><i class="feather icon-help-circle"></i>FAQ</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="page-knowledge-base.html" data-toggle="dropdown" data-i18n="Knowledge Base"><i class="feather icon-info"></i>Knowledge Base</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="page-search.html" data-toggle="dropdown" data-i18n="Search"><i class="feather icon-search"></i>Search</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="page-invoice.html" data-toggle="dropdown" data-i18n="Invoice"><i class="feather icon-file"></i>Invoice</a>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Authentication"><i class="feather icon-unlock"></i>Authentication</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="auth-login.html" data-toggle="dropdown" data-i18n="Login"><i class="feather icon-circle"></i>Login</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="auth-register.html" data-toggle="dropdown" data-i18n="Register"><i class="feather icon-circle"></i>Register</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="auth-forgot-password.html" data-toggle="dropdown" data-i18n="Forgot Password"><i class="feather icon-circle"></i>Forgot Password</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="auth-reset-password.html" data-toggle="dropdown" data-i18n="Reset Password"><i class="feather icon-circle"></i>Reset Password</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="auth-lock-screen.html" data-toggle="dropdown" data-i18n="Lock Screen"><i class="feather icon-circle"></i>Lock Screen</a>
                      </li>
                  </ul>
              </li>
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Miscellaneous"><i class="feather icon-file-text"></i>Miscellaneous</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="page-coming-soon.html" data-toggle="dropdown" data-i18n="Coming Soon"><i class="feather icon-circle"></i>Coming Soon</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="error-404.html" data-toggle="dropdown" data-i18n="404"><i class="feather icon-circle"></i>Error 404</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="error-500.html" data-toggle="dropdown" data-i18n="500"><i class="feather icon-circle"></i>Error 500</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="page-not-authorized.html" data-toggle="dropdown" data-i18n="Not Authorized"><i class="feather icon-circle"></i>Not Authorized</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="page-maintenance.html" data-toggle="dropdown" data-i18n="Maintenance"><i class="feather icon-circle"></i>Maintenance</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-bar-chart-2"></i><span data-i18n="Charts &amp; Maps">Charts &amp; Maps</span></a>
          <ul class="dropdown-menu">
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Charts"><i class="feather icon-pie-chart"></i>Charts</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="chart-apex.html" data-toggle="dropdown" data-i18n="Apex"><i class="feather icon-circle"></i>Apex</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="chart-chartjs.html" data-toggle="dropdown" data-i18n="Chartjs"><i class="feather icon-circle"></i>Chartjs</a>
                      </li>
                      <li data-menu=""><a class="dropdown-item" href="chart-echarts.html" data-toggle="dropdown" data-i18n="Echarts"><i class="feather icon-circle"></i>Echarts</a>
                      </li>
                  </ul>
              </li>
              <li data-menu=""><a class="dropdown-item" href="maps-google.html" data-toggle="dropdown" data-i18n="Google Maps"><i class="feather icon-map"></i>Google Maps</a>
              </li>
          </ul>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-more-horizontal"></i><span data-i18n="Others">Others</span></a>
          <ul class="dropdown-menu">
              <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Menu Levels"><i class="feather icon-menu"></i>Menu Levels</a>
                  <ul class="dropdown-menu">
                      <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Second Level"><i class="feather icon-circle"></i>Second Level</a>
                      </li>
                      <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Second Level"><i class="feather icon-circle"></i>Second Level</a>
                          <ul class="dropdown-menu">
                              <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Third Level"><i class="feather icon-circle"></i>Third Level</a>
                              </li>
                              <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Third Level"><i class="feather icon-circle"></i>Third Level</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li class="disabled" data-menu=""><a class="dropdown-item" href="" data-toggle="dropdown" data-i18n="Disabled Menu"><i class="feather icon-eye-off"></i>Disabled Menu</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation" data-toggle="dropdown" data-i18n="Documentation"><i class="feather icon-folder"></i>Documentation</a>
              </li>
              <li data-menu=""><a class="dropdown-item" href="https://pixinvent.ticksy.com/" data-toggle="dropdown" data-i18n="Raise Support"><i class="feather icon-life-buoy"></i>Raise Support</a>
              </li>
          </ul>
      </li>
  </ul>
  </div>`;
  //$('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = 'header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-light navbar-without-dd-arrow navbar-shadow menu-border navbar-brand-center';
  
  //$('div[data-menu="menu-wrapper"]').attr('class');
  console.log(JSON.stringify($.app.menu));
  
  // Main menu
  $.app.menu = {
    expanded: null,
    collapsed: null,
    hidden: null,
    container: null,
    horizontalMenu: false,

    is_touch_device: function () {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      var mq = function (query) {
        return window.matchMedia(query).matches;
      }
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
      }
      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      return mq(query);
    },

    manualScroller: {
      obj: null,

      init: function () {
        var scroll_theme = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';
        if (!$.app.menu.is_touch_device()) {
          this.obj = new PerfectScrollbar(".main-menu-content", {
            suppressScrollX: true,
            wheelPropagation: false
          });
        }
        else {
          $(".main-menu").addClass("menu-native-scroll")
        }
      },

      update: function () {
        // if (this.obj) {
          // Scroll to currently active menu on page load if data-scroll-to-active is true
          if ($('.main-menu').data('scroll-to-active') === true) {
            var activeEl, menu, activeElHeight;
            activeEl = document.querySelector('.main-menu-content li.active');
            if ($body.hasClass('menu-collapsed')) {
              if ($('.main-menu-content li.sidebar-group-active').length) {
                activeEl = document.querySelector('.main-menu-content li.sidebar-group-active');
              }
            } else {
              menu = document.querySelector('.main-menu-content');
              if (activeEl) {
                activeElHeight = activeEl.getBoundingClientRect().top + menu.scrollTop;
              }
              // If active element's top position is less than 2/3 (66%) of menu height than do not scroll
              if (activeElHeight > parseInt((menu.clientHeight * 2) / 3)) {
                var start = menu.scrollTop,
                  change = activeElHeight - start - parseInt(menu.clientHeight / 2);
              }
            }
            setTimeout(function () {
              $.app.menu.container.stop().animate({
                scrollTop: change
              }, 300);
              $('.main-menu').data('scroll-to-active', 'false');
            }, 300);
          }
          // this.obj.update();
        // }
      },

      enable: function () {
        if (!$('.main-menu-content').hasClass('ps')) {
          this.init();
        }
      },

      disable: function () {
        if (this.obj) {
          this.obj.destroy();
        }
      },

      updateHeight: function () {
        if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern' || $body.data('menu') == 'vertical-overlay-menu') && $('.main-menu').hasClass('menu-fixed')) {
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
          this.update();
        }
      }
    },

    init: function (compactMenu) {
      if ($('.main-menu-content').length > 0) {
        this.container = $('.main-menu-content');

        var menuObj = this;
        var defMenu = '';

        if (compactMenu === true) {
          defMenu = 'collapsed';
        }

        if ($body.data('menu') == 'vertical-menu-modern') {
          var menuToggle = '';
          if (menuToggle === "false") {
            this.change('collapsed');
          } else {
            this.change(defMenu);
          }
        } else {
          this.change(defMenu);
        }
      }
    },

    drillDownMenu: function (screenSize) {
      if ($('.drilldown-menu').length) {
        if (screenSize == 'sm' || screenSize == 'xs') {
          if ($('#navbar-mobile').attr('aria-expanded') == 'true') {

            $('.drilldown-menu').slidingMenu({
              backLabel: true
            });
          }
        } else {
          $('.drilldown-menu').slidingMenu({
            backLabel: true
          });
        }
      }
    },

    change: function (defMenu) {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();

      var menuType = $body.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
            if (menuType === 'vertical-overlay-menu') {
              this.hide();
            } else {
              if (defMenu === 'collapsed')
                this.collapse(defMenu);
              else
                this.expand();
            }
            break;
          case 'lg':
            if (menuType === 'vertical-overlay-menu' || menuType === 'vertical-menu-modern' || menuType === 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }
            break;
          case 'md':
          case 'sm':
            this.hide();
            break;
          case 'xs':
            this.hide();
            break;
        }
      }

      // On the small and extra small screen make them overlay menu
      if (menuType === 'vertical-menu' || menuType === 'vertical-menu-modern') {
        this.toOverlayMenu(currentBreakpoint.name, menuType);
      }

      if ($body.is('.horizontal-layout') && !$body.hasClass('.horizontal-menu-demo')) {
        this.changeMenu(currentBreakpoint.name);

        $('.menu-toggle').removeClass('is-active');
      }

      // Initialize drill down menu for vertical layouts, for horizontal layouts drilldown menu is intitialized in changemenu function
      if (menuType != 'horizontal-menu') {
        // Drill down menu
        // ------------------------------
        this.drillDownMenu(currentBreakpoint.name);
      }

      // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------
      if (currentBreakpoint.name == 'xl') {
        $('body[data-open="hover"] .header-navbar .dropdown').on('mouseenter', function () {
          if (!($(this).hasClass('show'))) {
            $(this).addClass('show');
          } else {
            $(this).removeClass('show');
          }
        }).on('mouseleave', function (event) {
          $(this).removeClass('show');
        });

        $('body[data-open="hover"] .dropdown a').on('click', function (e) {
          if (menuType == 'horizontal-menu') {
            var $this = $(this);
            if ($this.hasClass('dropdown-toggle')) {
              return false;
            }
          }
        });
      }

      // Added data attribute brand-center for navbar-brand-center
      // TODO:AJ: Shift this feature in JADE.
      if ($('.header-navbar').hasClass('navbar-brand-center')) {
        $('.header-navbar').attr('data-nav', 'brand-center');
      }
      if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
        $('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      } else {
        $('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      }
      // On screen width change, current active menu in horizontal
      if (currentBreakpoint.name == 'xl' && menuType == 'horizontal-menu') {
        $(".main-menu-content").find('li.active').parents('li').addClass('sidebar-group-active active');
      }

      if (currentBreakpoint.name !== 'xl' && menuType == 'horizontal-menu') {
        $("#navbar-type").toggleClass('d-none d-xl-block');
      }

      // Dropdown submenu on small screen on click
      // --------------------------------------------------
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        if ($(this).siblings('ul.dropdown-menu').length > 0) {
          event.preventDefault();
        }
        event.stopPropagation();
        $(this).parent().siblings().removeClass('show');
        $(this).parent().toggleClass('show');
      });


      // Horizontal layout submenu drawer scrollbar
      if (menuType == 'horizontal-menu') {
        $('li.dropdown-submenu').on('mouseenter', function () {
          if (!$(this).parent('.dropdown').hasClass('show')) {
            $(this).removeClass('openLeft');
          }
          var dd = $(this).find('.dropdown-menu');
          if (dd) {
            var pageHeight = $(window).height(),
              // ddTop = dd.offset().top,
              ddTop = $(this).position().top,
              ddLeft = dd.offset().left,
              ddWidth = dd.width(),
              ddHeight = dd.height();
            if (((pageHeight - ddTop) - ddHeight - 28) < 1) {
              var maxHeight = (pageHeight - ddTop - 170);
              $(this).find('.dropdown-menu').css({
                'max-height': maxHeight + 'px',
                'overflow-y': 'auto',
                'overflow-x': 'hidden'
              });
              var menu_content = new PerfectScrollbar('li.dropdown-submenu.show .dropdown-menu', {
                wheelPropagation: false
              });
            }
            // Add class to horizontal sub menu if screen width is small
            if (ddLeft + ddWidth - (window.innerWidth - 16) >= 0) {
              $(this).addClass('openLeft');
            }
          }
        });
        $('.theme-layouts').find('.semi-dark').hide();
        $('#customizer-navbar-colors').hide();
      }


      //Horizontal Fixed Nav Sticky hight issue on small screens
      // if (menuType == 'horizontal-menu') {
      //   if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
      //     if ($(".menu-fixed").length) {
      //       $(".menu-fixed").unstick();
      //     }
      //   }
      //   else {
      //     if ($(".navbar-fixed").length) {
      //       $(".navbar-fixed").sticky();
      //     }
      //   }
      // }

      /********************************************
       *             Searchable Menu               *
       ********************************************/

      function searchMenu(list) {

        var input = $(".menu-search");
        $(input)
          .change(function () {
            var filter = $(this).val();
            if (filter) {
              // Hide Main Navigation Headers
              $('.navigation-header').hide();
              // this finds all links in a list that contain the input,
              // and hide the ones not containing the input while showing the ones that do
              $(list).find("li a:not(:Contains(" + filter + "))").hide().parent().hide();
              // $(list).find("li a:Contains(" + filter + ")").show().parents('li').show().addClass('open').closest('li').children('a').show();
              var searchFilter = $(list).find("li a:Contains(" + filter + ")");
              if (searchFilter.parent().hasClass('has-sub')) {
                searchFilter.show()
                  .parents('li').show()
                  .addClass('open')
                  .closest('li')
                  .children('a').show()
                  .children('li').show();

                // searchFilter.parents('li').find('li').show().children('a').show();
                if (searchFilter.siblings('ul').length > 0) {
                  searchFilter.siblings('ul').children('li').show().children('a').show();
                }

              } else {
                searchFilter.show().parents('li').show().addClass('open').closest('li').children('a').show();
              }
            } else {
              // return to default
              $('.navigation-header').show();
              $(list).find("li a").show().parent().show().removeClass('open');
            }
            $.app.menu.manualScroller.update();
            return false;
          })
          .keyup(function () {
            // fire the above change event after every letter
            $(this).change();
          });
      }

      if (menuType === 'vertical-menu' || menuType === 'vertical-overlay-menu') {
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function (a, i, m) {
          return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };

        searchMenu($("#main-menu-navigation"));
      }
    },

    transit: function (callback1, callback2) {
      var menuObj = this;
      $body.addClass('changing-menu');

      callback1.call(menuObj);

      if ($body.hasClass('vertical-layout')) {
        if ($body.hasClass('menu-open') || $body.hasClass('menu-expanded')) {
          $('.menu-toggle').addClass('is-active');

          // Show menu header search when menu is normally visible
          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').show();
            }
          }
        } else {
          $('.menu-toggle').removeClass('is-active');

          // Hide menu header search when only menu icons are visible
          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function () {
        callback2.call(menuObj);
        $body.removeClass('changing-menu');

        menuObj.update();
      }, 500);
    },

    open: function () {
      this.transit(function () {
        $body.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-none').addClass('d-block');
          $('body').css('overflow', 'hidden');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
          // this.manualScroller.update();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block d-none');
          $('body').css('overflow', 'auto');
        }
      });
    },

    hide: function () {

      this.transit(function () {
        $body.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block').addClass('d-none');
          $('body').css('overflow', 'auto');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('d-block d-none');
          $('body').css('overflow', 'auto');
        }
      });
    },

    expand: function () {
      if (this.expanded === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.toggle-icon')
            .removeClass('feather icon-circle').addClass('feather icon-disc');
        }
        this.transit(function () {
          $body.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;

          $('.sidenav-overlay').removeClass('d-block d-none');
        }, function () {

          if (($('.main-menu').hasClass('menu-native-scroll') || $body.data('menu') == 'horizontal-menu')) {
            this.manualScroller.disable();
          } else {
            if ($('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }

          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
            // this.manualScroller.update();
          }

        });
      }
    },

    collapse: function (defMenu) {
      if (this.collapsed === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.toggle-icon')
            .removeClass('feather icon-disc').addClass('feather icon-circle');
        }
        this.transit(function () {
          $body.removeClass('menu-expanded').addClass('menu-collapsed');
          this.collapsed = true;
          this.expanded = false;

          $('.content-overlay').removeClass('d-block d-none');
        }, function () {

          if (($body.data('menu') == 'horizontal-menu') && $body.hasClass('vertical-overlay-menu')) {
            if ($('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }
          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height());
            // this.manualScroller.update();
          }
          if ($body.data('menu') == 'vertical-menu-modern') {
            if ($('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }
        });
      }
    },

    toOverlayMenu: function (screen, menuType) {
      var menu = $body.data('menu');
      if (menuType == 'vertical-menu-modern') {
        if (screen == 'lg' || screen == 'md' || screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      } else {
        if (screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      }
    },

    changeMenu: function (screen) {
      // Replace menu html
      $('div[data-menu="menu-wrapper"]').html('');
      $('div[data-menu="menu-wrapper"]').html(menuWrapper_el);
      
      var menuWrapper = $('div[data-menu="menu-wrapper"]'),
        menuContainer = $('div[data-menu="menu-container"]'),
        menuNavigation = $('ul[data-menu="menu-navigation"]'),
        /*megaMenu           = $('li[data-menu="megamenu"]'),
        megaMenuCol        = $('li[data-mega-col]'),*/
        dropdownMenu = $('li[data-menu="dropdown"]'),
        dropdownSubMenu = $('li[data-menu="dropdown-submenu"]');
      if (screen === 'xl') {
        console.log('xl');
        // Change body classes
        $body.removeClass('vertical-layout vertical-overlay-menu fixed-navbar').addClass($body.data('menu'));

        // Remove navbar-fix-top class on large screens
        $('nav.header-navbar').removeClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass(menuWrapperClasses);
        
        // Intitialize drill down menu for horizontal layouts
        // --------------------------------------------------
        this.drillDownMenu(screen);

        $('a.dropdown-item.nav-has-children').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
        $('a.dropdown-item.nav-has-parent').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
      } else {
        console.log('xl-else');
        // Change body classes
        $body.removeClass($body.data('menu')).addClass('vertical-layout vertical-overlay-menu fixed-navbar');

        // Add navbar-fix-top class on small screens
        $('nav.header-navbar').addClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass('main-menu menu-light menu-fixed menu-shadow');
        // menuContainer.removeClass().addClass('main-menu-content');
        menuNavigation.removeClass().addClass('navigation navigation-main');

        // If Dropdown Menu
        dropdownMenu.removeClass('dropdown').addClass('has-sub');
        dropdownMenu.find('a').removeClass('dropdown-toggle nav-link');
        dropdownMenu.children('ul').find('a').removeClass('dropdown-item');
        dropdownMenu.find('ul').removeClass('dropdown-menu');
        dropdownSubMenu.removeClass().addClass('has-sub');

        $.app.nav.init();

        // Dropdown submenu on small screen on click
        // --------------------------------------------------
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent().siblings().removeClass('open');
          $(this).parent().toggleClass('open');
        });

        $(".main-menu-content").find('li.active').parents('li').addClass('sidebar-group-active');

        $(".main-menu-content").find("li.active").closest("li.nav-item").addClass("open");
      }
    },

    toggle: function () {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint
      var collapsed = this.collapsed;
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = $body.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu') {
              this.open();
            } else {
              this.expand();
            }
          }
          break;
        case 'lg':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.open();
            } else {
              this.expand();
            }
          }
          break;
        case 'md':
        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
      }

      // Re-init sliding menu to update width
      this.drillDownMenu(currentBreakpoint.name);
    },

    update: function () {
      this.manualScroller.update();
    },

    reset: function () {
      this.expanded = false;
      this.collapsed = false;
      this.hidden = false;
      $body.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    },
  };

  // Navigation Menu
  $.app.nav = {
    container: $('.navigation-main'),
    initialized: false,
    navItem: $('.navigation-main').find('li').not('.navigation-category'),

    config: {
      speed: 300,
    },

    init: function (config) {
      this.initialized = true; // Set to true when initialized
      $.extend(this.config, config);

      this.bind_events();
    },

    bind_events: function () {
      var menuObj = this;

      $('.navigation-main').on('mouseenter.app.menu', 'li', function () {
        var $this = $(this);
        $('.hover', '.navigation-main').removeClass('hover');
        if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();

          // Title
          var menuTitle = $this.find('span.menu-title').clone(),
            tempTitle,
            tempLink;
          if (!$this.hasClass('has-sub')) {
            tempTitle = $this.find('span.menu-title').text();
            tempLink = $this.children('a').attr('href');
            if (tempTitle !== '') {
              menuTitle = $("<a>");
              menuTitle.attr("href", tempLink);
              menuTitle.attr("title", tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass("menu-title");
            }
          }
          // menu_header_height = ($('.main-menu-header').length) ? $('.main-menu-header').height() : 0,
          // fromTop = menu_header_height + $this.position().top + parseInt($this.css( "border-top" ),10);
          var fromTop;
          if ($this.css("border-top")) {
            fromTop = $this.position().top + parseInt($this.css("border-top"), 10);
          } else {
            fromTop = $this.position().top;
          }
          if ($body.data('menu') !== 'vertical-compact-menu') {
            menuTitle.appendTo('.main-menu-content').css({
              position: 'fixed',
              top: fromTop,
            });
          }

          // Content
          if ($this.hasClass('has-sub') && $this.hasClass('nav-item')) {
            var menuContent = $this.children('ul:first');
            menuObj.adjustSubmenu($this);
          }
        }
        $this.addClass('hover');
      }).on('mouseleave.app.menu', 'li', function () {
        // $(this).removeClass('hover');
      }).on('active.app.menu', 'li', function (e) {
        $(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function (e) {
        $(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function (e) {

        var $listItem = $(this);
        $listItem.addClass('open');

        menuObj.expand($listItem);

        // If menu collapsible then do not take any action
        if ($('.main-menu').hasClass('menu-collapsible')) {
          return false;
        }
        // If menu accordion then close all except clicked once
        else {
          $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
          $listItem.siblings('.open').trigger('close.app.menu');
        }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function (e) {
        var $listItem = $(this);

        $listItem.removeClass('open');
        menuObj.collapse($listItem);

        e.stopPropagation();
      }).on('click.app.menu', 'li', function (e) {
        var $listItem = $(this);
        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
            e.preventDefault();
          } else {
            if ($listItem.has('ul').length) {
              if ($listItem.is('.open')) {
                $listItem.trigger('close.app.menu');
              } else {
                $listItem.trigger('open.app.menu');
              }
            } else {
              if (!$listItem.is('.active')) {
                $listItem.siblings('.active').trigger('deactive.app.menu');
                $listItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });


      $('.navbar-header, .main-menu').on('mouseenter', modernMenuExpand).on('mouseleave', modernMenuCollapse);

      function modernMenuExpand() {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.main-menu, .navbar-header').addClass('expanded');
          if ($body.hasClass('menu-collapsed')) {
            if ($('.main-menu li.open').length === 0) {
              $(".main-menu-content").find('li.active').parents('li').addClass('open');
            }
            var $listItem = $('.main-menu li.menu-collapsed-open'),
              $subList = $listItem.children('ul');

            $subList.hide().slideDown(200, function () {
              $(this).css('display', '');
            });

            $listItem.addClass('open').removeClass('menu-collapsed-open');
            // $.app.menu.changeLogo('expand');
          }
        }
      }

      function modernMenuCollapse() {
        if ($body.hasClass('menu-collapsed') && $body.data('menu') == 'vertical-menu-modern') {
          setTimeout(function () {
            if ($('.main-menu:hover').length === 0 && $('.navbar-header:hover').length === 0) {

              $('.main-menu, .navbar-header').removeClass('expanded');
              if ($body.hasClass('menu-collapsed')) {
                var $listItem = $('.main-menu li.open'),
                  $subList = $listItem.children('ul');
                $listItem.addClass('menu-collapsed-open');

                $subList.show().slideUp(200, function () {
                  $(this).css('display', '');
                });

                $listItem.removeClass('open');
                // $.app.menu.changeLogo();
              }
            }
          }, 1);
        }
      }

      $('.main-menu-content').on('mouseleave', function () {
        if ($body.hasClass('menu-collapsed')) {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();
        }
        $('.hover', '.navigation-main').removeClass('hover');
      });

      // If list item has sub menu items then prevent redirection.
      $('.navigation-main li.has-sub > a').on('click', function (e) {
        e.preventDefault();
      });

      $('ul.menu-content').on('click', 'li', function (e) {
        var $listItem = $(this);
        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($listItem.has('ul')) {
            if ($listItem.is('.open')) {
              $listItem.removeClass('open');
              menuObj.collapse($listItem);
            } else {
              $listItem.addClass('open');

              menuObj.expand($listItem);

              // If menu collapsible then do not take any action
              if ($('.main-menu').hasClass('menu-collapsible')) {
                return false;
              }
              // If menu accordion then close all except clicked once
              else {
                $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
                $listItem.siblings('.open').trigger('close.app.menu');
              }

              e.stopPropagation();
            }
          } else {
            if (!$listItem.is('.active')) {
              $listItem.siblings('.active').trigger('deactive.app.menu');
              $listItem.trigger('active.app.menu');
            }
          }
        }

        e.stopPropagation();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} $menuItem The parent menu item containing the submenu.
     */
    adjustSubmenu: function ($menuItem) {
      var menuHeaderHeight, menutop, topPos, winHeight,
        bottomOffset, subMenuHeight, popOutMenuHeight, borderWidth, scroll_theme,
        $submenu = $menuItem.children('ul:first'),
        ul = $submenu.clone(true);

      menuHeaderHeight = $('.main-menu-header').height();
      menutop = $menuItem.position().top;
      winHeight = $window.height() - $('.header-navbar').height();
      borderWidth = 0;
      subMenuHeight = $submenu.height();

      if (parseInt($menuItem.css("border-top"), 10) > 0) {
        borderWidth = parseInt($menuItem.css("border-top"), 10);
      }

      popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
      scroll_theme = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';

      topPos = menutop + $menuItem.height() + borderWidth;

      ul.addClass('menu-popout').appendTo('.main-menu-content').css({
        'top': topPos,
        'position': 'fixed',
        'max-height': popOutMenuHeight,
      });

      var menu_content = new PerfectScrollbar('.main-menu-content > ul.menu-content', {
        wheelPropagation: false
      });
    },

    collapse: function ($listItem, callback) {
      var $subList = $listItem.children('ul');

      $subList.show().slideUp($.app.nav.config.speed, function () {
        $(this).css('display', '');

        $(this).find('> li').removeClass('is-shown');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('collapsed.app.menu');
      });
    },

    expand: function ($listItem, callback) {
      var $subList = $listItem.children('ul');
      var $children = $subList.children('li').addClass('is-hidden');

      $subList.hide().slideDown($.app.nav.config.speed, function () {
        $(this).css('display', '');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('expanded.app.menu');
      });

      setTimeout(function () {
        $children.addClass('is-shown');
        $children.removeClass('is-hidden');
      }, 0);
    },

    refresh: function () {
      $.app.nav.container.find('.open').removeClass('open');
    },
  };

})(window, document, jQuery);

// We listen to the resize event
window.addEventListener('resize', function() {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + "px");
});