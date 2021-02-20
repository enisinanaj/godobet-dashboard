import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardSales = React.lazy(() => import('./Demo/Dashboard/Sales'));
const DashboardCRM = React.lazy(() => import('./Demo/Dashboard/Crm'));
const DashboardAnalytics = React.lazy(() => import('./Demo/Dashboard/Analytics'));
const DashboardProject = React.lazy(() => import('./Demo/Dashboard/Project'));

const LayoutHorizontal = React.lazy(() => import('./Demo/PageLayout/Horizontal'));
const LayoutHorizontalV2 = React.lazy(() => import('./Demo/PageLayout/HorizontalL2'));
const LayoutHorizontalRtl = React.lazy(() => import('./Demo/PageLayout/HorizontalRtl'));
const LayoutStatic = React.lazy(() => import('./Demo/PageLayout/Vertical/Static'));
const LayoutFixed = React.lazy(() => import('./Demo/PageLayout/Vertical/Fixed'));
const LayoutNavFixed = React.lazy(() => import('./Demo/PageLayout/Vertical/NavFixed'));
const LayoutCollapseMenu = React.lazy(() => import('./Demo/PageLayout/Vertical/CollapseMenu'));
const LayoutBox = React.lazy(() => import('./Demo/PageLayout/BoxLayout'));
const LayoutRtl = React.lazy(() => import('./Demo/PageLayout/Vertical/RtlLayout'));
const LayoutLight = React.lazy(() => import('./Demo/PageLayout/LightLayout'));
const LayoutDark = React.lazy(() => import('./Demo/PageLayout/DarkLayout'));

const WdgtStatistic = React.lazy(() => import('./Demo/Widget/WdgtStatistic'));
const WdgtData = React.lazy(() => import('./Demo/Widget/WdgtData'));
const WdgetChart = React.lazy(() => import('./Demo/Widget/WdgetChart'));

const UsersProfile = React.lazy(() => import('./Demo/Users/UserProfile'));
const UsersCards = React.lazy(() => import('./Demo/Users/UserCards'));
const UsersList = React.lazy(() => import('./Demo/Users/UserList'));

const HospitalDashboard = React.lazy(() => import('./Demo/Panels/Hospital/Dashboard'));
const HospitalDepartment = React.lazy(() => import('./Demo/Panels/Hospital/Department'));
const HospitalDoctor = React.lazy(() => import('./Demo/Panels/Hospital/Doctor'));
const HospitalPatient = React.lazy(() => import('./Demo/Panels/Hospital/Patient'));
const HospitalNurse = React.lazy(() => import('./Demo/Panels/Hospital/Nurse'));
const HospitalPharmacist = React.lazy(() => import('./Demo/Panels/Hospital/Pharmacist'));
const HospitalLaboratory = React.lazy(() => import('./Demo/Panels/Hospital/Laboratory'));

const PCDashboard = React.lazy(() => import('./Demo/Panels/ProjectNCrm/Dashboard'));
const PCCustomers = React.lazy(() => import('./Demo/Panels/ProjectNCrm/Customers'));
const PCProject = React.lazy(() => import('./Demo/Panels/ProjectNCrm/Project'));
const PCTask = React.lazy(() => import('./Demo/Panels/ProjectNCrm/Task'));

const MshpDashboard = React.lazy(() => import('./Demo/Panels/Membership/Dashboard'));
const MshpEmail = React.lazy(() => import('./Demo/Panels/Membership/Email'));
const MshpCountry = React.lazy(() => import('./Demo/Panels/Membership/Country'));
const MshpCoupons = React.lazy(() => import('./Demo/Panels/Membership/Coupons'));
const MshpNewsletter = React.lazy(() => import('./Demo/Panels/Membership/Newsletter'));
const MshpUser = React.lazy(() => import('./Demo/Panels/Membership/User'));
const MshpMembership = React.lazy(() => import('./Demo/Panels/Membership/Membership'));

const HelpdeskDashboard = React.lazy(() => import('./Demo/Panels/Helpdesk/Dashboard'));
const HelpdeskCreateTicket = React.lazy(() => import('./Demo/Panels/Helpdesk/CreateTicket'));
const HelpdeskTicketList = React.lazy(() => import('./Demo/Panels/Helpdesk/TicketList'));
const HelpdeskTicketDetails = React.lazy(() => import('./Demo/Panels/Helpdesk/TicketDetails'));
const HelpdeskCustomer = React.lazy(() => import('./Demo/Panels/Helpdesk/Customer'));

const SchoolDashboard = React.lazy(() => import('./Demo/Panels/School/Dashboard'));
const SchoolStudent = React.lazy(() => import('./Demo/Panels/School/Student'));
const SchoolParents = React.lazy(() => import('./Demo/Panels/School/Parents'));
const SchoolTeacher = React.lazy(() => import('./Demo/Panels/School/Teacher'));

const SisDashboard = React.lazy(() => import('./Demo/Panels/Sis/Dashboard'));
const SisLeave = React.lazy(() => import('./Demo/Panels/Sis/Leave'));
const SisEvaluation = React.lazy(() => import('./Demo/Panels/Sis/Evaluation'));
const SisEvent = React.lazy(() => import('./Demo/Panels/Sis/Event'));
const SisCircular = React.lazy(() => import('./Demo/Panels/Sis/Circular'));
const SisCourse = React.lazy(() => import('./Demo/Panels/Sis/Course'));

const CryptoDashboard = React.lazy(() => import('./Demo/Panels/Crypto/Dashboard'));
const CryptoExchange = React.lazy(() => import('./Demo/Panels/Crypto/Exchange'));
const CryptoWallet = React.lazy(() => import('./Demo/Panels/Crypto/Wallet'));
const CryptoTransaction = React.lazy(() => import('./Demo/Panels/Crypto/Transaction'));
const CryptoHistory = React.lazy(() => import('./Demo/Panels/Crypto/History'));
const CryptoTrading = React.lazy(() => import('./Demo/Panels/Crypto/Trading'));
const CryptoInitialCoin = React.lazy(() => import('./Demo/Panels/Crypto/InitialCoin'));
const CryptoIcoListing = React.lazy(() => import('./Demo/Panels/Crypto/IcoListing'));

const EcommProduct = React.lazy(() => import('./Demo/Panels/Ecommerce/Product'));
const EcommProductDetails = React.lazy(() => import('./Demo/Panels/Ecommerce/ProductDetails'));
const EcommOrder = React.lazy(() => import('./Demo/Panels/Ecommerce/Order'));
const EcommCheckout = React.lazy(() => import('./Demo/Panels/Ecommerce/Checkout'));
const EcommCart = React.lazy(() => import('./Demo/Panels/Ecommerce/Cart'));
const EcommSellers = React.lazy(() => import('./Demo/Panels/Ecommerce/Sellers'));
const EcommCustomers = React.lazy(() => import('./Demo/Panels/Ecommerce/Customers'));

const UIBasicAlert = React.lazy(() => import('./Demo/UIElements/Basic/Alert'));
const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));
const UIBasicCards = React.lazy(() => import('./Demo/UIElements/Basic/Cards'));
const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicCarousels = React.lazy(() => import('./Demo/UIElements/Basic/Carousels'));
const UIBasicGridSystem = React.lazy(() => import('./Demo/UIElements/Basic/GridSystem'));
const UIBasicProgress = React.lazy(() => import('./Demo/UIElements/Basic/Progress'));
const UIBasicModals = React.lazy(() => import('./Demo/UIElements/Basic/Modals'));
const UIBasicSpinner = React.lazy(() => import('./Demo/UIElements/Basic/Spinner'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));
const UIBasicBasicTooltipsPopovers = React.lazy(() => import('./Demo/UIElements/Basic/TooltipsPopovers'));
const UIBasicBasicOther = React.lazy(() => import('./Demo/UIElements/Basic/Other'));

