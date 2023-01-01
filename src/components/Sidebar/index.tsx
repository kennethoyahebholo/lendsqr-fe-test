import { FunctionComponent } from 'react';
import LinkComp from './LinkComp';
import './SideBar.scss';

import { ReactComponent as BriefcaseIcon } from "../../assets/svgs/briefcase.svg";
import { ReactComponent as HomeIcon } from "../../assets/svgs/home.svg";
import { ReactComponent as UserIcon } from "../../assets/svgs/user.svg";
import { ReactComponent as GuarantorIcon } from "../../assets/svgs/guarantor.svg";
import { ReactComponent as DecisionIcon } from "../../assets/svgs/decision.svg";
import { ReactComponent as SavingsIcon } from "../../assets/svgs/savings.svg";
import { ReactComponent as LoansIcon } from "../../assets/svgs/loans.svg";
import { ReactComponent as WhitelistIcon } from "../../assets/svgs/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../../assets/svgs/karma.svg";
import { ReactComponent as LoanIcon } from "../../assets/svgs/loan.svg";
import { ReactComponent as PreferencesIcon } from "../../assets/svgs/setting.svg";
import { ReactComponent as FeesIcon } from "../../assets/svgs/fees.svg";
import { ReactComponent as ClipboardIcon } from "../../assets/svgs/clipboard.svg";
import { ReactComponent as OrganizeIcon } from "../../assets/svgs/organize.svg";
import { ReactComponent as SavingsBIcon } from "../../assets/svgs/savingsB.svg";
import { ReactComponent as ChargesIcon } from "../../assets/svgs/charges.svg";
import { ReactComponent as TransactionIcon } from "../../assets/svgs/transaction.svg";
import { ReactComponent as GalaxyIcon } from "../../assets/svgs/services.svg";
import { ReactComponent as SettlementIcon } from "../../assets/svgs/settlement.svg";
import { ReactComponent as ReportIcon } from "../../assets/svgs/reports.svg";
import { ReactComponent as AccountIcon } from "../../assets/svgs/account.svg";
import { ReactComponent as DownIcon } from "../../assets/svgs/down.svg";


export interface ISideBar {
  disabled?: boolean;
  activate?:any;
  closeDropDownAndSideBar?: () => void;
}


const SideBar: FunctionComponent<ISideBar> = ({ disabled, closeDropDownAndSideBar }) =>{

  const TabsList = [

    {
      disabled,
      icon: UserIcon,
      link: '',
      name: 'Users',
    },
    {
      disabled,
      icon: GuarantorIcon,
      link: '/guarantors/all?page=1',
      name: 'Guarantors',
    },
    {
      disabled,
      icon: LoanIcon,
      link: '/loans/all?page=1',
      name: 'Loans',
    },
    {
      disabled,
      icon: DecisionIcon,
      link: '/decision/all?page=1',
      name: 'Decision Models',
    },
    {
      disabled,
      icon: SavingsBIcon,
      link: '/savings/all?page=1',
      name: 'Savings',
    },
    {
      disabled,
      icon: LoansIcon,
      link: '/loan-request/all?page=1',
      name: 'Loan Request',
    },
    {
      disabled,
      icon: WhitelistIcon,
      link: '/whitelist/all?page=1',
      name: 'Whitelist',
    },
    {
      disabled,
      icon: KarmaIcon,
      link: '/karma',
      name: 'Karma',
    },    
  ];

  const BusinessList = [
    {
      disabled,
      icon: OrganizeIcon,
      link: '/organization',
      name: 'Organization',
    },
    {
      disabled,
      icon: LoansIcon,
      link: '/loan-request/all?page=1',
      name: 'Loan Products',
    },
    {
      disabled,
      icon: SavingsIcon,
      link: '/savings/all?page=1',
      name: 'Savings Product',
    },

    {
      disabled,
      icon: ChargesIcon,
      link: '/audit-logs?page=1',
      name: 'Fees and Charges',
    },

    {
      disabled,
      icon: TransactionIcon,
      link: '/transaction?page=1',
      name: 'Transactions',
    },

    {
      disabled,
      icon: GalaxyIcon,
      link: '/audit-logs?page=1',
      name: 'Services',
    },

    {
      disabled,
      icon: AccountIcon,
      link: '/audit-logs?page=1',
      name: 'Service Account',
    },

    {
      disabled,
      icon: SettlementIcon,
      link: '/settlement?page=1',
      name: 'Settlements',
    },

    {
      disabled,
      icon: ReportIcon,
      link: '/report?page=1',
      name: 'Reports',
    },

  ]

  const SettingsList = [
    {
      disabled,
      icon: PreferencesIcon,
      link: '/',
      name: 'Preferences',
      shouldNotBeActive: true,
    },
    {
      disabled,
      icon: FeesIcon,
      link: '/fees',
      name: 'Fees and Pricing',
    },
    {
      disabled,
      icon: ClipboardIcon,
      link: '/settings',
      name: 'Audit Logs',
    },
  ];
  return (
    <div className="sidebar-cover">
      <div className="tabs-root-cover">
        <div className="tabs-cover">
          <div className='tabs-cover-switch'>            
            <h4><BriefcaseIcon />&nbsp;&nbsp;Switch Organization&nbsp;<DownIcon /></h4>            
          </div>
          <ul>
              <LinkComp
                disabled={disabled}
                Icon={HomeIcon}
                name={"Dashboard"}
                link={"/dashboard"}
                closeDropDownAndSideBar={closeDropDownAndSideBar}
              />
          </ul>
          <ul>
            <h4 className="nav-link-title">CUSTOMERS</h4>
            {
              TabsList?.map((list, i) => (
                <LinkComp
                  key={i}
                  disabled={list?.disabled}
                  Icon={list?.icon}
                  name={list?.name}
                  link={list?.link}
                  closeDropDownAndSideBar={closeDropDownAndSideBar}
                />
              ))
            }
          </ul>
          <ul>
            <h4 className="nav-link-title">BUSINESSES</h4>
            {
              BusinessList?.map((list, i) => (
                <LinkComp
                  key={i}
                  disabled={list?.disabled}
                  Icon={list?.icon}
                  name={list?.name}
                  link={list?.link}
                  closeDropDownAndSideBar={closeDropDownAndSideBar}
                />
              ))
            }
          </ul>
          <ul>
            <h4 className="nav-link-title">SETTINGS</h4>
            {
              SettingsList?.map((list, i) => (
                <LinkComp
                  key={i}
                  disabled={list?.disabled}
                  Icon={list?.icon}
                  name={list?.name}
                  link={list?.link}
                  closeDropDownAndSideBar={closeDropDownAndSideBar}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar