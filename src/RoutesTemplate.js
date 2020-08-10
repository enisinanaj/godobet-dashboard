import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './template_components/Common/PageLoader';

import Base from './template_components/Layout/Base';
import BasePage from './template_components/Layout/BasePage';
// import BaseHorizontal from './template_components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const DashboardV1 = lazy(() => import('./template_components/Dashboard/DashboardV1'));
const DashboardV2 = lazy(() => import('./template_components/Dashboard/DashboardV2'));
const DashboardV3 = lazy(() => import('./template_components/Dashboard/DashboardV3'));

const Widgets = lazy(() => import('./template_components/Widgets/Widgets'));

const Buttons = lazy(() => import('./template_components/Elements/Buttons'));
const Notifications = lazy(() => import('./template_components/Elements/Notifications'));
const SweetAlert = lazy(() => import('./template_components/Elements/SweetAlert'));
const BsCarousel = lazy(() => import('./template_components/Elements/Carousel'));
const Spinner = lazy(() => import('./template_components/Elements/Spinner'));
const DropdownAnimation = lazy(() => import('./template_components/Elements/DropdownAnimation'));
const Nestable = lazy(() => import('./template_components/Elements/Nestable'));
const Sortable = lazy(() => import('./template_components/Elements/Sortable'));
const Cards = lazy(() => import('./template_components/Elements/Cards'));
const Grid = lazy(() => import('./template_components/Elements/Grid'));
const GridMasonry = lazy(() => import('./template_components/Elements/GridMasonry'));
const Typography = lazy(() => import('./template_components/Elements/Typography'));
const FontIcons = lazy(() => import('./template_components/Elements/FontIcons'));
const WeatherIcons = lazy(() => import('./template_components/Elements/WeatherIcons'));
const Colors = lazy(() => import('./template_components/Elements/Colors'));

const ChartFlot = lazy(() => import('./template_components/Charts/ChartFlot'));
const ChartRadial = lazy(() => import('./template_components/Charts/ChartRadial'));
const ChartChartJS = lazy(() => import('./template_components/Charts/ChartChartJS'));
const ChartMorris = lazy(() => import('./template_components/Charts/ChartMorris'));
const ChartChartist = lazy(() => import('./template_components/Charts/ChartChartist'));

const MapsGoogle = lazy(() => import('./template_components/Maps/MapsGoogle'));
const MapsVector = lazy(() => import('./template_components/Maps/MapsVector'));

const TableStandard = lazy(() => import('./template_components/Tables/TableStandard'));
const TableExtended = lazy(() => import('./template_components/Tables/TableExtended'));
const Datatable = lazy(() => import('./template_components/Tables/DatatableView'));
const DataGrid = lazy(() => import('./template_components/Tables/DataGrid'));

const FormStandard = lazy(() => import('./template_components/Forms/FormStandard'));
const FormExtended = lazy(() => import('./template_components/Forms/FormExtended'));
const FormValidation = lazy(() => import('./template_components/Forms/FormValidation'));
const FormWizard = lazy(() => import('./template_components/Forms/FormWizard'));
const FormUpload = lazy(() => import('./template_components/Forms/FormUpload'));
const FormCropper = lazy(() => import('./template_components/Forms/FormCropper'));

const Login = lazy(() => import('./template_components/Pages/Login'));
const Register = lazy(() => import('./template_components/Pages/Register'));
const Recover = lazy(() => import('./template_components/Pages/Recover'));
const Lock = lazy(() => import('./template_components/Pages/Lock'));
const NotFound = lazy(() => import('./template_components/Pages/NotFound'));
const Error500 = lazy(() => import('./template_components/Pages/Error500'));
const Maintenance = lazy(() => import('./template_components/Pages/Maintenance'));

