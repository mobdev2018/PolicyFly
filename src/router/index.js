import VueRouter from 'vue-router'

import LoginPage from 'src/components/pages/Onboarding/Login/Login'
import VerifyCodePage from 'src/components/pages/Onboarding/VerifyCode/VerifyCode'

import RegisterLayout from 'src/components/layouts/Onboarding/Register/Register'
import CreatePasswordPage from 'src/components/pages/Onboarding/Register/CreatePassword/CreatePassword'
import RepeatPasswordPage from 'src/components/pages/Onboarding/Register/RepeatPassword/RepeatPassword'
import RegisterPhonePage from 'src/components/pages/Onboarding/Register/RegisterPhone/RegisterPhone'
import TwoFactorQuestionPage from 'src/components/pages/Onboarding/Register/TwoFactorQuestion/TwoFactorQuestion'
import QRCodePage from 'src/components/pages/Onboarding/Register/QRCode/QRCode'
import CompletedAccountPage from 'src/components/pages/Onboarding/Register/CompletedAccount/CompletedAccount'

import ForgotPasswordLayout from 'src/components/layouts/Onboarding/ForgotPassword/ForgotPassword'
import SendEmailPage from 'src/components/pages/Onboarding/ForgotPassword/SendEmail/SendEmail'
import ConfirmCodePage from 'src/components/pages/Onboarding/ForgotPassword/ConfirmCode/ConfirmCode'
import ResetPasswordPage from 'src/components/pages/Onboarding/ForgotPassword/ResetPassword/ResetPassword'

import MyAccountLayout from 'src/components/layouts/MyAccount/MyAccount'
import DetailsPage from 'src/components/pages/MyAccount/Details/Details'
import PasswordPage from 'src/components/pages/MyAccount/Password/Password'
import AuthenticationPage from 'src/components/pages/MyAccount/Authentication/Authentication/Authentication'
import PreferencesPage from 'src/components/pages/MyAccount/Authentication/Preferences/Preferences'
import AuthenticatorAppPage from 'src/components/pages/MyAccount/Authentication/AuthenticatorApp/AuthenticatorApp'
import AuthenticatorQRCodePage from 'src/components/pages/MyAccount/Authentication/QRCode/QRCode'
import AuthenticationConfigureSMSPage from 'src/components/pages/MyAccount/Authentication/ConfigureSMS/ConfigureSMS'
import AuthenticationSMSCodePage from 'src/components/pages/MyAccount/Authentication/SMSCode/SMSCode'

import UsersLayout from 'src/components/layouts/Users/Users'
import UsersListPage from 'src/components/pages/Users/UsersList/UsersList'
import AddUserPage from 'src/components/pages/Users/AddUser/AddUser'
import UserPage from 'src/components/pages/Users/User/User'

import HomeLayout from 'src/components/layouts/Home/Home'
import HomePage from 'src/components/pages/Home/Home/Home'
import NewApplicationStartPage from 'src/components/pages/Home/NewApplicationStart/NewApplicationStart'
import NewApplicationFormPage from 'src/components/pages/Home/ApplicationForm/ApplicationForm'
import NewApplicationSubmittedPage from 'src/components/pages/Home/NewApplicationSubmitted/NewApplicationSubmitted'
import ApplicationSubmitQuotesPage from 'src/components/pages/Application/SubmitQuotes/SubmitQuotes'

import ApplicationLayout from 'src/components/layouts/Application/Application'
import ApplicationPage from 'src/components/pages/Application/Application/Application'
import AttachmentsPage from 'src/components/pages/Application/Attachments/Attachments'
import PolicyDocsPage from 'src/components/pages/Application/PolicyDocs/PolicyDocs'
import FeedLayout from 'src/components/pages/Application/Feed/Feed/Feed'
import ReviewQuotesPage from 'src/components/pages/Application/ReviewQuotes/ReviewQuotes'
import IssueBinderPage from 'src/components/pages/Application/IssueBinder/IssueBinder'

import BrokerLayout from 'src/components/layouts/Broker/Broker'
import QuotesPage from 'src/components/pages/Broker/Quotes/Quotes'

import PoliciesLayout from 'src/components/layouts/Policies/Policies'
import PoliciesTablePage from 'src/components/pages/Policies/PoliciesTable/PoliciesTable'

