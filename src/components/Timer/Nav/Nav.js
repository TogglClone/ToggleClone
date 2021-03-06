import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import logo from "./img/logo.svg"
import full_logo from "./img/full_logo.svg"
import timer_icon from "./img/timer_icon.svg"
import dash_icon from "./img/dash_icon.svg"
import summary_icon from "./img/summary_icon.svg"
import insights_icon from "./img/insights_icon.svg"
import reports_icon from "./img/reports_icon.svg"
import projects_icon from "./img/projects_icon.svg"
import clients_icon from "./img/clients_icon.svg"
import team_icon from "./img/team_icon.svg"
import workspaces_icon from "./img/workspaces_icon.svg"
import tags_icon from "./img/tags_icon.svg"
import help_icon from "./img/help_icon.svg"

export default function Nav() {
  return (
    <NavContainer>
      <LogoContainer to={"/"} className="logoutTest">
        <Logo />
      </LogoContainer>
      <IconContainer to={"/timer"}>
        <TimerIcon />
        <NavItem>Timer</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/dashboard"}>
        <DashIcon />
        <NavItem>Dashboard</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/summary"}>
        <SummaryIcon />
        <NavItem>Reports</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/insights"}>
        <InsightsIcon />
        <NavItem>Insights</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/reports"}>
        <ReportsIcon />
        <NavItem>Saved Reports</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/projects"}>
        <ProjectsIcon />
        <NavItem>Projects</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/clients"}>
        <ClientsIcon />
        <NavItem>Clients</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/team"}>
        <TeamIcon />
        <NavItem>Team</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/workspaces"}>
        <WorkspacesIcon />
        <NavItem>Workspaces</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/tags"}>
        <TagsIcon />
        <NavItem>Tags</NavItem>
      </IconContainer>
      <IconContainer to={"/timer/help"}>
        <HelpIcon />
        <NavItem>Help</NavItem>
      </IconContainer>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 100vh;
  background-color: #323232;
`
const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 66px;
  padding: 0px 10px;
  flex: 0 0 auto;
`

const Logo = styled.span`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: normal;
    background-color: transparent;
    width: 32px;
    height: 32px;
    background-image: url(${logo});
    box-sizing: content-box;
    background-size: 32px 32px;
    flex: 0 0 auto;
    background-repeat: no-repeat;
    background-position: 2px center;
    @media(min-width: 1024px){
        background-image: url(${full_logo});
        background-size: 75px 23px;
        background-position: 5px center;
    }
}
`
const IconContainer = styled(Link)`
  min-height: calc(25.6px);
  max-height: 32px;
  display: flex;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  transition-property: padding-top, padding-bottom, min-height, height,
    max-height, magin-bottom;
  padding: 0px 10px;
  overflow: hidden;
  flex: 0 1 auto;
  align-items: center;
  text-decoration: none;
`
const NavItem = styled.span`
  text-decoration: none;
  display: none;
  margin-left: 5px;
  color: #fafbfc;
  @media (min-width: 1024px) {
    display: inline-block;
  }
`

const TimerIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${timer_icon});
  background-size: 16px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const DashIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${dash_icon});
  background-size: 14px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const SummaryIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${summary_icon});
  background-size: 14px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`
const InsightsIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${insights_icon});
  background-size: 14px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const ReportsIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${reports_icon});
  background-size: 16px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`
const ProjectsIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${projects_icon});
  background-size: 16px 13px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center 9px;
`

const ClientsIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${clients_icon});
  background-size: 16px 18px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`
const TeamIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${team_icon});
  background-size: 18px 14px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const WorkspacesIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${workspaces_icon});
  background-size: 18px 14px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const TagsIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${tags_icon});
  background-size: 15px 15px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`

const HelpIcon = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  background-color: transparent;
  width: 32px;
  height: 32px;
  background-image: url(${help_icon});
  background-size: 16px 16px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
`