const Mailbox = lazy(() => import('./template_components/Extras/Mailbox'));
const Timeline = lazy(() => import('./template_components/Extras/Timeline'));
const Calendar = lazy(() => import('./template_components/Extras/Calendar'));
const Invoice = lazy(() => import('./template_components/Extras/Invoice'));
const Search = lazy(() => import('./template_components/Extras/Search'));
const Todo = lazy(() => import('./template_components/Extras/Todo'));
const Profile = lazy(() => import('./template_components/Extras/Profile'));
const BugTracker = lazy(() => import('./template_components/Extras/BugTracker'));
const ContactDetails = lazy(() => import('./template_components/Extras/ContactDetails'));
const Contacts = lazy(() => import('./template_components/Extras/Contacts'));
const Faq = lazy(() => import('./template_components/Extras/Faq'));
const FileManager = lazy(() => import('./template_components/Extras/FileManager'));
const Followers = lazy(() => import('./template_components/Extras/Followers'));
const HelpCenter = lazy(() => import('./template_components/Extras/HelpCenter'));
const Plans = lazy(() => import('./template_components/Extras/Plans'));
const ProjectDetails = lazy(() => import('./template_components/Extras/ProjectDetails'));
const Projects = lazy(() => import('./template_components/Extras/Projects'));
const Settings = lazy(() => import('./template_components/Extras/Settings'));
const SocialBoard = lazy(() => import('./template_components/Extras/SocialBoard'));
const TeamViewer = lazy(() => import('./template_components/Extras/TeamViewer'));
const VoteLinks = lazy(() => import('./template_components/Extras/VoteLinks'));

const EcommerceOrder = lazy(() => import('./template_components/Ecommerce/EcommerceOrders'));
const EcommerceOrderView = lazy(() => import('./template_components/Ecommerce/EcommerceOrderView'));
const EcommerceProduct = lazy(() => import('./template_components/Ecommerce/EcommerceProducts'));
const EcommerceProductView = lazy(() => import('./template_components/Ecommerce/EcommerceProductView'));
const EcommerceCheckout = lazy(() => import('./template_components/Ecommerce/EcommerceCheckout'));

const BlogList = lazy(() => import('./template_components/Blog/BlogList'));
const BlogPost = lazy(() => import('./template_components/Blog/BlogPost'));
const BlogArticle = lazy(() => import('./template_components/Blog/BlogArticles'));
const BlogArticleView = lazy(() => import('./template_components/Blog/BlogArticleView'));

const ForumHome = lazy(() => import('./template_components/Forum/ForumHome'));


// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/register',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Suspense fallback={<PageLoader/>}>
                    <Switch location={location}>
                        <Route path="/login" component={waitFor(Login)}/>
                        <Route path="/register" component={waitFor(Register)}/>
                        <Route path="/recover" component={waitFor(Recover)}/>
                        <Route path="/lock" component={waitFor(Lock)}/>
                        <Route path="/notfound" component={waitFor(NotFound)}/>
                        <Route path="/error500" component={waitFor(Error500)}/>
                        <Route path="/maintenance" component={waitFor(Maintenance)}/>
                    </Switch>
                </Suspense>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Suspense fallback={<PageLoader/>}>
                            <Switch location={location}>

                                {/*Dashboard*/}
                                <Route path="/dashboardv1" component={waitFor(DashboardV1)}/>
                                <Route path="/dashboardv2" component={waitFor(DashboardV2)}/>
                                <Route path="/dashboardv3" component={waitFor(DashboardV3)}/>

                                {/*Widgets*/}
                                <Route path="/widgets" component={waitFor(Widgets)}/>

                                {/*Elements*/}
                                <Route path="/buttons" component={waitFor(Buttons)}/>
                                <Route path="/notifications" component={waitFor(Notifications)}/>
                                <Route path="/sweetalert" component={waitFor(SweetAlert)}/>
                                <Route path="/carousel" component={waitFor(BsCarousel)}/>
                                <Route path="/spinners" component={waitFor(Spinner)}/>
                                <Route path="/dropdown" component={waitFor(DropdownAnimation)}/>
                                <Route path="/nestable" component={waitFor(Nestable)}/>
                                <Route path="/sortable" component={waitFor(Sortable)}/>
                                <Route path="/cards" component={waitFor(Cards)}/>
                                <Route path="/grid" component={waitFor(Grid)}/>
                                <Route path="/grid-masonry" component={waitFor(GridMasonry)}/>
                                <Route path="/typography" component={waitFor(Typography)}/>
                                <Route path="/icons-font" component={waitFor(FontIcons)}/>
                                <Route path="/icons-weather" component={waitFor(WeatherIcons)}/>
                                <Route path="/colors" component={waitFor(Colors)}/>

                                {/*Forms*/}
                                <Route path="/form-standard" component={waitFor(FormStandard)}/>
                                <Route path="/form-extended" component={waitFor(FormExtended)}/>
                                <Route path="/form-validation" component={waitFor(FormValidation)}/>
                                <Route path="/form-wizard" component={waitFor(FormWizard)}/>
                                <Route path="/form-upload" component={waitFor(FormUpload)}/>
                                <Route path="/form-cropper" component={waitFor(FormCropper)}/>

                                {/*Charts*/}
                                <Route path="/chart-flot" component={waitFor(ChartFlot)}/>
                                <Route path="/chart-radial" component={waitFor(ChartRadial)}/>
                                <Route path="/chart-chartjs" component={waitFor(ChartChartJS)}/>
                                <Route path="/chart-morris" component={waitFor(ChartMorris)}/>
                                <Route path="/chart-chartist" component={waitFor(ChartChartist)}/>

                                {/*Table*/}
                                <Route path="/table-standard" component={waitFor(TableStandard)}/>
                                <Route path="/table-extended" component={waitFor(TableExtended)}/>
                                <Route path="/table-datatable" component={waitFor(Datatable)}/>
                                <Route path="/table-datagrid" component={waitFor(DataGrid)}/>

                                {/*Maps*/}
                                <Route path="/map-google" component={waitFor(MapsGoogle)}/>
                                <Route path="/map-vector" component={waitFor(MapsVector)}/>

                                {/*Extras*/}
                                <Route path="/mailbox" component={waitFor(Mailbox)}/>
                                <Route path="/timeline" component={waitFor(Timeline)}/>
                                <Route path="/calendar" component={waitFor(Calendar)}/>
                                <Route path="/invoice" component={waitFor(Invoice)}/>
                                <Route path="/search" component={waitFor(Search)}/>
                                <Route path="/todo" component={waitFor(Todo)}/>
                                <Route path="/profile" component={waitFor(Profile)}/>
                                <Route path="/ecommerce-orders" component={waitFor(EcommerceOrder)}/>
                                <Route path="/ecommerce-order-view" component={waitFor(EcommerceOrderView)}/>
                                <Route path="/ecommerce-products" component={waitFor(EcommerceProduct)}/>
                                <Route path="/ecommerce-product-view" component={waitFor(EcommerceProductView)}/>
                                <Route path="/ecommerce-checkout" component={waitFor(EcommerceCheckout)}/>
                                <Route path="/blog-list" component={waitFor(BlogList)}/>
                                <Route path="/blog-post" component={waitFor(BlogPost)}/>
                                <Route path="/blog-articles" component={waitFor(BlogArticle)}/>
                                <Route path="/blog-article-view" component={waitFor(BlogArticleView)}/>
                                <Route path="/bug-tracker" component={waitFor(BugTracker)}/>
                                <Route path="/contact-details" component={waitFor(ContactDetails)}/>
                                <Route path="/contacts" component={waitFor(Contacts)}/>
                                <Route path="/faq" component={waitFor(Faq)}/>
                                <Route path="/file-manager" component={waitFor(FileManager)}/>
                                <Route path="/followers" component={waitFor(Followers)}/>
                                <Route path="/help-center" component={waitFor(HelpCenter)}/>
                                <Route path="/plans" component={waitFor(Plans)}/>
                                <Route path="/project-details" component={waitFor(ProjectDetails)}/>
                                <Route path="/projects" component={waitFor(Projects)}/>
                                <Route path="/settings" component={waitFor(Settings)}/>
                                <Route path="/social-board" component={waitFor(SocialBoard)}/>
                                <Route path="/team-viewer" component={waitFor(TeamViewer)}/>
                                <Route path="/vote-links" component={waitFor(VoteLinks)}/>

                                <Route path="/forum" component={waitFor(ForumHome)}/>

                                <Redirect to="/dashboardv1"/>
                            </Switch>
                        </Suspense>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);