import EndorsementLayout from 'src/components/layouts/Endorsement/Endorsement'
import EndorsementCreatePage from 'src/components/pages/Endorsement/Create/Create'
import EndorsementSubmitQuotesPage from 'src/components/pages/Endorsement/SubmitQuotes/SubmitQuotes'
import EndorsementReviewPage from 'src/components/pages/Endorsement/Review/Review'
import CancellationPage from 'src/components/pages/Endorsement/Cancellation/Cancellation'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/verifycode',
    name: 'VerifyCode',
    component: VerifyCodePage
  },
  {
    path: '/register',
    component: RegisterLayout,
    children: [
      {
        path: '',
        redirect: 'createpassword'
      },
      {
        path: 'createpassword',
        name: 'CreatePassword',
        component: CreatePasswordPage
      },
      {
        path: 'repeatpassword',
        name: 'RepeatPassword',
        component: RepeatPasswordPage
      },
      {
        path: 'phone',
        component: RegisterPhonePage
      },
      {
        path: 'question',
        component: TwoFactorQuestionPage
      },
      {
        path: 'qrcode',
        component: QRCodePage
      },
      {
        path: 'completed',
        component: CompletedAccountPage
      }
    ]
  },
  {
    path: '/forgotpassword',
    component: ForgotPasswordLayout,
    children: [
      {
        path: '',
        component: SendEmailPage
      },
      {
        path: 'confirm',
        component: ConfirmCodePage
      },
      {
        path: 'resetpassword',
        component: ResetPasswordPage
      }
    ]
  },
  {
    path: '/account',
    component: MyAccountLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'details'
      },
      {
        path: 'details',
        component: DetailsPage
      },
      {
        path: 'password',
        component: PasswordPage
      },
      {
        path: 'authentication',
        component: AuthenticationPage,
        children: [
          {
            path: '',
            redirect: 'preferences'
          },
          {
            path: 'preferences',
            component: PreferencesPage
          },
          {
            path: 'authenticatorapp',
            component: AuthenticatorAppPage
          },
          {
            path: 'qrcode',
            component: AuthenticatorQRCodePage
          },
          {
            path: 'configuresms',
            component: AuthenticationConfigureSMSPage
          },
          {
            path: 'sms',
            component: AuthenticationSMSCodePage
          }
        ]
      }
    ]
  },
  {
    path: '/users',
    component: UsersLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'userslist'
      },
      {
        path: 'userslist',
        component: UsersListPage
      },
      {
        path: 'create',
        component: AddUserPage
      },
      {
        path: 'edit/:id',
        component: AddUserPage
      },
      {
        path: ':id',
        component: UserPage
      }
    ]
  },
  {
    path: '/home',
    component: HomeLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'start',
        component: NewApplicationStartPage
      },
      {
        path: 'form',
        component: NewApplicationFormPage
      },
      {
        path: 'submitted',
        component: NewApplicationSubmittedPage
      }
    ]
  },
  {
    path: '/application',
    component: ApplicationLayout,
    meta: {
      requiresAuth: true,
      isNavBar: true,
      isNavHeader: true
    },
    children: [
      {
        path: '',
        redirect: 'feed'
      },
      {
        path: 'review',
        component: ApplicationPage
      },
      {
        path: 'feed',
        component: FeedLayout,
        children: [
          {
            path: '',
            redirect: 'quoted'
          },
          {
            path: 'quoted'
          },
          {
            path: 'pendingbinder'
          },
          {
            path: 'pendingissue'
          }
        ]
      },
      {
        path: 'attachments',
        name: 'Attachments',
        component: AttachmentsPage
      },
      {
        path: 'policy',
        name: 'Policy Docs',
        component: PolicyDocsPage
      },
      {
        path: 'quotes',
        name: 'Review Quote(s)',
        component: ReviewQuotesPage,
        meta: {
          isNavbarBanner: true
        },
        children: [
          {
            path: 'single',
            name: 'Review Quote(s)',
            meta: {
              isNavbarBanner: true
            }
          }
        ]
      },
      {
        path: 'submitquotes',
        component: ApplicationSubmitQuotesPage,
        name: 'Submit Quote(s)',
        meta: {
          isTabsList: false,
          isActionsButton: false
        }
      },
      {
        path: 'issuebinder',
        component: IssueBinderPage,
        name: 'Issue Binder',
        meta: {
          isTabsList: false,
          isActionsButton: false
        }
      }
    ]
  },
  {
    path: '/broker',
    component: BrokerLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'feed'
      },
      {
        path: 'feed'
      },
      {
        path: 'application'
      },
      {
        path: 'attachments'
      },
      {
        path: 'policy'
      },
      {
        path: 'quotes',
        component: QuotesPage
      }
    ]
  },
  {
    path: '/policies',
    component: PoliciesLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'active'
      },
      {
        path: 'active',
        component: PoliciesTablePage,
        meta: {
          active: true
        }
      },
      {
        path: 'inactive',
        component: PoliciesTablePage,
        meta: {
          active: false
        }
      }
    ]
  },
  {
    path: '/endorsement',
    component: EndorsementLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: 'create'
      },
      {
        path: 'create',
        name: 'Apple Industrie\'s Endorsement',
        component: EndorsementCreatePage,
        meta: {
          isTabsList: false,
          isActionsButton: false
        }
      },
      {
        path: 'submitquotes',
        name: 'Submit Quote(s)',
        component: EndorsementSubmitQuotesPage,
        meta: {
          isTabsList: false,
          isActionsButton: false
        }
      },
      {
        path: 'review',
        name: 'Apple Industries',
        component: EndorsementReviewPage
      },
      {
        path: 'feed'
      },
      {
        path: 'attachments'
      },
      {
        path: 'policy'
      },
      {
        path: 'cancellation',
        name: 'Cancellation',
        component: CancellationPage,
        meta: {
          isTabsList: false,
          isActionsButton: false
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