const UIAdvanceAlert = React.lazy(() => import('./Demo/UIElements/Advance/Alert'));
const UIAdvanceDatepicker = React.lazy(() => import('./Demo/UIElements/Advance/Datepicker'));
const UIAdvanceLightBox = React.lazy(() => import('./Demo/UIElements/Advance/LightBox'));
const UIAdvanceModal = React.lazy(() => import('./Demo/UIElements/Advance/Modal'));
const UIAdvanceNotification = React.lazy(() => import('./Demo/UIElements/Advance/Notification'));
const UIAdvanceNestable = React.lazy(() => import('./Demo/UIElements/Advance/Nestable'));
const UIAdvancePNotify = React.lazy(() => import('./Demo/UIElements/Advance/PNotify'));
const UIAdvanceRating = React.lazy(() => import('./Demo/UIElements/Advance/Rating'));
const UIAdvanceRangeSlider = React.lazy(() => import('./Demo/UIElements/Advance/RangeSlider'));
const UIAdvanceSlider = React.lazy(() => import('./Demo/UIElements/Advance/Slider'));
const UIAdvanceSyntaxHighlighter = React.lazy(() => import('./Demo/UIElements/Advance/SyntaxHighlighter'));
const UIAdvanceTour = React.lazy(() => import('./Demo/UIElements/Advance/Tour'));
const UIAdvanceTree = React.lazy(() => import('./Demo/UIElements/Advance/Tree'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));
const FormsAdvance = React.lazy(() => import('./Demo/Forms/FormsAdvance'));
const FormsValidation = React.lazy(() => import('./Demo/Forms/FormsValidation'));
const FormsMasking = React.lazy(() => import('./Demo/Forms/FormsMasking'));
const FormsWizard = React.lazy(() => import('./Demo/Forms/FormsWizard'));
const FormsPicker = React.lazy(() => import('./Demo/Forms/FormsPicker'));
const FormsSelect = React.lazy(() => import('./Demo/Forms/FormsSelect'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));
const DataTables = React.lazy(() => import('./Demo/Tables/DataTables'));

const ApexChart = React.lazy(() => import('./Demo/Charts/ApexChart/index'));
const ChartJs = React.lazy(() => import('./Demo/Charts/ChartJs/index'));
const HighChart = React.lazy(() => import('./Demo/Charts/HighChart/index'));
const ReChart = React.lazy(() => import('./Demo/Charts/ReChart/index'));
const PeityChart = React.lazy(() => import('./Demo/Charts/PeityChart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));
const VectorMaps = React.lazy(() => import('./Demo/Maps/VectorMap/index'));

const AppTaskList = React.lazy(() => import('./Demo/AppPages/Task/TaskList'));
const AppTaskBoard = React.lazy(() => import('./Demo/AppPages/Task/TaskBoard'));
const AppTaskDetails = React.lazy(() => import('./Demo/AppPages/Task/TaskDetails'));
const AppToDo = React.lazy(() => import('./Demo/AppPages/ToDo/ToDo'));
const AppNotes = React.lazy(() => import('./Demo/AppPages/ToDo/Notes'));
const AppGalleryGrid = React.lazy(() => import('./Demo/AppPages/Gallery/GalleryGrid'));
const AppMasonryGallery = React.lazy(() => import('./Demo/AppPages/Gallery/MasonryGallery'));

const ExtensionEditorCkClassic = React.lazy(() => import('./Demo/Extension/Editor/EditorCkClassic'));
const ExtensionEditorCkBalloon = React.lazy(() => import('./Demo/Extension/Editor/EditorCkBalloon'));
const ExtensionEditorCkInline = React.lazy(() => import('./Demo/Extension/Editor/EditorCkInline'));
const ExtensionEditorCkDocument = React.lazy(() => import('./Demo/Extension/Editor/EditorCkDocument'));
const ExtensionEditorJoditWYSIWYG = React.lazy(() => import('./Demo/Extension/Editor/EditorJoditWYSIWYG'));
const ExtensionEditorRichNib = React.lazy(() => import('./Demo/Extension/Editor/EditorRichNib'));
const ExtensionInvoiceBasic = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceBasic'));
const ExtensionInvoiceSummary = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceSummary'));
const ExtensionInvoiceList = React.lazy(() => import('./Demo/Extension/Invoice/InvoiceList'));
const ExtensionFullEventCalendar = React.lazy(() => import('./Demo/Extension/FullEventCalendar'));
const ExtensionFileUpload = React.lazy(() => import('./Demo/Extension/FileUpload'));
const ExtensionImageCropper = React.lazy(() => import('./Demo/Extension/ImageCropper'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/dashboard/sales', exact: true, name: 'Crypto', component: DashboardSales },
    { path: '/dashboard/crm', exact: true, name: 'Crypto', component: DashboardCRM },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/project', exact: true, name: 'Crypto', component: DashboardProject },
    { path: '/layout/horizontal', exact: true, name: 'Horizontal', component: LayoutHorizontal },
    { path: '/layout/horizontal-v2', exact: true, name: 'Horizontal v2', component: LayoutHorizontalV2 },
    { path: '/layout/horizontal-rtl', exact: true, name: 'Horizontal v2', component: LayoutHorizontalRtl },
    { path: '/layout/static', exact: true, name: 'Static', component: LayoutStatic },
    { path: '/layout/fixed', exact: true, name: 'Fixed', component: LayoutFixed },
    { path: '/layout/nav-fixed', exact: true, name: 'Nav Fixed', component: LayoutNavFixed },
    { path: '/layout/collapse-menu', exact: true, name: 'Collapse Menu', component: LayoutCollapseMenu },
    { path: '/layout/v-rtl', exact: true, name: 'Vertical RTL', component: LayoutRtl },
    { path: '/layout/box', exact: true, name: 'Box Layout', component: LayoutBox },
    { path: '/layout/light', exact: true, name: 'Light Layout', component: LayoutLight },
    { path: '/layout/dark', exact: true, name: 'Dark Layout', component: LayoutDark },
    { path: '/widget/wdgt-statistic', exact: true, name: 'Widget Statistic', component: WdgtStatistic },
    { path: '/widget/wdgt-data', exact: true, name: 'Widget Data', component: WdgtData },
    { path: '/widget/wdgt-chart', exact: true, name: 'Widget Chart', component: WdgetChart },
    { path: '/users/user-profile', exact: true, name: 'User Profile', component: UsersProfile },
    { path: '/users/user-cards', exact: true, name: 'User Cards', component: UsersCards },
    { path: '/users/user-list', exact: true, name: 'User List', component: UsersList },


    { path: '/hospital/hosp-dashboard', exact: true, name: 'Hospital Dashboard', component: HospitalDashboard },
    { path: '/hospital/hosp-department', exact: true, name: 'Hospital Department', component: HospitalDepartment },
    { path: '/hospital/hosp-doctor', exact: true, name: 'Hospital Doctor', component: HospitalDoctor },
    { path: '/hospital/hosp-patient', exact: true, name: 'Hospital Patient', component: HospitalPatient },
    { path: '/hospital/hosp-nurse', exact: true, name: 'Hospital Nurse', component: HospitalNurse },
    { path: '/hospital/hosp-pharmacist', exact: true, name: 'Hospital Pharmacist', component: HospitalPharmacist },
    { path: '/hospital/hosp-laboratory', exact: true, name: 'Hospital Laboratory', component: HospitalLaboratory },
    { path: '/project-crm/pc-dashboard', exact: true, name: 'Project & CRM Dashboard', component: PCDashboard },
    { path: '/project-crm/pc-customers', exact: true, name: 'Project & CRM Customers', component: PCCustomers },
    { path: '/project-crm/pc-project', exact: true, name: 'Project & CRM Project', component: PCProject },
    { path: '/project-crm/pc-task', exact: true, name: 'Project & CRM Task', component: PCTask },
    { path: '/membership/mshp-dashboard', exact: true, name: 'Membership Dashboard', component: MshpDashboard },
    { path: '/membership/mshp-email', exact: true, name: 'Membership Email Template', component: MshpEmail },
    { path: '/membership/mshp-country', exact: true, name: 'Membership Country', component: MshpCountry },
    { path: '/membership/mshp-coupons', exact: true, name: 'Membership Coupons', component: MshpCoupons },
    { path: '/membership/mshp-newsletter', exact: true, name: 'Membership Newsletter', component: MshpNewsletter },
    { path: '/membership/mshp-user', exact: true, name: 'Membership Newsletter', component: MshpUser },
    { path: '/membership/mshp-membership', exact: true, name: 'Membership', component: MshpMembership },
    { path: '/helpdesk/hd-dashboard', exact: true, name: 'Helpdesk Dashboard', component: HelpdeskDashboard },
    { path: '/helpdesk/hd-ticket', exact: true, name: 'Helpdesk Create Ticket', component: HelpdeskCreateTicket },
    { path: '/helpdesk/hd-ticket-list', exact: true, name: 'Helpdesk Ticket List', component: HelpdeskTicketList },
    { path: '/helpdesk/hd-ticket-details', exact: true, name: 'Helpdesk Ticket Details', component: HelpdeskTicketDetails },
    { path: '/helpdesk/hd-customer-list', exact: true, name: 'Helpdesk Customer', component: HelpdeskCustomer },
    { path: '/school/sch-dashboard', exact: true, name: 'School Dashboard', component: SchoolDashboard },
    { path: '/school/sch-student', exact: true, name: 'School Student', component: SchoolStudent },
    { path: '/school/sch-parents', exact: true, name: 'School Parents', component: SchoolParents },
    { path: '/school/sch-teacher', exact: true, name: 'School Teacher', component: SchoolTeacher },
    { path: '/sis/sis-dashboard', exact: true, name: 'SIS Dashboard', component: SisDashboard },
    { path: '/sis/sis-leave', exact: true, name: 'SIS Leave', component: SisLeave },
    { path: '/sis/sis-evaluation', exact: true, name: 'SIS Evaluation', component: SisEvaluation },
    { path: '/sis/sis-event', exact: true, name: 'SIS Event', component: SisEvent },
    { path: '/sis/sis-circular', exact: true, name: 'SIS Circular', component: SisCircular },
    { path: '/sis/sis-course', exact: true, name: 'SIS Course', component: SisCourse },
    { path: '/crypto/cp-dashboard', exact: true, name: 'Crypto Dashboard', component: CryptoDashboard },
    { path: '/crypto/cp-exchange', exact: true, name: 'Crypto Exchange', component: CryptoExchange },
    { path: '/crypto/cp-wallet', exact: true, name: 'Crypto Wallet', component: CryptoWallet },
    { path: '/crypto/cp-transactions', exact: true, name: 'Crypto Transaction', component: CryptoTransaction },
    { path: '/crypto/cp-history', exact: true, name: 'Crypto History', component: CryptoHistory },
    { path: '/crypto/cp-trading', exact: true, name: 'Crypto Trading', component: CryptoTrading },
    { path: '/crypto/cp-coin', exact: true, name: 'Crypto Initial Coin', component: CryptoInitialCoin },
    { path: '/crypto/cp-ico', exact: true, name: 'Crypto Ico Listing', component: CryptoIcoListing },
    { path: '/ecommerce/ecomm-product', exact: true, name: 'Ecommerce Product', component: EcommProduct },
    { path: '/ecommerce/ecomm-product-details', exact: true, name: 'Ecommerce Product Details', component: EcommProductDetails },
    { path: '/ecommerce/ecomm-order', exact: true, name: 'Ecommerce Order', component: EcommOrder },
    { path: '/ecommerce/ecomm-checkout', exact: true, name: 'Ecommerce Checkout', component: EcommCheckout },
    { path: '/ecommerce/ecomm-cart', exact: true, name: 'Ecommerce Cart', component: EcommCart },
    { path: '/ecommerce/ecomm-seller', exact: true, name: 'Ecommerce Sellers', component: EcommSellers },
    { path: '/ecommerce/ecomm-customer', exact: true, name: 'Ecommerce Customers', component: EcommCustomers },


    { path: '/basic/alert', exact: true, name: 'Basic Alert', component: UIBasicAlert },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/cards', exact: true, name: 'Basic Cards', component: UIBasicCards },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/carousel', exact: true, name: 'Basic Carousels', component: UIBasicCarousels },
    { path: '/basic/grid-system', exact: true, name: 'Basic Grid System', component: UIBasicGridSystem },
    { path: '/basic/progress', exact: true, name: 'Basic Progress', component: UIBasicProgress },
    { path: '/basic/modal', exact: true, name: 'Basic Modals', component: UIBasicModals },
    { path: '/basic/spinner', exact: true, name: 'Basic Spinner', component: UIBasicSpinner },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/basic/tooltip-popovers', exact: true, name: 'Basic Tooltips Popovers', component: UIBasicBasicTooltipsPopovers },
    { path: '/basic/other', exact: true, name: 'Basic Other', component: UIBasicBasicOther },
    { path: '/advance/alert', exact: true, name: 'Sweet Alert', component: UIAdvanceAlert },
    { path: '/advance/datepicker', exact: true, name: 'Datepicker', component: UIAdvanceDatepicker },
    { path: '/advance/light-box', exact: true, name: 'Light Box', component: UIAdvanceLightBox },
    { path: '/advance/modal', exact: true, name: 'Animation Modal', component: UIAdvanceModal },
    { path: '/advance/notification', exact: true, name: 'Notification', component: UIAdvanceNotification },
    { path: '/advance/nestable', exact: true, name: 'Neastable', component: UIAdvanceNestable },
    { path: '/advance/p-notify', exact: true, name: 'P-Notify', component: UIAdvancePNotify },
    { path: '/advance/rating', exact: true, name: 'Rating', component: UIAdvanceRating },
    { path: '/advance/range-slider', exact: true, name: 'Range Slider', component: UIAdvanceRangeSlider },
    { path: '/advance/slider', exact: true, name: 'Slider', component: UIAdvanceSlider },
    { path: '/advance/syntax-highlighter', exact: true, name: 'Syntax Highlighter', component: UIAdvanceSyntaxHighlighter },
    { path: '/advance/tour', exact: true, name: 'Tour', component: UIAdvanceTour },
    { path: '/advance/tree-view', exact: true, name: 'Tree', component: UIAdvanceTree },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/forms/form-advance', exact: true, name: 'Forms Advance', component: FormsAdvance },
    { path: '/forms/form-validation', exact: true, name: 'Forms Validation', component: FormsValidation },
    { path: '/forms/form-masking', exact: true, name: 'Forms Masking', component: FormsMasking },
    { path: '/forms/form-wizard', exact: true, name: 'Forms Wizard', component: FormsWizard },
    { path: '/forms/form-picker', exact: true, name: 'Forms Picker', component: FormsPicker },
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/tables/datatable', exact: true, name: 'Data Table', component: DataTables },
    { path: '/charts/apex-chart', exact: true, name: 'Apex Chart', component: ApexChart },
    { path: '/charts/chart-js', exact: true, name: 'Chart JS', component: ChartJs },
    { path: '/charts/high-chart', exact: true, name: 'High Chart', component: HighChart },
    { path: '/charts/re-chart', exact: true, name: 'Re Chart', component: ReChart },
    { path: '/charts/peity', exact: true, name: 'Peity Chart', component: PeityChart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/maps/vector', exact: true, name: 'Vector Map', component: VectorMaps },
    { path: '/task/task-list', exact: true, name: 'Task List', component: AppTaskList },
    { path: '/task/task-board', exact: true, name: 'Task Board', component: AppTaskBoard },
    { path: '/task/task-detail', exact: true, name: 'Task Details', component: AppTaskDetails },
    { path: '/todo/todo-basic', exact: true, name: 'To Do', component: AppToDo },
    { path: '/todo/todo-notes', exact: true, name: 'Notes', component: AppNotes },
    { path: '/gallery/gallery-grid', exact: true, name: 'Gallery Grid', component: AppGalleryGrid },
    { path: '/gallery/gallery-masonry', exact: true, name: 'Gallery Masonry', component: AppMasonryGallery },
    { path: '/editor/ck-editor/ck-classic', exact: true, name: 'CK Editor Classic', component: ExtensionEditorCkClassic },
    { path: '/editor/ck-editor/ck-balloon', exact: true, name: 'CK Editor Balloon', component: ExtensionEditorCkBalloon },
    { path: '/editor/ck-editor/ck-inline', exact: true, name: 'CK Editor Inline', component: ExtensionEditorCkInline },
    { path: '/editor/ck-editor/ck-document', exact: true, name: 'CK Editor Document', component: ExtensionEditorCkDocument },
    { path: '/editor/jodit-wysiwyg', exact: true, name: 'Jodit WYSIWYG', component: ExtensionEditorJoditWYSIWYG },
    { path: '/editor/rich-editor', exact: true, name: 'Rich Editor', component: ExtensionEditorRichNib },
    { path: '/invoice/invoice-basic', exact: true, name: 'Basic Invoice', component: ExtensionInvoiceBasic },
    { path: '/invoice/invoice-summary', exact: true, name: 'Summary Invoice', component: ExtensionInvoiceSummary },
    { path: '/invoice/invoice-list', exact: true, name: 'Invoice List', component: ExtensionInvoiceList },
    { path: '/full-calendar', exact: true, name: 'Full Calendar', component: ExtensionFullEventCalendar },
    { path: '/file-upload', exact: true, name: 'File Upload', component: ExtensionFileUpload },
    { path: '/image-cropper', exact: true, name: 'Image Cropper', component: ExtensionImageCropper },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
];

export default routes;